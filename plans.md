# plans

## Exchange (other plattforms)

Should be interoperable with the Big players like:

-   Anki
-   Quizlet

For Data-Exchange these use a text format where term and definition (front and back) are separated by TAB like in `anki-quizlet.txt`

Research on Scholarsome, a FOSS-Project, would be good:
[scholarsome](https://scholarsome.com/),
[announcement on reddit.](https://www.reddit.com/r/opensource/comments/14azw6d/an_open_source_flashcard_studying_system/)

## Native data structure

Cards should be wildly customizable while also used easy to use out of the box.

The start of a Database should specify the content and give Meta-Info

-   Author
-   Title
-   Scource (e.g. a repository)
-   License
-   Content description: a Format specifiying target language (or topic) and base language using ISO codes (e.G. "lang:de>fr", "lang:SQL>en"(custom "zoology:")??)

### Properties of a card-object

-   `ID`: an identifier **(is it neccessary thoug?, format?)**
-   `tags`: by default an empty array.
-   `rating`: neccessary information for automated evaluations (could also be stored in a userprofile?) atm it's just an integer.
-   `content`: the actual content for quizzes by devault:
    -   `front`: the standard promt (e.g. target language)
    -   `back`: the standard answer (e.g. native language)
    -   Set/User-specific expansions, freely named We'd propose a few fields:
        -   `phrases`: for examples of usage,
        -   `plural`: for plural form(s) of a word
        -   `syntactics`: e.g. "takes an indirect object", "is a Postposition"
        -   ...

```javascript
{
        ID: 1,
        content: {
            front: "lingua",
            back: "language",
            phrases: ["lingua latina lingua mortua non est."],
        },
        tags: ["latin", "vocab"],
        rating: 0,
    },
```

### Content format

every field in content should be able to contain a string of arbitrary length, Markdown should be supported and rendered by the app.
