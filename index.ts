#! /usr/bin/env node

import inquirer from "inquirer";

let balance: number = 30000 // Dollars $

let pin: number = 1234; // my pin code.

console.log ('welcome to my Islamic bank');

let pinAns:any = await inquirer.prompt(
    [
        {
            name:"pin",
            message:"Please enter your pin",
            type:"number",
         
        }
    ]
);

// if user use correct pin code
if (pinAns.pin === pin){
console.log("Correct pin code");

let operationAns: any = await inquirer.prompt(
    [
        {
           name:"operation",
           message:"Please select from the options below:",
           type:"list",
           choices:["cash withdraw","balance inquiry","fast cash"],
        }
    ]
);

// if user select cash withdraw option:

if (operationAns.operation === "cash withdraw"){

    
let amountAns:any = await inquirer.prompt(
    [
        {
            name:"amount",
            message:"Enter an amount you want to withdaw",
            type:"number",
        }
    ]
);
if (amountAns.amount < balance){
    balance -= amountAns.amount;
    console.log(`your remaining balance is: ${balance}`);

}
else {
    console.log(`insufficient balance`);
}

}
// if user select balance inquiry option:
 else if (operationAns.operation === "balance inquiry"){
    console.log(`your current balance is: ${balance}`);
 }

 // if user select fast cash option:

 else if (operationAns.operation === "fast cash"){
    let fastAns: any = await inquirer.prompt(
        [
            {
                name:"fast",
                message:"Enter an amount you want to withdraw",
                type:"list",
                choices:["3000","5000","7000","13000"],
            }
        ]
    );
    if(fastAns.fast === "3000"){
        balance -= fastAns.fast;
        console.log(`your remaining balance is: ${balance}`);
    }
    else if (fastAns.fast === "5000"){
        balance -= fastAns.fast;
        console.log(`your remaining balance is: ${balance} `);
    }
    else if(fastAns.fast === "7000"){
        balance -= fastAns.fast;
        console.log(`your remaining balance is: ${balance}`);
    }
    else if (fastAns.fast === "13000"){
        balance -= fastAns.fast;
        console.log(`your remaining balance is: ${balance}`);
    }
 }


}
// if user enter incorrect pincode
else{
    console.log("Incorrect pin code");
}


