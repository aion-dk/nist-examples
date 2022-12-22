FROM node:18

WORKDIR /usr/src/app

RUN curl https://raw.githubusercontent.com/usnistgov/ElectionResultsReporting/version2/NIST_V2_election_results_reporting.json --output nist-v2.json

COPY . .

RUN npm install
