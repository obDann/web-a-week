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

**Another To-Do list application, in more depth (which can be found [here](https://github.com/obDann/web-a-week/blob/master/todo-list))**

Lessons learned:
  * `index.js` is the "driver" file, all "main" code is in `App.js`
  * Components are classes, however, when going through this example, data from the state is passed like a hierarchy (i.e. `App's state -> Todos -> TodoItem`) when specifying an attribute of a component.
    * To access the "parent's" passed state data, you have to specify `this.props.{attribute_here}`
  
Answering previous leading questions:
  * How can I segregate logic (functions/methods) from the render() method in another file so that I can implement some kind of observer pattern?
    * Basic Javascript (I have not explored this option), you can do an import statement for the backend script, and call the backend script to use the functions needed (you may also need to specify `this` as a parameter since a lot of functions utlize `this`)
  * Why use a `const` instead of a `class` in another .js file?
    * Using a `const` instead of a `class` is usually just a temporary fix for things like styling. In a SWE sense, you may need to use classes in order to adapt to changes and to make components extendible
  * How can I properly document my files so that others know how to use my code?
    * PropTypes is similar to class checking, however, this is only for data that is being passed from one component to another. There may be a conventional style guide for passing component data along the likes of interfaces
