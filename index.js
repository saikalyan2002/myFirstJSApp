// let myAge=19;
// console.log(myAge);

// let myAge,humanDogRatio;
// myAge=19;
// humanDogRatio=7;
// let myDogAge=myAge*humanDogRatio;
// console.log(myDogAge);


//NOTE ------------
//You can change the value of count multiple times.
// let bonusPoints;
// bonusPoints=50;
// console.log(bonusPoints);
// bonusPoints = bonusPoints + 50;
// console.log(bonusPoints);
// bonusPoints = bonusPoints - 75;
// console.log(bonusPoints);
// bonusPoints = bonusPoints + 45;
// console.log(bonusPoints);




// function increment()
// {
//     console.log("The button was clicked");
// }


// function log42()
// {
//     console.log(42);
// }

// log42();

// function lapsum(lap1,lap2,lap3)
// {
//     let sum = lap1+lap2+lap3;
//     console.log(sum);
// }

// let lap1=34;
// let lap2=33;
// let lap3=36;

// lapsum(lap1,lap2,lap3);


// let lapscompleted = 0;
// function lapincrementer()
// {
//     lapscompleted = lapscompleted + 1;
// }
// lapincrementer();
// lapincrementer();
// lapincrementer();
// console.log(lapscompleted);
// let username = "per";
// let message = "You have tree new notifications";
// console.log(message + " " + username);
// let messagetoUser=message + " " + username + "!";
// console.log(messagetoUser);

// let name = "Sai Kalyan Meghavath";
// let greeting = "Hi, my name is "
// let myGreeting = greeting + name;
// console.log(myGreeting);




let countEl = document.getElementById("count-el");
console.log(countEl);
let saveEl = document.getElementById("save-el");

let count = 0;
function incrementcount()
{
    count += 1;
    // document.getElementById("count-el").innerText = count;
    countEl.innerText=count;
    console.log(count);
}
function save()
{
    saveEl.innerText += " " + count +" - ";
    count=0;
    countEl.textContent = count;
    console.log(count);
}
//We can use textContent instead of innerText to get all spaces properly as innerText struggles to display spaces;


