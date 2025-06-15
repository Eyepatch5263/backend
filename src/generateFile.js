const path = require('path');
const fs = require('fs');
const dirCodes = path.join(__dirname, 'codes');
const { v4: uuidv4 } = require('uuid');

if(!fs.existsSync(dirCodes)) {
    fs.mkdirSync(dirCodes, { recursive: true });
}

const generateFile = async (format, content) => {  
    const jobId = uuidv4();
    let extension;
    if (format === "cpp") extension = "cpp";
    else if (format === "python") extension = "py";
    else if (format === "java") extension = "java";
    else extension = format; // fallback
    const fileName = `${jobId}.${extension}`;
    const filePath = path.join(dirCodes, fileName);
    await fs.writeFileSync(filePath, content);
    return filePath;
};

module.exports = { 
    generateFile,
}