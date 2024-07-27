async function enviarScript(scriptText) {
    const lines = scriptText
        .split(/[\n\t]+/)
        .map((line) => line.trim())
        .filter((line) => line);
    (main = document.querySelector("#main")),
        (textarea = main.querySelector(`div[contenteditable="true"]`));

    if (!textarea) throw new Error("Não há uma conversa aberta");

    for (const line of lines) {
        console.log(line);

        textarea.focus();
        document.execCommand("insertText", false, line);
        textarea.dispatchEvent(new Event("change", { bubbles: true }));

        setTimeout(() => {
            (
                main.querySelector(`[data-testid="send"]`) ||
                main.querySelector(`[data-icon="send"]`)
            ).click();
        }, 100);

        if (lines.indexOf(line) !== lines.length - 1)
            await new Promise((resolve) => setTimeout(resolve, 250));
    }

    return lines.length;
}

enviarScript(`♫ Steven
Everyone believes in... ♫

Blue & Yellow Diamond	♫ Everyone believes in... ♫
The Diamonds	♫ Steven! ♫
White Diamond	♫ All across the universe! ♫
Yellow Diamond	♫ Ever compassionate, ♫
Blue Diamond	♫ Can you imagine it? ♫
White Diamond	♫ Even with us at our worst? ♫
Blue Diamond	♫ Hybrid son of a Diamond, ♫
Yellow Diamond	♫ Human son of a Rose, ♫
The Diamonds	♫ What a revelation,
He's a revolution,
A Gem that loves and grows! ♫

White Diamond	♫ Steven
Have you heard the tale of... ♫

Blue & Yellow Diamond	♫ Have you heard the tale of... ♫
The Diamonds	♫ Steven?
Always putting others first!
Can you imagine it?
Ever compassionate,
Steven Universe! ♫

[Trans. Int. Diamond Throne Room]
(As the song ends, a gilded purple book is shown on a silver stand, titled "Steven Universe". The book opens up, as White Diamond begins narrating the story.)
White Diamond	Once upon a time, the Gem Homeworld was ruled by Diamonds: White, Yellow, Blue, and the littlest Diamond, Pink. While the other Diamonds conquered many worlds across the galaxy, Pink had only one - the planet Earth. One day, Pink fled the comforts of Homeworld. On Earth, she made a new home, new friends, and finally, new life; giving up her form to bequeath her gem to her half-human son. Without Pink, Gemkind entered an era of despair. But, when Steven Universe learned of his heritage, he reunited with his fellow Diamonds and championed a new era of peace and freedom across the furthest reaches of space. *shuts the book* And now, dear Gems everywhere, I'm pleased to announce that Steven is finally ready to take his rightful place on Pink Diamond's throne!
(A light fanfare is heard as Steven, now a fully-grown teenager is shown standing in front of White. He faces us.)
Steven	*turns around* How's it going, everybody?
(Words appear in front him: "Steven Universe, Age 16".)
Steven	I know you all might be thinking of me as the new Pink Diamond, but you don't have to put me on a throne. I already have a rightful place, and it's on Earth.
(The Diamonds all lean forward in their thrones in surprise.)
Blue Diamond	Huh?
White Diamond	What?
(Yellow Pearl is seen adjusting the settings on a diamond-shaped projection screen, broadcasting Steven's message along across the universe.)
Steven	It's a beach house, where I live with my friends, Garnet, Amethyst, and Pearl. As much as I've loved dismantling the empire and saving all your planets, I can't wait to get home and spend some quality time with my friends.
(As Steven finishes his message, White Diamond's eyes widen. She scowls at the Pearls)
White Diamond	Cut the feed.
Yellow Pearl	Your time is up anyway.
(Blue Pearl snickers and runs off to pull away the camera, as Yellow Pearl shuts down the broadcast.)
Steven	*turns to the Diamonds* I think that went well.
White Diamond	Steven, please.
Yellow Diamond	You can't go.
Blue Diamond	You must stay.
White Diamond	You're all we have left of Pink. *kneels down* Steven, you belong here, with us.
Steven	Uh... Thanks. But... no thanks.
(Steven slowly backs away as the Diamonds begin to sing "Let Us Adore You".)
The Diamonds	♫ Come live with us in the palace,
There's a room waiting for you ♫

Yellow Diamond	♫ Come on... ♫
Blue Diamond	♫ Come on... ♫
White Diamond	♫ Come on... ♫
The Diamonds	♫ Just let us adore you ♫
(The Diamonds all kneel down before Steven, as he continues to back to the Warp Pad.)
Steven	You guys have really gotten better at showing affection, but I've got my own life to get back to. Don't forget, I'm not Pink Diamond.
The Diamonds	♫ Yes, we know that you're not her,
but you were hers ♫

(The Diamonds inch closely towards Steven as they continue singing, and Steven chuckles nervously.)
The Diamonds	♫ You know what it meant to love her,
and you remind us so much of her ♫

Steven	Thanks, but I really gotta go.
The Diamonds	But Steven!
Yellow Diamond	I've disbanded my armies! I've liberated my colonies!
Blue Diamond	I never shatter. I never make anyone cry.
White Diamond	I've been saying "please" and "thank you", even to lower life forms.
Steven	What did we talk about?
White Diamond	Ugh, equal life forms. Steven, we've done everything you've asked!
Steven	That's great! Good job! Keep it up! Bye!
(Steven promptly activates the warp pad and begins beaming through space.)
[Trans. Int. Steven's Conservatory]
(Steven eventually arrive back on Earth, warping into a glass dome at the back of the beach house. Connie, who is also a little older, is seen sitting on the floor reading a magazine, as Steven arrives on the warp pad inside.
Connie	Steven! What took so long?
(Steven leaps over to Connie and the two embrace.)
Steven	*sighs* The Diamonds. They really want me to move in.
Connie	Why?
Steven	Because they want to smother me with attention 24/7.
Connie	*giggles* Sounds fun.
Steven	No, it doesn't.
Connie	Well, I'm glad I got to see you before heading out.
Steven	You're really going through with it?
(The pair exits the conservatory and begin descending the stairs to the balcony outside Steven's Room.)
Connie	Of course. I've always wanted to go to space camp.
Steven	But you've literally been to space multiple times. And you've done way cooler stuff than just camp there.
Connie	My parents are doing what they can to support my interests. It's sweet. *enters the room and picks up her duffel bag* Plus, I get all the freeze-dried ice cream I can eat.
Steven	But Sadie Killer and the Suspects are playing tonight. Isn't a rock show a little better than space camp?
Connie	It's maybe equal to space camp.
(Steven chuckles as Connie pulls out her vibrating phone from her pocket.)
Connie	That's my mom. I should get going.
(Connie and Steven embrace each other again. Connie briefly turns away, blushing with her arms crossed, before giving Steven a quick peck on the cheek, causing him to blush as well.)
Connie	Mwah! Okay! Bye!
(Connie proceeds to run down the stairs and out of the house. Steven puts his hand to his cheek and grins widely. He then runs out onto the balcony to bid Connie farewell.
Steven	Tell everyone at space camp that space used to be super scary and dangerous, but it's great now!
Connie	*waves goodbye* I will!
(Connie leaves. Wearing a pink leather jacket with white lining and a new light blue Crystal Gem logo shirt, Steven sighs contently and begins singing "Happily Ever After".)
Steven	♫ Here we are in the future,
Here we are in the future and it's bright!
Nothing to fear
No one to fight
I can't believe we've come so far
Happily ever after, here we are! ♫

(He gazes up at the bright sky happily and runs into his room. He looks at a photo frame of the Crystal Gems and floats onto his bed, lying in it. He then sits up and sings down his hardship. Flashbacks from his life appear.)
Steven	♫ Once upon a time, I thought I'd always be in my mother's shadow
Answering for her crimes, I thought I'd always be in an endless battle
Till I began to hone
A power all my own ♫

(As Steven sings, scenes of past events are shown of him facing off various former foes, such as Jasper, various corrupted Gems and Homeworld Gems, and the Diamond Mech. Through these trials, Steven grows stronger till this very day.)
Steven	♫ That I could feel growing stronger every day!
And now I saved the world,
Not just that- the whole galaxy's saved,
We did it!
Here we are in the future! ♫

(Steven rolls down the stairs in his bubble shield before exiting the house. He pets Cat Steven on the porch and runs out onto the beach, where Pearl, Greg and Lion are seen by Greg's Van.)
Steven	Hey, Pearl! Hey, Dad!
Greg	'Ey, schtu-ball.
Pearl	Steven! I'm learning to play the "bass" (/bæs/ - pronounced as the name of the fish).
Greg	I keep tellin' her it's "base" (/beɪs/).
Pearl	Excuse me, b-a-s-s spells "bass".
Greg	You're the boss!
Pearl	Heck yes, I am.
(Pearl jumps onto the roof of Greg's van, as she continues singing her part of the song.)
Pearl	♫ Once upon a time, I only lived to be of Pink Diamond's service,
Till the day the two of us snuck down to be on this planet's surface
We became our fantasy,
And I was sure she set me free ♫

(As Pearl sings, a flashback of her being Pink Diamond's servant is shown, until they visited Earth and Pink reformed to be Rose Quartz.)
Pearl	♫ But in the end, I guess I never left her side
And after love and loss and all the tears that I cried,
I find that... ♫ *jumps off the van*

Steven & Pearl	♫ Here we are in the future! ♫
(Steven, Pearl and Greg laugh together, and Lion walks over to Steven's side.)
Steven	Hey, buddy. *pets Lion* I'm heading into town.
Greg	See ya at the concert tonight?
Steven	Wouldn't miss it for the world!
(Steven steps back a bit and dives into Lion's mane.)
[Trans. Int. Pink Dimension]
(Holding his breath, Steven continues humming the song as he walks around to
Lars' tree in the distance. Upon reaching the island, he stops and falls backwards into the grass.)

[Trans. Ext. The Big Donut]
Steven	♫ -Here we are! ♫
(Steven emerges from Lars' head and Garnet catches him on a chair, seating him down next to the Off Colors at a table, as Lars serves an ube roll.)
Garnet	I saved you a seat.
Steven	Thanks Garnet! Hey guys, what'd I miss?
Garnet	You're just in time for my favorite part of the story.
(Garnet begins to sing her part of the Happily Ever After.)
Garnet	♫ Once upon a time, a Sapphire came to Earth with her Ruby soldier
Sapphire's deadly fate was set until the Ruby rushed in to hold her
Suddenly, they were fusing;
Beautiful, strange, confusing ♫

(As Garnet sings, her flashback shows Ruby and Sapphire first meeting 5,752 years ago at the Ancient Sky Arena. Sapphire was confronted by a past Pearl, Ruby rushed in to protect her from Pearl's strike, and the two fused together for the first time.)
Garnet	♫ And there I was, a bundle of questions, so naive,
That if you told me this I never would have believed you then, but... ♫

Steven & Garnet	♫ Here we are in the future! ♫
Steven	Lemme just save this. *bubbles away a slice of ube roll* Hey, any idea what Amethyst is up to?
Garnet	I have every idea what everyone is up to. You'll find her if you head to Little Homeworld. Take the Warp.
[Trans. Int. Little Homeworld]
(Steven warps onto a warp pad that is suspended in the air by ropes. He almost steps off the warp pad, but a whip him in just time. The holder of the whip pulls him back in. It's Amethyst.
Amethyst	Whoa! Careful dude!
(The two exchange a secret handshake.)
Steven & Amethyst	Pew! Pew! One, two, three, hup!
Steven	Thanks, Amethyst. Whoa!
(Steven grabs hold onto the rope as the warp pad is lifted upwards. Bismuth and Lapis Lazuli are seen on a platform attached to the crane, which holds the warp pad.)
Bismuth	Steven! You're just in time! We're about to install the new warp.
(Peridot then comes hovering in on a trash can lid, levitated by her ferrokinesis, as she looks at her tablet.)
Peridot	Which means Little Homeworld is 83.7% complete.
Lapis	Only 83.7%? We'd better get cracking. *She summons her waterwings and flies off the crane*
Bismuth	I'm on it!
(Sporting a form, Bismuth begins cranking the crane handles, turning the crane around. Amethyst and Steven look out over Little Homeworld from the warp pad, at the various Gems below working hard to build Little Homeworld.)
Steven	Wow. Little Homeworld's growing fast.
Amethyst	So are you. *shapeshifts into Steven* (imitating Steven) "Look at me! I'm a young adult!"
(Steven chuckles as Amethyst shapeshifts back to normal.)
Amethyst	(in normal voice) I love that all these Gems want to make their new home on Earth. Wish I'd had this when I first emerged.
(Amethyst begins to sing her part of the song.)
Amethyst	♫ Once upon a time, I burst to life inside of the Kindergarten;
Product of a war that I had no idea I had a part in
I came out late and alone,
Knew nothing but my home ♫

(As Amethyst sings, another flashback shows her first emerging from Prime Kindergarten, long after the other Quartzes are gone. A newly-"born" and lost Amethyst wandered around the Kindergarten without a clue, until the Crystal Gems found her and she became who she is today.)
Amethyst	♫ But I know now exactly who I'm s'posed to be,
And it's a part of this family! ♫

(The warp pad Steven and Amethyst are standing on is slowly lowered into the ground, and they both jump down as it is inserted into a hole on the ground.
Amethyst	So, whaddya think?
Steven	♫ If I could just stop, right here and be~ ♫
(Steven continues singing the song as Garnet and Pearl warp in.)
Steven	♫ Finally done!
Finally us!
Finally we...♫

(Steven and Amethyst run up to Garnet and Pearl on the warp pad, and Steven uses his phone to take a "wefie". The four Crystal Gems then begin running through a grass field, mimicking the run seen in the theme song.)
Steven	♫ Are in the future! ♫
Crystal Gems	♫ Here we are in the future, and it's bright,
Nothing to fear, no one to fight
I can't believe we've come so far! ♫

Steven	♫ Happily ever after... ♫
Gems	♫ Happily ever after... ♫
Steven	♫ Happily ever after, ♫
Crystal Gems	♫ Here we are! ♫
[Trans. Lighthouse Hill]
(After the song ends, Steven and the Gems head to the lighthouse hill, laying on the grass and basking under the sun. Steven picks a flower, sticks his pinkie in his mouth and uses his healing spit to restore the flower he picked.)
Steven	I want everything to stay exactly like this and never change.
Pearl	Agreed.
Amethyst	Here, here.
Steven	How's the future look, Garnet? Do we all stay just like this forever?
(Garnet adjusting her orange star-shaped visor, smiling while using her future vision, when she suddenly sits up and frowns.)
Garnet	No!
(A strong wind blows in and an ominous shadow is cast over the hill. The Crystal Gems look up at the cloudy sky and spot a strange Injector-like ship lowering from the clouds. It looms over Beach City and points towards the hill. Just then, a silhouette is seen at the top of the ship.
Spinel	HEY! Are you Steven Universe?
Steven	Um... Yes?
Spinel	Perfect.
(The silhouette's finger transforms into a giant horn, and she blows it. Legs and a pointed drill then emerge from the bottom of the ship.)
Garnet	Move! *picks up Amethyst*
(The Gems begin running from the ship as the ship's legs grip the sides of the hill. The ship then thrusts itself forward, driving the drill into the ground of the hill as the Crystal Gems gasp in shock.
Amethyst	Hey! Nice park job, dingus!
(A pink liquid inside the ship begins to gurgles, as it cruises down the drill and into the ground. The figure on the top of the ship before jumps down to the bottom, revealing to be a pink cartoony-looking Gem, with a gem shaped like an inverted heart in her chest. Her gem flashes as she cackles and glowers down at the Crystal Gems.
Spinel	Well, well, well, well, well. Lemme get a look at the menagerie. *shapeshifts her hand and eye into a telescope* You must be Amethyst. You must be Garnet. And Pink Diamond's Pearl. Wow, she took you with her. Isn't that just... *grits her teeth* swell?!
Pearl	It can't be.
Spinel	*laughs* Oh, but it can be, and it is. I got a new style and a few new toys that are gonna put an end to your "happily ever after" once and for all!
Steven	Whoa, whoa. This has gotta be a misunderstanding. In case you haven't heard, I've established peace across the-
Spinel	Yeah, yeah, yeah, I've heard! I've had your little message to the universe... ON LOOP!
(The pink Gem extends her leg and kicks Steven in the face, knocking him backwards. Amethyst summons her whip, Pearl, the trident and Garnet, the gauntlets as they prepare for battle.)
Spinel	I just love that part, where Pink Diamond spends the rest of her days on this... nowhere planet... *chuckling* With... a bunch of... nobodies!
(The pink Gem uses her arms to spring herself down and bounces on the ground, as she begins to sing "Other Friends".)
Spinel	♫ That's right, I heard the story,
Over and over again,
Gee, it's swell to finally meet her other friends!
That's right, I heard the story,
Don't really like how it ends,
Gee, it's swell to finally meet her other friends! ♫

(The pink Gem, with her flexible body, easily dodges every single attack by the Crystal Gems.)
Spinel	♫ What did she say about me?
What did she say?
What did you do without me?
What did you do?
Did you play games without me?
What did you play?
Did you think all this time that I wouldn't find out about you?! ♫

(The pink Gem, with her rubber-like limbs, begins tauntingly playing with the Gems and intimidates Steven.)
Spinel	♫ Oh, that's right, I heard the story,
Over and over again,
Gee, it's swell to finally meet her other friends! ♫

(The pink Gem then extends her limbs to grab each of the Crystal Gems and slam them together, before jumping atop the lighthouse to glare down at the Crystal Gems menacingly.)
Garnet	She's running circles around us.
Amethyst	I'm rusty. Give me a break!
Pearl	It really is her, but she can't be serious.
Steven	You know her, Pearl? Can you tell us who she is?
(The pink Gem becomes more enraged by Steven's apparent ignorance and continues to sing her song.)
Spinel	♫ Who am I?
Who am I?
What are you even saying?
I'm the loser of the game you didn't know you were playing!
Let's play another game,
This time I get to win!
Lives on the line, winner takes all,
Ready or not, let's begin! ♫

(The pink Gem pulls a scythe-like weapon out of her gem, jumps off the lighthouse and begins sticking it at the Crystal Gems.)
Spinel	♫ Oh, that's right I heard the story
Over and over again,
Gee, it's swell to finally beat her other friends! ♫

(The pink Gem begins extending her body all around the Injector ship and the lighthouse, stretching her body to a tremendous degree. The Gems charge towards her as the pink Gem begin unwinding her body.)
Spinel	♫ Oh, that's right, I heard the story,
Don't really like how it ends
Gee, it's swell to finally beat her other,
Other,
Other friends! ♫

(With great accuracy, the pink Gem slashes through Garnet, Amethyst and Pearl with the scythe, poofing their physical forms in one fell swoop. Steven watches in shock as their gemstones fall to the ground.)
Steven	That's enough! *he glares summons his shield*
Spinel	Aw, what's the matter, Steven? Miss your friends already? Well, don't worry. You're right behind 'em!
(Jumping into the air, the pink Gem slashes downward at Steven, breaking his shield in half. Pink glowing circuitry spreads around his body briefly, until he successfully shakes it off. He looks at his body, seeing that nothing is happening to him, and laughs proudly.)
Steven	That was nothing!
Spinel	*snickers* Then I guess you won't mind if I do it again!
(She begins slashing wildly at Steven with the scythe while cackling maniacally. Pained, Steven grabs hold onto the weapon and struggles against the Gem's grasp.)
Steven	Cut it out!
Spinel	You don't poof, do you? Hmm, figured as much. Just wait! *her pupils jiggle like googly eyes* Your human half won't stand a chance against my Injector. (in sing-songy voice) Not after what I just did to your gem~!
Steven	*grunting* What are you talking about?
Spinel	(in normal voice) You weren't always a powerful hero, were you?
(As the pink Gem lets out one last maniacal laugh, Steven wrests control of the weapon and swings it at her, cleaving her physical form in half and poofing her instantly. The tired Steven collapses to his knees and shakes off the pink circuitry on his body, before setting the weapon down on the ground and reaching for pink gem.)
Steven	*sighs* Better bubble you before anything else happens.
(Steven bubbles the gem, but it pops instantly.)
Steven	What?
(Steven attempts to bubble the gem again, this time not even producing any effect as he taps the gem.)
Steven	Where's my bubble?
(Picking the gem up, Steven attempts to concentrate and bubble the gem.)
Steven	Come on...
(A bubble slowly begins to form around the gem before popping, as Steven collapses in strain, panting heavily. Confused, he lifts up his shirt. His gemstone flickers like a lightbulb.)
Steven	What's going on?
[Trans. Int. Beach House]
(A pensive Steven returns back home as he gazes down at each of the dormant Gems before him on the table. Mere moments afterward, Greg bursts in through the front door.)
Greg	STEVEN! I came as fast as I could! Are you okay? *notices the gems on the table* Holy s- S-She really got everybody! *sees the pink heart gem* Is that her?
Steven	Yeah.
Greg	Who-
Steven	No idea.
Greg	Why?!
Steven	No idea.
Greg	HOW?
Steven	She hit all of us with this.
(Steven pulls the weapon handle from his jacket's pocket and activates it for Greg, who flinches in shock at the sight of the scythe, before Steven puts it away.)
Greg	Waah! Phew.
Steven	It did something extra weird to me, and now, my powers aren't working right. Look.
(Steven attempts to summon his shield, which fizzles erratically for a brief moment before dissipating. Afterwards, he shows Greg his gemstone, which still flickers.)
Steven	There's something wrong with me, Dad. *sighs* I just have no idea what's going on.
Greg	Well, son, now you know how I feel almost all the time. But you know what else? Any moment now, the Gems are gonna do that thing where they glow and float in the air and reappear better than ever!
(Greg picks up Pearl's gem, which begins to glow and float in midair, as she prepares to regenerate.)
Greg	See? Here she comes. Good old Pearl!
(A holographic oyster shell materializes around Pearl's gem.)
Greg	Huh. Well, that's new.
Shell	Please identify yourself.
Greg	Um, Greg Universe?
Shell	Greetings, Um Greg Universe. Please state preferred customization options.
Greg	Uh... What am I supposed to say here?
Steven	I-I don't know.
Shell	Default setting selected. Please stand by.
(The shell descends to the house floor, as it opens and reveals a reforming Pearl... who takes on her first regeneration's appearance as Pink Diamond's personal Pearl. Cautious and somewhat curious, Steven and Greg approach her.)
Steven	Pearl! Pearl, thank goodness you're back! Huh? Pearl?
(Ignoring Steven, Pearl walks to Greg and begins to sing system/BOOT.pearl_final(3).Info.)
Pearl	♫ How do you do,
My Um Greg Universe?
Thank you for bringing me into the world!
I am at your eternal service
Welcome to your new Pearl! ♫

(Pearl holds Greg's hand and kneels down before him, swearing her service to him, which freaks Steven and Greg out.)
Steven & Greg	WHAAAAAT'S GOING ON?!?!
Greg	Could her gem be cracked?
(Steven walks over and inspects Pearl's gem.)
Steven	It looks fine to me.
(Suddenly, Ruby's gemstone begins to glow, as she reforms into her original form as Sapphire's guard.)
Steven	Ruby! Are- Are you okay?
Ruby	Aah! Who are you? You're not my assignment.
Greg	I could really use an explanation here.
Pearl	Allow me to illuminate!
♫ A Ruby Guard,
But just a single one;
They tend to come in teams of three or more

(As Pearl sings about Ruby's role, Sapphire regenerates as well, reforming back into her original form too.)
Pearl	♫ A precious Sapphire,
She sees the future- *winks at the audience*
That's who the Ruby's for ♫

Ruby	My Sapphire. As my sworn duty and sole purpose, I will protect you with my life.
Sapphire	I know you will. That's why I predict you won't last more than a day.
Ruby	Huh?
Sapphire	Come now.
(As Ruby and Sapphire take their leave, Amethyst regenerates next, taking the form when she first emerges from the Kindergarten.)
Steven	Amethyst! Hey, Amethyst?
Amethyst	Hey, Amethyst?
Steven	What? No. You're Amethyst!
Amethyst	What? No. You're Amethyst!
Pearl	♫ You must be right:
This is an Amethyst,
Except an Amethyst is big and strong
This one is not the best example;
Something is clearly wrong! ♫

(Pearl shrugs at sheer perplexity of the situation, and Amethyst begins mimicking her movements.)
Pearl	I-I do say, something is clearly wrong. Uh- What are all these different Gems doing here in this strange place?
Steven	Pearl, don't you recognize them? Don't you recognize me?
Pearl	Hmm... Well, I certainly recognize my Um Greg Universe.
Greg	Oh, boy...
Pearl	As for you? Hmm...
(Finally, the last gem, the pink heart one, begins to regenerate. Floating into the air, its pink glow engulfs the room, while Steven attempts to summon his shield to no avail.)
Steven	Get back! Huh?
(The gem rotates upright into a proper heart shape, as the reforming Gem laughs playfully. She ropes her rubber-like arms around Steven and launches herself toward him for a hug. Once finished reforming, the pink Gem, looking entirely different from before, looks at Steven with a bright smile.
Spinel	YIPPEE! I'm so excited to meet you!
Steven	Y-You're not mad?
Spinel	Mad? Why would I be mad at my best friend!
(The words "BEST FRIEND!" appear above the pink Gem, as she lets out a giddy laugh while doing a goofy dance.
Pearl	♫ This will be fun!
Aren't you the lucky one?
Her cut is perfect and she's pink as well!
She'll bring you endless entertainment,
Your new best friend, Spinel! ♫

(Pearl enthusiastically concludes her song after explaining the Gem's role, much to Steven's chagrin, who angrily points at her.)
Steven	YOOOUU!!! *grabs and shakes Spinel rapidly* What have you done to us!?
Spinel	*giggles and boops Steven's nose* Boop! Now, it's your turn!
(Missing his point entirely, Spinel wraps her arms around Steven and starts to shake him rapidly in midair while laughing.)
Steven	W-W-W-Would you cut that out?!
(Spinel stops shaking Steven, whose eyes rattle around cartoonishly, dizzy.)
Steven	Please?
(With a silly face, Spinel lets go of Steven, who falls face-first onto the floor. Spinel, meanwhile, points at Greg and the other Gems with curiosity.)
Spinel	Hey, look! There's more Gems!
(Amethyst, mimicking Spinel's movement, picks Ruby up and shakes her rapidly too.)
Spinel	Let's ask 'em to play.
Steven	W-Wait a minute. You don't remember?
Spinel	Remember what?
[Trans. Ext. Crystal Temple]
(Spinel's Injector is seen continuing pumping the pink liquid into the ground of the lighthouse hill, while Steven, Greg, and the refreshed Gems look up at the monolithic machine from the beach.)
Spinel	Wowee! That thing sure is big! You wanna climb it or somethin'?
Steven	Wait, wait. Are you serious right now? What about that stuff you said about how I won't stand a chance against your Injector?
Spinel	I said what now?
(The oblivious Spinel scratches her head with her finger, contorting her stretchy arm into a loop.)
Steven	You really don't remember, huh?
(Just then, Lion approaches the group.)
Steven	How 'bout you, Lion? Can you make any sense of this?
(Lion simply growls in response while displaying a less-than-amused face.)
Steven	Aww, you're no help, either. At least, I can store this thing in your mane.
(Steven pulls out the deactivated scythe from his pocket and tries to shove it into Lion's mane... with no effect, as it simply slides off Steven's hand.)
Steven	I can't store things in Lion's mane now?! That's like the easiest thing I do!
(Steven picks up the weapon from the sand and looks up at the Injector in distress.)
Steven	What do I do? I've got no friends to help me except...
(Steven shifts his view to Little Homeworld in the distance.)
Steven	Bismuth, Lapis, and Peridot! Come on, guys! Let's go figure out how to fix this.
(Steven starts to run, followed by a laughing Spinel, before coming to a halt as he notices nobody else is following.)
Steven	G-Guys?
Pearl	My Um Greg, allow me.
(Pearl summons a parasol from her gem and uses it to shield a wary Greg from the sun. Amethyst, standing near them, shapeshifts into Greg, leaving a confused Pearl to constantly switch between holding the parasol over both.)
Steven	Ruby? Sapphire?
Ruby	She's not going anywhere with you.
Sapphire	I do see us following him to the countryside.
Ruby	Never mind! We're going.
(Ruby and Sapphire join Steven and Spinel, leaving Greg with Pearl and Amethyst, the latter had now shapeshifted into Pearl.)
Greg	Wait. Don't leave me alone with these two!
Steven	Just keep an eye on them for now. I'll be back.
(Steven, Spinel, Ruby and Sapphire begin walking towards Little Homeworld.)
[Trans. Int. Little Homeworld]
(Atop the tower in the center of Little Homeworld, Peridot inspects the Injector with a pair of binoculars, while Steven, Lapis and Bismuth look on.)
Peridot	She rode in on that?!
Steven	Yeah. She said my "human half" wouldn't stand a chance against her Injector.
Lapis	What does that mean?
Peridot	Why don't we just ask her?
(Bismuth splits off from the group to think, accidentally overstepping her boundaries and coming a little too close to Sapphire; enough to trigger a growling Ruby.)
Steven	Well, here's the thing-
(Spinel creeps up from behind Steven and pokes at his shoulders.)
Steven	Hmm? What? Where'd she-
(Spinel pops up from behind Steven, startling him.)
Steven	Aah!
Spinel	Surprise! *laughs*
Steven	Here she is... My new best friend, Spinel.
(Spinel bows dramatically and speaks in a faux-posh accent.)
Spinel	A pleasure to meet you all.
Bismuth	I thought you said she was just trying to kill you.
Lapis	Wow. Quick turnaround.
Peridot	No kidding. It took me months to stop trying to kill Steven.
Bismuth	I say it took me a day- day and a half?
Lapis	I'm still on the fence.
(The three Gems all share a laugh.)
Peridot	Alright, let's see this thing she hit you with.
Steven	Uh, right.
(Steven pulls out the deactivated scythe and hands it to Peridot, who begins to examine it in the least safe way possible.
Peridot	Whoa. Was there, like, uh, a laser or-
(Bismuth hurriedly snatches the weapon from Peridot's hands before she could activate it.)
Bismuth	Be careful with that! It's a Rejuvenator. *reluctantly activates the weapon* Homeworld used to use these things on Gems that started steppin' out of line. One hit with this... *deactivates the Rejuvenator* You're back to how they made you.
(Bismuth sadly looks at Ruby and Sapphire, as the former assumes a defensive stance to protect the latter.)
Ruby	What are you lookin' at?
Peridot	Oh my stars, I touched it! I could have lost all my character development! Wait, how did you survive being hit by that thing, Steven?
Steven	I- I think I didn't. My human half kept me from poofing, but- but my Gem half, it took the hit! She sent me back; it's like I'm a kid again! I can barely control my powers! How do we reverse this? Oh no... Do I need to get the Diamonds?
(Bismuth hands the Rejuvenator back to Steven.)
Lapis	You're the one with healing powers. If anyone can fix this, it's you.
Steven	I can't believe this. For the first time in years, everyone's in danger. Everybody needs me, and I'm useless! *gazes at Spinel's Injector in fear* Bismuth, what do we do?
Bismuth	I'm sorry, Steven. *sighs* I don't know.
(Steven turns his gaze to Ruby and Sapphire before tearing up.)
Steven	Garnet would know what to do. Garnet always knows what to do...
Spinel	*pops in and wraps her arms over Steven's shoulder* Hey, don't be sad.
(Spinel coils around Steven in celebration, and begins to dance around him, slowly taking on more maniacally happy expressions.)
Spinel	*in singsong voice* ♫ Your new best friend, your new best friend, ♫ *in normal voice* your new best friend, YOUR NEW BEST FRIEND, SPINEL IS HERE!! *laughing rhythmically*
(Steven, dejected and refusing to acknowledge Spinel's attempts to cheer him up, begins to sing "Who We Are")
Steven	♫ Here we are in the future,
Here we are in the future and it's wrong!
Just a second ago, we were singing this song
And now, they're gone, because of her
Happily ever after, there we were... ♫

(Steven slumps against the wall and looks at the "wefie" he took earlier with Amethyst, Pearl and Garnet in sadness. Noticing Steven's distress, Bismuth quickly joins in the song to inspire him.)
Bismuth	♫ When has it ever been easy?
Hasn't it always been hard to be us?
When you go against the grain,
There's always somebody around you can't trust... ♫

(Bismuth walks up to Steven and stares at Spinel in distrust, who reacts obliviously by looking for the "someone" they cannot trust.)
Bismuth	'♫ That's why we've got to have each other,
While we'll figure this out, we must!
Because we, are the Crystal Gems!
And we never give up,
We never give up on our friends! ♫

(Bismuth lifts Steven up to his feet, and huddles around Peridot and Lapis, bringing her friends closer together.)
Bismuth	♫ As long as one of us is standing to brandish the star,
We'll find a way
To save the day,
That's who we are! ♫

(Bismuth points at the star on Steven's shirt and poses proudly with Peridot and Lapis. Still uninspired, Steven continues to mope.)
Steven	♫ Here we are in the future,
Here we are in the future and it's wrong!
Look at them, they're not even singing along! ♫

(Steven gestures towards Ruby and Sapphire, as the former continues to stand on guard to protect the latter.)
Steven	♫ If I could've just stopped right there, we'd be
Totally fine,
Totally us,
Totally me...! ♫

(Steven gazes down at the warp pad in the Little Homeworld square and keels over in despair. Bismuth walks over as she continues to inspire him.)
Bismuth	♫ Even if it takes a thousand years to get them back, we will!
They may not know who they are, but we do! ♫

(Bismuth leads Steven and company to a lift and the group descends down to the square.)
Bismuth	♫ Believe me, Steven, I've known them longer,
I've seen them get through worse and come back stronger,
That's why I believe in them,
And I believe in you! ♫

(Bismuth runs up to a mixer at the square and proceeds to dump molten lava in a star-shaped mold surrounding the warp pad.)
Bismuth	♫ Because we, are the Crystal Gems!
And we never give up,
No, we never give up on our friends! ♫

(Steven watches in awe as the lava fills the mold, reigniting his spirit once more.)
Bismuth	♫ As long as one of is standing to brandish the star, ♫
Bismuth & Peridot	♫ We'll find a way... ♫
Bismuth & Lapis	♫ To save the day, ♫
Bismuth	♫ That's who we are! ♫
Steven	Right! Okay, let's put our heads together. There's gotta be some way to make them remember.
Spinel	What if it's like a puzzle?
Steven	Huh?
Spinel	If we give 'em all the pieces, eventually, they'll get the picture!
Steven	Spinel, you might be onto something. If every experience they lost is a-a piece of who they are, we just have to give them back all the pieces; one experience at a time!
Lapis	Are you serious?
Peridot	That could take forever!
Steven	Exactly, so let's get started!
Steven, Bismuth, Peridot & Lapis	♫ We'll find a way
To save the day,
That's who we are! ♫

(Steven, Bismuth, Lapis, and Peridot dramatically pose on the warp pad as they conclude their song... before being joined by Spinel, who over-dramatically repeats Steven's opening lines from the song.)
Spinel	♫ Here we are in the future, yeah!
Here we are in the future and it's wrooong! ♫

Steven	Whoa, Spinel, it's okay. We're done.
[Time-Skip]
(Ruby is seen marching around Sapphire, keeping on guard of the latter.)
Ruby	Hup, hup, hup, hup. *pauses* Mh-hmm. *marches again* Hup, hup, hup, hup, hup, hup, hup.
(Nearby, Steven is pacing around, contemplating, while Bismuth, Peridot, Lapis, and Spinel are all gathered and listening to him.)
Steven	So, when Ruby and Sapphire first became Garnet, Ruby rushed in to save Sapphire from danger, and bam! They fused. So, maybe we've gotta create some sort of dangerous situation.
Lapis	Well, what do we have that's deadly and dangerous laying around?
Peridot	I think we could dig something up!
(Peridot chuckles as she runs towards a nearby dumpster, rummaging through the various items inside.)
Peridot	Danger, danger, danger. What have we got? Hmm. No. *gasps* Aha!
(Steven looks in surprise as Peridot pulls out a large, circular buzzsaw.)
Steven	A giant pizza cutter??
Peridot	That is one of its functions, yes.
Steven	I can't threaten them with this.
Peridot	Hmm... Here!
(Peridot presses a button on the handle, turning the buzzsaw on, to Steven's surprise)
Peridot	Now, it's much more threatening. Off you go now! *pushes Steven away*
Spinel	*waving to Steven* Good luck!
(Steven walks over, a nervous look on his face with the buzzsaw, with Ruby still marching around Sapphire.)
Ruby	Hup, hup, hup, hup, hup, hup, hup. Hup, hup, hup, hup. *turns and sees Steven approaching* Hmm? Halt! I cannot allow you to approach my Sapphire with such a threatening device.
Steven	That's too bad, 'cause I'm gonna... get you! *holds the buzzsaw up high*
Bismuth	*watching with Peridot and Lapis* Will this work?
(Spinel pops in and giggles.)
Ruby	Permission to dispatch the curly-haired one, my Sapphire?
Sapphire	No need. I predict he won't be able to follow through.
Steven	She's right! Ugh, I can't. *turns off the buzzsaw and drops it on the ground* Even if we are just pretending. *walks away*
Ruby	*surprised* My Sapphire, you were right! What do you predict will happen next?
Sapphire	Well, the Spinel will pick up that device out of curiosity.
(Spinel walks over to the buzzsaw, looking at it curiously, and picks it up.)
Spinel	Hmm...
Sapphire	Hijinks will ensue.
Bismuth	Maybe we should try...
Steven	*notices Spinel* Wait! Spinel. No, no, no, no! Don't touch that thing!
(Spinel presses the button on the handle and activates the buzzsaw, causing her to vibrate violently. She begins yelling and stumbling around, attempting to hold the buzzsaw down, as she crashes towards an unseen structure off-screen.)
Bismuth	Hey, we just built that!
(Spinel loses control of the buzzsaw, as it begins rolling and cutting on the ground, when her still holding onto it. Spinel screams as she rolls off-screen, with another crash being heard. She continues screaming as the buzzsaw makes its way towards the group, with Ruby shielding Sapphire.)
Peridot	Whoa, here she comes!
(Bismuth grabs Peridot while Lapis and Steven dive out of the way, as Spinel speeds through on the saw, slicing the dumpster in half.)
Steven	Spinel!
(Steven tackles Spinel off the buzzsaw. The group watches in horror as the buzzsaw continues to run and slices its way up the center tower, cutting through the wooden planks and scaffolding.)
Bismuth	My scaffolding! MY PRECIOUS SCAFFOLDING!
Ruby	Wow! What happens next!?
Sapphire	In just a moment, the scaffolding will start falling all around you.
Ruby	What?
(As predicted, the scaffolding begins to fall all around Ruby, and she dodges the falling debris.)
Ruby	Wow! You're amazing!
Sapphire	*blushes* Mhm. Next, the Peridot will hold back some of the falling debris. Three large barrels will fall. The Bismuth will catch two of them.
(Steven turns around to see Peridot holding back some of the falling scaffolding with her ferrokinesis.)
Peridot	I got this, Bis!
Bismuth	*runs over* Nice work, Perido- Ho-oh, shucks! Ah, shoot!
(Three barrels falls off the scaffolding, Bismuth manages to catch two of them, but the third one rolls away.)
Bismuth	Oh nooo-ho! THE HEAVEN AND EARTH BEETLES ARE OUT FOR THEIR AFTERNOON CONSTITUTIONAL!
(As seen, the Heaven and Earth Beetle are on their constitutional, when the third barrel rolls towards them.)
Sapphire	The Lapis will rush in and save them at the last second.
(Lapis flies and dives down quickly, scooping up the Heaven and Earth Beetles with her hands, just as the barrel is about to run them over, and Lapis crash-lands onto the ground and de-summons her waterwings.)
Lapis	Whew... You guys okay?
(Both the Heaven and Earth Beetle give Lapis a thumbs-up. The debris stops falling, but a noticeable chunk of the scaffolding has fallen off.)
Steven	Whoa.
Spinel	Is it... over?
Sapphire	*panicked* The saw! The saw will continue to cut!
(The saw continues to cut up the tower, making its way to a crane hanging onto an a giant anvil.)
Sapphire	The anvil will fall.
(The saw cuts into the handle of the crane, lodging into it.)
Sapphire	And you- *looks up at Ruby* You will be shattered!
(The handle of the crane snaps apart, and the anvil begins to fall above Ruby.)
Ruby	Huh? *looks up* AAAHH! Huh?
(Steven throws his shield over Ruby in time, blocking the anvil from falling on her. However, he begins to struggle as his power falters, and the shield begins to crack.)
Sapphire	The curly-haired one's power is fading. Ruby, I'm sorry! I told you you wouldn't last the day.
Ruby	Well, I'm glad fate allowed me to meet... you.
(Steven's shield shatters and Ruby smiles contently, accepting her fate.)
Steven	NO!!
(In the split second, Sapphire dives in and pushes Ruby out of the way, surprising her. The two look into each other in the eyes and begin to glow. As the two fuse together, Garnet begins to sing "Isn't It Love?".)
Garnet	♫ Suddenly hot, I'm-
Suddenly cool, I'm-
Suddenly a genius, I'm-
Suddenly a fool, I'm-
Suddenly fact but I feel-
Stranger than fiction; I'm new -
But I'm suddenly back;
I'm a walking contradiction! ♫

(Within the fusion realm, Ruby and Sapphire, both in shape and size of Garnet, stare at each other curiously.)
Garnet	♫ Doesn't this have a name?
La-da-da-da-da~
Doesn't this have a name?
Doesn't this have a name? ♫

(Ruby and Sapphire begin treading through the fusion realm, mirroring each other's movements while still staring at each other.)
Garnet	♫ And isn't it, isn't it, isn't it love?
Isn't it, isn't it, isn't it love? ♫

(Ruby and Sapphire overlap their hands together, as they begin fusing as one.)
Garnet	♫ And isn't it, isn't it, isn't it love?
Isn't it,
Isn't it,
Isn't it love? ♫

(More of Ruby's and Sapphire's overlap each other, as they both fuse back into Garnet, taking the form when she first appeared.)
Garnet	Huh.
(Garnet examines her new body, and everyone gasps in surprise.)
Spinel	*whispering* Ooohh...
Steven	Garnet! Garnet! You're back! Oof!
(Steven runs forth to give Garnet a hug, who quickly backs away in awkwardness, and he falls face-first onto the ground.)
Steven	*gets up* Thank goodness it's you.
Garnet	W-W-What's going on!?
Steven	Everyone's memories are wiped, and my powers are all messed up. We need your help! What should we do, Garnet?
(Steven steps forth towards Garnet as he explains the situation, as she continues to back away in unease.)
Garnet	I'm sorry, but... Do you know me?
Spinel	*pops in* Good question.
Steven	*disappointed* Her memories aren't back. I guess fusion was only the first piece.
(Just then, a car horn is heard, and everyone turns to see Greg's van driving in, while Lion lies atop it as the still-Rejuvenated Pearl gets out from the driver's seat, holding a small red carpet and step-stool. She sets them down at the back door of the van, summons a small trumpet and plays a small fanfare.)
Pearl	Attention, everyone. "Um Greg Universe" has arrived.
(Pearl bows as she opens the door, and Greg rushes out.)
Greg	Steven! Oh! Have you seen Amethyst?
Steven	What?! I told you to watch her!
Greg	She must have wandered off while I was wrestling my laundry out of Pearl's hands.
(Squeaking noises are then heard. Greg and Steven turn to see Pearl wiping the hubcaps of the van.)
Greg	Pearl! You don't have to do that. *runs over* I own a car wash!
Steven	*turns to Bismuth* I need to go find Amethyst. Can you watch Garnet?
Bismuth	Yeah, sure. But it looks like she's doing a pretty good job watching herself.
(Garnet is seen examining her own body and exploring her environment.)
Steven	Thanks!
(Steven starts running off, but Spinel grabs his hand.)
Spinel	Don't forget your best friend, Spinel!
Steven	Oh, right. Spinel, you stay here with the others, and I'll be... right back.
(Steven lets go of Spinel's hand, who instantly reacts in a fit of anger.)
Spinel	NO!!!!
Steven	*flinches in shock* O-Okay. Let's go together?
(Spinel's anger quickly subsides, returning her back to her gleeful personality.)
Spinel	Yay!
(Steven, riding on Lion's back with Spinel, begins warping between various locations around Beach City to look for Amethyst. They first warp to the Beach Citywalk Fries.)
Steven	Amethyst!
(The group warps to Beach City Funland next.)
Steven	Amethyst?
(Steven, Spinel and Lion then ride on The Appalachian, with Spinel shouting in glee while Steven still crying out for Amethyst.
Steven	Amethyst!
(The group warps inside of the Big Donut next.)
Steven	Amethyst!
(Seeing Amethyst is not here, Lion jumps back into his portal. Steven appears back out shortly again, next to a surprised Bill Dewey at the counter.
Steven	Wait, can I get a couple to go?
(Steven holds up a donut as the group stroll through a neighborhood.)
Steven	Amethyst! I've got tasty donuts! Come and get 'em! ...Worth a try. Where can she be? Huh?
(Crashing noises are heard. Steven looks over and sees Vidalia's garage.)
Steven	Amethyst?
(Steven, Spinel, and Lion walk over and peek through the curtains.)
Spinel	What is this place?
Steven	I-It's an art studio. Amethyst used to come here all the time.
(Steven looks at the various paintings of Amethyst inside, when one of them stares at Steven.)
Steven	Aah!
Amethyst	Aah!
(The painting reveals to be Amethyst, as she shapeshifts back to herself.)
Steven	*gasps* Amethyst, thank goodness you're okay.
Amethyst	Thank goodness you're okay.
Steven	*sighs, but smiles* I'm very not okay, but I've got a plan. I'm gonna get us all back piece by piece. I just have to figure out your pieces. These paintings. Do you remember being painted?
Amethyst	Being painted?
Steven	*makes finger-guns* Pew, pew! Do you remember our handshake?
Amethyst	*shapeshifts into Steven* Our handshake?
Steven	Singing and dancing, that's gotta be a piece. *turns on a light* Do you remember singing and dancing with me?
(Amethyst still has a curious look on her face. Steven then begins to sing "No Matter What".)
Steven	♫ In the light of the day,
In the dark of the night,
When you're rarin' to go,
When you're tired from the fight,
When you're losing your mind,
Let me give you a thought,
I'm gonna be right by your side no matter what! ♫

(Steven begins tap-dancing as Amethyst shapeshifts back to herself. Steven extends his hand towards Amethyst, which she accepts, and he leads her out of the garage.)
Steven	♫ In the dark of the night, ♫
Amethyst	♫ In the dark of the night, ♫
Steven	♫ In the light of the day, ♫
Amethyst	♫ In the light of the day, ♫
Steven	♫ When you're risin' to shine, ♫
Amethyst	♫ When you're risin' to shine, ♫
Steven	♫ When you're hittin' the hay, ♫
Amethyst	♫ When you're hittin' the hay, ♫
Steven	♫ I'll be hangin' around, ♫
Amethyst	♫ I'll be hangin' around, ♫
Steven	♫ If you like it or not, ♫
Amethyst	♫ If you like it or not, ♫
Steven	♫ I'm gonna be- ♫
Steven & Amethyst	♫ Right by your side no matter what! ♫
(Steven begins dancing outside of the garage, which Amethyst mirrors his every movements and words of the song. He then brings her, and Spinel, to Beach Citywalk Fries, when he teaches her to eat, which Amethyst finds enjoyment in eating again.)
Steven	♫ No matter what, ♫
Amethyst	♫ No matter what, ♫
Steven	♫ No matter what, ♫
Amethyst	♫ No matter what ♫
Steven	♫ No matter what, ♫
Steven & Amethyst	♫ No matter what,
No matter what, ♫

Amethyst	♫ No matter what! ♫
Steven	♫ Oh, I'm gonna be, ♫
Amethyst	♫ Oh, I'm gonna be, ♫
Steven	♫ Right by your side, ♫
Amethyst	♫ Right by your side, ♫
Steven	♫ I'm gonna be- ♫
Steven & Amethyst	♫ Right by your side no matter what! ♫
(Steven brings Amethyst to Funland Arcade to play skeeball, unsuccessfully. They then decide to cheat by sitting atop the machine and throwing the balls directly into the slots, winning rows of tickets to Spinel's amazement. However, an unamused Mr. Smiley spots them and the trio runs out of the arcade before he can catch them. Outside, Amethyst runs into Ronaldo and shapeshifts into him. Ronaldo tries to unlock his phone to snap a photo, but Amethyst vanishes along with Steven, and he keels to the ground in frustration. The trio then catches a train in the countryside.)
Amethyst	♫ In the dark of the night,
In the light of the day,
When you're risin' to shine,
When you're hittin' the hay, ♫

Steven	♫ Just remember this song ♫
Amethyst	How's it go, I forgot? *chuckles with Steven*
Steven	♫ I'm gonna be- ♫
Steven & Amethyst	♫ Right by your side no matter what! ♫
(Amethyst begins to sing Steven's song on her own. She then dives into a stack of hay in the train cabin, followed by Steven, and Spinel.)
Steven	♫ Through whoever you've been, ♫
Amethyst	♫ Through whoever you've been, ♫
Steven	♫ Through whoever you'll be, ♫
Amethyst	♫ Through whoever you'll be, ♫
Steven	♫ Through whatever you'll lose, ♫
Amethyst	♫ Through whatever you'll lose, ♫
Steven	♫ You will always have me, ♫
Amethyst	♫ You will always have me, ♫
Steven	♫ At the end of your road, ♫
Amethyst	♫ At the end of your road, ♫
Steven	♫ I'll be holding you taut, ♫
Amethyst	♫ I'll be holding you taut, ♫
Steven	♫ I'm gonna be- ♫
Steven & Amethyst	♫ Right by your side no matter what! ♫
(Steven brings Amethyst to the Prime Kindergarten and shows her the hole where she emerged from. Slowly remembering her origins, Amethyst and Steven, and Spinel, catch the train back and gaze at the countryside.)
Steven & Amethyst	♫ Be right by your side,
Be right by your side,
Be right by your side no matter what! ♫

(As the song concludes, Steven brings Amethyst to the top of a hill, and they both gaze out to the sea at the sunset.)
Amethyst	*makes a finger-gun* Pew!
Steven	*surprised, and makes finger-guns in return* Pew, pew...?
(Amethyst, surprised by her own actions, looks at her finger-gun, and she begins doing the secret handshake reflexively with Steven.)
Steven & Amethyst	One, two, three, hup!
Steven	Amethyst! *hugs Amethyst tightly*
Amethyst	Whoa-
(Amethyst begins to glow and floats out of Steven's arms. She then cycles between various of her past forms, until she sticks to one, returning back to her current self. After reforming and regaining her memories, Amethyst falls onto the ground from the air.)
Amethyst	Ohh... What happened?
Steven	Amethyst, it worked! You're back! *embraces the short purple woman, who is now much shorter than him*
(Steven picks Amethyst up and twirls her around in joy. They both laugh and embrace each other. Spinel comes in too, and hugs the two happily. Amethyst notices her.
Amethyst	*jumps away* YOU! Wha- W-What are you doing here?!
Steven	So, l-let me explain-
Amethyst	Get away from him, you monster! Huh...?
(Amethyst grabs Steven with her whip and pulls him away from Spinel, as she stands ready to fight her, when she notices Spinel has somehow vanished.)
Spinel	A monster?
(Amethyst and Steven turn around and find Spinel behind them, chuckling as she looks at the horizon for the "monster".)
Spinel	Where is it? No, I don't see it.
Amethyst	Aah! *jumps back* You're it!
Spinel	... Ooh! Ready or not, here I come! Boop!
(Spinel flips over to Amethyst and pats her lightly on the head, before running away, giggling, and pausing into the distance.)
Spinel	Oh! I forgot to say "You're it!" *stretches her hand over to pat Amethyst's shoulder* Okay, tag! You're it! *runs away giggling again*
Amethyst	*turns to Steven, confused* What the heck is this about?!
Steven	She doesn't remember attacking us. She doesn't even remember that thing. *gestures to the Injector*
Amethyst	What the...!
(Steven and Amethyst gasp in shock, noticing the clouds and area around Spinel's Injector have worsen. The two look on in horror, when Spinel appears behind them again.)
Spinel	Hmm, you guys not know how to play tag?
[Trans. Int. Beach City Streets]
(Various Beach City citizens are gathered on the streets, looking on with concerns at the Injector, which is still draining more of the pink fluid into the Earth. Steven, Amethyst and Spinel then arrive and run towards Mayor Nanefua.)
Mayor Nanefua	Steven, what is going on here?
Steven	I'm not sure, but I'll find out. Let's open up the shelters; we might need to evacuate.
[Trans. Lighthouse Hill]
(Steven, Amethyst, and Spinel begin running up the hill, where the plant life on the hill is slowly dying, and the earth deterioration slowly spreads. They then finds Lapis, Peridot and Bismuth on the hill, surveying the Injector.)
Steven	Lapis, Bismuth, Peridot! *panting heavily*
Amethyst	What's the damage?
Peridot	Amethyst, get away from me. *looks away and tries to shun Amethyst away* I can't stand to see you all vacant and bereft of personality.
Amethyst	Yo, I'm back, you dip.
Peridot	Oh! Well, you're just in time for the end of the world! This is no ordinary Injector. Whatever it's leaking into the ground is toxic. Let's get a scan going and see what we're dealing with.
(Many of Peridot's robonoids are seen scanning the Injector. Bismuth walks in, holding a shovel of soil sample and Peridot bubbles the soil sample. She then places the sample into a microwave, presses the "Popcorn" button, and an analysis paper prints out on the side.)
Peridot	*reading the paper* Just as I thought.
(Peridot holds out her tablet and snaps a photo of the Injector, translating it into a schematic of the machine and its mechanisms.)
Peridot	Bio-poison, pure and uncut. *transfer the schematic to a bigger monitor* As of this moment, the ampule has drained 15.4% of its contents, meaning the poison is releasing at a destruction rate of 5 cubic meters per hour, giving us, hmm... 41 hours until the destruction of all organic life on Earth.
Steven	"All organic life"?
Peridot	Yeah, like all the animals, the plants, the insects. You know... People.
Steven	Oh no... This is what Spinel meant: "Your human half won't stand a chance against my Injector." She- She brought this thing here to kill me, and now- now it's gonna kill everything else on Earth, too?! I've gotta do something! *runs towards the Injector*
Bismuth	No, Steven, wait!
Peridot	Steven! Stop!
Steven	Super Steven strength!!
(Steven begins to lift up the Injector by its drill, straining while slowly pulling it out of the ground.)
Bismuth	Steven!
Amethyst	Careful!
Peridot	What is that clod THINKING?!?!
Spinel	Yeah! Lift with your legs!
(Steven begins to struggle while lifting as his gem power falters, causing him to lose grip the Injector and dropping it back into the ground. The resulting tremor from the impact causes everyone to stumble off balance, and some of the poison to splash out, spilling a drop onto Steven's arm. Steven groans in pain, as he sees the poison has burned through his jacket sleeve, leaving noticeable scars on his arm. The ground then splits open underneath Steven, revealing a stream of poison inside. He nearly falls inside, but Spinel rescues him by grabbing onto him and reeling him over like a fishing rod.)
Spinel	*whistling cheerfully* Well, look what I reeled in!
(The other Gems run up to Steven in concerns.)
Peridot	Steven!
Amethyst	Are you okay?
Steven	My organic jacket... *looks at his blinking gem* I can't do anything with my powers like this. Bismuth, Lapis, can't you lift that thing? Peridot, what about your metal powers?
Lapis	You think we didn't try that?
Peridot	*holding up her tablet* Disturbing the injector accelerates the poison's rate of release. Also, it might explode. We have to find a way to move it, without touching it, before it's too late.
Steven	Spinel! She activated it, so she must be able to deactivate it. But, she doesn't even remember what it is, let alone how to control it...
(Steven looks on in dejection at Spinel, who is simply standing there and goofily waving her hand.)
Bismuth	Then you gotta change her back.
Steven	No way! She's cute and harmless now, but if we bring her back, she'll kill us all!
Peridot	You're going to die anyway, if you don't get her to deactivate that thing.
Amethyst	She's right, Steven. You got me back. Whatever you did for me, just do it for her.
Steven	That's different; I know you. I don't know anything about Spinel. None of us had even heard of her before! Except... Pearl! Pearl knew her!
[Trans. Ext. U-Stor]
(It is the late afternoon, Steven, Amethyst and Spinel heads over to Greg's storage unit, where they talk to Pearl while Greg is making musical equipment onto his van.)
Pearl	I'm afraid I can't help. I'm currently in the service of my Um Greg Universe preparing for tonight's concert, showcasing a promising ensemble in the "rockinroll" genre.
Amethyst	Pfft...! *snickers at Pearl's antics*
Greg	You're evacuating people to the warehouse? *walks out of the storage unit, talking on the phone* I'll- I'll cancel the rock show. No? You're right. Sadie Killer always draws a crowd. You got it, Mayor. I'll drop the cover charge and, heck, 30% off merch! *hangs up*
Steven	Dad!
Greg	Steven, you found Amethyst!
Amethyst	*acts like a robot* Who is Amethyst?
Greg	Oh no. She's even worse.
Amethyst	Nah, I'm just goofin'.
Greg	*relieved, but exasperated* Too soon, Amethyst!
(A crashing sound is then heard in the storage unit. Everyone turn to seeing Spinel squatting beside Garnet, who had fallen and tangled into a pile of cables.)
Greg	Garnet, are you okay?
Garnet	Did you want the red cable? Or the blue cable?
Greg	It doesn't matter! They're the same! *sees Pearl storing a guitar into her gem* Pearl, what are you doing?! We need those for the show!
Steven	Who cares about the rock show!? We have to stop Spinel's Injector, or everyone on Earth is going to die! To stop it, we need Spinel back, and to do that, we need Pearl back, and to do that, we need her missing pieces. Pearl and Mom rebelled together, so she's gotta rebel with you. We've gotta stage some big, dramatic event; something to jog her memory, like- like-
Amethyst	*jumps in and interrupts* Like a rock show!
Steven	Like a rock show!
Greg	Like a rock show?
Steven & Amethyst	YES!
[Trans. Ext. Abandoned Warehouse]
(It is night-time. Mayor Nanefua hand pastes a sticker reading "No Cover Charge" over a poster for Sadie Killer and the Suspects, as she marks the attendees in queue.)
Nanefua	Right this way, citizens. Ticket holder or evacuee?
(The band begins to warm up, with Amethyst taking the role as their drummer.)
Sadie	Who's here for the show?!
(The audience cheers and applauses.)
Sadie	Who's here 'cause it's the end of the world?!
(The audience cheers again.)
Lars	Wait, what?!
Sadie	This first song's a special request from Steven Universe!
(Everyone cheers loudly, and Garnet and Spinel begin dancing gleefully.)
Steven	*whispering to Greg* This has gotta bring Pearl's memories back. It's all about quitting a crummy service job.
(Sadie's band begins to play the tune to "Disobedient".)
Sadie	Thank you, thank you, thank you! Thank you for gracing me, with your presence!
♫ Good afternoon, sir!
What can I do, sir?
Just say the word, sir,
Anything for you, sir!
Your friends all say, sir,
"You don't deserve her!"
I disagree, sir,
I live to serve, sir! ♫

(Sadie points at Pearl, who is obediently standing still and facing Greg. Greg tries to engage Pearl towards the performance, but she keeps staring at him, to Greg's dismay.)
Sadie & Amethyst	♫ I think about all the wasted time I spent,
I wanna be, disobedient!
I shoot awake wondering where my summers went,
I wanna be
disobedient,
Disobedient, disobedient! ♫

(Garnet and Spinel dances together ecstatically to the music. Steven looks over to Pearl, who continues to stare at a disappointed Greg.)
Sadie	♫ I've been good, sir,
So very, very good for what?
And I've given you
Every single thing I got
It's feeling strange, man,
This whole arrangement
Is gonna end with me- ♫

Sadie & Amethyst	♫-Totally deranged!
When I think about all the wasted time I spent,
I wanna be
Disobedient!
I shoot awake wondering where my summers went,
I wanna be
Disobedient,
Disobedient, disobedient! ♫

(Steven grows increasingly more worried as Greg tries again to engage her, to no avail. Amethyst then beckons Steven over.)
Steven	One sec! *slides over to Amethyst* I-It's not enough.
Amethyst	Maybe we need to hit her where it hurts.
Steven	What?!
Amethyst	You know, her original boss? The love of her life? The reason she rebelled in the first place!
Steven	Mom. She's gotta remember Mom. But- *looks over to Greg*
Greg	*shrugs* If that's what it takes...
(Steven gives Amethyst the nod and she takes the microphone. Everyone watches in surprise as Amethyst shapeshifts into Rose Quartz.)
Amethyst	♫ I wanna be
Disobedient!
I wanna be
Disobedient,
Disobedient, disobedient,
Disobedient... ♫

(Amethyst hops down from the stage and attempts to look at Pearl in her eyes, but she continues to fix her focus on Greg. Amethyst looks in disappointment, and the audience cheers as the song comes to an end.)
Steven	How could that not work? What are we missing?
(Greg begins to clap for the band, but stops in discomfort.)
Pearl	Don't worry! I can clap for you! *claps quickly*
Greg	*exasperated* AH! What will make you stop serving me!?
Pearl	As long as you exist, I will serve you!
(Amethyst shapeshifts back to normal, and she and Steven turn to look at each other.)
Steven & Amethyst	"As long as you exist."
Steven	That's the final piece: Mom disappeared! *rushes towards Greg* Dad, I've got an idea. *whispers into Greg's ear*
Greg	*surprised* Are you sure? Aren't your powers messed up?
Steven	I can at least try!
Greg	But what about me? I've never-
Steven	Come on, Dad!- Let's Duet.
(Steven and Greg then take the stage, prepping their guitars for a performance.)
Steven	Come on, powers. Work with me here. *exhales slowly*
(Steven and Greg at each other and they begin playing their duet. As the stage effects flare to life, the two approach each other and stand back-to-back, shredding on their guitars and looking at each other. Both of them then begin to glow, followed by a huge cloud of smoke, as the audience cheers on.)
Pearl	*nervously* UM GREG?!
Spinel	*nervously* STEVEN?!
(As the smoke clears, an unfamiliar, four-armed man, bearing a long mane of hair, a wild pompadour, and a double-necked guitar emerges from the mist.)
Steg	It's a big, old universe out there. And when you're gettin' crushed under the weight of them stars... *throws Steven's jacket to Garnet*
Pearl	Wha- Where-
Steg	... Well, sometimes, you need that special someone to remind you that you're so much more. *winks at Pearl*
Pearl	*confused* Wha...
(The new fusion, Steg, begins strumming his guitar, sweeping Buck off his feet with the sheer energy of his strumming, as he starts to perform "Independent Together")
Steg	♫ Nothing's holding you back now
No one can push you around
What do you wanna do?

Pearl	Whoa!
Steg	♫ You're the master of you, ♫
Pearl	Ahh!
Steg	♫ And isn't the thought enough to lift you off of the ground? ♫
(As Steg sings, Pearl frantically looks around for Greg, until she finds herself tapping her foot to Steg's music. Steg's gem power then activates, enveloping a starstruck Pearl in a pink aura, and they both levitate off of the ground. Steg grabs Pearl's hand, twirls her around and throws her high into the sky.)
Pearl	♫ Nothing is holding me back now
No one can push me around
What do I wanna be?
I'm the master of me
And isn't the thought enough to lift me off of the ground? ♫

(Pearl slowly rediscovers her independence as she sings Steg's song. Amethyst then joins the two onstage, and Steg begins levitating all three of them into the sky.)
Steg	♫ We could be independent together!
Independent together, we can fly!
Independent together,
Independent together!
Independent together, you and I! ♫

(Spinel and Garnet watch in awe as Steg, Amethyst and Pearl fly into the sky. A starstruck Pearl quickly regains her memories, as she begins reforming in a colorful display, cycling between the forms she took while under Rose's service, until she reforms back to her current self.)
Steg	♫ High above an endless sea,
No one brought us here but me
Every step and every choice,
It's my fault, it's my thought, it's my words, it's my voice! ♫

(Celebrating Pearl's return, Amethyst and Pearl begins dancing together in the sky. They both dive down from the sky, fusing together before landing on the stage. Opal appears as she pulls Pearl's bass from her gem and plays it together with Steg.)
Opal	♫ Independent together,
Independent together, if we try! ♫

(Lion invites Garnet to hop on his back, and they levitate into the sky too, as a dejected Spinel watches from below.)
Steg & Opal	♫ Independent together,
Independent together!
Independent together, you and I!
Independent together,
Independent together, we can fly! ♫

(Steg starts to strain and sweat profusely, as Steven's gem begins to falter again.)
Steg & Opal	♫ Independent together,
Independent together!
Independent together, you and I!
Independent together, you and I!... ♫

(Steg slowly begins to descend due his power fading, but Opal helps to throw him higher into the sky for a finale. Steg then looks down in distress at Spinel's Injector, with more catastrophic damage to the ground around it, before descending back on the stage. The audience cheers loudly as Steg unfuses back into Steven and Greg.)
Greg	You did it! ...Steven?
(Collapsed on the ground and ringing in his ears, an immensely-exhausted Steven looks at Spinel, as she runs away in tears, feeling rejected.)
Steven	Wait... Spinel!
(Opal descends from the sky and unfuses back into Pearl and Amethyst as well. They the notices Steven keeling on the ground and Amethyst gasps in shock.)
Pearl	Steven, are you okay!?
Steven	D-Don't worry about me, it's Spinel. We need her to remember how to stop her injector. Ugh! *collapses into Greg's hands* Pearl, what do you know about her?
Pearl	Spinel? She was Pink Diamond's little playmate. They used to spend ages together in Pink's garden-
Steven	Garden?!
Pearl	That's where they used to play!
Amethyst	So, what's her problem with us?
Pearl	I don't know. I haven't seen her in 6,000 years. Something must have happened to her since then.
Steven	Then that's what I need to find out!
(Garnet and Lion descend back from the sky too.)
Greg	Whoa, kiddo, are you sure you don't need a break?
Amethyst	It looks like that fusion took everything out of you.
Steven	I gotta do what I can with the little I have left. I'm going after Spinel.
(Steven grabs his jacket from Garnet and hops on Lion's back, before riding off.)
Greg	Steven, wait!
(Lion bursts through the warehouse door, where Mayor Nanefua is seen outside.)
Mayor Nanefua	Oh, Steven, some stragglers are missing from the shelters!
Steven	Did you see a pink Gem run by?
(Nanefua points in the direction of the Beach House.)
Steven	Thanks.
(Steven and Lion ride off to the house, striding across the tainted waters, while Steven clutches his gem in pain and exhaustion.)
Steven	Just this morning, everything was perfect. Why did everything have to change?! I want my happily ever after back!
(As Steven and Lion arrive at the front of the Beach House, a glow shines from within Steven's conservatory.)
Steven	That might be her. *gets off of Lion and speaks to him* Go find Connie, we need all hands on deck.
(Roaring a portal into existence, Lion rushes in and warps away.)
[Trans. Int. Steven's Conservatory]
(Steven slowly peeks into his conservatory from the doorway.)
Steven	Spinel? What's wrong?
(He finds Spinel keeling on the warp pad inside. He approaches her, and she turns to face Steven, sobbing frantically. Steven flinches in surprise at the depressed Gem.)
Spinel	*crying* I just... started getting these feelings flooding back to me...!
Steven	That's- That's good! I need you to remember. If you don't, something really bad will happen to me and my home. Please, think! Do you remember the garden?
Spinel	The garden?
Steven	Is anything coming back to you?
(Remembering her past, Spinel briefly smiles, looking back on her happy memories... before degrading into a destroyed frown.)
Spinel	NO!
(In anguish, Spinel slams her fists into the warp pad, activating it, and it warps her and Steven away.)
Steven	Spinel, where are we going!?
Spinel	Back... to where I never left...
[Trans. Int. Pink Diamond's Garden]
(The duo arrives on a warp pad in the middle of a desolate garden. Spinel looks around at her surroundings, gasps in epiphany and runs off the warp pad.)
Steven	Spinel! *follows after Spinel*
Spinel	This was our garden! A special world, built just for Pink and I.
(Spinel begins flashing back to her happy memories, with Spinel playing hide-and-seek with Pink Diamond, as she surprised her with funny faces, making Pink laugh.)
Spinel	On Homeworld, Pink was so lonely and sad, but not here! Here, we would play for hours. Every day was so much fun.
(Spinel juggled some bubbles, making Pink Diamond laugh and clap, but she then sighs a bit.)
Spinel	At least... That's what I thought.
Steven	Did something happen?
Spinel	Pink wanted a colony, more than anything.
(Another flashback plays, with Pink standing by the Diamond communicator, talking to Yellow and Blue Diamond, while Spinel listened nearby.)
Spinel	One day, her wish came true! Blue and Yellow gave Pink her very own planet - Earth! I was so excited! A brand new place to play!
(Spinel happily bounced around an excited Pink Diamond, who is becoming more irritated by Spinel's antics.)
Steven	So, why didn't you go with her?
(As Spinel tried to follow Pink Diamond to the warp pad, Pink halted her to stay back, but she continued following her. Spinel then stopped Pink by holding onto her hand. Pink sighed, as Spinel begins to sing "Drift Away", voicing Pink Diamond's words.)
Spinel (Pink)	♫ "Here in the garden, let's play a game,
I'll show you how it's done;
Here in the garden, stand very still" ♫

(Pink kneeled down to Spinel and booped her nose, instructing her to stand very still.)
Spinel	♫ "This'll be so much fun!"
And then she smiled, that's what I'm after,
The smile in her eyes, the sound of her laughter
Happy to listen, happy to play,
Happily watching her dri-i-ift away ♫

(After Spinel complied, Pink warped away, leaving her obliviously behind.)
Spinel	♫ Happily waiting, all on my own,
Under the endless sky
Counting the seconds, standing alone,
As thousands of years go by ♫

(Several years went by, Spinel continued to stand still as the vegetation around her grew wildly.)
Spinel	♫ Happily wondering, night after night,
Is this how it works? Am I doing it right?
Happy to listen, happy to stay,
Happily watching her dri-i-ift away ♫

(As Spinel sings, she slowly recalls her painful memories, and her expression slowly becomes more bitter.)
Spinel	♫ You keep on turning pages
For people who don't care,
People who don't care about you;
And still it takes you ages
To see that no one's there,
See that no one's there,
See that no one's there,
Everyone's gone on without you ♫

(Spinel leads Steven through the deserted garden, showing him the dead vegatation around as she sings about her pain.)
Spinel	♫ Finally something!
Finally news
About how the story ends:
She doesn't exist now,
Survived by her son,
And all of her brand new friends! ♫

(After 6,000 years, a frayed Spinel, still standing still, watched Steven's broadcast from earlier on the Diamond communicator in the garden, and came to a horrific realization.)
Spinel	♫ Isn't that lovely?
Isn't that cool?
And isn't that cruel?
And aren't I a fool, to have,
Happily listened,
Happy to stay,
Happily watching her dri-i-ift, ♫

(Breaking away from the stems grew wildly around her legs, a devastated Spinel ran up to the communicator, just as the broadcast ended. Heartbroken and crushed, Spinel collapsed onto her knees and broke down crying. With all her memories back, the flashback ends as Spinel begins glow and reform.)
Spinel	♫ Dri-i-ift,
Dri-i-i-i-i-i-ift,
Away? ♫

(Spinel's gem turns around into an upside-down heart, and she reforms back to her current self. Back with her hateful demeanor, Spinel glares back at Steven.)
Steven	S-Spinel, you've- you've got your memories back! I can't believe Mom did that to you. *pauses* Actually, I can totally believe it. You're not the only one she hurt-
(Steven approaches Spinel to try to console herself, but reactively pushes him away, pinning him to the ground.)
Spinel	*growls* Yeah, you must know all about her life without me! RUB IT IN, WHY DON'T YA?! *starts to punch Steven*
Steven	No! *tries to summon his shield unsuccessfully* It's not like that! You deserve a better friend.
(Spinel roars in anger and swings her fist at the column holding the Diamond communicator instead, destroying it. She then sighs in defeat, kneeling down sadly to the ground.)
Steven	Spinel, come back and save the Earth with me. You can start over there, make new friends.
(Steven offers his hand to Spinel, who looks away in distress, and he begins to sing "Found".)
Steven	♫ Someday, somewhere, somehow,
You'll love again,
You just need to find someone ♫

(Steven walks up to Spinel and sits down beside her, who continues to look away. Steven offers his hand to Spinel again. Spinel reluctantly accepts his hand and joins in the song)
Steven & Spinel	♫ Someday, somewhere, somehow,
You'll/I'll love again,
You/I just need to find someone ♫

(Steven stands Spinel up and begins to lead her out of the garden.)
Steven & Spinel	♫ Someone who treats you/me better,
Someone who wants you/me around,
Someday, somewhere, somehow,
You're/I'm gonna feel found... ♫

(Steven and Spinel step on the warp pad and warp back to his conservatory.)
Spinel	♫ Today, right here, right now,
I already feel found... ♫

(Concluding Steven's song, Spinel breaks out into tears of joy and follows him into his house.)
[Trans. Int. Beach House]
(Inside the house, Pearl and Amethyst anxiously waits for Steven, while Garnet picks up and examines a spork curiously.)
Amethyst	If he finds her, he'll come back here, right?
Steven	*walking down the stairs* Guys! Guess who's back?! *turns to Spinel in his room* Come on down!
Spinel	Won't they all be... not exactly incredibly thrilled to see me like this? *points at her face*
Steven	We just have to talk to them. *holds Spinel's hands and leads her downstairs* Ta-da!
Pearl	W-W-W-W-W-WHAT?!?!
(Pearl quickly summons her spear in reflex, while Amethyst summons her whip.)
Garnet	Oh, Spinel! Did you change your hair?
Steven	*holds out his hands* Whoa, whoa, whoa, whoa! Spinel got her memories back, but she's not gonna hurt us. Everything's chill.
(Lion's portal suddenly opens and he leaps out of it, with Connie riding on his back, wearing a space camp uniform and brandishing her sword. Lion slides across the floor and Connie jumps off him, landing next to Pearl.)
Connie	Hah! I'm here! Where's the fight?! *swings her sword around*
Steven	Don't fight! Everything's chill!
(Toilet flushing is then heard, and Greg exits Steven's bathroom. Amethyst, Pearl, and Connie then all automatically point their weapons at him, glaring angrily at him.)
Greg	*frightened* AH! Alright, alright! I'll wash my hands! *goes back inside the bathroom*
Steven	Whew... Okay. Spinel, can I ask you a favor?
Spinel	Are you kidding? Anything!
[Trans. Lighthouse Hill]
(Back on the hill, Spinel's Injector continues to pump more poison into the Earth, as a lightning storm brews overhead. Peridot, Bismuth, and Lapis are still observing the situation on the hill. Peridot zooms in on the Injector schematic with her tablet, which shows them a dire development.
Lapis	That sounds bad.
Bismuth	That looks bad.
Peridot	That is bad! We're hitting critical mass.
Steven	Then I guess we're just in time.
(Peridot, Bismuth, and Lapis flinch in shock, as the rest of the Gems approach from behind.)
Peridot	Steven! What's the status on Spinel!?
Steven	She's back. And she's here to help.
(Spinel approaches her Injector, turns her finger into a horn and blows into it. The Injector begins to retract its legs and drill, removing itself from the Earth's crust. Everyone cheers at this development.)
Connie	Okay. Can someone fill me in?
Steven	*sighs in relief* Thanks, Spinel. *shakes Spinel's hand*
Spinel	Aww, gee. What are friends for?
Steven	Okay. We've almost cleaned up this mess. Now, all we need are Garnet's memories and my powers, and we can all get back to living happily ever after. What could work for Garnet? Something about fusion... Something about love...
Spinel	What about me...?
Steven	Huh?
Spinel	Is that all you needed me for? To turn off my Injector?
Steven	No! Well... Sort of, but-
Spinel	Well, what now? I-I-I did what you wanted. That's it?
Steven	Well, yeah. We can just... forget this whole thing ever happened.
Spinel	How you gonna forget with me around? I'm the source of all your problems. Don't pretend you want me here. What's your plan for me, huh? You gonna put me somewhere? You gonna leave me, somewhere? You gonna leave me alone?!
Steven	Spinel...
(Before Steven can console Spinel, she smacks him away, knocking him back. The Rejuvenator slides out of his pocket. Upon seeing the axe-like weapon, Amethyst and Pearl jump away from the weapon, except for Garnet, who looks at it curiously.)
Garnet	Oh, what's this? *proceeds to pick up the weapon*
Steven	G-Garnet, do-don't touch that!
(Steven rushes towards Garnet and snatches the Rejuvenator away from Garnet, just as she turns it on.)
Spinel	(hesitantly) Why do you have that?
Steven	*looks the weapon anxiously* I-I was just carrying it. I-I didn't have anywhere else to put it.
Spinel	"We can just forget this ever happened"? You mean, I can just forget this ever happened! *begins laughing hysterically* Wow! What a plan! I turn off the Injector, and then the moment my back is turned, Bam! Presto! Change-o! PROBLEM SOLVED! Well, think again. You're not getting rid of me that easy...!
(Spinel turns her finger into a horn and blows into it, commanding the Injector once more as it hovers on the Crystal Gems.)
Peridot	RUN FOR IT!
(Everyone runs away as the Injector reactivates and plunges itself into the Earth's crust, scattering the ground around it. Steven is knocked onto the ground, coughing from the dust cloud caused, as Spinel stands menacingly before him.)
Spinel	I'm not letting you get one over on me, Steven Universe!
Steven	I wasn't going to wipe your memories, Spinel.
Spinel	You expect me to believe that you want me like this?!
Garnet	*peeks over* Steven? Why are you fighting? Aren't we all friends?
Spinel	Looks like we've still got an audience. How about a front-row seat?
(Spinel pulls Garnet towards her, coiling her arms around her body as she holds her hostage.)
Steven	Garnet!
Spinel	You know, this is pretty twisted, but I'm a little flattered that you liked the old me: innocent, loving, stupid. If that's your thing, why don't you leave her like this?
Steven	Get away from her. *holds up the Rejuvenator*
Spinel	Oh, you're so protective of your real friends, and you're so careless with your fake ones!
Steven	Stop it!!
Spinel	Then stop me! You wanna attack me. Just admit it. Or better yet, just TRY it!
Steven	NO!!
Spinel	WHY NOT?!?!
Steven	BECAUSE, THAT'S NOT THE TRUTH!!!
(Steven breaks Rejuvenator in two over his knee.)
Garnet	The truth...
(Garnet suddenly breaks free from a surprised Spinel's grasp with an unprecedented break free.)
Garnet	I've known hardships and confusion, but love can live through it all, if you face the truth together.
(As her memories begin to flood back, Garnet begins to finally reform, engulfed in a glowing white light.)
Steven	Her final piece!
Spinel	No... Stop! Don't you dare!
(Spinel tries to hurl a boulder to crush Garnet, to no avail, as the fusion simply breaks it apart in one punch. Garnet stands proudly with her fist in the air, as she begins to sing "True Kinda Love".)
Garnet	♫ Oh, when a difficult day goes by,
Keeping it together is hard, but that's why
You've got to try,
You've got to try ♫

(Garnet cycles through her several previous form and reforms as her current self. Ruby and Sapphire's rings blaze onto her fingers and she summons her visor over her eyes.
Garnet	♫ And when there's a thundering storm outside,
Underneath the covers you huddle and hide
Open your eyes
Open your eyes ♫

(Garnet helps Steven up to his feet, as she continues to sing. She gazes towards Spinel, and she momentarily loses her will to fight. Amethyst and Pearl then peek over to check in on the situation.)
Garnet	♫ It's the true, it's the true
It's the true kinda love
It's the true, it's the true
It's the true kinda love ♫

(Happy that Garnet has returned, Steven, Amethyst and Pearl reunite with her and the four embrace each other in a hug. Filled with rage again, Spinel lunges forward, and Garnet blocks her with her gauntlets.)
Garnet	♫ Stuck in the middle of fear and shame,
Everybody's looking for someone to blame
Like it's a game
Like it's a game... ♫

(Spinel tries to attack the Gems, who evade her attacks. Garnet, holding onto Pearl's legs, who is holding onto Amethyst's whip, swings Amethyst towards Spinel and kicks her away in this combined attack.)
Garnet	♫ And now I am better than "win-or-lose"
There's a new direction that I like to choose
It's called the truth
It's called the truth... ♫

(Spinel lands on one of the Injector's legs and propels towards Steven like a spring to hurt him. Garnet catches her legs in time, and Amethyst and Pearl grab onto her arms. The Gems stretch Spinel and flings her towards the Injector, hitting her head on it. Undefeated, a grinning Spinel bounces to the top of the Injector, turns her hands into a massive horn and blows into it. The Injector instantly drains all the poison inside, causing fissures all around and flooding Beach City in the poison. All the Beach City citizens begin to flee, as the poison splashes everywhere.)
Garnet	We have to stop Spinel.
Steven	Wait! You guys have your powers, you've gotta go save everybody. I'll deal with Spinel.
Amethyst	She'll crush you, dude!
Pearl	You can't fight her.
Steven	But I can still talk to her. Please, hurry.
Garnet	Right! *places a reassuring hand on Amethyst's and Pearl's shoulders* Move out!
(All the Gems begin to hustle into Beach City to save the citizens, leaving Steven behind. Using what is left of his Gem power, Steven leaps up towards the top of the Injector. His power falters mid-flight, however, and he falls, clinging desperately to the glass wall of the Injector. At that moment, Steven sees the three Crystal Gems fusing into Alexandrite, as they begin saving the citizens. Greg is seen escorting citizens into his van, when the poison splashes onto his left arm, turning it almost necrotic. Despite, he quickly drives his van and the citizens to safety. Connie, Lion and Mayor Nanefua are also seen rescuing citizens, when a geyser of poison flings a car in their direction, which Connie skillfully cleaves in half with her sword. All the citizens are brought to Little Homeworld, where they are out of harm's way. Inspired by his friends' effort, Steven begins to climb the Injector, as he continues Garnet's song.)
Steven	♫ Hey, you, show me that solvable problem
We can get through this
I'll do the hardest part with you ♫

Garnet (v.o.)	♫ It's the true, it's the true-
It's the true kinda love
It's the true, it's the true-
It's the true kinda love
♫

(Everyone watches Steven with concerns as he struggles to make his way to the top of the Injector.)
Garnet (v.o.)	♫ It's the true, it's the true-
It's the true kinda love
It's the true, it's the true-
It's the true kinda love
♫

(With much preservation, Steven finally reaches the top of the Injector and he collapses in exhaustion. As the song concludes, he spots Spinel standing up ahead, facing away from him. He quickly picks himself up and approaches her.)
Steven	*weakly* Spinel, come on. We can talk this out.
Spinel	I don't wanna play anymore...
Steven	*sighs* Spinel... this ISN'T A GAME!
(Steven suddenly receives a punch in the face by Spinel.)
Steven	... Huh?!
(Spinel delivers a second stronger, wound-up punch into Steven's face, sending him flying towards the edge of the Injector and giving him a nosebleed. She then extends her arm to grab Steven's arm and dangle him over the edge. She looks at Steven, an expression of pure hatred on her face)
Spinel	You know, I came here to take my anger out on a bunch of strangers, but now that I know you, I wanna kill you even MORE.
(Spinel begins letting go of Steven one finger at a time. The latter panics, looking down at the city and at Spinel, before crying out in anguish.)
Steven	I DON'T GET IT!!!
Spinel	Huh?
Steven	Why aren't my powers back? Aren't I reliving every horrible thing that's ever happened to me? A Gem I barely know is trying to kill me. I'm paying for stuff my Mom did that had nothing to do with me. I'm struggling with my powers! The world's about to end!! What piece could I be missing?! This is the story of my life!!!
(In reaction, Spinel lets out an almost mocking cackle.)
Spinel	Wow! I knew that I was gonna set you back, but this is how you started? The legend, Steven Universe? *laughs* You gotta be kidding me. How did a powerless loser like you become savior of the GALAXY?!?!
(Steven's eyes widen.)
Steven	I changed. That's the final piece. All those struggles, I learned from them, and I grew. Oh my gosh. It's not just my Gem powers I've forgotten. All of this "happily ever after" stuff has made me forget the first power I ever had: the power to CHANGE!
(Steven's gem begins to glow as his powers slowly return. Unimpressed, Spinel drops Steven to fall to his demise. However, Steven's powers finally reactivate and he stops in midair. A triumphant Steven, now with his regained powers, begins cycling through his different shield abilities, causing in a shockwave that sends a shocked Spinel back. Floating back onto atop the Injector, Steven wipes the blood from his nose and begins to sing "Change".)
Steven	♫ I can make a promise
I can make a plan
I can make a difference
I can take a stand
I can make an effort
If I only understand
That I,
I can make a change! ♫

(Standing before Spinel, Steven begins engaging her in battle, blocking her attacks. An enraged Spinel then turns herself into a spinning top and attacks Steven in all direction, which he blocks successfully, before leaping up into the air.)
Steven	Listen to me, Spinel! I understand! *floats down and dispels his shield* After everything you've been through, you must be in a lot of pain!
Spinel	No. NO! *hits herself on the head* You don't understand! You can't change the way I feel!
(Reacting to Spinel's approach, Steven materializes two miniature bubbles around his fists like boxing gloves, which he uses to parry Spinel's wild blows.)
Steven	That's right! Only you can!
(Annoyed, Spinel enlarges her hands to grab, spin, and toss Steven up into the sky. She then bounces herself like a spring after him high up in the skies, as Steven continues singing.)
Steven	♫ You can make it different
You can make it right
You can make it better
We don't have to fight!
You can make an effort,
Starting with tonight!
'Cuz you,
You can make a change... ♫

(Unmoved by Steven's song, the wayward Gem grits her teeth, and enlarges her hand, coiling her arm around into a giant, spring-mounted fist.)
Spinel	JUST CAN IT, WON'T YA?!
(Cocking her fist, Spinel aims her fist down at Steven.)
Spinel	You can't just make everything better by SINGING SOME... STUPID SONG!!!!
(Spinel punches down at a surprised Steven, sending him careening down onto the Injector's top, with the impact strong enough to shake the earth and damage the machine. As Spinel descends from the sky, she sees Steven unharmed from the blow, bearing his shield inside a crater from the impact.)
Spinel	All that stuff's easy for you to say! When you change, you change for the better. When I change, I CHANGE FOR THE WORSE!!!
(Spinel lunges at Steven, who easily defends her blows with his shield.)
Spinel	I used to be just not good enough! Just! Not! Good enough for Pink! But NOW- NOW... I'M NOT GOOD AT ALL!!!!!!
(Growing her fists to a ridiculous size, Spinel slams them down on Steven's shield, further cracking the Injector's surface. Spinel then starts laughing frantically, as she collapses to her knees and breaks down.
Spinel	*crying* That's funny, r-right? A-At least you found me entertaining. You actually... liked me, didn't you? What am I doing? Why do I wanna hurt you so bad? I'm supposed to be a friend. I just wanna be a friend.
(Steven, in a show of sympathy, slowly dispels his shield, letting down his defenses to talk with a startled Spinel.)
Steven	Spinel...
(Before Steven can comfort a sobbing Spinel, the Injector begins to explode from the damage it had sustained. Only capable of looking at each other, Steven and Spinel are engulfed in an earth-shattering explosion, which everyone watches in shock and horror and begin panicking from the safety of Little Homeworld.)
Greg	Steven?!?!
Garnet, Amethyst & Pearl	STEVEN!!!
(Debris falls everywhere from the skies. As the smoke clouds clear, Steven and Spinel descend, surviving the explosion inside Steven's bubble. Steven floats down into the crater from the explosion, sets Spinel down on a rock, and looks around at his surroundings.
Steven	Whoa.
Spinel	Oh, no, no, no, no, no. What did I do? I've wrecked everything!
Steven	Well, that's one way to get rid of your Injector.
Spinel	But what about the poison? What about the planet? What about your "happily ever after"?
Steven	There's no such thing as happily ever after. I'll always have more work to do.
(Feeling guilty, Spinel looks down at the ground. Steven smiles as he offers her his hand, which she accepts, and he helps Spinel up on her feet.)
Spinel	I'm sorry...
Connie	Steven?
Steven	Connie?
(Connie approaches, riding on Lion from the distance, searching for Steven.)
Connie	Steven! Where are you?
Steven	Connie! *to Spinel briefly* I'll be right back. Really.
(Steven runs off to greet Connie, as she slides into the crater.)
Connie	We saw that huge explosion and- *hugs Steven*
Steven	I-I'm okay. I'm okay. What about you?
Connie	*sighs* I'm fine.
(The pair exchange a brief blush, before Lion arrives to greet Steven, who gives him a happy nuzzle. Meanwhile, a dejected, teary-eyed Spinel watches from afar, longing for another friendship and carrying immense guilt.)
Steven	Lion! *laughs with Connie* Were you worried about me?
Connie	Sure seems that way.
(Spinel hears a horn sounding off nearby, and turns her attention towards the source of the soundas Greg arrives in his van with the Crystal Gems. They drive down into the crater, before popping out almost theatrically.)
Garnet, Amethyst, Pearl & Greg	Steven!
Steven	Guys! Dad!
(The group rejoice with a group hug.)
Steven	Is everyone from Beach City okay?
Garnet	Everyone is safe, and accounted for.
(Pearl gives Steven a thumbs-up, while Amethyst and Connie show him peace signs. Steven returns a relieved look... before looking at Greg's blackened arm with concern.)
Steven	Dad, your arm...
Greg	Hey, I just got a little careless and-
Steven	Don't worry. You'll be good as new in no time. *grabs Greg's hand*
Greg	But, Steven, you don't have your-
(With a single kiss to the back of his hand, Steven successfully heals Greg's hand, restoring it to its healthy flesh color.)
Greg	Steven! You got your powers back!
Amethyst	It'd be cool if you could do that to the whole planet, heh.
Steven	Amethyst...! That's not a bad idea!
Amethyst	Dude! I was joking!
(Steven walks over to a nearby patch of land and kisses the soil, causing grass and flowers to grow on the barren dirt.)
Connie	Oh my gosh, that actually worked?
Steven	Hmmm. *looks at the destruction all around* Looks like I got a lotta kissin' to do.
(Rolling up his sleeves, Steven begins to kiss random patches of dirt, restoring the plant life back onto it.)
Pearl	Should we lend him a hand?
Garnet	We should probably get him some water. *looks at Connie* Staying hydrated is very important when it comes to smooching.
Steven	Huh?
(Steven notices Spinel walking away and runs over to her.)
Steven	Spinel, wait! I really was going to come back.
Spinel	I know...
Steven	Then, w-where are you going?
Spinel	I've got work to do. Friendship isn't going to be easy for me. I'm gonna have to work at it. You make me wanna try, but... *sighs deeply* I've already messed up bad with you. I wish I could just start from scratch with somebody.
Steven	Spinel, I- Huh?
(A howling wind suddenly rushes in, as a familiar ship hovers over, casting a large shadow over the crater.)
Spinel	*shocked* WHAAAAA?!
Blue Diamond	Knock knock, Steven!
Yellow Diamond	It's us!
White Diamond	The Diamonds? Are we interrupting something?
Steven	Uh... Yeah!
(Spinel retreats behind a large chunk of debris, as the three Diamonds descend from the ship.)
Steven	Yellow, Blue, White? What are y'all doing here?
Yellow Diamond	Well, Steven, we were all talking and- *sniffs* I'm sorry, but what is that smell?
Steven	I don't smell anything.
Yellow Diamond	Ugh, that's 'cause you live here.
Blue Diamond	Anyway, we were talking, and we decided-
White Diamond	This is taking too long! *shoves aside Yellow and Blue* Steven! We've come to Earth to live with youuu! *points her massive finger at Steven*
Steven	What?! My house isn't big enough for all of us!
White Diamond	Oh well, I'm sure we could make do with um...
(White looks out at Beach City's ruined state: land split open, pink poison streaming, houses ruined, and Injector debris scattered, while a car alarm rings in the distance.)
White Diamond	Has your planet always been this... *waves her arm* Destroyed?
Blue Diamond	Not that we're judging.
White Diamond	Goodness, no! Because judging anything based on appearance is wrong!
(Steven pauses and glares at White, unfazed and less than amused at her patronizing attempt to resonate with him.)
Steven	Yeah, I don't know about this.
White Diamond	But, Steven, it's been soooooo boring since you've left! I guess we'll just waaaait for you to viiisit us wheneeeever youuuuu'rre reeeaaaaaaaaadyyyyyy......
(White slowly stomps back to the ship, feigning sadness in order to guilt Steven into giving her attention. The ground shakes with each colossal footstep.)
Steven	Aww, come on. Don't be like that. I-It's just, I'm right in the middle of saying goodbye to- *suddenly has an idea* Do you guys remember Spinel?
White Diamond	*walks back* I'm sorry, who?
(Steven turns to Spinel, still hiding behind a piece of rubble.)
Steven	Spinel, you've met the Diamonds before, right?
Spinel	Y-Yeah, but- *covers her face* They've never seen me like this.
(Spinel steps out and joins Steven before the Diamonds.)
Steven	Blue, Yellow, White! This is Spinel!
Spinel	My Diamon...nnnnnnnnnnnnds...
(Spinel zig-zags her arms to make three Diamond salutes, which the three Diamonds react with stunned surprise. White gasps audibly and holds her hands to her face.)
Yellow Diamond	Pink's little playmate?
Blue Diamond	One of Pink's lost treasures.
Steven	Mom left her on a floating garden in space.
Blue Diamond	You poor thing.
Spinel	Hah, it was only 6,000 years. I could do that standing on my head!
(Fittingly enough, Spinel does her handstand and claps her squeaky shoes together. In response, Yellow bursts out in laughter.)
Yellow Diamond	UuAAAahahahahahahahahahahaha!! Only 6,000 years! Hahahaha! It's true! That's no-o-thing! Ahahahahahahaha, and that goofy handstand... *wipes off a tear of joy* Ahahahahaha... I like this Gem.
Blue Diamond	She's adorable, and so much like Pink.
White Diamond	Spinel, I- *clears her throat* Steven, since the Earth is so disgusting, we'll just take Spinel back to Homeworld with us, and you can stay here.
Steven	Really?!
Spinel	Huuuh!?
(The Diamonds begin to sing a a reprise of "Let Us Adore You".)
The Diamonds	♫ Come live with us in the palace,
There's a room waiting for you ♫

Yellow Diamond	♫ Come on... ♫
Blue Diamond	♫ Come on... ♫
White Diamond	♫ Come on... ♫
The Diamonds	♫ Just let us adore you...
Come live with us in the palace,
There's a room waiting for you ♫

Yellow Diamond	♫ Come on... ♫
Blue Diamond	♫ Come on... ♫
White Diamond	♫ Come on... ♫
The Diamonds	♫ Just let us adore you... ♫
(As the Diamonds sing, a concerned Steven turns and shrugs at Spinel, while the others watch on in surprise and disbelief.)
The Diamonds	♫ Yes, we know that you're not her, but you were hers
You know what it meant to love her,
And you remind us so much of her ♫

Steven	You think you could handle them? They're not exactly easy to get along with.
(Spinel's longing and solemn expression slowly changes to a warm smile, as she starts bouncing on the stop and joins the Diamonds in their song, using her harmony from "Found" as counterpoint.)
Spinel	♫ Today, right here, right now
I'll love again;
I've already found someone... ♫

The Diamonds	♫ Just let us adore you... ♫
Spinel	♫ Today, right here, right now
I'll love again;
I've already found someone... ♫

The Diamonds (overlapping)	(Together) ♫ Come live with us in the palace,
There's a room waiting for you ♫
(Yellow) ♫ Come on... ♫
(Blue) ♫ Come on... ♫
(White) ♫ Come on... ♫
(Together) ♫ Just let us adore you... ♫

(Finding newfound love, Spinel slowly steps forth towards the Diamonds. She makes a heart shape with her arms and jumps onto Yellow's hand, after the latter lowers it in front of her.)
Spinel	♫ Yes, I know that you're not her, and I was hers,
But you know what it meant to love her,
And you remind me so much of her ♫

(On the Diamonds' hands, Spinel perform different tricks to their amusement, while happily singing.)
The Diamonds	♫ Today, right here, right now, ♫
Spinel & the Diamonds	♫ We'll/I'll love again;
We've/I've already found someone ♫

(As the Diamonds soon begin to ascend back to their ship, a contented Spinel gives Steven a peace sign, as the four retreat to the ship. Levitating into the air, the ship makes a heart gesture with its hands, before warping away into the skies. Finally relieved everything has come to this resolution, Steven begins to sing "the latest song "Finale"".)
Steven	♫ Here we are in the future,
Here we are in the future and it's bright!
Nothing to fear
No one to fight
I can't believe we've come so far
Happily ever after, there we were... ♫

Crystal Gems & Greg	♫ And here we are! ♫
(Rejoicing together, Steven, Greg and the Crystal Gems warp to Little Homeworld, where a massive of humans and Gems await them. Bismuth, Peridot and Lapis are seen tending to the human refugees, before noticing Steven joining him physically and in song.)
Steven	♫ So happily we'll face
Whatever comes our way,
And after, we might do it all again! ♫

Bismuth	♫ Here we are in the future! ♫
Peridot & Lapis	♫ Here we are in the future! ♫
(Mayor Nanefua approaches Steven, and he greets her triumphantly, as he is also joined by Lars and Sadie.)
Steven	♫ I'll be ready every day
For as long as I can say,
I-I-I-I can make a change! ♫

Lars, Sadie, & Mayor Nanefua	♫ Here we are in the future! ♫
Steven	♫ I-I-I-I can make a change! ♫
Greg	♫ Here we are in the future! ♫
Garnet, Amethyst, & Pearl	♫ Here we are in the future! ♫
Steven	♫ I-I-I-I can make a change! ♫
Crystal Gems & Greg	♫ Here we are in the future! ♫
(The Crystal Gems group up all together and sing along with Steven. Time quickly passes on, as ruined Beach City gradually gets repaired, by the combined efforts of the humans and the Gems.)
Everyone	♫ Here we are in the future! (Here we are in the future!)
Here we are in the future! (Here we are in the future!)
Here we are in the future! (Here we are in the future!)
Here we are in the future! ♫

(Night eventually falls, a barbecue is held on the beach with some townies and Gems attending, backed by a performance by Sadie's band.)
Garnet, Amethyst, Pearl & Connie	♫ Here we are!
Here we are!
Come so far! (Come so far!)
And it's bright, And it's bright,
And it's bright, And it's bright,
And it's bright, And it's bright!

(The scene pans up to the starry night sky, before shifting the scene to a brightly-lit broadway stage, Steven, Garnet, Amethyst, Pearl, and Connie, all wearing suits and peacock feathers.)
Steven	♫ I'll be ready every day
For as long as I can say,
Here I am in the future with my friends!

Garnet, Amethyst, Pearl & Connie	♫ I can make a change! ♫
Steven	♫ That's why... ♫
(Greg then walks onstage, wearing a suit too, and hands Steven a bouquet of rose.)
Steven	Happily ever after never... ends ♫
(The group claps all together as a tearful Steven culminates the performance, and the curtains close. The "Steven Universe: The Movie" title card appears and the credits begin to roll.)
[END]`);
