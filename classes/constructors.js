// The MIT License (MIT)
// Copyright (c) 2016 Training 4 Developers, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

// Instructions: to run the following code demonstration,
// install Node.js 4 (https://nodejs.org/en/) or later,
// make sure node.exe is in your path, then execute the
// file from the terminal with the following command:
//
// > node constructors.js

"use strict";

// ES5 Constructor Function
// function Person(firstName, lastName) {
// 	this.firstName = firstName;
// 	this.lastName = lastName;
// }

// the name of the ES5 constructor
// function is name of the ES6 class
class Person {

	// observe there is no "function" keyword
	// also, the word "constructor" is used, not "Person"
	constructor(firstName, lastName) {

		// this represents the new object being
		// created and initialized
		this.firstName = firstName;
		this.lastName = lastName;

	}
}

var person = new Person("Bob", "Smith");

// outputs "Bob"
console.log(person.firstName);

// outputs "Smith"
console.log(person.lastName);
