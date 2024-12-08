# Advanced File Parser

A robust file parser library with support for RTF, PDF, and other document formats.

## Features

- RTF file parsing and cleaning
- PDF metadata extraction
- Document chunking for large files
- Text encoding support
- Extensible parser architecture

## Installation

```bash
npm install advanced-file-parser
```

## Usage

```javascript
const { parseFile } = require('advanced-file-parser');

// Parse a file
const result = await parseFile('path/to/file');

console.log(result);
```

## License

MIT