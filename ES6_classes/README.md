 # JavaScript Classes

A JavaScript class is a blueprint for creating [objects](https://www.javascripttutorial.net/javascript-objects/). A class encapsulates data and functions that manipulate data.

Unlike other programming languages such as Java and [C#](https://www.csharptutorial.net/), JavaScript classes are syntactic sugar over the [prototypal inheritance](https://www.javascripttutorial.net/javascript-prototypal-inheritance/). In other words, ES6 classes are just special [functions](https://www.javascripttutorial.net/javascript-function/).

## Classes prior to ES6 revisited

Prior to ES6, JavaScript had no concepts of classes. To mimic a class, you often use the [constructor/prototype pattern](https://www.javascripttutorial.net/javascript-constructor-prototype/) as shown in the following example:

```
.wp-block-code {
border: 0;
padding: 0;
-webkit-text-size-adjust: 100%;
text-size-adjust: 100%;
}

.wp-block-code > span {
display: block;
overflow: auto;
}

.shcb-language {
border: 0;
clip: rect(1px, 1px, 1px, 1px);
-webkit-clip-path: inset(50%);
clip-path: inset(50%);
height: 1px;
margin: -1px;
overflow: hidden;
padding: 0;
position: absolute;
width: 1px;
word-wrap: normal;
word-break: normal;
}

.hljs {
box-sizing: border-box;
}

.hljs.shcb-code-table {
display: table;
width: 100%;
}

.hljs.shcb-code-table > .shcb-loc {
color: inherit;
display: table-row;
width: 100%;
}

.hljs.shcb-code-table .shcb-loc > span {
display: table-cell;
}

.wp-block-code code.hljs:not(.shcb-wrap-lines) {
white-space: pre;
}

.wp-block-code code.hljs.shcb-wrap-lines {
white-space: pre-wrap;
}

.hljs.shcb-line-numbers {
border-spacing: 0;
counter-reset: line;
}

.hljs.shcb-line-numbers > .shcb-loc {
counter-increment: line;
}

.hljs.shcb-line-numbers .shcb-loc > span {
padding-left: 0.75em;
}

.hljs.shcb-line-numbers .shcb-loc::before {
border-right: 1px solid #ddd;
content: counter(line);
display: table-cell;
padding: 0 0.75em;
text-align: right;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
white-space: nowrap;
width: 1%;
}function Person(name) {
    this.name = name;
}

Person.prototype.getName = function () {
    return this.name;
};

var john = new Person("John Doe");
console.log(john.getName());Code language: JavaScript (javascript)
```

Output:

```
John Doe
```

How it works.

First, create the `Person` as a constructor function that has a property name called `name`. The `getName()` function is assigned to the `prototype` so that it can be shared by all instances of the `Person` type.

Then, create a new instance of the `Person` type using the `new` operator. The `john` object, hence, is an instance of the `Person` and `Object` through [prototypal inheritance](https://www.javascripttutorial.net/javascript-prototypal-inheritance/).

The following statements use the `instanceof` operator to check if `john` is an instance of the `Person` and `Object` type:

```
console.log(john instanceof Person); // true
console.log(john instanceof Object); // trueCode language: JavaScript (javascript)
```

## ES6 class declaration

ES6 introduced a new syntax for declaring a class as shown in this example:

```
class Person {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}Code language: JavaScript (javascript)
```

This `Person` class behaves like the `Person` type in the previous example. However, instead of using a constructor/prototype pattern, it uses the `class` keyword.

In the `Person` class, the `constructor()` is where you can initialize the properties of an instance. JavaScript automatically calls the `constructor()` method when you instantiate an object of the class.

The following creates a new `Person` object, which will automatically call the `constructor()` of the `Person` class:

```
let john = new Person("John Doe");Code language: JavaScript (javascript)
```

The `getName()` is called a method of the `Person` class. Like a constructor function, you can call the methods of a class using the following syntax:

```
objectName.methodName(args)Code language: CSS (css)
```

For example:

```
let name = john.getName();
console.log(name); // "John Doe"Code language: JavaScript (javascript)
```

To verify the fact that classes are special functions, you can use the `typeof` operator of to check the type of the `Person` class.

```
console.log(typeof Person); // functionCode language: JavaScript (javascript)
```

It returns `function` as expected.

The `john` object is also an instance of the `Person` and `Object` types:

```
console.log(john instanceof Person); // true
console.log(john instanceof Object); // true
```
