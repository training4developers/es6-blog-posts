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
// > node es5_inheritance.js

// Person constructor function
// when called with the "new" operator,
// a new Person object is created
function Person(firstName, lastName) {
	// the "new" operator sets the reference of
	// "this" to a new object
	this.firstName = firstName;
	this.lastName = lastName;
}

// this property referencing the function will
// be configured on person's prototype object,
// and will be inherited by students
Person.prototype.getFullName = function() {
	return this.firstName + " " + this.lastName;
};

// Student constructor function
// when called with the "new" operator,
// a new Student object is created
function Student(studentId, firstName, lastName) {
	// the "new" operator sets the reference of "this" to
	// a new object, the new object is then passed to the
	// Person constructor function through the use of call,
	// so the first name and last name properties can be set
	this._super.call(this, firstName, lastName);
	this.studentId = studentId;
}

// students will inherit from a new object
// which inherits from the parent
Student.prototype = Object.create(Person.prototype);

// set the constructor property back to the Student
// constructor function
Student.prototype.constructor = Student;

// "_super" is NOT part of ES5, its a convention
// defined by the developer
// set the "_super" to the Person constructor function
Student.prototype._super = Person;

// this will exist on the student's prototype object
Student.prototype.getStudentInfo = function() {
	return this.studentId + " " + this.lastName + ", " + this.firstName;
};

// instantiate a new Student object
var student = new Student(1, "Bob", "Smith");

// invoking function on parent prototype
// outputs "Bob Smith"
console.log(student.getFullName());

// invoking function on child prototype
// output "1 Smith, Bob"
console.log(student.getStudentInfo());
