#!/usr/local/bin/node

const validate = require("jsonschema").validate;
const fs = require("fs");

const schema = JSON.parse(fs.readFileSync("/usr/src/nist-v2.json"));
const data = JSON.parse(fs.readFileSync("denver-general-2020/edf.json"));

console.log(validate(data, schema));
