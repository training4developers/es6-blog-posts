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
// > node extends.js

"use strict";

class Person {

	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	getFullName() {
		return this.firstName + " " + this.lastName;
	}

}

// 'extends' keyword sets up the prototype inheritance relationship
// with the super object
// 'extends' performs the same basic operation as the earlier
// '__extends' function
class Student extends Person {

	constructor(studentId, firstName, lastName) {
		// 'super' must be the first function called in the constructor
		// the 'super' invokes the constructor of the super class
		// the value of 'this' is not defined until 'super' is called
		super(firstName, lastName);

		// if this line is executed before the call to 'super' above
		// an error will occur saying that 'this' is not defined
		this.studentId = studentId;
	}

	getStudentInfo() {
		return this.studentId + " " + this.lastName + ", " + this.firstName;
	}

}

var student = new Student(1, "Bob", "Smith");
console.log(student.getStudentInfo());
