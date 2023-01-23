#!/usr/local/bin/node

const validate = require("jsonschema").validate;
const fs = require("fs");

const getEDFs = (dirs, callback) => {
  fs.readdir("/usr/src/app/", function(err, files) {
    files.forEach((fileOrDir) => {
      if (dirs.includes(fileOrDir)) {
        const edf = JSON.parse(fs.readFileSync(`/usr/src/app/${fileOrDir}/edf.json`));
        callback(fileOrDir, edf);
      }
    })
  })
}

const schema = JSON.parse(fs.readFileSync("/usr/src/nist-v2.json"));

const ELECTION_DIR = [
  "denver-general-2020",
  "famous-names"
];

getEDFs(ELECTION_DIR, (dirName, edf) => {
  console.log(`============================================`)
  console.log(`${dirName}/edf.json validating...`)
  console.log(`============================================`)
  console.log(validate(edf, schema));
})
