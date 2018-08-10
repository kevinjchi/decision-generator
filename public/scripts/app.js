'use strict';

console.log('App.js is running');

// JSX - javascript 

var template = React.createElement(
    'p',
    null,
    ' This is JSX from app.js! '
);

var app = {
    title: 'indecision App',
    subtitle: 'let the computer decide for you',
    options: []
};

// e => event
// remember to rerender
var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

var removeAll = function removeAll() {
    app.options = [];
    render();
};

var onMakeDecision = function onMakeDecision() {
    var randomNum = Math.floor(Math.random() * app.options.length);
};

var render = function render() {
    var templateTwo = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle
        ),
        React.createElement(
            'p',
            null,
            app.options.length > 0 ? 'Here are your options' : 'No options'
        ),
        React.createElement(
            'p',
            null,
            app.options.length
        ),
        React.createElement(
            'button',
            { disabled: app.options.length === 0, onClick: onMakeDecision },
            'Making the decision'
        ),
        React.createElement(
            'button',
            { onClick: removeAll },
            'removeAll'
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    option
                );
            }),
            React.createElement(
                'li',
                null,
                'item one'
            ),
            React.createElement(
                'li',
                null,
                'item two'
            )
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );

    ReactDOM.render(templateTwo, appRoot);
};

var appRoot = document.getElementById('app');
render();
//className,
// JSX has no databinding, need to rerender upon change

// Addition challenge
// let count = 0;

// const addOne = () => {
//     count++;
//     renderCounterApp();
// };
// const minusOne = () => {
//     count--;
//     renderCounterApp();
// };

// const reset = () => {
//     count = 0;
//     renderCounterApp();
// };

// const appRoot = document.getElementById('app');

// const renderCounterApp = () => {
//     const templateThree = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1 </button>
//             <button onClick={minusOne}>-1 </button>
//             <button onClick={reset}>0 </button>
//         </div>
//     );
//     ReactDOM.render(templateThree, appRoot);
// }

// renderCounterApp();
