
const square = function (x) {
    return x * x;
};

//ES6 - arrow function
const squareArrow = (x) => {
    return x * x;
};

const squareArrowTwo = (x) => x * x;

console.log(square(2));
console.log(squareArrow(4));
console.log(squareArrowTwo(6));

// Challenge - Use arrow functions

const getFirstName = (name) => {
    if (name) {
        return name.split(' ')[0];
    };
};

const getFirstNameTwo = (name) => name.split(' ')[0];
console.log(getFirstName('Mike Honzo'));
console.log(getFirstNameTwo('Mikelowski Honzo'));

// arguments object - no longer bound with arrow functions

const add = function (a, b) {
    console.log(arguments);
    return a + b;
};
console.log(add(55, 1, 1001));

const addArrow = (a, b) => {
    return a + b;
};

const user = {
    name: 'Andre',
    cities: ['Philadelphia', 'New york', 'Dublin'],
    printPlacesLived: function () {
        const that = this;

        this.cities.forEach(function (city){
            console.log(that.name + ' has lived in' + city);
        });
    }
};

// this keyword - no longer bound

const userArrow = {
    name: 'Andre',
    cities: ['Philadelphia', 'New york', 'Dublin'],
    printPlacesLived() {
        const cityMessages = this.cities.map((city) => {
            return this.name + ' has lived in ' + city;
        });
        return cityMessages;
        // this.cities.forEach((city) =>{
        //     console.log(this.name + ' has lived in' + city);
        // });
    }
};

const userArrowMap = {
    name: 'Andre',
    cities: ['Philadelphia', 'New york', 'Dublin'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};

userArrow.printPlacesLived();
console.log(userArrowMap.printPlacesLived());
