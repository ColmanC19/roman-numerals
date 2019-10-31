# Roman Numeral Converter

## Created by Colman Currie and Lara Bjork on October 31, 2019

### Project Description
This project was completed as part of the Epicodus in-class curriculum. The task description was as follows:

As stated in the prompt from Epicodus, the project objectives are to:

Write a method to convert numbers into Roman numerals. Roman numerals are based on seven symbols: I, V, X, L, C, D, M.

We developed the following specifications for our behavior-driven development process.

1. The program will not convert numbers above 3,999.
Input Example: 5000
Output Example: Please enter a number that is less than 4000.

2. The program will not convert non-integers.
Input Example: 1.4
Output Example: Please enter an integer.

3. The program will not convert numbers equal to or less than 0.
Input Example: -4, 0
Output Example: Please enter a number greater than 0.

4. When a user enters one of these numbers, the program will return the corresponding Roman numeral: 1, 5, 10, 50, 100, 500, 1000.
Input Example: 1, 5, 10, 50, 100, 500, 1000
Output Example: I, V, X, L, C, D, M

5. The program will return Roman numerals that add up to value of the number that is entered by the user.
Input Examples: 2, 33, 111
Output Examples: II, XXXIII, CXI

6. The program will not return more than three of the same Roman symbols in a row. Instead, the program will subtract the value of what would have been the fourth symbol from the next largest symbol relative to what the user entered and place it in front of that larger symbol.
Input Examples: 4, 40, 90, 490
Output Examples, IV, XL, XC, XD

7. The program will calculate each "place" separately (one, tens, hundreds, and thousands).
Input Example: 99, 999
Output Example: XCIX, CMXCIX



### Technologies Used
HTML, CSS, Bootstrap 3.3.7, JavaScript, and jQuery v3.4.1 (uncompressed development version).
Project was written using Google Chrome; no other browsers were tested for compatibility.

### Project Setup instructions
There shouldn't be any special setup required. If something doesn't display correctly or goes wrong somehow, please contact us at <curriecolman@gmail.com> and <lara.m.bjork@gmail.com> and we will do our best to troubleshoot for you.

### Known Issues
* No known issues.



### License
This software is licensed under the MIT license.

_Copyright (c) 2019 ** Colman Currie and Lara Bjork **_
