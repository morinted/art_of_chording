# Inversion

In this lesson, you will learn inversion; another shortening principle that will allow you to write some less common letter orders in one stroke.

----

At the beginning of the text, I told you that steno order was firm and had to be so in order to be consistent. Then, I told you that you could "fold in" suffixes like `-G` in order to have a word like "patting" written with `PAGT`. Folding-in suffixes is similar to the practice of **inversion**, where we sometimes swap the order of two neighboring sounds in steno order.

One common use is for words ending in "r":

- `WAEUT`: wait
  - `WAEURT`: waiter
- `SUPL`: sum
  - `SURPL`: summer

Another is the prefix "dis-" which we write by swapping the sounds of `S-` and `TK-` in steno order:

- `STKUS`: discuss
- `STKUGS`: discussion
- `STKAOEUPB`: design
- `STKRUPT`: disrupt
- `STKRUPGS`: disruption
- `STKPHRAEU`: display

Here are some other assorted examples:

- `SPHAEUBG`: mistake
- `STPHAEUPB`: insane
- `SPWAOEUD`: beside

### Breaking Chorded Sounds

Now you've seen that in certain cases, steno order *can* be broken. Generally, it's only done with **neighboring sounds** and only **once per stroke**. However, if it's done multiple times in the stroke or across non-neighboring sounds, then the outline is considered a brief. Let's talk about the idea of "breaking" a chorded sound, which is something Plover Theory does not support.

As a general rule, you cannot use keys within the limits of a chorded sound's edges. This means that if you are using `SR` for `V`, you can't use any of the keys in between `S` and `R` for other sounds. That means that you can't mix `V` with any of the sounds given by any combination of `TKPWH`. This rule may seem obvious, but it's important to achnowledge the different ways we can have ambiguity while reading raw steno. For example:

{% stenodisplay labels="all" %}
STPR
{% endstenodisplay %}

This chord, `STPR`, can mean either "STPR" or "SFR". It can't, notably, mean "VF", or "FV", or anything with "V" *at all* because the V chord sound is "broken" by keys in between `S` and `R`. `SR` is a pretty exclusive chord for this reason—it takes up the whole left bank—but this rule applies to all chorded sounds.

Consider the much smaller chord `-PL` for `-M`. You might be tempted to write a word that ends in "mb" as `-PBL`, but it will not work, as you've broken the `-PL` chord. `-PBL` can only be read as "PBL" or "NL", not "MB" or "BM". On the other hand, you *can* use keys before or after `-PL`, such as `-PLG` for a sound like "ming", and `-RPL` for a sound like "rm". (As an aside, words ending in "mb" include "bomb" and "tomb", and both of those have silent b's.)

It's easy to tell when a chord is broken when you write out the raw steno. For example, on the layout, you might think you can combine `TPH` (N) and `KWR` (Y) because they don't share keys. However, the raw steno `TKPWHR` absolutely breaks both `TPH` and `KWR` and instead reads like `GL` or `DBL`.

Be sure that when you are designing your own dictionary entries, you avoid breaking chords in this manner.
