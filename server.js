const express = require("express");
const router = require("./server/routes"); //transmodify is router
const path = require('path');
const bodyParser = require('body-parser');


const app = express();
app.use(express.static(__dirname + "/public/dist/public")) // angular static folder step 4
app.use(bodyParser.json()); // safter express is declare

router(app);
app.all("**", (req, res) => res.sendFile(path.join(__dirname, "/public/dist/public/index.html")));

app.listen(8000, function () {
    console.log("on 8000!");
});