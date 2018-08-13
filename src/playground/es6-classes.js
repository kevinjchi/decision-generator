class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    
    getGreeting() {
        return `Hi. I am ${this.name} + !`;
    }
    
    getAge() {
        return `Age: ${this.age}`;
    }
}

class Student extends Person {
    constructor(name, age, major = 'undecided') {
        super(name, age);
        this.major = major;
    }

    getAge() {
        let age = super.getAge();
        if (this.major) {
            age += `${this.major}`
        }
        return age;
    }
}

const me = new Student("name", "age");
console.log(me);