console.log('App.js is running');

// JSX - javascript 

const template = <p> This is JSX from app.js! </p>;

const app = {
    title: 'indecision App',
    subtitle: 'let the computer decide for you',
    options: []
};

// e => event
// remember to rerender
const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

const removeAll = () => {
    app.options = [];
    render();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
};

const render = () => {
    const templateTwo = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <p>{app.options.length}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>Making the decision</button>

            <button onClick={removeAll}>removeAll</button>
            <ol>
            {
                app.options.map((option) => {
                    return <li key={option}>{option}</li>
              })
            }
                <li>item one</li>
                <li>item two</li>
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>

        </div>
    );

    ReactDOM.render(templateTwo, appRoot);
}

const appRoot = document.getElementById('app');
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