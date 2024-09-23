const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

// Route to download a zip file
app.get('/download/:filename', (req, res) => {
    const filename = req.params.filename;
    
    // Set the file path to the 'files' directory
    const filePath = path.join(__dirname, 'files', filename);
    
    // Use res.download() to send the zip file
    res.download(filePath, filename, (err) => {
        if (err) {
            console.error('Error while downloading file:', err);
            res.status(500).send('Error downloading the file');
        }
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});