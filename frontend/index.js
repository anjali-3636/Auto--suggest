const express = require('express');
const app = express();
const port = 3002;
app.use(express.static("frontend"))
app.listen(port, function(){
    console.log("sucessfully   running at http://localhost:" + port);
})
function toggle() {
    let img = document.getElementById("img");

    if (img.style.display === "none") {
        img.style.display = "block";
    } else {
        img.style.display = "none";
    }
}