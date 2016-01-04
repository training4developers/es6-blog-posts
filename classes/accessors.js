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
// > node accessors.js

"use strict";

class Person {

	constructor(firstName, lastName) {
		// internal properties can be prefixed with an underscore
		this._firstName = firstName;
		this._lastName = lastName;
	}

	// the name of the property is used when defining the accessor functions
	get firstName() {
		// return the value of the internal property,
		// other logic can be performed here as well
		// internal properties are a convention, not
		// part of the JavaScript language
		return this._firstName;
	}

	// the accessor functions are defined on the prototype, while
	// the values are stored on internal properties on the instance
	set firstName(value) {
		// set the value of the internal property,
		// validation or other logic can go here as well
		this._firstName = value;
	}
}

var person = new Person("Bob", "Smith");

// properties are set like normal value properties, the accessors are implicitly called
person.firstName = "Tommy";

// get operations work in a similar fashion
console.log(person.firstName);
