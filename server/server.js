const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const app = express();
const morgan = require('morgan');




app.use(morgan('combined'));

// Set up Multer storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, 'recording.wav')
    }
});
const upload = multer({ storage: storage });


// Route to handle file upload
app.post('/upload', upload.single('audio'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }

    // Process the audio file (e.g., save it to disk, process it, etc.)
    // For example, you can save the file to disk:
    // fs.renameSync('uploads/recording.wav', 'your-new-file-path/recording.wav');

    res.status(200).send('File uploaded successfully.');
});


// Serve the uploaded files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
