# Training NodeJS Notes exercise.

- **Difficulty** : Easy
- **Skills**: Basics [Javascript](https://en.wikipedia.org/wiki/JavaScript) and a bit of [ES6](http://es6-features.org)
- **Basics concept**: [JSON](https://www.w3schools.com/js/js_json_intro.asp), `File I/O operation`
- **Packages**: [Yargs](https://nodejs.org/api/fs.html), [File System](https://nodejs.org/api/fs.html)

## Program

The goal of this program is to add / read / remove and list notes from command line.

### Command

```bash
node help
Commands:
  app.js add     Add a new note
  app.js list    List all notes
  app.js read    Read a note
  app.js remove  Remove a note

# Example
node app.js add --title Vincent --body "Hello World"
Note added [ { title: 'Vincent', body: 'Hello World' } ]

node app.js read --title Vincent
{ title: 'Vincent', body: 'Hello World' }

node app.js list
[ { title: 'Vincent', body: 'Hello World' } ]

node app.js remove --title Vincent
Note was removed
```

# Is it useful for my need ?

If you mean used as a package or service for your program ? No, but if you want simple example, sure it could be. It's just a small training program for myself and to apply my skills about what I really now.

I have a good knowledge of Javascript (ES5 and bit less of ES6, but still sufficient), so even with my old Javascript e-commerce experiences, I want to learn more about NodeJS, do nice service / app with improve my JS skill.

## Skill require

Nothing really hard here.
This app is not really solid and doesn't use POO as I well know from my PHP or even GO (little different approach) experiences. So, no Class / Service / Model .. Simple script

## Concept

Little exercise to play with args using `Yargs` package ([see here](https://github.com/yargs/yargs)), `Json` and `I/O` operation on file.
