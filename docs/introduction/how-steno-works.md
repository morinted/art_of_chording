---
exampleSentence: Hello world, today I'm learning how a stenographer could break down a sentence in order to capture human speech more quickly than by typing. Unfortunately, it kind of looks like gibberish. It might seem unmanageable, but after learning a theory it's actually quite intuitive.
exampleChords: Hell lo worl , toed iim lerng hou ai snog fer ko braik doun ai stens nord to kap tuur huum speech mor kwik li than bi type g . un fornlt , t kiind f luuks laik jib rish . t mite seem un mang bl , bu af lerng a thoir ts twail kwite intuve .
---

# How Steno Works

I'm a programmer, and coworkers often come up to my desk not knowing that I use a stenography machine to program and type at my computer. As I start typing in front of them, they'll be looking at my screen. They see words and symbols bursting out, all at once, at speeds beyond most people's typing ability. Then, confused, they look down at my hands to see the reduced layout that I'm typing on. A steno machine only needs twenty-three keys, while normal keyboards have about a hundred. I wish I could capture everyone's face the first time they see a steno machine in action—that expression of shock and bewilderment.

Stenography is one of those things that's hard to understand just by watching, and even if I tell you the basics, it's a skill that takes months or years to learn. Just as someone can show you how hitting keys on a piano makes sounds, it will take a while before you're able to play music or compose pieces on your own.

Today I'm going to break down, as best I can, the biggest differences between a keyboard and a stenography machine and try to demonstrate why steno can be so much faster.

## In a Nutshell

A typist hits individual keys to express individual letters as fast as possible. A stenographer makes chords of multiple keys at a slower rate, but those chords can express whole words and phrases. The result is about three times as fast as typing.

## Key Concepts

Keyboards are very simple to use. You just learn where the letters are, shortcuts to change case and type symbols, and then getting faster is a matter of hand positioning and practice.

### Chords

Steno is a little more involved. The compressed layout itself is used to form chords, which loosely correspond to syllables. Using a steno machine feels a lot like playing a piano, and mentally the stenographer often maps between "steno speak" and "the English language."

Where I say the word *chord*, you can imagine "syllable."

For example, a word like "catapult" is expressed by two chords on the steno machine, "cat" and "pult." There are abbreviations (called *briefs*) for very common words, so single-key chords like "W" and "T" map to "with" and "it", respectively. There are also briefs for very long words, so the chord for "particular" is a chord that sounds like "plar"; "government" is chorded by "gofmt".

### Prefixes, suffixes, and root words

Compound words can be strung together thanks to a phonetic system of prefixes and suffixes. "Uncomfortable" could be written as "un" (prefix) + "comfort" (root word) + "able" (suffix). "Antidisestablishmentarianism" could be composed from the prefixes "anti" and "dis"; the root word "establish"; and the suffixes "ment", "arian", and "ism".

Finally, if a word isn't composable from prefixes, suffixes, and root words and the stenographer doesn't have a way to write it yet, they can fall back to letter-by-letter spelling, which is called *fingerspelling*.

### Automatic capitalization and spacing

Another way that stenographers save time is by not needing to capitalize and space words themselves. For the most part the steno software knows that if you end a sentence with a period, the next word will be capitalized. It knows that Los Angeles and Tom always have capital letters. There are chords that let you override this behavior, which I would compare to "Caps Lock" on a keyboard. For example, there is a chord that forces the next word to come out lowercase, regardless of whether it's a proper noun or not.

### Typos

When someone makes a typo in stenography, it's not a misplaced letter, it's a misplaced sound. Instead of making a typo like "gronud" (swapping u and n in "ground"), a stenographer might accidentally write "frowned" because they used an "f" sound instead of a "g" sound.

## Example

You can play with the following example to see the same sentence typed by both a typist and a stenographer at different speeds. Further down, I explain what's going on.

<Demo-Comparison />

So let's take this paragraph and break it down like a stenographer:

> {{ $frontmatter.exampleSentence }}

> {{ $frontmatter.exampleChords }}

Notice that words and strokes don't all map one-to-one. Strokes can be as little as letters or word parts, or could map to multiple words in a phrase.

- hell lo → hello
- nord → in order

We sound things out:

- jib rish → gibberish
- stens → sentence

There are shortcuts (briefs) to get longer words:

- ko → could
- t → it
- f → of
- fornlt → fortunately

We can use prefixes and suffixes build on root words:

- type g → typing
- un fornlt → unfortunately
- un mang bl → unmanageable

Rather than typing {{ $frontmatter.exampleSentence.length }} characters, the stenographer made {{ $frontmatter.exampleChords.split(' ').length }} strokes to write this sentence. Given that a professional stenographer can stroke chords approximately 3.5 times per second, that would mean it would take around {{ Math.round($frontmatter.exampleChords.split(' ').length / 3.5) }} seconds to write those sentences. The average typist, typing 60 words per minute or 5 characters per second, would take about {{ Math.round($frontmatter.exampleSentence.length / 5) }} seconds.

Our stenographer in this scenario clocks in at {{ Math.round($frontmatter.exampleSentence.length / 5 * 60 / ($frontmatter.exampleChords.split(' ').length / 3.5)) }} words per minute. That's {{
  (
    $frontmatter.exampleSentence.length / 5 /
    ($frontmatter.exampleChords.split(' ').length / 3.5)
  ).toFixed(1)
}} times as fast!

## Summary

Steno uses chording to make use of a smaller number of keys than a keyboard to generate many, many combinations. A chord on a steno machine can be represented roughly by a syllable-like sound, but it can map to anything such as words, letters, symbols, phrases, and more.

Even though making chords on a steno machine is slower (average 3-4 chords a second) than a typist on a keyboard (average 5-10 keys a second), a stenographer gets more out of each chord and comes out on top.

A certified court reporter in the United States must be able to write 225 words per minute.

Machine stenography was originally developed in the late 1800s for taking down spoken word, but has evolved to be used as a general keyboard replacement. It is used professionally in courtrooms, and as an accessibility tool for realtime captioning and transcription. It is used in an amateur fashion by hobbyists, writers, programmers, and office workers. This book, as part of the [Open Steno Project](http://www.openstenoproject.org/), aims to bring the art of stenography—the art of speaking through your fingers, _the art of chording_—to everyone's fingers.

So [download Plover today](https://github.com/openstenoproject/plover/releases) and start reading the next page.
