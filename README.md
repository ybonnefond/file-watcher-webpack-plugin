[![Build Status](https://travis-ci.org/man27382210/watchFile-webpack-plugin.svg?branch=master)](https://travis-ci.org/man27382210/watchFile-webpack-plugin)
# file-watcher-webpack-plugin
Attach extra watcher on files that are not already monitored by webpack

## Usage
```javascript
// webpack.config.js
const FileWatcherPlugin = require("file-watcher-webpack-plugin");
// ...
plugins: [
    new FileWatcherPlugin({
        root: __dirname,
        files: ['*.php', '*.twig']
    })
]
```
