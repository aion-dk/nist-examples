FROM node:18

RUN apt-get update && apt-get -y install less

WORKDIR /usr/src/app

RUN curl https://raw.githubusercontent.com/usnistgov/ElectionResultsReporting/version2/NIST_V2_election_results_reporting.json --output /usr/src/nist-v2.json

COPY . .

RUN npm install
