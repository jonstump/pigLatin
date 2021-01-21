# Pig Latin

#### A program that takes user input and converts to Pig Latin
#### By **Michael Kriegel and Scott O'Neil**

## Description

A website created with HTML and Javascript where a user can input a string of words and it will output the same string converted to pig latin


### Specs
| Spec | Test | Expect |
| :-------------     | :------------- | :------------- |
| **pigLatin()** | For words beginning in "y": treat as consonant | pigLatin("your").toEqual("our-yay") |
| **pigLatin()** | For words beginning in vowel: add "way" to the end | pigLatin("ocelot").toEqual("ocelot-way") |
| **pigLatin()** | For words beginning with 1 or more consonants: move to end, add "ay"| pigLatin("should).toEqual("ould-shay") |
| **pigLatin()** | If first consonants include "qu": move both to end, add "ay" | pigLatin("quiet").toEqual("iet-quay") |
| **pigLatin()** | Output result to HTML page | Expect to see results on webpage |
## Setup/Installation Requirements



## Known Bugs
* No known bugs at this time.

## Technologies Used
* HTML
* CSS/Bootstrap
* Javascript/jQuery
* Coded in VSCode

## Support and contact details

_Email no one with any questions, comments, or concerns._

### License

*{This software is licensed under the MIT license}*

Copyright (c) 2021 **_{Michael Kriegel, Scott O'Neil}_**