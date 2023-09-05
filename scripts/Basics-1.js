let firstName = "Heidi";
let age = 13;
let ageString = "13";
let favoriteBook = "unknown";
let isGameOver = false;
let fruits = ["Apple", "Grapes", "Banana"];

let classRoom = {
	roomNumber: 129,
	seats: 35,
	teacher: {
		firstName: "Robert",
		lastName: "Hardy",
	},
	students: [
		{ firstName: "Cade", lastName: "Arney", garde: 8 },
		{ firstName: "Lana", lastName: "Krakow", garde: 8 },
		{
			firstName: "Hildalade",
			nickName: "Heidi",
			lastName: "Osburn",
			garde: 9,
		},
	],
	lightsOn: true,
	turnLightsOff: function () {
		this.lightsOn = false;
		return;
	},
};
console.log(classRoom);
classRoom.turnLightsOff();
console.log(classRoom);
let classRoom2 = {
	roomNumber: 131,
	seats: 40,
	teacher: {
		firstName: "Zach",
		lastName: "Deegan",
	},
	students: [
		{ firstName: "Cade", lastName: "Arney", garde: 8 },
		{ firstName: "Lana", lastName: "Krakow", garde: 8 },
		{
			firstName: "Hildalade",
			nickName: "Heidi",
			lastName: "Osburn",
			garde: 9,
		},
	],
	lightsOn: true,
	turnLightsOff: function () {
		this.lightsOn = false;
		return;
	},
};

console.log(classRoom2);
classRoom2.turnLightsOff();
console.log(classRoom2);
