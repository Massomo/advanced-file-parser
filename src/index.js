const RTFParser = require('./parsers/rtf');
const PDFParser = require('./parsers/pdf');
const TextParser = require('./parsers/text');

class AdvancedFileParser {
    static async parseFile(filePath) {
        // Determine file type
        const extension = filePath.toLowerCase().split('.').pop();
        
        // Select appropriate parser
        switch(extension) {
            case 'rtf':
                return await RTFParser.parse(filePath);
                
            case 'pdf':
                return await PDFParser.parse(filePath);
                
            case 'txt':
            case 'csv':
            case 'json':
                return await TextParser.parse(filePath);
                
            default:
                throw new Error(`Unsupported file type: ${extension}`);
        }
    }
}

module.exports = {
    parseFile: AdvancedFileParser.parseFile
};