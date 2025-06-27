import React from "react";
import "./JavasBank.css";

const JavasBank = () => {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <div className="thetop">
        <div className="Container22">
          <h1 id="Tier1">JavaScript Interview Questions</h1>
          <div className="Header22">
            <h2>Tier 1 - Must-Know Javascript questions</h2>
          </div>
          <div className="category22">
            <div className=" qa-box22">
              <h4>
                Q1: What is JavaScript, and how is it different from Java?
              </h4>
              <p>
                JavaScript is a lightweight, interpreted programming language
                used mainly to create interactive and dynamic content on
                websites. It runs in the browser and lets developers control
                HTML elements, handle user events, and update data without
                reloading the page.Java, on the other hand, is a compiled,
                object-oriented language used for building large-scale
                applications like Android apps, enterprise software, and backend
                systems. The two are unrelated in design—JavaScript is mainly
                for frontend behavior, while Java is used for structured,
                backend development.
              </p>
            </div>
            <div className=" qa-box22">
              <h4>Q2: Explain the difference between var, let, and const.</h4>
              <p>
                In JavaScript, var, let, and const are used to declare
                variables, but they differ in scope and behavior. var is
                function-scoped and can be redeclared or updated, but it's
                considered outdated because it doesn't respect block-level
                scope, which can lead to bugs. let is block-scoped, cannot be
                redeclared in the same scope, but can be updated, making it
                suitable for variables that change. const is also block-scoped
                but cannot be updated or redeclared, so it's used for values
                that should remain constant.
              </p>
            </div>
            <div className=" qa-box22">
              <h4>Q3: What is the difference between == and ===?</h4>
              <p>
                The == operator compares values after converting them to a
                common type, so it allows type coercion. For example, 5 == '5'
                returns true because JavaScript converts the string to a number
                before comparing. In contrast, === checks both value and data
                type without any conversion. So 5 === '5' returns false because
                one is a number and the other is a string. In practice, === is
                preferred to avoid unexpected results.
              </p>
            </div>
            <div className=" qa-box22">
              <h4>Q4: What is the this keyword in JavaScript? </h4>
              <p>
                In JavaScript, this refers to the object that the code is
                currently working with. If a function is called as part of an
                object, this points to that object. If it's a regular function,
                this usually refers to the global object, or it's undefined in
                strict mode. But in arrow functions, this doesn’t change—it
                takes the value from where the function was written. So, this
                depends on how and where the function is used.
              </p>
            </div>
            <div className=" qa-box22">
              <h4>Q5: What are JavaScript data types?</h4>
              <p>
                JavaScript has different types of data to store values. The
                basic ones are called primitive types, like string for text,
                number for numeric values, boolean for true or false, null for
                empty, undefined for unassigned, and a few others like symbol
                and bigint. There are also reference types like objects, arrays,
                and functions, which store more complex or grouped data.
                JavaScript automatically decides the data type when a value is
                assigned, because it’s a loosely typed language.
              </p>
            </div>
            <div className=" qa-box22">
              <h4>Q6: What is the DOM in JavaScript?</h4>
              <p>
                The DOM, or Document Object Model, is a structure that
                represents the content of a web page as a tree of objects.
                JavaScript uses the DOM to access and change elements like text,
                images, buttons, and more. For example, with JavaScript, we can
                change the text inside a paragraph, update styles, or handle
                events like clicks—all by interacting with the DOM.
              </p>
            </div>
            <div className=" qa-box22">
              <h4>Q7: How do you manipulate the DOM using JavaScript?</h4>
              <p>
                We manipulate the DOM in JavaScript by selecting elements and
                then changing their content, attributes, or styles. We can
                select elements using methods like getElementById,
                querySelector, or getElementsByClassName. Once selected, we can
                update their text using innerText, change HTML using innerHTML,
                modify styles using the style property, or even add and remove
                elements using methods like appendChild or removeChild.
              </p>
            </div>
            <div className=" qa-box22">
              <h4>Q8: What are JavaScript promises, and how are they used?</h4>
              <p>
                JavaScript promises are used to handle asynchronous operations
                like data fetching. A promise represents a task that will finish
                in the future—it can either succeed with a result or fail with
                an error. We create a promise using the Promise constructor and
                handle the result using .then() for success and .catch() for
                errors. Promises help avoid deeply nested callbacks and make the
                code easier to read when dealing with delayed responses like
                from APIs.
              </p>
            </div>
            <div className=" qa-box22">
              <h4>
                Q9: What is the difference between synchronous and asynchronous
                programming?
              </h4>
              <p>
                In synchronous programming, tasks run one after another, so each
                task waits for the previous one to finish. This can slow things
                down if a task takes time, like waiting for data from a server.
                In asynchronous programming, tasks can run independently without
                waiting. This allows the program to continue doing other work
                while waiting for a response, improving performance and user
                experience. JavaScript handles asynchronous code using
                callbacks, promises, and async/await.
              </p>
            </div>
            <div className=" qa-box22">
              <h4>Q10: What is hoisting in JavaScript?</h4>
              <p>
                Hoisting in JavaScript means that variable and function
                declarations are moved to the top of their scope before the code
                runs. So, you can use functions or variables before declaring
                them. However, only the declarations are hoisted, not the actual
                values. For example, if you use a var variable before assigning
                it, it will be undefined. let and const are also hoisted but
                stay in a "temporal dead zone," so using them before declaration
                causes an error.
              </p>
            </div>
            <div className=" qa-box22">
              <h4>Q11: What are arrow functions in JavaScript?</h4>
              <p>
                Arrow functions are a shorter way to write functions in
                JavaScript using the =&gt; syntax. They make the code cleaner
                and more concise, especially for simple one-line functions.
                Unlike regular functions, arrow functions do not have their own
                this value—they use this from the surrounding code. This makes
                them useful in cases where we want to keep the same context,
                like inside callbacks or event handlers.
              </p>
            </div>
            <div className=" qa-box22">
              <h4>Q12: What are JavaScript closures?</h4>
              <p>
                .Closures in JavaScript happen when a function remembers and
                accesses variables from its outer scope, even after that outer
                function has finished running. This means an inner function can
                keep using variables from the parent function, creating a
                private environment. Closures are useful for things like data
                hiding, maintaining state, or creating functions with persistent
                memory.
              </p>
            </div>
            <div className=" qa-box22">
              <h4>Q13: What are JavaScript events? Give examples.</h4>
              <p>
                .JavaScript events are signals that something has happened in
                the browser, often triggered by user actions like clicking,
                typing, or scrolling. JavaScript can respond to these events
                using event listeners. For example, when a user clicks a button,
                we can use the click event to run a function. Similarly, keydown
                is used when a key is pressed, and mouseover when the mouse
                moves over an element. These events allow us to make web pages
                dynamic and responsive.
              </p>
            </div>
            <div className=" qa-box22">
              <h4>Q14: How do you handle errors in JavaScript?</h4>
              <p>
                In JavaScript, we handle errors using try...catch blocks. The
                code that might cause an error is placed inside the try block,
                and if an error occurs, the catch block runs to handle it
                without crashing the program. We can also use throw to create
                custom errors, and in asynchronous code like promises, we use
                .catch() or try...catch with async/await to manage errors. This
                helps keep the code safe and user-friendly.
              </p>
            </div>
            <div className=" qa-box22">
              <h4>Q15: How do you handle API requests in JavaScript?</h4>
              <p>
                In JavaScript, we handle API requests using the fetch() method
                or libraries like Axios. fetch() sends a request to a URL and
                returns a promise. We then use .then() to handle the response
                and .catch() for errors. With modern syntax, we often use async
                and await to write cleaner, more readable code that waits for
                the response before moving on.
              </p>
            </div>
            <div className=" qa-box22">
              <h4>Q16: What is localStorage and sessionStorage?</h4>
              <p>
                localStorage and sessionStorage are two ways to store data in
                the browser. localStorage keeps data even after the browser is
                closed, so it's useful for long-term storage like saving user
                preferences. sessionStorage only keeps data for the current
                browser tab or session, and it gets cleared when the tab is
                closed. Both store data as key-value pairs in string format and
                are used to avoid repeatedly fetching or asking for the same
                data.
              </p>
            </div>
            <div className=" qa-box22">
              <h4>Q17: What is the Event Loop in JavaScript?</h4>
              <p>
                The Event Loop in JavaScript is a mechanism that allows
                JavaScript to handle asynchronous tasks while still running in a
                single thread. It works by constantly checking the call stack
                and the task queue. When the call stack is empty, the event loop
                takes the first task from the queue, like a callback or a
                promise, and pushes it onto the stack to be executed. This
                system helps JavaScript run smoothly and respond to user actions
                without getting blocked by slow operations.
              </p>
            </div>
            <div className=" qa-box22">
              <h4>Q18: What are JavaScript async/await functions?</h4>
              <p>
                async and await are keywords in JavaScript that make working
                with promises easier and more readable. An async function always
                returns a promise, and inside it, we use await to pause the
                execution until the promise is resolved. This makes the code
                look and behave like it's running step by step, even though it's
                asynchronous. It’s especially useful when working with API calls
                or delayed operations, as it avoids nested .then() chains and
                makes the code cleaner.
              </p>
            </div>

            <div className=" Container22">
              <div className="category22">
                <div className="Header22" id="Tier2">
                  <h2>Tier 2 - Common Javascript questions</h2>
                </div>
                <div className="qa-box22">
                  <h4>
                    Q1: What is the difference between null and undefined?
                  </h4>
                  <p>
                    {" "}
                    null and undefined both represent empty values in
                    JavaScript, but they mean different things. undefined means
                    a variable has been declared but hasn't been given a value
                    yet—it’s the default state. null is a value we assign on
                    purpose to show that a variable should be empty. So,
                    undefined is unintentional, while null is intentional.
                  </p>
                </div>

                <div className="qa-box22">
                  <h4>Q2: What are JavaScript callbacks?</h4>
                  <p>
                    JavaScript callbacks are functions passed as arguments to
                    other functions, so they can be called later when a task is
                    done. They’re often used for asynchronous operations, like
                    loading data or handling events, where we want to run some
                    code only after something finishes. This helps keep code
                    flexible and lets us control the flow of execution.
                  </p>
                </div>

                <div className="qa-box22">
                  <h4>
                    Q3: How does the setTimeout function work in JavaScript?
                  </h4>
                  <p>
                    {" "}
                    The setTimeout function in JavaScript is used to delay the
                    execution of a function by a specified amount of time in
                    milliseconds. When setTimeout is called, JavaScript sets a
                    timer in the background and immediately continues with the
                    next code. After the timer expires, the function inside
                    setTimeout is added to the event queue and runs when the
                    call stack is clear. This is useful for creating delays or
                    scheduling tasks without blocking the rest of the program.
                  </p>
                </div>

                <div className="qa-box22">
                  <h4>
                    Q4: What is event bubbling and event capturing in
                    JavaScript?
                  </h4>
                  <p>
                    {" "}
                    Event bubbling and event capturing are two ways events
                    travel through the DOM when an action occurs. In event
                    bubbling, the event starts from the innermost element and
                    moves outward to the parent elements. In capturing, it’s the
                    opposite—the event starts from the outermost element and
                    goes inward to the target. By default, JavaScript uses
                    bubbling, but we can choose capturing by passing true as the
                    third argument in addEventListener. These phases help in
                    controlling how and where an event is handled.
                  </p>
                </div>

                <div className="qa-box22">
                  <h4>Q5: How do you use the fetch API?</h4>
                  <p>
                    {" "}
                    The fetch API is used to make network requests in
                    JavaScript. It sends a request to a URL and returns a
                    promise with the response. We start by calling fetch() with
                    the URL, then use .then() to convert the response to JSON,
                    and .then() again to handle the data. If something goes
                    wrong, we catch the error with .catch(). With async/await,
                    we can write the same code in a cleaner, step-by-step way,
                    which is easier to read and debug.
                  </p>
                </div>

                <div className="qa-box22">
                  <h4>
                    Q6:What are JavaScript modules, and how are they used?
                  </h4>
                  <p>
                    JavaScript modules are files that let us split code into
                    reusable pieces. Each module can export variables,
                    functions, or classes using the export keyword, and other
                    files can use them by importing with the import keyword.
                    Modules help organize code, avoid naming conflicts, and keep
                    the codebase clean and maintainable. They are widely used in
                    modern JavaScript frameworks and tools.
                  </p>
                </div>

                <div className="qa-box22">
                  <h4>Q7: How do you define classes in JavaScript?</h4>
                  <p>
                    {" "}
                    In JavaScript, classes are defined using the class keyword
                    and provide a cleaner way to create objects and handle
                    inheritance. A class can have a constructor method for
                    initializing values and other methods to define behavior. We
                    create an object from a class using the new keyword. Classes
                    are mainly used to organize related code and support
                    object-oriented programming in JavaScript.
                  </p>
                </div>

                <div className="qa-box22">
                  <h4>
                    Q8: What is the difference between map(), filter(), and
                    reduce()?
                  </h4>
                  <p>
                    {" "}
                    map(), filter(), and reduce() are array methods in
                    JavaScript used for transforming data. map() creates a new
                    array by applying a function to each element. filter()
                    creates a new array with only the elements that pass a
                    condition. reduce() takes all elements and combines them
                    into a single value, like a sum or product.They don’t change
                    the original array and are often used for cleaner and more
                    functional code.
                  </p>
                </div>

                <div className="qa-box22">
                  <h4>Q9: What are higher-order functions in JavaScript?</h4>
                  <p>
                    {" "}
                    Higher-order functions in JavaScript are functions that
                    either take other functions as arguments, return functions,
                    or both. They allow us to write more flexible and reusable
                    code. For example, methods like map(), filter(), and
                    reduce() are higher-order functions because they accept
                    callback functions to work with array elements. They are a
                    key part of functional programming in JavaScript.
                  </p>
                </div>

                <div className="qa-box22">
                  <h4>
                    Q10: What is the difference between function and arrow
                    function?
                  </h4>
                  <p>
                    {" "}
                    The main difference is how they handle the this keyword.
                    Regular functions have their own this based on how they are
                    called, while arrow functions don't have their own this and
                    instead inherit it from the surrounding scope. Also, arrow
                    functions have shorter syntax and can’t be used as
                    constructors or with arguments objects. They’re best suited
                    for short tasks and callbacks where we want to keep the
                    context unchanged.
                  </p>
                </div>

                <div className="qa-box22">
                  <h4>
                    Q11: How do you check if a variable is an array in
                    JavaScript?
                  </h4>
                  <p>
                    {" "}
                    To check if a variable is an array in JavaScript, we use
                    Array.isArray(variable). This method returns true if the
                    variable is an array and false otherwise. It’s the safest
                    and most accurate way, because using typeof on an array just
                    returns "object", which isn't specific enough.
                  </p>
                </div>

                <div className="qa-box22">
                  <h4>Q12: What are template literals in JavaScript?</h4>
                  <p>
                    {" "}
                    Template literals are a way to write strings in JavaScript
                    using backticks (`) instead of quotes. They allow us to
                    insert variables directly inside the string using ${} and
                    support multi-line strings without needing newline
                    characters. This makes the code cleaner and easier to read
                    when building dynamic strings.
                  </p>
                </div>

                <div className="qa-box22">
                  <h4>
                    Q13: What is the difference between for and forEach in
                    JavaScript?
                  </h4>
                  <p>
                    {" "}
                    The for loop is a traditional loop that gives full control
                    over the index and allows breaking or continuing the loop.
                    forEach is a method used on arrays that runs a function for
                    each element, but it can't be stopped or skipped with break
                    or continue. It’s cleaner for simple tasks on arrays, while
                    for is better when we need more control.
                  </p>
                </div>

                <div className="qa-box22">
                  <h4>Q14: How do you create an object in JavaScript?</h4>
                  <p>
                    {" "}
                    In JavaScript, we can create an object using curly braces{" "}
                    {"{}"} with key-value pairs inside. For example, const
                    person = {'{ name: "John", age: 25 }'}. We can also use the
                    new Object() constructor or define objects using classes or
                    functions. Objects store related data and behavior, and we
                    can access their properties using dot notation or square
                    brackets.
                  </p>
                </div>

                <div className="qa-box22">
                  <h4>
                    Q15: What is the difference between apply(), call(), and
                    bind()?
                  </h4>
                  <p>
                    {" "}
                    apply(), call(), and bind() are methods used to set the this
                    value inside a function. call() runs the function
                    immediately with given arguments one by one. apply() is
                    similar but takes arguments as an array. bind() doesn’t run
                    the function right away—it returns a new function with the
                    set this value, which we can call later.All three are useful
                    when we want to control the context of this manually.
                  </p>
                </div>

                <div className="qa-box22">
                  <h4>Q17: What is the spread operator in JavaScript?</h4>
                  <p>
                    {" "}
                    The spread operator in JavaScript is written as ... and is
                    used to expand arrays or objects into individual elements.
                    It helps in copying arrays or objects, merging them, or
                    passing multiple values easily. For example, ...arr creates
                    a copy of an array, and ...obj creates a shallow copy of an
                    object. It makes code more concise and readable.
                  </p>
                </div>

                <div className="qa-box22">
                  <h4>
                    Q18: What are destructuring assignments in JavaScript?
                  </h4>
                  <p>
                    {" "}
                    Destructuring assignments in JavaScript let us extract
                    values from arrays or properties from objects and assign
                    them to variables in a simpler way. For arrays, we can do
                    something like [a, b] = [1, 2], and for objects, name, agess
                    = person. This makes the code cleaner and avoids writing
                    repeated access to properties or indexes.
                  </p>
                </div>

                <div className="qa-box22">
                  <h4>Q19: What is the typeof operator in JavaScript?</h4>
                  <p>
                    {" "}
                    The typeof operator in JavaScript is used to find the data
                    type of a value. It returns a string like "number",
                    "string", "object", or "undefined", depending on the value.
                    It's useful for checking types during debugging or before
                    performing operations. However, for null, it returns
                    "object" due to a historical bug.
                  </p>
                </div>

                <div className="qa-box22">
                  <h4>Q20: What are JavaScript ES6 features?</h4>
                  <p>
                    {" "}
                    JavaScript ES6, also known as ECMAScript 2015, introduced
                    many useful features that made the language more powerful
                    and readable. Some key features include let and const for
                    better variable handling, arrow functions for shorter
                    syntax, template literals for cleaner strings,
                    destructuring, default parameters, spread and rest
                    operators, classes, promises, and modules. These features
                    modernized JavaScript and made coding more efficient.
                  </p>
                </div>
              </div>
            </div>

            <div className=" Container22">
              <div className="category22">
                <div className="Header22" id="Tier3">
                  <h2>Tier 3 - Advance Javascript questions</h2>
                </div>
                <div className="qa-box22">
                  <h4>
                    Q1: What is the difference between mutable and immutable
                    objects in JavaScript?
                  </h4>
                  <p>
                    {" "}
                    In JavaScript, mutable objects can be changed after they are
                    created, while immutable ones cannot. Objects and arrays are
                    mutable, so we can change their properties or elements
                    without creating a new object. Primitive values like
                    numbers, strings, and booleans are immutable—any change
                    creates a new value. Understanding this helps prevent
                    unexpected behavior in code, especially when copying or
                    comparing values.
                  </p>
                </div>

                <div className="qa-box22">
                  <h4>Q2: What is CORS in JavaScript?</h4>
                  <p>
                    CORS, or Cross-Origin Resource Sharing, is a security
                    feature in browsers that controls how web pages can request
                    resources from a different domain. By default, browsers
                    block such requests to protect users. If a server allows it,
                    it sends specific headers like Access-Control-Allow-Origin
                    to permit access. In JavaScript, this usually comes up when
                    making API calls to other domains, and we need the server to
                    support CORS for the request to succeed.
                  </p>
                </div>

                <div className="qa-box22">
                  <h4>Q3: How do you debounce a function in JavaScript?</h4>
                  <p>
                    To debounce a function in JavaScript, we create a wrapper
                    that delays the function’s execution until a certain amount
                    of time has passed without it being called again. This is
                    done using setTimeout, and if the function is called again
                    before the time ends, the previous timer is cleared with
                    clearTimeout. It’s useful for optimizing performance in
                    events like typing or resizing by preventing a function from
                    running too often.
                  </p>
                </div>

                <div className="qa-box22">
                  <h4>Q4: What are JavaScript generators?</h4>
                  <p>
                    {" "}
                    JavaScript generators are special functions defined with an
                    asterisk (function*) that can pause and resume their
                    execution. They use the yield keyword to return a value and
                    pause the function, and the next time you call .next(), the
                    function continues from where it left off. Generators are
                    useful for creating custom iterators, handling sequences, or
                    managing asynchronous tasks in a more controlled way.
                  </p>
                </div>

                <div className="qa-box22">
                  <h4>Q5: How do you implement inheritance in JavaScript?</h4>
                  <p>
                    {" "}
                    Inheritance in JavaScript can be implemented using either
                    prototypes or classes. With prototypes, we set one object's
                    prototype to another using Object.create() or by setting the
                    __proto__ property. With ES6 classes, we use the extends
                    keyword to create a child class that inherits from a parent
                    class. The child can use the super keyword to access the
                    parent’s constructor and methods. This allows code reuse and
                    structure in object-oriented programming.
                  </p>
                </div>

                <div className="qa-box22">
                  <h4>Q6: What are JavaScript prototypes?</h4>
                  <p>
                    JavaScript prototypes are objects from which other objects
                    inherit properties and methods. Every JavaScript object has
                    an internal link to its prototype. When we try to access a
                    property that doesn’t exist on the object itself, JavaScript
                    looks up the prototype chain to find it. This is how
                    inheritance works in JavaScript and allows shared behavior
                    across multiple objects.
                  </p>
                </div>

                <div className="qa-box22">
                  <h4>
                    Q7: How do you add or remove properties from an object?
                  </h4>
                  <p>
                    {" "}
                    To add a property to an object in JavaScript, we can simply
                    assign a value using dot notation or bracket notation—for
                    example, obj.key = value or obj["key"] = value. To remove a
                    property, we use the delete keyword, like delete obj.key.
                    This removes the property and its value from the object.
                  </p>
                </div>

                <div className="qa-box22">
                  <h4>Q8: How do you create a promise in JavaScript?</h4>
                  <p>
                    {" "}
                    To create a promise in JavaScript, we use the Promise
                    constructor by passing a function with two parameters:
                    resolve and reject. Inside this function, we perform some
                    task and call resolve if it succeeds or reject if it fails.
                    For example:
                  </p>
                  <p>
                    <pre>
                      {`const myPromise = new Promise((resolve, reject) => {
  if (success) {
    resolve("Done");
  } else {
    reject("Error");
  }
});`}
                    </pre>
                  </p>
                </div>

                <div className="qa-box22">
                  <h4>Q9: What are JavaScript promise chaining?</h4>
                  <p>
                    {" "}
                    JavaScript promise chaining is a way to run multiple
                    asynchronous tasks in sequence, where each task starts after
                    the previous one finishes. It works by returning a new
                    promise inside a .then() block, which allows the next
                    .then() to wait for it. This creates a chain of promises,
                    making the flow of async operations more readable and
                    avoiding deeply nested callbacks..
                  </p>
                </div>

                <div className="qa-box22">
                  <h4>Q10: How do you create a custom event in JavaScript?</h4>
                  <p>
                    {" "}
                    To create a custom event in JavaScript, we use the
                    CustomEvent constructor and then dispatch it on an element.
                    We give the event a name and optionally pass some data using
                    the detail property. For example:.
                  </p>
                  <p>
                    <pre>
                      <pre>
                        {`const myEvent = new CustomEvent("greet", { detail: { name: "John" } });
element.dispatchEvent(myEvent);`}
                      </pre>
                    </pre>
                  </p>
                </div>

                <div className="qa-box22">
                  <h4>
                    Q11: What is the difference between promises and
                    async/await?
                  </h4>
                  <p>
                    {" "}
                    Promises and async/await both handle asynchronous
                    operations, but they differ in syntax and readability. With
                    promises, we use .then() and .catch() to handle success and
                    errors, which can lead to chaining and sometimes less
                    readable code. Async/await is a cleaner way to write the
                    same logic—it pauses the function at await until the promise
                    is resolved, making the code look synchronous and easier to
                    follow. Internally, async/await still uses promises but
                    offers a more readable style.
                  </p>
                </div>

                <div className="qa-box22">
                  <h4>
                    Q12:What is the difference between JSON.stringify and
                    JSON.parse?
                  </h4>
                  <p>
                    {" "}
                    ChatGPT said: JSON.stringify converts a JavaScript object
                    into a JSON string, which is useful for storing or sending
                    data. JSON.parse does the opposite—it takes a JSON string
                    and turns it back into a JavaScript object. These methods
                    are commonly used when working with localStorage, APIs, or
                    any situation that requires data to be in string format for
                    transport or storage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tier-buttons">
          <a href="#Tier1" className="tier-btn">
            Tier 1
          </a>
          <a href="#Tier2" className="tier-btn">
            Tier 2
          </a>
          <a href="#Tier3" className="tier-btn">
            Tier 3
          </a>
        </div>
      </div>
    </>
  );
};

export default JavasBank;
