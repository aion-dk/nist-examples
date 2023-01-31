# NIST Examples

This repository contains examples of both real & fictional elections
using the [NIST-1500-100](https://pages.nist.gov/ElectionResultsReporting/#17_0_2_4_78e0236_1389372124445_11077_2906)
standard.

* [Colorado General 2020](./colorado-general-2020)
* [Famous Names](./famous-names)

## Running validations

To run validations against the existing NIST EDF file, run the
following:

```bash
$ docker compose build
$ docker compse run nist node validate.js
```
