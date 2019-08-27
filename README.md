# web-a-week

A weekly repository where I learn fundamentals of web development. Objectively, technologies may include: React, Node and MongoDB

### Week 1 [React]
**An incremental number clicker (which can be found [here](https://github.com/obDann/web-a-week/blob/d2d9bc296b092dd463ef35888763524d1b1ccc71/week_1/src/App.js))**

Lessons learned:
  * The `App` is a class
  * `state` acts like a hashmap of objects containing dynamic variables
  * `render(){return(...);}` displays something called JSX to the DOM
    * Within the return statement in the render, `{x}` (where x is the reference) refers to the global state and/or functions (to my knowledge so far)
    * every global reference must have `this.` preceding it. (e.g. `this.state.todos`)
  * Functions are in the form of an arrow notation. i.e.
    * `func_name = ([parameters]) => { [do something] }`

**A To-Do list application (which can be found [here](https://github.com/obDann/web-a-week/blob/master/week_1/src/App.js))**

Lessons learned:
  * JavaScript does have lists, and it is in the form of `[]`. Documentation can be found [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
  * You can create custom HTML tags with something called `props` (short for properties). A good demonstration of this is [here](https://github.com/obDann/web-a-week/blob/master/week_1/src/SingleTodo.js)
    * `props.some_property` defines `some_property` to be a HTML attribute for its client
  * The `onInputChange` function shows what the user is typing into the input tag

Leading questions:
  * How can I segregate logic (functions/methods) from the render() method in another file so that I can implement some kind of observer pattern? 
  * Why use a `const` instead of a `class` in another .js file?
  * How can I properly document my files so that others know how to use my code?
