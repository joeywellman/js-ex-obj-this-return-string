// const latte = {
//     available sizes:


// }
// const americano = {

// }

// const mocha = {

// }

// function makeDrink(drinkParam){
//     console.log(`I made you this ${drinkParam}`);
// }

// makeDrink("latte");
// makeDrink("mocha");

const coffeeShop = {
    address: "100 Sesame Street",
    openHours: "6AM to 6PM",
    name: "Joe's Joe",
    // menu: [
    //     latte,
    //     americano,
    //     mocha
    // ]

}

coffeeShop.openHours = "6AM to 5PM";
console.log(coffeeShop.openHours);

// 1. Build three objects. Each one should represent an employee at the coffee shop.
// 2. Each employee object should have the following properties:
// - a name
// - a startDate
// - a jobTitle
// - a payRate
// - a favoriteDrink
// - an array of drinks they know how to make

const joe = {
    name: "Joe",
    startDate: "01/25/2019",
    jobTitle: "Manager",
    payRate: "$15.00",
    favoriteDrink: "americano",
    knownDrink: ["latte", "mocha"],
    makeDrink: function makeDrink(drinkParam){
        console.log(`${this,name} made you this ${drinkParam}`);
    },
    learnNewDrink: function(newDrinkParam){
        this.knownDrinks.push(this.newDrinkParam);
    }
}

const fred = {
    name: "Fred",
    startDate: "11/15/2018",
    jobTitle: "Barista",
    payRate: "$8.50",
    favoriteDrink: "latte",
    knownDrink: ["latte", "americano", "mocha", "magic coffee", "iced coffee"]
    ,
    makeDrink: function makeDrink(drinkParam){
        console.log(`${this.name} made you this ${drinkParam}`);
    }
}

const ted = {
    name: "Ted",
    startDate: "12/01/2017",
    jobTitle: "Server",
    payRate: "$7.25",
    favoriteDrink: "mocha",
    knownDrink: ["americano", "black"],
    makeDrink: function(drinkParam){
        let sentenceToReturn = "No Can Do!";
        for(let i =0; i < this.knownDrink.length; i++){
            if(this.knownDrink[i] === drinkParam){
                sentenceToReturn = `Here's your ${drinkParam}!`;
            }
        }
    }
}   

// 2. Build another object called coffeeShopStaff

const coffeeShopStaff = {
    fullTime:[joe],
    partTime:[fred, ted]
}

// 3. This object should have two properties:
// - a property of fullTime that holds an array of full time staff members
// - a property of partTime that holds an array of part time staff members
// - Put two of your employee objects from steps 1 & 2 into the part time array.
// Put one of them in the full time array.

console.log(coffeeShopStaff);

joe.makeDrink("latte");
fred.makeDrink("latte");

// 1. Remember your employee objects from up there? Give one of them a method called makeCoffeDrink
// 2. This method should accept a parameter of drink and return a string of "Here's your [drink]!" 
ted.makeDrink("cold brew");

const preparedLatte = ted.makeDrink("latte");
console.log("This is prepared drink", preparedLatte);


const preparedBlack = ted.makeDrink("black");
console.log("This is prepared drink", preparedBlack);

// 3. Call the method and pass in any drink (string) you want
// 4. Call the method (be sure to catch the returned string in a variable!)
// Bous: If you have time, refactor your method so that it checks to see if the employee knows how to make the drink (i.e. if it's in the array of drinks they know how to make). 
// If they do, you should return the string from step 2. If not, you should return a string that says "No can do!"