---
exampleSentence: Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world.
exampleChords: EFR GRAET DREEM GINS W AI DREEM *ER TP-PL AULS RER KW-BG U V W-N U -T STREN KW-BG -T PAISH ENS KW-BG SKP-T PASHN TO REECH F-RT STARS TO KHAING -T WORLD TP-PL
---

# How Steno Works

I'm a programmer, and coworkers often come up to my desk not knowing that I use a stenography machine to program and type at my computer. As I start typing in front of them, they'll be looking at my screen. They see words and symbols bursting out, all at once, at speeds beyond most people's typing ability. Then, confused, they look down at my hands to see the reduced layout that I'm typing on. A steno machine only needs twenty-three keys, while normal keyboards have about a hundred. I wish I could capture everyone's face the first time they see a steno machine in action—that expression of shock and bewilderment.

When I first heard of stenography, I was amazed. Stories of court reporters keeping up with multiple speakers in a courtroom, typing at a certified speed of 225 words per minute, faster than most people talk at 180 words per minute. Was that even possible? Did their school just teach them to type more quickly? Well, not quite.

Stenography is one of those things that's hard to understand just by watching, and even if I tell you the basics, it's a skill that takes months or years to learn. Just as someone can show you how hitting keys on a piano makes sounds, it will take a while before you're able to play music or compose pieces on your own.

I'm going to break down, as best I can, the biggest differences between a keyboard and a stenography machine and try to demonstrate how steno can be so much faster.

## In a Nutshell

A typist hits **individual keys to express individual letters** as fast as possible to spell words. A stenographer makes **chords of multiple keys** at a slower rate, but those **chords can express whole words and phrases**. The result is about **three times faster** than typing.

