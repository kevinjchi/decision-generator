console.log('App.js is running');

// JSX - javascript 

const template = <p> This is JSX from app.js! </p>;


const user = {
    name: 'Bob',
    age: 26,
    location: 'thisLocation'
}

const templateTwo = (
    <div>
        <h1>apptitle</h1>
        <p>app Subtitle</p>
        <p>{user.name}</p>
        <p>{user.age}</p>
        <p>{user.location}</p>
    </div>
);


//className,
// JSX has no databinding, need to rerender upon change

let count = 0;


const addOne = () => {
    count++;
    renderCounterApp();
};
const minusOne = () => {
    count--;
    renderCounterApp();
};

const reset = () => {
    count = 0;
    renderCounterApp();
};

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
    const templateThree = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1 </button>
            <button onClick={minusOne}>-1 </button>
            <button onClick={reset}>0 </button>
        </div>
    );
    ReactDOM.render(templateThree, appRoot);
}

renderCounterApp();