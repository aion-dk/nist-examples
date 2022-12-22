const validate = require("jsonschema").validate;
const fs = require('fs');

const schema = JSON.parse(fs.readFileSync("nist-v2.json"));
const data = JSON.parse(fs.readFileSync("denver-2020.json"));

console.log(validate(data, schema));