A stenography setup consists of a steno machine and steno software running on a computer.^[Before computers existed, stenographers wrote to "paper tape" which only captured which keys were hit on the machine. After transcribing, the stenographer would have to go back and convert their "notes" into text, very much like pen shorthand. Nowadays, translation from key press to text is instant.] The machine can either be specially made for steno, or just a keyboard that supports n-key rollover (hitting all the keys at once.) The software that is most commonly used by amateurs is [Plover](https://openstenoproject.org/Plover), which listens to what you do on the steno machine and then outputs keystrokes to whatever program you're using.

## Key Concepts

Keyboards are very simple to use. You just learn where the letters are, learn shortcuts to change case, learn symbols, and then getting faster is a matter of hand positioning and practice.

### Chords

Steno is a little more involved. The compressed layout itself is used to form _chords_, which loosely correspond to _syllables_.^[The reason I keep saying "syllables, loosely" is that the text representation of a chord is often unpronounceable. For example, `N-L` for "until" has no vowel; `SDAOIN` for "design" has an unpronounceable `SD`; and the chord to backspace the previous chord is just the `*` key which can't be pronounced.] Using a steno machine feels a lot like playing a piano, and mentally the stenographer often maps between "steno speak" and "the English language."

::: tip
When I say the word _chord_, you can imagine _syllable._
:::

Take a look at the steno layout in all its glory:

<Steno-Display stroke="" labels="all" />

**The steno layout looks very different from a normal keyboard.** There are so few keys (no "N" key), repeated keys (a "T" key on each side), and vowels at the bottom. Let's look at how this weird layout can be used to type really fast.

If a stenographer wants to type "cat", they sound it out. They **press down all the following keys, in any order**:

<Steno-Display stroke="KAT" labels="all" />

Upon release, the keys are read from left-to-right (with vowels in the middle, splitting the two halves of the keyboard around the `*` key) to produce the syllable `KAT` which outputs the word "cat".

### Missing Letters

Because there are so few (and repeated!) letters on the base stenography layout, missing sounds are given by chords of other keys. For example, to type a word starting with "L", the stenographer hits the keys `HR`. See if you can guess what word this is:

<Steno-Display stroke="LAF" labels="all" />

Upon release, the keys are read from left-to-right to produce the syllable `LAF` which outputs the word "laugh".

### Spelling

Because stenography chords are roughly syllables, writing in stenography feels more like speaking than spelling.

In steno, all these words are chorded with the same right-side keys because they all end with similar sounds: ocean, fashion, motion, vision, mission.

Multisyllable words are strung together with multiple chords: `RE` plus `WARD` becomes "reward".

Spelling is less of a problem because words just get sounded out:

- `LA MA` → llama
- `FA SIL TAIT` → fascilitate
- `WENS DAI` → Wednesday
- `BA RA KU DA` → barracuda

### Briefs

There are abbreviations (called _briefs_) for very common words, so single-key chords like `W` and `U` map to "with" and "you", respectively. There are also briefs for very long words, so the chord for "particular" is a syllable that sounds like `PLAR`; "government" is `GOFMT`.

### Prefixes, suffixes, and root words

Compound words can be strung together thanks to a phonetic system of prefixes and suffixes. "Uncomfortable" could be written as "un" (prefix) + "comfort" (root word) + "able" (suffix). "Antidisestablishmentarianism" could be composed from the prefixes "anti" and "dis"; the root word "establish"; and the suffixes "ment", "arian", and "ism".

Finally, if a word isn't composable from prefixes, suffixes, and root words and the stenographer doesn't have a way to write it yet, they can fall back to letter-by-letter spelling, which is called _fingerspelling_.

### Automatic capitalization and spacing

Another way that stenographers save time is by not needing to capitalize and space apart words themselves. For the most part, the steno software knows that if you end a sentence with a period, the next word will be capitalized. It knows that "Los Angeles" and "Tom" always have capital letters. However, there are chords that let you override this behavior. For example, there is a chord that forces the next word to come out lowercase, regardless of whether it's a proper noun or not.

### Typos

When someone makes a typo in stenography, it's not a misplaced letter, it's a misplaced sound. Instead of making a typo like "gronud" (swapping u and n in "ground"), a stenographer might accidentally write "frowned" because they used an "f" sound instead of a "g" sound.

### Symbols

You might think that it's hard to input symbols if everything is sound-based. Quite the opposite is true! Stenographers can string out complex sequences of symbols, keyboard shortcuts, movement keys, and emoji through chords. This is a topic for another time, but rest assured that symbols are not a problem for stenography.

## Example

You can play with the following example to see **a quote from Harriet Tubman written by a stenographer at different speeds.**

<Demo-Paragraph />

Notice that words and chords don't all map one-to-one.

Chords can be as little as letters or word parts as we **sound out** a word:

- `DREEM ER` → dreamer
- `PAISH ENS` → patience

There are **shortcuts (briefs)** to get longer words:

- `W` → with
- `RER` → remember

Sometimes, a single chord maps to a **phrase**:

- `SKP-T` → and the
- `F-RT` → for the

Some chords are based on their **shape** on the keyboard and have nothing to do with sounds:

- `TP-PL` → <Steno-Thumb stroke="TP-PL" /> → . (period)
- `KW-BG` → <Steno-Thumb stroke="KW-BG" /> → , (comma)
- `SKP` → <Steno-Thumb stroke="SKP" /> → and
  - This chord is on the left side of the keyboard so that it can be combined with other keys to make phrases like "and the" (see above.)

Rather than typing {{ $frontmatter.exampleSentence.length }} characters, the stenographer made {{ $frontmatter.exampleChords.split(' ').length }} chords to write this quote. Given that a professional stenographer can make chords around 3.5 times per second, that would mean it would take around **{{ Math.round($frontmatter.exampleChords.split(' ').length / 3.5) }} seconds** to write those sentences.

The average typist, typing 60 words per minute or 5 characters per second, would take about **{{ Math.round($frontmatter.exampleSentence.length / 5) }} seconds.**

Our stenographer in this scenario clocks in at **{{ Math.round($frontmatter.exampleSentence.length / 5 * 60 / ($frontmatter.exampleChords.split(' ').length / 3.5)) }} words per minute.** That's {{
  (
    $frontmatter.exampleSentence.length / 5 /
    ($frontmatter.exampleChords.split(' ').length / 3.5)
  ).toFixed(1)
}} times as fast!

## Summary

Steno uses chording to make use of a smaller number of keys than a keyboard to generate many, many combinations. A chord on a steno machine can be represented roughly by a syllable-like sound, but it can map to anything such as words, letters, symbols, phrases, and more.

Even though making chords on a steno machine is slower (average 3-4 chords a second) than a typist on a keyboard (average 5-10 keys a second), a stenographer gets more out of each chord and comes out on top.

A certified court reporter in the United States must be able to write 225 words per minute.

Machine stenography was originally developed in the late 1800s for taking down spoken word, but has evolved to be used as a general keyboard replacement. It is used professionally in courtrooms, and as an accessibility tool for realtime captioning and transcription. It is used in an amateur fashion by hobbyists, writers, programmers, and office workers. This book, as part of the [Open Steno Project](http://www.openstenoproject.org/), aims to bring the art of stenography—the art of speaking through your fingers, _The Art of Chording_—to everyone.

So [download Plover today](https://github.com/openstenoproject/plover/releases) and learn how to use it with this free textbook.
