const fs = require("fs");
const express = require("express");
const app = express();

app.get("/", (req, res) => {});

app.listen(4000, () => console.log("api database listening on port 4000"));