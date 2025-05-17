# Git Conflict Resolver Web

A simple web-based tool to resolve Git merge conflicts directly in your browser.

## Features

- Paste Git conflict content into a textarea
- Select whether to keep local or remote changes
- Automatically generate the cleaned output
- No backend needed — works entirely in the browser

## Demo

Live demo available at: [https://basemax.github.io/git-conflict-resolver-web](https://basemax.github.io/git-conflict-resolver-web)

## How to Use

1. Paste your file content that contains Git conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`) into the editor.
2. Choose which changes you want to keep:
   - Local changes (before `=======`)
   - Remote changes (after `=======`)
3. Click "Resolve Conflicts" and get the merged output.

## Development

This project uses only HTML, CSS, and JavaScript. To run locally, just open `index.html` in a browser.

## License

MIT

Copyright 2025, Max Base
