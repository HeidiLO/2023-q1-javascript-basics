let btn = document.getElementById("advice-button");
let BTN = document.getElementById("dating-advice-button");
let BN = document.getElementById("quotes-from-math");
let Btn = document.getElementById("mystery");
let output = document.getElementById("advice");
let Output = document.getElementById("dating-advice");
let advisors = [
	"A wise man once told me",
	"Mother always told me",
	"My uncle Rupert once said",
	"I once heard",
];
let howOften = [
	"never",
	"always",
	"as often as you can",
	"sometimes",
	"when you want to",
	"never ever",
	"every day",
	"24/7",
];
let verbs = [
	"run with",
	"swim in",
	"eat",
	"climb on",
	"dance with",
	"live with",
	"kill",
	"unAlive",
	"murder",
	"delete",
	"remove from life",
	"ignore",
	"act like",
];
let adjectives = [
	"spiky",
	"furry",
	"funny",
	"spicey",
	"odd",
	"loud",
	"scary",
	"basic",
	"wet",
	"slimy",
	"weathly",
	"uuhh one sec",
	"hold one",
	"uuh IDK",
	"a crazed",
	"red",
	"orange",
	"yellow",
	"green",
	"blue",
	"purple",
	"indigo",
	"plum",
	"hard",
	"soft",
	"hairy",
	"quiet",
	"off",
];
let nouns = [
	"desks",
	"nuclear bombs",
	"humans",
	"computers",
	"video games",
	"commuters",
	"dogs",
	"books",
	"water",
	"man",
	"uuhh um ",
	"a litte boy named Jimmy",
	"vampire",
	"devil",
	"zombie",
	"a child",
	"alien",
	"words",
	"nouns",
];
let getRandomIndex = function (a) {
	let rand = Math.random() * a.length;
	return Math.floor(rand);
};
let getRandomWord = function (a) {
	return a[getRandomIndex(a)];
};
let generateAdvice = function (a, h, v, adj, n) {
	let randomAdvice =
		getRandomWord(a) +
		" " +
		getRandomWord(h) +
		" " +
		getRandomWord(v) +
		" " +
		getRandomWord(adj) +
		" " +
		getRandomWord(n);
	console.log(randomAdvice);
	return randomAdvice;
};
let who = [
	"A stranger",
	"A murderer",
	"Adam",
	"A doctor",
	"A teacher",
	"A farmer",
	"IDK",
	"someone plays for the Yankies",
	"a dancer",
	"a lumber jack",
	"an actor",
	"a climber",
	"a first resonder",
	"a plumer",
	"a race car driver",
];
let when = ["Never date", "You should date", "DATE", "You need to date"];
let whom = ["who is"];
let personalty = [
	"Smart and",
	"Funny and",
	"stupid and",
	"charsmatic and",
	"Who has dated a girl named Christina and",
	"crazy and",
	"sufer and",
	"a child and",
	"tall and",
	"short and",
	"blonde and",
	"blue eyed and",
	"a small child and",
	"an edgy teen and",
	"rich and",
	"no singlar chararitics and ",
];
let likes = [
	"likes feet",
	"likes men",
	"likes women",
	"likes blondies",
	"likes short people",
	"never touchs grass",
	"likes food",
	"likes to sleep",
	"likes to eat fire wood",
	"has anxitey",
	"is meantally ill",
	"likes math",
];
let getRandomWords = function (a) {
	let rand = Math.random() * a.length;
	return Math.floor(rand);
};
let getRandomPeople = function (a) {
	return a[getRandomIndex(a)];
};
let generateDatingAdvice = function (wh, wo, wm, p, l) {
	let randomDatingAdvice =
		getRandomPeople(wh) +
		" " +
		getRandomPeople(wo) +
		" " +
		getRandomPeople(wm) +
		" " +
		getRandomPeople(p) +
		" " +
		getRandomPeople(l);
	console.log(randomDatingAdvice);
	return randomDatingAdvice;
};
let quotes = [
	"You might get hit by a truck",
	"I like balls",
	"Cows don't have that",
	"What do you think this is      your right",
	"Ben Frankilin touched this f**king door",
	"We are pretty f**king amazing people",
	"No reason to waste valibale board space when you can waste trees",
	"I am trying to confuess the drug adtict",
	"But.... then sun have been eclipesped by the moon",
	"i love it",
	"Nnless you rip your face off then you'll have none left",
	"Hunderent",
	"Unless of course I die",
	"Then that hail comes and ruins all the shit you planted",
	"comes from a yoga kinnda website",
	"Yous guys",
	"Your pants are talking to you",
	"You have to go through a lot of f**king math",
	"Dying Death",
	"Nothing if you wait long enough",
	"I also don't like the letter I",
	"Was a little shity I mean bad",
	"I wish I had a dounut",
	"Don't call me mr. Jeff thats like calling ms. Jeff",
	"I turned the lights off and they went mhgdgvgg",
	"You energy is not here witch is sad and also not sad",
	"I don't want to work hard enough",
	"Just........ by....... being...... here",
	"If you like slicing animals on your front lawn you should not be allowed to do that",
	"You can't slice dogs up on the front lawn",
	"A lack of suffering makes my happy",
	"I don't want anyone to fall over and die in class",
	"Or 2 or 5 or forever cause whats the diffrence",
	"He did a lot of drugs",
	"Oh hes weird",
	"Your all f**king smart",
	"Talk to him to see how willing he is to cheat on his wife",
	"Thats you aliby for when you get taken by the police",
	"We ate our grandmas",
	"My other grandma is 6 feet under",
	"Belive it or not your mental heath is more important than exponet rules as long as you know your exponet",
	"No monna is just about is just about boats in an ocean",
	"She was like I will eat you toes",
	"I could just fail out of launge arts",
	"Your out of luck",
	"To see your f**king misrebale",
	"And suffer in misery",
	"Yive yive yive",
	"I have lots of problems",
	"I am good with balls ",
	"Big balls, small balls, his balls, her balls, gym balls",
	"Sucking balls",
	"Thats kinky ",
	"How DARE she use my thing",
	"I am better than most people",
	"You know what better than math more math",
	"We call he big f**ing Alice",
	"F**k",
	"IDK shit happens",
	"That really f**king big",
	"Be better than the chair",
];
let non = ["life", "smile", "hair", "child", "a", "I"];
let end = [
	"bye",
	"see you later",
	"don't come back",
	"have a good life",
	"hello not",
	"see ya",
	"bye bye",
	"adios",
];
let getRandomThings = function (a) {
	let rand = Math.random() * a.length;
	return Math.floor(rand);
};
let getRandomOthers = function (a) {
	return a[getRandomIndex(a)];
};
let generateQuotes = function (q) {
	let randomQuotes = getRandomOthers(q);
	console.log(randomQuotes);
	return randomQuotes;
};
let getMystery = function (a) {
	let rand = Math.random() * a.length;
	return Math.floor(rand);
};
let getMysterys = function (a) {
	return a[getRandomIndex(a)];
};
let generateMystery = function (a, w, no, h, v, wh, p, adj, n, wo, l, e) {
	let randomMystery =
		getRandomWord(a) +
		" " +
		getRandomWord(w) +
		" " +
		getRandomWord(no) +
		" " +
		getRandomWord(h) +
		" " +
		getRandomWord(v) +
		" " +
		getRandomWord(wh) +
		" " +
		getRandomWord(p) +
		" " +
		getRandomWord(adj) +
		" " +
		getRandomWord(n) +
		" " +
		getRandomWord(wo) +
		" " +
		getRandomWord(l) +
		" " +
		getRandomWord(e);
	console.log(randomMystery);
	return randomMystery;
};
btn.addEventListener("click", function () {
	let advice = generateAdvice(advisors, howOften, verbs, adjectives, nouns);
	output.textContent = advice;
});
BTN.addEventListener("click", function () {
	let datingAdvice = generateDatingAdvice(when, who, whom, personalty, likes);
	output.textContent = datingAdvice;
});
BN.addEventListener("click", function () {
	let quote = generateQuotes(quotes);
	output.textContent = quote;
});
Btn.addEventListener("click", function () {
	let mystery = generateMystery(
		advisors,
		when,
		non,
		howOften,
		verbs,
		whom,
		personalty,
		adjectives,
		nouns,
		who,
		likes,
		end
	);
	output.textContent = mystery;
});
