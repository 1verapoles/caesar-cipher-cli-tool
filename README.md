# Caesar cipher CLI tool

## About

This tool lets you encode and decode a text by Caesar cipher.

## Install

Open command line in the folder where you want to clone this program. Clone repository using command below.
```bash
git clone https://github.com/1verapoles/caesar-cipher-cli-tool/tree/caesar-cipher-cli
```

Install dependencies
```bash
 npm i
```

## How it works

The CLI tool is accepted 4 options (short alias and full name):

1.  **-s, --shift**: a shift (must be an integer number) **required!!!**
2.  **-a, --action**: an action (must be encode/decode depending on the intent.) **required!!!**
3.  **-i, --input**: an input file  **optional**
4.  **-o, --output**: an output file  **optional**

## Usage example:

**1.**
```bash
$ node . -a encode -s 7 -i "./input.txt" -o "./output.txt"
```
**2.**
```bash
$ node . --action encode --shift 7 --input "./input.txt" --output "./output.txt"
```
```bash
$ node . --action encode --shift 7
```
**3.**
```bash
$ node . --action decode --shift 7 --input "./input.txt" --output "./output.txt"
```
```bash
$ node . --action decode --shift 7
```

> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`

