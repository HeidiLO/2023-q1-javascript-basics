let btn = document.getElementById("advice-button");
let BTN = document.getElementById("dating-advice-button");
let BN = document.getElementById("quotes-from-math");
let Btn = document.getElementById("mystery");
let bn = document.getElementById("book");
let b = document.getElementById("Hope");
let n = document.getElementById("Story");
let t = document.getElementById("IDK");
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
	"is actally",
	"codes with",
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
	"Ruben",
	"Zach",
	"Zack",
	"Angle",
	"Jon",
	"Ander",
	"Santi",
	"Queen Mary",
	"Henrry",
	"Alex",
	"Bucky",
	"Hudson",
	"Ben",
	"Nick",
	"Felix from Stray kids",
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
let but = [
	"however they eat babies",
	"however they hate you",
	"however they are planning on killing you family",
	"however they are a mob boss",
	"however they do not brush there teeth",
	"however they are a mass murder",
	"however they clap when a plane lands",
	"however they will not drink water becuase it is 'boring'",
	"however they think the earth is flat ",
	"however they ran over your cat",
	"however they only like old people",
	"however they have a house full of snakes",
	"however they have a no sense of hummor",
	"however they always make dad jokes",
	"however they only own things that are hot pink",
	"however there fav. song is 'I am just Ken'",
	"however they talk about there trama all the time",
	"however they only eat Mac and Cheese",
	"however they open chip bags upsidedown",
	"however they can not tie there shoes",
	"however they will not go to bed without tap dancing before",
	"however they are crazy",
	"however they when they are nerves they check there pulse ",
	"however they can put a staw in there eyelashes",
	"however they are in a boyband",
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
	"You can do anything cause you Heidi",
	"Murder is right in the middle",
	"Is canbalism really that bad",
	"Is bombing people all that bad",
	"If I hit this bitch with a train",
	"It is the evil crimnal that hits people with trains",
	"Oh fuck it",
	"Are war crimes war crimes",
	"Are war crimes bad or just morally incorrect",
	"Is today actally Monday or is it tuesday is it a saturday Just all agree that who started counting was right",
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
let generateDatingAdvice = function (wh, wo, wm, p, l, b) {
	let randomDatingAdvice =
		getRandomPeople(wh) +
		" " +
		getRandomPeople(wo) +
		" " +
		getRandomPeople(wm) +
		" " +
		getRandomPeople(p) +
		" " +
		getRandomPeople(l) +
		" " +
		getRandomPeople(b);
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
	"And then we are all saying but and yeah ",
	"Who gave Jeff a knife",
	"I creeped in a delivered it in a stealy way",
	"'Colrodos fineset number 420' 'We love that number here'",
	"What I say is so important",
	"Its like bad jokes squared ",
	"Lets make shit up",
	"Or your get hit in the head enough that you die",
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
	"hope you will come back",
	"we hate you ",
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
	"I want a bacon sandwitch",
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
	"'I could suggest some things and if any of them seem right you could nod or somthing' 'Sure yeah' 'Okay waht if you were so drunk that you thought I was a girl but, when you woke up you freaked out cause I am a guy' I don't move. 'Okay what if you would have kissed any one in the same room as you but, you hated it' I don't move again. 'What if you had kissing a guy om you bucket lidt but, hated it and did not know how to tell me' 'Keep trying this is helping' 'You were so upset that you were not on that list and I made you feel atrivtive and you misstaked it for real atration' 'I mean maybe that is a part of it but, there is more to it' Ruben get quiet and speaks in almost a wisper 'What if you figured out you like guys but you too afrid to do any thing about it because then it would become real' I can't lie and Ruben seems to get it like really get I wonder if he went trough somthing like this when he was younger I wounder if all queer people do. So I nod. 'You think you might be queer' 'ya' I wince 'I think I might be bi' 'Shit man this is huge' 'Are you suprised' 'I guess I sould not be given last week but I am I mean of course I thought about it I mean I wan- I just keept deciding you were not' 'right' but wait what was that he wanted for me to be bi. Why would he. and then it hits me I kissed him and themn I was cold and distent whitch would be heartbreaking if someone you liked or starterd to like kissed you and acted that way. God I am so stupid never in a millon years did I think that Ruben would like me in that way. 'Any way let's not make thins about me how do you feel' 'Its nevrwraking but in a good way' This feels so pefrcat siting here under the street lights eating stroopwaffels with Ruben. 'Are you refering to the fact that you like all guys or just' he glances up a clear signal and I want to really want to. So I lean across and put my hands on his face. What if I screw this up what if I kiss him and hate it. I move my hands an inch away. Rubes eyes open his brows fuower. Fuck I am screwing this up I am screwing very thing up latley oh fuck it. I lean across and put everything I have onto this kiss. I run my hands up through is haor his pefcfact hair and smell his coloagne and taste the sugar on his lips. Its like fireworks in my chest. Ruben reches up and softly pushes me back 'Wait' he sighs ' we should not do this outside someone could see' 'right' We walk back to the hotel walking closer then we should of. Our fingers ocnally toching until one of us pulls back. We climb up the ladder much faster then comimg down. As soon as I reach the elvator I press the button. Then Ruben pushed me agaist the cold brick wall. He kiss me it as good as. Better then I remeber. He pulls back and rest his head agaist mine 'Hey' 'Hey' 'Sorry no warning' 'I am not complaing' As soon as the elvator door closes we are all over each other. The kiss and our hands are frantic but in the best way possible. The evlvator dings and we spring apart but, there is no one in the hallway so we start up again. Sudenly he is up against the wall and I am kissing his neck and then I am up agaist the wall and he is grinding agaist me. I think we need to go into a room before my knees give out. Ruben presses me against the door and opens it. We fall in. Our coats off imtiatly. I double check the door was locked. Corus can not know about this. If they found out. God. I do not want to think about that. We make our way to the bedroom. He sucks he sweater and jumps on the bed now only in his jeans. He beckons to me witha deivlish grin. I pull off my own short and join him.",
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
	"'Ben I' he comes for me with the sweetest moan",
	"A great love story between a certifid chaous demon and a fun brunch loving daddy ",
	"Sudenly I know without a doubt that I would kiss him again",
	"His har is short and his back is well museled still the kiss was everthing a kiss should be. I was sweet and all cosmuing I do not think there is anything I have wanted more than to kiss him again to never stop kissing him",
	"Cause murder is bad or somthing ",
	"When I look at the clock it reads 9:16:09",
	"He is reading romance again",
	"This is not wired what would be weird would be if my grandma had mints in her pusre and not edibles",
	"I love you, I love you ben",
	"Shut up and kiss me already",
	"'It is taking every thing I have not to press you into that contuer over there Parish. Bake quikly it is imptarnt to me, I want to taste what you make' He leans in closer 'And then I want to taste you' I swallow hard 'Who says baking can't be foreplay' 'I think that would be agist health reglations' 'I don't see any heath insptors here do you'",
	"Before his mouth even mets my most sentive place. My hands are balled into the sheets. I am gone for Adam Reed",
	"'4' 'What' 'You missed a miunte' 'You did not step forward' 'Ben look at me' He steps back and I see his hard length 'I want you to see how much I want you' He makes eye contact with me 'I am not going to break the rules'",
	"Fuck Kiran",
	"His own hard on press agaist my own need",
	"'Tell me I can touch you' His pupils blow wide 'Hurry' ",
	"He press my hand to his chest and I feel his heart beting 'this is yours'",
	"'If you keep touching me we won't get anything done' I bit my lip 'would that be so bad' His eyes darken 'it is taking every thing I have not to press you into that contuer over there. Parish. Bake. Quickly. this is imptant to me I want to taste what you make' He leans in 'And then I want to taste you' I swallow hard 'who says baking can't be foreplay' 'Is that agaist like all the heath rules' 'I do not see any heath inspetors here do you' ",
	"Please not be the tea",
	"Adam presses me into my bedroom door. 'Do you want me to open up that door.' He says his vocie raspy. 'Do you want me to trow you on the bed. Do you want me to have my way with you.' I wimper 'God. you make consent to sexy.' 'Consent is allways sexy.' I reach back and open my door.",
	"'Darling' 'You did not say that fucking word'",
	"'Some times when you are using the expreso machine your face gets all flushed. I always wanted to make you face flushed like that before you started making coffe.' He leans in 'By giving you the best morning sex ever' I gasp for air 'That is really thoughtfull of you' He dives under the sheet and I am done for",
	"I want to be more than friends with you ben",
	"We we come out o fthe bar it is raining 'Shit run to the car' I yell over the rain. Wes turns around 'What was that', 'What' 'You acted like a total dochcanon in there' 'I acted like a donchcanon' 'Yes jesus dude, you treated that guy lik ehe had the ebolia virus' 'Maybe I just did not apprete the way he was pawing you right in front of me I slam my mouth shut. I did not just say that. 'I mean.. it was rude' Wes's mouth is slightly parted I can't take my eyes off them. I should be cold but I am not. I don't think the beer is enough to have this effect on me. Maybe its him. Maybe he's making me hot. Wes stciks his tounge out to lick a raindrop off his bottom lip. I cautch a glimsle of his tounge ring. It was not there when we were 18. It was not there we it repped around the head of my cock, 'Canning..' there is a flash of somthing in his eyes. Heat, confusion, a hint of intrest. 'Jamie' He says with a hint of warning. I suc in a breath. Ingnoe the warnings. 'What' Hes says as I rack my hands through his hair. He does not get to finish that sentance. I lean in a smash my mouth agiast his.   Jamie is kissing me. Jamie is kissing me. Jamie is kissing me. It makes no sense. The press of his lips. No sense. The shocking sweep of his tounge over my bottom lip. No sesne. But holy fucking shit I want it. He taste like beer and somthing additvly maucluine. When I part my lips for a shacky breath. He takes full adavntage and lides his tounge inside. It is like a cattle prod to spine. Disser surges through me and spirlees down to my balls drawing them up tight. I know exatlly when he feels my tounge ring. Because he wraps his tounge around the meatal stud. He moans deep and husky aganist my lips. It is that lust drenched sound that snaps me back to realty. This may feel right. But it fucking anit. At the end of the day. He is still straight and I am still gay. Even worse I am still in love with him. With a torced groan I rench my mouth from his.",
	"When I close my eyes I see golden embers",
	"See I knew that the cottage was a good idea",
	"The good old quackatack",
	"It is THE post office",
	"Why are you making love a mtah eq.",
	"I bought an island. So what",
	"I am close. Please. Please. I am close",
	"That was. Yeah wow. yep wow",
];
let seting = [
	"in hell",
	"on earth",
	"in space",
	"at school",
	"in the ocean",
	"at your home",
	"in a forest",
	"in a feild",
	"in a jail",
	"at Higgs",
	"at Trunchman",
	"in Flodia",
	"in Rome",
	"in a place only metionted in fairy tails",
	"in spanish class",
	"on the Star Ship Enterprise",
];
let main = [
	"a teacher",
	"a stranger",
	"a murderer",
	"a doctor",
	"a farmer",
	"someone plays for the Yankies",
	"a dancer",
	"a lumber jack",
	"an actor",
	"a climber",
	"a first resonder",
	"a plumer",
	"a race car driver",
	"a murder",
	"a mailman",
	"a milkman",
	"a mother",
	"a teen",
	"a father",
	"a baby",
	"a child",
	"who is smart ",
	"who is funny ",
	"who is stupid a",
	"who is charsmatic ",
	"has dated a girl named Christina and",
	"who is crazy ",
	"a sufer",
	"who is tall",
	"who is short",
	"who is blonde",
	"who is blue eyed",
	"a small child",
	"an edgy teen",
	"who is rich ",
	"who has no singlar chararitics",
	"an actor",
	"a piece food",
	"a nurse",
	"a alien",
	"a dog",
	"a cleaner",
	"a laywer",
	"a monkey",
];
let Name = [
	"You should write about someone named Ruben",
	"You should write about someone named Zach",
	"You should write about someone named Jon",
	"You should write about someone named Pairs",
	"You should write about someone named Heidi",
	"You should write about someone named Tori",
	"You should write about someone named Ander",
	"You should write about someone named Santi",
	"You should write about someone named Ryan",
	"You should write about someone named Jamie",
	"You should write about someone named Bella",
	"You should write about someone named Kosko",
	"You should write about someone named Frankie",
	"You should write about someone named Dexter",
	"You should write about someone named Piper",
	"You should write about someone named Sydney",
	"You should write about someone named Suzane",
	"You should write about someone named Elle",
	"You should write about someone named Stella",
	"You should write about someone named Adam",
	"You should write about someone named Ben",
	"You should write about someone named Lauren",
	"You should write about someone named Hope",
	"You should write about someone named Nathen",
	"You should write about someone named Blake",
	"You should write about someone named James",
	"You should write about someone named Arron",
	"You should write about someone named Hilda",
	"You should write about someone named Wendy",
	"You should write about someone named Jassica",
	"You should write about someone named Saywer",
	"You should write about someone named Locke",
	"You should write about someone named Flyin",
	"You should write about someone named Roarke",
	"You should write about someone named Mary",
	"You should write about someone named Rose",
	"You should write about someone named Liv",
];
let lastName = [
	"Wesley",
	"Lee",
	"Janovisky",
	"Robernsion",
	"Karger",
	"Bownen",
	"Oeasman",
	"Hall",
	"Storina",
	"Sebattion",
	"Osburn",
	"Jhonson",
	"Delcovo",
	"England",
	"Rincon",
	"Tomas",
	"Luacks",
	"Didodmazo",
	"Kos",
	"Royal",
	"Diaz",
	"Hardy",
	"Jimmy",
];
let does = [
	"who saves the world",
	"who is actally a mob boss",
	"who is clinically insane and thinks they are michael holden by delusion",
	"who writes books",
	"who loves men",
	"who loves women",
	"who kills there best firend",
	"who wins races",
	"who lives in a world",
	"who bulids houses",
	"who kisses his grandma",
	"who loves apple pie",
	"who eats glass",
	"who eats babies",
	"who loves.... loves... kids",
	"who runs with their family",
	"who swims in their fav. place",
	"who eats everthing they find or comes within 5 feet of them",
	"who climbs a hill called 'somthing'",
	"who dances with their sister",
	"who lives with a serail killer",
	"who kills their teacher",
	"who murders their boss",
	"who ignores the laws ",
	"who acts like a crab",
	"who acts like a human",
	"who is actally demon",
	"who is actally the major",
	"who is actally the decsent of a god",
];
let idk = [
	"Wakey Wakey",
	"Please touch me I feel so soft and fluffy",
	"Look at the Snow",
	"What you doing brow",
	"Why don't they slap children anymore",
	"Why do you want to slap kids so bad",
	"I like teal day casue I get to see my spanish one and the other class",
	"Like ya they are dead",
	"I don't want flowers of the dead cause you love me so much",
	"Cause I plan before hehehehehe",
	"Please a little less murder and more work",
	"This is a little school so I don't know if you have heard of this school but,  it is called Havard",
	"DO YOU WANT TO BE A BILIGUEL MISQUITO ",
	"He wants to be a bilinguel misquito",
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
let getRandomthers = function (a) {
	return a[getRandomIndex(a)];
};
let generateStory = function (n, l, m, d, s) {
	let randomStory =
		getRandomWord(n) +
		" " +
		getRandomWord(l) +
		" " +
		getRandomWord(m) +
		" " +
		getRandomWord(d) +
		" " +
		getRandomWord(s);
	console.log(randomStory);
	return randomStory;
};
let generateIdk = function (i) {
	let randomIdk = getRandomWord(i);
	console.log(randomIdk);
	return randomIdk;
};
btn.addEventListener("click", function () {
	let advice = generateAdvice(advisors, howOften, verbs, adjectives, nouns);
	output.textContent = advice;
});
BTN.addEventListener("click", function () {
	let datingAdvice = generateDatingAdvice(
		when,
		who,
		whom,
		personalty,
		likes,
		but
	);
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
n.addEventListener("click", function () {
	let Story = generateStory(Name, lastName, main, does, seting);
	output.textContent = Story;
});
t.addEventListener("click", function () {
	let Idk = generateIdk(idk);
	output.textContent = Idk;
});
