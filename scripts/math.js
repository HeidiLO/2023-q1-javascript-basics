let BN = document.getElementById("quotes-from-math");
let output = document.getElementById("quote");
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
	"Belive it or not your mental heath is more important than exponet rules as long as you know your exponet rules",
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
	"After yeaterday she is drama",
	"I neglated you guys and I am sorry",
	"That smells like we are ready to take a test",
	"I hate wet balls",
	"Murdeing Alice and then we really will have an issue",
	"And you are already in prison,",
	"If you don't say the x in Axles name ",
	"You can not be good at singing you are already good at math",
	"You could die from somthing fun like an Orcea whale eating you",
	"I got bit by a shark, but that is not really impotant",
	"No body wants to eat dates they taste like ass",
	"'But tail gating is very good for my gas milagae' 'But tailgating is not good for my anxitey'",
	"Is this because I am gay are you being homophobic",
	"I sometime like to do math on the board and when I do I choose expo brand marker",
	"I almost had it right and then I had to kill all the frogs",
	"I think he ate the frogs",
	"God bless you unless you not religous then gustian tight unless you not German",
	"Don't do drugs",
	"I almost cut off you knee",
	"I could probly cut off my finger with this peice now",
	"The world is always trying to punish you Jeff",
	"The world is trying to screw Jeff over today",
	"You can do anything cause you Heidi",
	"Murder is right in the middle",
	"Is canbalism really that bad",
	"Is bombing people all that bad",
	"Thi is not the time or place for your mom jokes",
	"He put to many shrooms in his coffee",
	"Poor canaida",
	"I do not speak french or maple syurp",
	"I do not call those mistakes I call the shit happens",
	"I am trevor the guy that smokes a lot of weed",
	"If I hit this bitch with a train",
	"It is the evil crimnal that hits people with trains",
	"When she is here and not me I guess she is in 'charge'",
	"Dude just open the fucking popcorn",
	"I am gonna kill this guy",
	"Look who is talking f saying human",
	"'Did he eat children' 'He did but only the ones who deversed it'",
	"I am better than everyone else",
	"I like doing that becasue people go ahh and I like that sound",
	"Oh fuck it",
];
let getRandomIndex = function (a) {
	let rand = Math.random() * a.length;
	return Math.floor(rand);
};
let getRandomWord = function (a) {
	return a[getRandomIndex(a)];
};
let generateQuotes = function (q) {
	let randomQuotes = getRandomWord(q);
	console.log(randomQuotes);
	return randomQuotes;
};
BN.addEventListener("click", function () {
	let quote = generateQuotes(quotes);
	output.textContent = quote;
});
