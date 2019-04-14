# Copy Clicker

## (My attempt at building Cookie Clicker from scratch, while looking at the source code as little as possible)

###### (Also oh my gosh I'm pushing to Github again - is this real life?)

### What's going on?

I realised it's been a while since I actually coded for fun outside of work - I'm still toying with the idea of becoming a 'real' games developer (although with the recent news about Rockstar and other companies who enforce crunch time that idea is somewhat less attractive) and had been trying to force myself to do some Unity and C++ stuff, but wasn't really enjoying it and it felt like a chore. So I'm going to have a crack at this instead. It won't involve me having to learn a whole new language and multiple UIs just to get something that's barely playable, but I'll learn enough new things along the way for it to be worth doing.

### Rules

I'm setting myself some basic rules so I don't get completely sidetracked... if they start holding back the fun too much though, I'll ignore them.

#### 1) Make the game play and feel as close to Cookie Clicker as possible

Everything is there, assets, formulae for building costs, I don't need to write my own specs so I'm not going to

#### 2) Don't use the source code as a cheatsheet

Orteil himself states that a lot of the code is horrible, and after having a quick peek at it to get an idea of what I was about to get myself into I somewhat agree. I realised after a (very) cursory look that I don't know how to do a lot of the things I need to carry out this project, so will probably need to refer to the source code at some points just to get an idea of how something is possible, but if I start copying from it that ruins the whole point of doing this at all.

#### 3) No libraries/frameworks

Cookie Clicker is written in pure JavaScript, so I'm going to write my copy of it in pure JavaScript too. I could use Phaser since we use that for most of the games at Mangahigh and I more or less know my way around it, and it would be good practice for that... but I feel like there's a huge amount of stuff I don't need in there, and sometimes working without a million external libraries helps to solidify your understanding of what's really going on - there are no curtains to look behind. Most importantly, Phaser handles the update loop for me and I want the challenge of writing a decent loop myself.

#### 4) Work incrementally!

I think one of my weaknesses is I forget about the idea of having an MVP, I try and do everything at once because I often already know what the finished product is supposed to look like, feel like and be capable of. This often makes a mess. I don't want to make a mess. So small steps - I guess I'll quickly try and decide what the MVP and first few other versions should look like right now:

- MVP: There's a cookie (doesn't have to look like a cookie, could just be a button), and when you click it your cookies go up by one. Simples.
- v1: Introduce CPS - you can buy grandmas for 100 cookies each, and they give you +1 cps. No cost scaling. Not doing cursors yet because they give .1 cps and we're going in *tiny* steps!
- v2: Float CPS - Cursors have a base cps of .1 so add those in and make sure it works properly. Once this is done as many other buildings as we like can be added
- v3: Cost scaling - Buildings get more expensive as you buy them... grab the formulae (or is it the same for all of them, just with a different starting cost?) from the source code.
- v4: Sell buildings - you can sell buildings for 25% of the buy price. At this point I think we have a very basic "full" version of the game which is cool.
- v5: Cookie upgrades - Start with these first because building/kitten/mouse upgrades are going to get crazy really quick. I think these just unlock at cookies baked. This will also be the first point at which we need to add a global cps multiplier I think.
- v6: Building upgrades - if we did the above nicely then these shouldn't be too painful to add in.
- v7: Golden cookies - Maybe break this into one type at a time as well...
- v8: Achievements - Self-explanatory. Maybe don't try to add them all at once... Just the total cookies baked, cps, buildings owned? ...and golden cookies cli- ok add all the ones that apply to the features we've got already, and then each extra feature we'll add the ones for that, just like if we were releasing this, that makes sense right?  Ooh but not the misc/shadow ones yet
- v9: More achievements - add the miscellaneous and shadow achievements :) there's that one with the click listener and some other weird ones so it makes sense to separate them from the others.
- v10: I'm getting carried away with writing these now and should probably stop so these will be updated once we start approaching the end of the list.

#### 5) Don't have more than 5 Rules

Because then this will get boring really quickly


### Hey Kye, I'm still reading (I should probably be doing something else) but have no idea what you're talking about... what's Cookie Clicker?!

Cookie Clicker started out as a relatively simple game and went viral while I was in uni, so I of course nearly failed my degree because I became obsessed with it. It's an exponential growth game (of which there are honestly way too many in the world) which typically means you complete one or more simple manual actions (in this case, clicking on the big cookie) and then use your reward from those actions to purchase things which perform those actions for you (well technically they don't, they just increase your revenue passively), and from then on it's whatever you make it - you can leave it running in the background, purchasing new upgrades here and there, you can get all geeky about it and work out the optimal thing(s) to buy next to grow more quickly, you can get SUPER geeky and write scripts or tools to either do the geeky maths for you, or even perform the actual actions for you... There are also more active play elements in Cookie Clicker, like golden cookies which pop up every ~15 minutes (is it 15? anyway you can buy upgrades to make them show up more often) and give you various boosts, there are a handful of minigames within in which sap more of your time in return for cookies... there's a prestige system which lets you start again with a multiplier and currency to purchase special upgrades which, if you want to really bake a ridiculous amount of cookies, you have to figure out how to do effectively as well.

What I'm trying to say is, if you want it to be, Cookie Clicker is a simple and mindless game to kill some time or distract you from more important/stressful things in life, *or* if you want it to be, it's a game with a much deeper metagame to it which you may start to appreciate more and more as you delve deeper into the mechanics. It's also kinda quirky with all the flavour text and references to other things and I just like it.

Oh yeah, you can play it here: http://orteil.dashnet.org/cookieclicker/
(If it takes over your life... I accept no responsibility. You have been warned.)

### Hey Kye, I'm *still* reading and you're starting to annoy me, why don't you make your own game instead of copying someone else's you dirty thief?

In case you were thinking that - no, I'm not going to try and take credit for any of this - that's quite illegal and as a music grad I'm way too aware of that. I'm copying an already-existing game because it's good coding practice and takes away the need for me to spend time coming up with my own ideas for mechanics, rules, storyline etc... and if I have to make my own assets you can forget it, I'll spend 5 weeks making a simple tile and then delete it because it looks like a 5 year old made it (and not in a cute "aww he tried his best and I can see what he was going for and he has potential and will be great at this one day" kind of way). The assets, rules, formulae and everything I need to make a fully-working game that doesn't suck are freely available, I'm just going to see if I can do it in less than 13,000 lines of code like Orteil did (and if it does end up having 13k lines I'm sure as hell not going to put them all in one file).
