# How steno works but not as easy to read

If you're here, reading this, then you've probably heard something great about stenography. Maybe you've heard about the court reporting profession, about how professional stenographers can write down every word that's said for hours at a time. Maybe you've met a captioner who essentially watches TV for a living. Maybe you've heard from someone who replaced most or all of their computer input with a steno machine, and they've told you about the ergonomics boost, the speed boost. Maybe you've seen inhuman records on competitive typing sites.

How is it possible? How can someone just "learn" something and then be twice or three times as fast as they previously were, keyboarding? Why does the average keyboardist coast somewhere in the 50-150 words per minute range, while stenographers regularly break that barrier? Why isn't stenography ubiquitous?

Today I want to illustrate, at a high level, how stenography works, and how that equals speed and ergonomics.

## Layout

<Steno-Display labels="all" stroke="-" />

The first, most obvious difference between a regular computer keyboard and the steno machine is the key layout. On the standard computer keyboard, letters and numbers are uniformly squares and layed out in a staggered layout. Counting all the special keys like the arrow keys, shift, enter, etc., you are looking at around 90 or more keys.

In contrast, the steno machine has 24 functional keys. The bar at the top counts as one modifier key, kind of like having a shift key along the entirety of your keyboard. Steno has fewer keys, but does a lot more with them by using multiple keys at once; if you hit two keys at once, the action is different then hitting each of those keys in succession.

## Homerow

On Qwerty, the standard American keyboard layout, the home row is made up of keys `asdf jkl;`. In touch-typing classes, students are taught to return to the home row in order to maintain the placement of their hands. This is why on most keyboards, the `f` and `j` keys have little nubs.

One common optimization for the traditional keyboard is rearranging the letters. Dvorak, Colemak, and other custom layouts aim to move the most common letters in English to the home row. The thought is that if your hands default to where they most likely need to be, there's less finger and hand movement, thus improved ergonomics and potentially speed.

On the steno machine, with its reduced number of keys, the home row is where over 95% of writing happens. The most movement that a finger will need to move in any direction is one key width, and only for certain fingers. In steno, the most fingers are responsible for only two keys, with exception to the right hand pinky which must deal with four keys, and the index fingers which have to deal with three. There is also the bar at the top which is used infrequently but can be used with any available finger.

The home row is actually the cracks between the keys.

## Striking keys on a keyboard

**In typing,** there are three types of keys: symbols, modifiers, and commands. Symbol keys output a symbol when you strike them. Press the `a` key, an `a` appears on the screen. Modifiers, like the "shift" key, change the behavior of the symbol keys. When holding shift, `a` becomes `A`.

Finally, command keys exist which aid with navigation of the computer. You can use delete, backspace, and the arrow keys to aid in editing a document, or page up, page down, home, and end to navigate documents.

Hitting a single key in typing is called a _keystroke_.

For the most part, typing is a very "serial" operation; meaning the keys you hit have output in the same order that you hit them. If you type `t e h` the output is, obviously, `teh`, even if you were trying to write `the`.

In order to be fast at typing speech, you need to have several skills:

- **Spelling** in order to hit the right keys in the right order for words you hear.
- **Finger speed** in order to hit the keys fast enough. Generally, the speed curve for typing is very simple: the more keys you can hit correctly in a minute, the faster you will be able to type. This is presents a problem for people who hit a wall where they are unable to write faster even after extensive training.

In short, **typing involves hitting keys sequentially in the right order.**

## Striking keys on a steno machine

**In steno,** there is really only one kind of key. It's a key that, if pressed alone, will perform an action, and if pressed with other keys, will perform a different and potentially unrelated action.

Unlike keyboarding, the difference between commands, symbols, and modifiers is not determined at the key level.

Instead, there's a level of abstraction. Any combination of a set of keys (including a single key) can be mapped to any set of actions. So in typing, you have one key for each of `t`, `h`, and `e`, and you must use all three of them (in the right order) to accomplish writing `the`. In steno, we map a single keystroke to the word `the` because it's so common in English. This is an example of one key with a single stroke mapping to three "actions" (`t`, `h`, and `e`.)

Hitting a set of keys in steno is called a _stroke_.

The steno keyboard layout actually has _an order_. If you wanted to indicate on Qwerty that you hit the `t`, `h`, and `e` keys in no particular order, you could say `the`, `teh`, `eth`, `eht`, `het`, or `hte`. In steno, we have a rule so that the order of the keys will always be the same so that when you hit `TOP` it's always read and talked about as `top` and not `pot`, `tpo`, `opt`, or anything else. **Steno order** is a critical building block in how steno works, and nothing like it exists on a regular keyboard.

**A steno stroke ends up mapping to roughly a syllable.** While many proper English syllables can be formed, sometimes they are nonsensical. For example, there can be too many consonants that don't really make sense together (`SKPATD`) or there's no vowel present (`P-L`), or it's just a single letter (`W`), but the bulk of strokes map to simple sounds that you should be able to decipher: `POT`, `MOM`, `KAT`, `SHOP`, `TRAK`, `TRUBL`. Additionally, syllables can be strung together to form more complex words. For example: `WIN/DOE` or `UN/RE/MARK/-BL`.

