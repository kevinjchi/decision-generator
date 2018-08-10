console.log('App.js is running');

// JSX - javascript 

var template = <p> This is JSX from app.js! </p>;
var appRoot = document.getElementById('app');


var user = {
    name: 'Bob',
    age: 26,
    location: 'thisLocation'
}

var templateTwo = (
    <div>
        <h1>apptitle</h1>
        <p>app Subtitle</p>
        <p>{user.name}</p>
        <p>{user.age}</p>
        <p>{user.location}</p>
    </div>
)

ReactDOM.render(templateTwo, appRoot);