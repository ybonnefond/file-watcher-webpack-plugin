const watch = require('watch');
const path  = require('path');

function FileWatcherPlugin(options) {
  this.options = options;
  this.monitor = null;
}

FileWatcherPlugin.prototype.apply = function(compiler) {
    compiler.plugin("watch-run", (compilation, callback) => {
        const root = this.options.root;
        const liveReload = this.options.liveReload;

        const onChange = () => {
            if (liveReload) {
                liveReload.lastHash = null; // Force livereload to refresh
            }
            compiler.run((err) => {
              if(err) {
                  throw err;
              }
            });
        };

        watch.createMonitor(root, (monitor) => {
            this.options.files.forEach((file) => {
                const filePath = path.join(root, file);
                monitor.files[filePath];
            });

            monitor.on("created", onChange);
            monitor.on("changed", onChange);
            monitor.on("removed", onChange);

            console.log('Monitoring file changes\n');
            callback();
        });
    });
};

module.exports = FileWatcherPlugin;
