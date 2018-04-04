import { Customer } from "./customer";

const myCustomer = new Customer(3, 'name');
// console.log(myCustomer.id);
// myCustomer.fooBar('abc');

// ---------

const myObject = {
    name: 'Angular',
    year: 2009
}


// const myObject2 = Object.assign({}, myObject, { year: 2016 });

const clone = { ...myObject, year: 2016 };

// myObject2.year = 2016;


console.log(myObject);
console.log(clone);
console.log(myObject === clone);