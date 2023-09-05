class Person {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
	getFullName() {
		let fullName = `${this.firstName} ${this.lastName}`;
		return fullName;
	}
}

class Student extends Person {
	constructor(firstName, lastName, grade) {
		super(firstName, lastName);
		this.grade = grade;
	}
}

let p1 = new Person("Ryann", "Wesley");
let s1 = new Student("Alex", "Clarmonet Diaz", "16");

p1.firstName = "Ryan";
console.log(p1.getFullName());

console.log(s1.getFullName());
console.log(s1.grade());
