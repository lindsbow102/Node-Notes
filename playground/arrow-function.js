const square = (x) => x * x;
console.log(square(3));

const user = {
    name: 'Lindsey',
    sayHi: () => {
        console.log(arguments); // Will print out a bunch of gibberish
        console.log(`Hi.  I'm ${this.name}`); // Name will print as 'undefined'
    },
    sayHiAlt () {
        //console.log(arguments); // Will print out legit array of arguments
        console.log(`Hi.  I'm ${this.name}`); // Name will print as 'Lindsey' this time
    }
};

user.sayHi(1, 2, 3);
user.sayHiAlt(1, 2, 3);

// When writing methods, use ES5 functions if you need to use 'this' keyword or 'arguments' keyword