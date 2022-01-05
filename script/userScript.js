const fs = require("fs");
const path = require("path");

// Read from json file
const pathBahagian = path.join(__dirname, "../mysql/bahagian.json");
const rawBahagian = fs.readFileSync(pathBahagian);
const bahagian = JSON.parse(rawBahagian);

// Write to json file
const pathFbBahagian = path.join(__dirname, "../firebase/bahagian2.json");
const data = JSON.stringify(bahagian);
fs.writeFileSync(pathFbBahagian, data);