While there is something to be said for the difficulty of forming certain strokes with our fingers, **usually the number of keys used is less important than the number of strokes**. To hit five keys on a steno machine is usually about as easy as pressing one. This means that, for the same effort as one stroke, we can express _a lot more_ than a single letter. And that's where steno's speed comes from.

## What a steno strokes maps to

- State
  - Spacing
  - Capitalization
- Symbols
- Affix
  - Prefix
  - Suffix
- Words
- Briefs
- Phrases

## State: Capitalization and spacing

To contrast with typing, capitalization and spacing are handled automatically. As you provide words and symbols on the steno machine, the output is joined logically. The system is designed such that in standard writing, providing a stroke that maps to a sentence-ending period will output as you'd expect: attached to the last word, and causing the next word to be capitalized. There's some state involved here which you can manually override.

Let's take a quick look at how a stenographer might key in a sentence, with each slash indicating a new stroke: `let/the/cat/be/(period)/he/is/not/in/a/great/mood/(semicolon)/someone/tried/to/bathe/him/(period)/I/think/it/was/John/(period)` and the final output is `Let the cat be. He is not in a great mood; someone tried to bathe him. I think it was John.` The spacing between words and lack of spacing before punctuation is automatic. Capitalization of "let" and "he" is done automatically. "I" and "John" are always capitalized and the steno machine outputs them that way.

Of course, while this is sufficient for most writing, there are cases when you need to override the defaults. There are strokes that allow you to force a capitalization, uppercase an entire word, force the a proper name to be lower, suppress spacing, insert extra spaces, and all sorts of little modifications depending on what you need.

## Symbols

One huge advantage that stenography has over traditional typing is the range of input characters you can use.

A traditional keyboard is more or less stuck in its history: around 100 keys, and little room for customization. There are macro keyboards and tools to help search for and input emoji, but these tools aren't really consistent across operating systems.

In steno, because you need to map a stroke (or a mental "syllable") to some action, that action can be nearly anything. So, for example, the syllable `PLUS` maps to the word "plus", but we make the nonsensical syllable `PL-S` map to the symbol "+".

But we can have fun with this and make all sorts of crazy output that isn't possible with a normal keyboard:

- `SHR-G` (think shrug): `¯\_(ツ)_/¯`
- `DV-D` (think divide): `÷`
- `STOUNG` (think stick-out-tongue): 😛
- `KLI/SHE`: cliché

Effectively, stenography makes it easier to access a wider range of character sets and doesn't require you to memorize arbitrary keyboard shortcuts (like AltGr combinations on Windows) to get there. Borrowed words with accents and emoticons can be related to their meaning.

Finally, stenographers can output individual letters in order to "fingerspell" words. This is only as a fallback if for some reason the stenographer cannot write the word at hand using the normal methods.

### Affixes: Prefixes and Suffixes

Because English is a very versatile language, it is easy to string together combinations of affixes (prefixes and suffixes) with root words to get many combinations and meanings.

Additionally, there are often homophones created by the use of prefixes and suffixes that a stenographer will need to deal with, as the phonetic keyboard by default wouldn't be able to distinguish between homophones.

The stenographer does something called "**vowel bending**". Vowel bending is mentally shifting a vowel in a stroke (a syllable) to a similar vowel in order to get a similar meaning.

Take the example prefix "con" (continue, contrast, etc.) and the word "con" (meaning: a disadvange, or a convicted criminal). A stenographer might decide to write the word "con" as `KON` and then "vowel bend" the prefix as `KAUN`. It sounds the same, but the stenographer just makes a mental note to write the prefix with the "au" instead of the "o".

Homophones across words that necessitate a prefix versus a normal stroke are called **word boundary errors**. The stenographer must pay attention when they need to distinguish between:

- **contests** (`KAUN/TEST/-S`) -- challenges; a person contesting something
- **con tests** (`KON/TEST/-S`) -- a con performing a test; perhaps some tests to detect pros and cons

Prefixes and suffixes become especially important when coming up with new compound words like "nondislikings", which sounds like a collection of things that you don't dislike.

The prefixes in that example are "non" and "dis", the root word is "like", and the suffixes are "ing" and "s".

### Words

Touched upon in the affix section, one of the most common types of strokes in steno is that of **root words**.

Most words can be expressed in simple syllables:

- `TAP`: tap
- `TARP`: tarp
- `LAF`: laugh

Or by ignoring stressed syllables:

- `TURTL`: turtle
- `DLAI`: delay

And finally, there are some shortcuts to get common endings in one stroke, like "-ing" and "-tion":

- `GUMshun`: gumption
- `HURLing`: hurling
- `FAkshun`: faction

### Briefs

While all good steno theory is based in a core of knowing how to write phonetically, **briefs, short for abbreviations, are basically shortcuts**. When you use a word all the time, or it takes too long to write out stroke-by-stroke, you may want to make a brief in order to write it more quickly.

Just like a university professor will write "w" instead of "with", or like a message board poster writes "iirc" instead of "if I remember correctly", stenographers use briefs to get long or common words out with very few keys.

