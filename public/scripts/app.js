/*
JSX - JavaScript XML
JavaScript Syntax extension provided by React to define templates and inject data into those templates.
*/
//Chrome does not understand this JavaScript extension as it is not JavaScript. So, compile it down to regular JavaScript as that is what browser understands. So use Babel to do it. Also, use Babel to compile ES6/ES7 code TO ES5. 
https://babeljs.io/

//var template = <p>This is JSX from app.js</p>; //static -- jsx
var template = React.createElement("p", null, "This is JSX from app.js"); //Babel. Install babel, react preset, env preset from https://babeljs.io/ locally so that jsx code will be compiled down to pure JS on compilation by babel and we don't have to use 3rd party application Babel to do so.
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot); //render application