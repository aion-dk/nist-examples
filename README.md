# NIST Examples

This repository contains examples of real elections using the
[NIST-1500-100](https://pages.nist.gov/ElectionResultsReporting/#17_0_2_4_78e0236_1389372124445_11077_2906)
standard.

* [Denver General 2020](./denver-general-2020)

## Running validations

To run validations against the existing NIST EDF file, run the
following:

```bash
$ docker compose build
$ docker compse run nist node validate.js
```
