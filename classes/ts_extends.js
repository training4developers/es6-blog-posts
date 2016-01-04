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
// > node ts_extends.js

// declare a variable to reference the extends function
var __extends;

if (this && this.__extends) {

	// the extends function is already defined within the context
	// of this code, so use the existing __extends function
	__extends = this.__extends;

} else {

	// the extends function is not already defined within the current
	// context; therefore, define it
	__extends = function (child, parent) {

			// mixin pattern for copying parent constructor function properties
			// as static properties to the child constructor function
			// properties on constructor function are commonly known as static
			// properties
			for (var parentPropertyName in parent) {

				// only copy properties specifically defined on the parent
				if (parent.hasOwnProperty(parentPropertyName)) {
					// for primitive types, this will copy the value,
					// for object types, this will copy the reference only
					child[parentPropertyName] = parent[parentPropertyName];
				}

			}

			// constructor function for the object that instantiated child objects
			// will inherit from
			// this function is unique within the context of each call to extend
			function __() {
				this.constructor = child;
			}

			if (parent === null) {

				// objects instantiated with the child constructor function will
				// inherit from an object that inherits from nothing, not even
				// the built-in JavaScript Object
				child.prototype = Object.create(parent);

			} else {

				// assign the prototype property of the parent constructor function
				// to the prototype property of the constructor function defined
				// above
				__.prototype = parent.prototype;

				// create the object that all instances of the child will inherit
				// from, and assign it to the prototype property of the child
				// constructor function
				child.prototype = new __();

			}

	};
}

// var __extends = (this && this.__extends) || function (child, parent) {
//     for (var p in parent) if (parent.hasOwnProperty(p)) child[p] = parent[p];
//     function __() { this.constructor = child; }
//     child.prototype = parent === null ? Object.create(parent) : (__.prototype = parent.prototype, new __());
// };


				// using new with  above allows the child to inherit from the parent and
				// add its own properties which can be inherited by its children
				// without modifyin the parent's definition


function Person(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
}

Person.prototype.getFullName = function() {
	return this.firstName + " " + this.lastName;
}

function Employee(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
}

// Not using extends, does not work as expected
// Employee.prototype = Object.create(Person);
// Employee.prototype.constructor = Employee;

__extends(Employee, Person);

var e = new Employee("Bob", "Smith");
console.log(e.getFullName());
