let btn = document.getElementById("advice-button");
let BTN = document.getElementById("dating-advice-button");
let BN = document.getElementById("quotes-from-math");
let Btn = document.getElementById("mystery");
let bn = document.getElementById("book");
let b = document.getElementById("Hope");
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
	"an actor",
	"food and",
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
	"likes acting",
];
let hope = [
	"Moscow Moscow Moscow Putin is hot",
	"I could just fail out of launge arts",
	"I have a lot of problems",
	"yive yive yive",
	"Thats kinky",
	"I like balls",
	"Talk to him to see how willing he is to cheat on his wife",
	"We ate our grandmas",
];
let getRandomHope = function (a) {
	return a[getRandomIndex(a)];
};
let generateHope = function (h) {
	let randomHope = getRandomPeople(h);
	console.log(randomHope);
	return randomHope;
};
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
	"Thats ioprite take a lap",
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
	"Unless you rip your face off then you'll have none left",
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
	"cauclate your days away",
	"Its okay Jeff you could rock the crop top",
	"I could wrap a belt around it and call it a dress",
	"Your hard?",
	"Do you need a hug",
	"But, know I have to teach math",
	"I am more impoortant then any thing else you have to do today ",
	"I had a cat once but my girlfriend stole it",
	"Stella did I ignore you too much",
	"Or we could lisen to inoprate things ",
	"My work here is done its time to go smoke a cigar",
	"Is he on drugs?",
	"It is not going to effect the econmy in Argentina",
	"Cause I am not as smart as he is ",
	"If you have any questions I am not going to answer them",
	"After yeterday she is drama ",
	"Hundert is the way us cool kids say it",
	"It is not racits it is vechlistes",
	"Your as nice as a spiky ball",
	"Ya Axels crazy",
	"It smells like we are ready to take a test",
	"Put your hand down if you never peeded in the ocean",
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
let book = [
	"He was eating toast plain toast with nothing on it have you ever seen someone eat toast with nothing on it haowing truly",
	"Almost plumting to death in front of a stadium of screaming pepole is alawys a warning sign in a cosntant prade of warning signs latley that I need more sleep",
	"I want Ranier to win, I want to face Canning in the final, I want to pretend I still don't have fellings for the guy I guess I will have to be satisfied with 2 out of the 3 because I can't pertend I still don't have feelings for the guy, seeing him last night made that ipossible fuck he looked good all that big boy Califina hotness and sexy as fuck ",
	"Jesus baby don't stop",
	"My eyes want to go lower to foucs on the perkines of his ass how his cock fills out his underwear. was he always that big. Did I miss it",
	"You better act like the sunshine out of his dick and you better make me belive it",
	"I am gulity of loving you",
	"The only problem is I want to be toching him back everywere",
	"Yay Arson",
	"Fine it was a pharmisotcal company whose dugs let me be very clear have not proven to have killed any children at all",
	"Step one is ganing the ducks trust",
	"Te Quireo no not te quireo te amo te amo te amo",
	"Angle is lying on the floor and not moving",
	"Fuck Zach",
	"I want so badly right now to press Kian Andrews into one of those trees over there and kiss him until he can't think straight if he will let me",
	"squeeze here and don't you dare stop fucking riding me Kian",
	"I am head over heels in love with you too",
	"And not geting to relive the best kiss of my life is a prety big incovinnce",
	"My world was reduced to his my best friend my lover my.... fiance",
	"Just as I feel the police slam into me my day resits",
	"I am not going to let you commit arson...... today",
	"Stella Storino bought me weed!!!",
	"And zeke may have given me an edible. WHEN DID ZEKE GIVE YOU AN EDIBLE",
	"KISS ME HARD.. 'I want my cheer sweatshirt back'",
	"Are going to jail for stealing tea",
	"Its not like I woke up one day and was like I am sudenly gay now",
	"Witch is why Liz was about to be brutaly mudered by here roomate",
	"Ruben was showing me a....... thing ",
	"Its is one thing in our collection that we own and did not just steal",
	"I don't think I can breath agin for the rest of the drive",
	"Zuben is here to but it's nothing compared to realm that is anjon",
	"I am a laywer not Elton fucking Jhon",
	"Houston we have a penis ",
	"I wonder what it would fell like to pull off his shirt and fell his soft skin under mine",
	"I fucking love you ok ",
	"Bein' with ya at dinner, Sitn' next to you, hearing ya talkn' its to much so like fuck self contral come back to my hotel with me tonight",
	"I couldn' sleep or stop thinkn' 'bout you",
	"Come down to the lighthouse",
	"How many times have I told you to not talk about murder plans in front of the me the siting presdent",
	"Vicky classic",
	"This guy does the best free style raps",
	"3 words I would use to describe Henry white, blond, british",
	"COME IN HERE IT IS AN EMERGECTY",
	"I thought you almost burned down the building again",
	"I just love hanging out with this guy",
	"Ruben get quiet and speaks in almost a wisper 'What if you figured out you like guys but you too afrid to do any thing about it because then it would become real' I can't lie and Ruben seems to get it like really get I wonder if he went trough somthing like this when he was younger I wounder if all queer people do. So I nod. 'You think you might be queer' 'ya' I wince 'I think I might be bi' 'Shit man this is huge' 'Are you suprised' 'I guess I sould not be given last week but I am I mean of course I thought about it I mean I wan- I just keept deciding you were not' 'right' but wait what was that he wanted for me to be bi. Why would he. and then it hits me I kissed him and themn I was cold and distent whitch would be heartbreaking if someone you liked or starterd to like kissed you and acted that way. God I am so stupid never in a millon years did I think that Ruben would like me in that way. 'Any way let's not make thins about me how do you feel' 'Its nevrwraking but in a good way' This feels so pefrcat siting here under the street lights eating stroopwaffels with Ruben. 'Are you refering to the fact that you like all guys or just' he glances up a clear signal and I want to really want to. So I lean across and put my hands on his face. What if I screw this up what if I kiss him and hate it. I move my hands an inch away. Rubes eyes open his brows fuower. Fuck I am screwing this up I am screwing very thing up latley oh fuck it. I lean across and put everything I have onto this kiss. I run my hands up through is haor his pefcfact hair and smell his coloagne and taste the sugar on his lips. Its like fireworks in my chest. ",
	"His lips are right there",
	"The last night in the Haptions I really wanted to kiss you but, this was worth the wait",
	"'Dylan', he says my name in a way he never has before",
	"I kiss him and he does not react. I think I have made the worst mistake of my life. Then kisses me back and it is everything my world spins out of orbit in the best way possible.",
	"I love you. I have for a while but, now I love you more than just a friend",
	"No you don't understand I am in love with you",
	"I start to move my hips and hs eyes roll back almost istalty",
	"Down in the valley the valley so low the train horn wistles and it blows the train the train the train horn wistles and ot blows",
	"'I want to court you' I have read enough of my moms romance novels to know what that means 'Do you know what that means' 'Yes' 'so you know that mean dating with the intention to marry right' 'Yes I know I want to court you'",
	"His hands go lower lower",
	"The way his eyes roll back when I",
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
let getRandomthings = function (a) {
	let rand = Math.random() * a.length;
	return Math.floor(rand);
};
let getRandomothers = function (a) {
	return a[getRandomIndex(a)];
};
let generateBook = function (q) {
	let randomBook = getRandomothers(q);
	console.log(randomBook);
	return randomBook;
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
bn.addEventListener("click", function () {
	let Book = generateBook(book);
	output.textContent = Book;
});
b.addEventListener("click", function () {
	let Hopes = generateHope(hope);
	output.textContent = Hopes;
});