- `W`: with
- `-T`: the
- `N`: in
- `T-N`: continue
- `K-R`: consider
- `TR-G`: interesting
- `SFRAJ`: supercalifragilisticexpialidocious

Briefs can also be used to solve the word boundary errors above. If you write a word (like "in") with a brief, then the prefix "in-" can use the phonetic stroke.

### Phrases

Finally, as if briefs weren't fast enough, there are phrases. Phrases are often combinations of briefs or briefs of their own that output multiple words at once.

Phrases offer a huge speed boost to those willing to learn them.

Phrases that are combinations of briefs:

- `RU`: are you
  - `R`: are
  - `U`: you
- `W-T`: with the
  - `W`: with
  - `-T`: the

Phrases that are briefs of their own:

- `V-B`: have been
- `LAIJ`: ladies and gentlemen of the jury
- `FRIMT`: from time to time
- `BR-B`: be right back

## Putting it all together

Now you know about the basic building blocks that stenographers use when writing. Instead of writing letter-by-letter, they break down sentences into phrases, briefs, words, affixes, and symbols, as necessary. Let's look at some sentences and look at how a stenographer might break them down:

|                |                                                  |
| -------------- | ------------------------------------------------ |
| Text           | The quick brown fox jumps over the lazy dog.     |
| Steno          | `-T KWIK BROUN FOX JUMPS OEFR -T LAEZ DOG TP-PL` |
| Briefs         | `-T: the`, `LAEZ: lazy`                          |
| Words          | `KWIK`, `BROUN`, `FOX`, `JUMPS`, `OEFR`, `DOG`   |
| Symbols        | `TP-PL: .`                                       |
| Steno Strokes  | 10                                               |
| Typing Strokes | 44                                               |

Let's try something a little more involved:

|                |                                                                                                                                                                                                                                                                                                         |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Text           | Learn to enjoy every minute of your life. Be happy now. Don't wait for something outside of yourself to make you happy in the future. Think how really precious is the time you have to spend, whether it's at work or with your family. Every minute should be enjoyed and savored.                    |
| Steno          | `LERN TO EN JOI EFR MIN -F YOUR LAOIF TP-PL -B HAEP NOU TP-PL DOENT WAIT F-R S-G AOUDZ -F YAOURS TO MAIK U HAEP N -T FAOUCH TP-PL THI HOU R-L PRESHS S -T TAOIM U V TO SPEND KW-BG WHR T-S AT WORK OR W YOUR FAEM TP-PL EFR MIN SHOB EN JOI -D SKP SAIFRD TP-PL`                                        |
| Phrases        | `SHOB: should be`                                                                                                                                                                                                                                                                                       |
| Briefs         | `EFR: every`, `MIN: minute`, `-F: of`, `-B: be`, `HAEP: happy`, `F-R: for`, `S-G: something`, `AOUDZ: outside`, `YAOURS: yourself`, `U: you`, `N: in`, `-T: the`, `FAOUCH: future`, `THI: think`, `R-L: really`, `S: is`, `V: have`, `WHR: whether`, `T-S: it's`, `W: with`, `FAEM: family`, `SKP: and` |
| Words          | `LERN`, `TO`, `JOI`, `YOUR`, `LAOIF`, `NOU`, `DOENT`, `WAIT`, `MAIK`, `HOU`, `PRESHS`, `TAOIM`, `SPEND`, `AT`, `WORK`, `OR`, `SAIFRD`                                                                                                                                                                   |
| Prefixes       | `EN` (**en**joy)                                                                                                                                                                                                                                                                                        |
| Suffixes       | `-D` (enjoy**ed**)                                                                                                                                                                                                                                                                                      |
| Symbols        | `TP-PL: .`, `KW-BG: ,`                                                                                                                                                                                                                                                                                  |
| Steno Strokes  | 59                                                                                                                                                                                                                                                                                                      |
| Typing Strokes | 267                                                                                                                                                                                                                                                                                                     |

If our goal was to produce this quote at 200WPM, given 5 characters on average per word (so 1000CPM), the quote would need to be written in 16.02 seconds.

For the stenographer, that would mean they would need to hit, on average, **3.7 steno strokes a second**.

For the typist, that would mean they would need to hit, on average, **16.6 keystrokes per second**.

A trained stenographer usually writes in the range of 3.5 to 4.5 strokes a second. In order to speed up their writing further, they could brief the word "enjoy" and "enjoyed" into single strokes, which would bring the requirement for the stenographer down to **3.5 strokes a second**.

The abstraction that stenographers use allow them to produce text without simply brute-force speed. They can focus on briefs and phrasing to make up for difficulty in executing strokes with their hands. This makes steno harder to learn, but the payoff is greater speed with better ergonomics and minimized hand movement.

## Will I lose my ability to type?

No. Learning steno is more akin to learning an instrument and a language than learning how to touch type or anything like that. While you may trip up your fingers now and then at the beginning, your typing speed should largely be unaffected by your steno speed.

Learning steno will take months to years. There's a lot to learn, and a lot of customization you can do to cater the technology to your individual needs.

So yes, stenographers can still type if they want to. But I think it's telling that we rarely want to.
