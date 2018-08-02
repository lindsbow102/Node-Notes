const person = {
    name: 'Lindsey'
};

person.age = 38;

debugger;

person.name = 'Alyssa';

console.log(person);
// node inspect playground/debugging.js
// debug> list(10)  --indicates number of lines I want to view
// debug> n --for next statement, will take us from wrapper function into our actual code
// debug> c -- for continue, will run the rest of the code until program completes
// If debugger pauses on line 7, it hasn't executed yet, and person.name still is 'Lindsey'
// repl --read/eval/print/loop (will run code up until that point --e.g. can call person or person.age once debugger is on  line 7, can also say something like "person.age + 100")

//Challenge: 
// node inspect notes.js read --title=hiya