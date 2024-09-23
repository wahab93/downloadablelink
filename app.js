const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;


app.get('/', (req,res)=>{
    res.send('Home')
})

// Route to download a zip file
app.get('/download/:filename', (req, res) => {
    const filename = req.params.filename;
    console.log('filename', filename)
    
    // Set the file path to the 'files' directory
    const filePath = path.join(__dirname, 'files', filename);
    console.log('filePath' , filePath)
    
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