# Prefixes and Suffixes

In steno, we have several *affixes*—parts of words that connect to other parts:

- Prefixes: the beginning of a word, such as **re^** (e.g. redo)
- Suffixes: the end of a word, such as **^ing** (e.g. running)
- Infixes: something in the middle of two words, such as **^-to-^** (e.g. back-to-back)

This book will use the caret symbol (**^**) to indicate *where* an affix connects to a word, as made apparent in the examples above.^[In Plover's dictionary format, the caret is known as the *attach operator*. Prefixes and suffixes are saved in the dictionary using the formats `{prefix^}`, `{^suffix}`, and `{^infix^}`}.]

## Root Words

Prefixes and suffixes aren't useful on their own. They need to be attached to **root words** to be used. In English, the root word is the word that we tack prefixes and suffixes onto.

For example, "uncomfortable" is:

- Prefix "un"
- Root word "comfort"
- Suffix "able"

Using steno will require you to be aware of the lines between the root word and its prefixes and suffixes.

## Single-stroke Prefixes and Suffixes

We've already encountered prefixes and suffixes in our writing in this textbook. Many of the compound sounds are actually ways to cram prefixes and suffixes into a single stroke. For example, `ARPBD` for "around". It is the prefix **a^** with the root word **round**.

You can try it out now: `A` is the prefix stroke for **a^**. You can stroke "around" in two strokes using `A ROUPBD`. Actually, you can add "a" to the beginning of any word now. Try writing the following a^ words:

- aside
- abound
- arrest
- accompany

Even if the root word doesn't exist on its own, you should use the prefix stroke. Try writing:

- allow
- alert
- assert

Note that you had to stroke "allow" with its **phonetic** syllable (`HROU`), not with the spelling of the word "low" (`HROE`). On top of that, "lert" and "sert" are not English words on their own.

And for fun, try adding a^ to other words, too:

- apig
- aparticular
- awhatever

## Word-Boundary Errors

Something that may seem odd to you about prefixes and suffixes, initially, is that they are **dedicated**. You cannot use a stroke both for a word **and** for a prefix or suffix.

This brings us to a concept in stenography called the **word-boundary error**. A word-boundary error is an error that occurs when you are using multiple strokes together and it doesn't behave as you expect. In particular, you'll try to have a stroke be part of one word, and instead it will combine with another word.

::: definition Word-Boundary Error
An error where a stroke is ambiguous and can belong to either the preceding or the following stroke, and the wrong one translates. For example, you mean to write "more tartar" but it gets translated as "mortar tar".
:::

Let's illustrate with an example where we are **not using dedicated prefix/suffix strokes**:

- Let's say you have out: `OUT`
- You need to write out as a prefix:
  - `OUT/SEUD`: outside
- You also need out as a suffix:
  - `STAPBD/OUT`: standout
  - `W/OUT`: without
- It's possible to not realize you have a problem for a while. Sentences will still work, for example: "Be out there as a standout without going outside."
- However, it won't be long before you encounter word-boundary errors:
  - "go stand outside" will come out as "go standout side"
  - "with outside clothing" will come out as "without side clothing"
  - "you can stand out with some flair" will come out as "you can standout with some flair"

Clearly, it's not easy to predict exactly where syllables like "out" will be used. They can come at the beginning of a word, at the end, and they can even *be* the word we're trying to write. Notice that **a**, **out**, and **on** are all their own root words, *as well as* prefixes and suffixes.

## The Importance of Prefixes and Suffixes

Prefixes and suffixes are a critically important part of steno theory that often get overlooked by learners. I will say this as flatly as possible: **prefixes and suffixes are invaluable in having a flexible dictionary.**

In steno software, we have two strategies when writing a word out in multiple strokes:

1. Use dictionary entries for prefixes, suffixes, and root words.
2. Add each combination of a prefix, root word, and suffix—multiple strokes—as a dictionary entry.

If we rely on the *second* option, then changing how we stroke the root word would mean we'd have to find *every dictionary entry* that has that root word, which could be many. (Think comfort, comfortable, comforting, uncomfortable, etc.) Just the same, if we want to update how we chord a prefix such as "de^" or "pre^", then we could possibly have to update *hundreds* of dictionary entries.

By favoring prefixes, suffixes, and root words, changing how we stroke any individual prefix, suffix, or root word will reduce the number of dictionary entries we need to update, perhaps down to just one or a few. On top of that, we get the benefit of not having to worry about word-boundary errors.

Now you might be thinking, "Hmm, it seems easier to brief *uncomfortable* rather than stroking out *un/comfort/able*, so instead of prefixes and suffixes I'll just brief everything." While, yes, briefs are amazing and that's why we love and learn them, they won't have your back when you forget them. Sometimes, you might only remember your brief for "continue" and not the one for "continual" and so you'll need to remember your suffix stroke for "^al".

Learning your prefixes and suffixes might feel like the steno-equivalent of eating your veggies… but veggies keep you strong and healthy! What may feel like a chore at the beginning will become one of your most valued tools.

## Prefixes a^, de^, re^, and un^

The first few prefixes we'll look at are pretty simple. They all plop themselves in front of a word and don't often change the spelling of that word.

- `A`: a^
  - `A PWOUPBD`: abound
  - `A SERT`: assert
- `TKE`: de^
  - `TKE SROET`: devote
  - `TKE PHOET`: demote
  - `TKE SEPBD`: descend
- `RE`: re^
  - `RE WAOEUPBD`: rewind
  - `RE TKO`: redo
  - `RE TKPWRET`: regret
- `UPB`: un^
  - `UPB TKO`: undo
  - `UPB TPAEUR`: unfair

## Suffixes ^ing, ^ed, and ^s

- `-G`: ^ing
  - `RUPB -G`: running (notice `RUPBG` is "rung")
  - `A PWOUPBD -G`: abounding
- `-D`: ^ed
  - `HROF -D`: loved
  - `PAD -D`: padded
- `-S` or `-Z`: ^s
  - `PAPBT -S`: pants
  - `WEUPB -S`: wins (notice `WEUPBS` is "wince")

## Automatic Folding-in of Suffixes

Plover software supports the "automatic folding-in" of certain suffixes. Folding-in is when you stroke what would be two strokes as one. For example, instead of writing `HROF` then `-D`, it makes sense to "fold-in" the `-D` and write `HROFD`.

Automatic folding-in is a special feature where if a stroke with a folded-in suffix (i.e. `-G`, `-S`, `-D`, or `-Z`) isn't in the dictionary, but the stroke *without* that suffix is, it will translate as if you had written the suffix separately.

This means that if you strokes "loves" as `HROFS` and only `HROF` and `-S` are in your dictionary, the output will be as if you had written `HROF/-S`. This is part of why suffixes are so useful—you don't need to add all the combined versions of strokes to your dictionary.

The four suffixes presented in this lesson are the **only** automatically folded-in suffixes in Plover Theory.
