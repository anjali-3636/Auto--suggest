const express = require('express');
const app = express();
const port = 30002;
app.use(express.static("frontend"));
app.listen(port, function() {
    console.log("Succesfully is running on http://localhost:" + port);
} )