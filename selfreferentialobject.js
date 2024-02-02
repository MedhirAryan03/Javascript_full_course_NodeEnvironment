//Taking same example from object.js

const person = {
    Name: "Raj",
    Age: 20,
    address: "ParkStreet, Kolkata",
    click: function() {
        return (this.Name+" is of age "+this.Age);
    }
};

console.log(person.click())


// The 'this' keyword is a reference to the object that is currently executing the current function or method
//you cannot use ()=> for this example,Find out why
