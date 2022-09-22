const input = require('sync-input');
let totalTickets = 0;

const gifts = [
    {id: 1, price: 10, name: "Teddy Bear"},
    {id: 2, price: 5, name: "Big Red Ball"},
    {id: 3, price: 50, name: "Huge Bear"},
    {id: 4, price: 8, name: "Candy"},
    {id: 5, price: 15, name: "Stuffed Tiger"},
    {id: 6, price: 30, name: "Stuffed Dragon"},
    {id: 7, price: 100, name: "Skateboard"},
    {id: 8, price: 25, name: "Toy Car"},
    {id: 9, price: 20, name: "Basketball"},
    {id: 10, price: 75, name: "Scary Mask"}
];

function printNoGifts() {
    console.log("Wow! There are no gifts to buy.");
}

function printGifts() {
    console.log("Here's the list of gifts:\n");

    if (gifts.length === 0) {
        printNoGifts();
    } else {
        gifts.forEach(gift =>
            console.log(`${gift.id}- ${gift.name}, Cost: ${gift.price} tickets`)
        );
    }
}

function printWelcome() {
    console.log("WELCOME TO THE CARNIVAL GIFT SHOP!");
    console.log("Hello friend! Thank you for visiting the carnival!");
}

function printTickets() {
    console.log(`Total tickets: ${totalTickets}`);
}

function printInvalidNumber() {
    console.log("Please enter a valid number!");
}

function addTickets() {
    let amount = Number(input("Enter the ticket amount: "));

    if (isNaN(amount) || amount < 0 || amount > 1000) {
        console.log("Please enter a valid number between 0 and 1000.");
    } else {
        totalTickets += amount;
        printTickets();
    }
}

function getIdAndGift() {
    let gift;
    let index;
    let id = Number(input("Enter the number of the gift you want to get: "));

    if (isNaN(id)) {
        printInvalidNumber();
    } else {
        index = gifts.findIndex(el => el.id === id);
        if (index === -1) {
            console.log("There is no gift with that number!");
        } else {
            gift = gifts[index];
            if (totalTickets < gift.price) {
                console.log("You don't have enough tickets to buy this gift.");
                printTickets();
            } else {
                console.log(`Here you go, one ${gift.name}!`);
                totalTickets -= gift.price;
                gifts.splice(index, 1);
                printTickets();
            }
        }
    }
}

function buyGift() {
    if (gifts.length === 0) {
        printNoGifts();
    } else {
        getIdAndGift();
    }
}

function getSelection() {
    let selection;
    while (true) {
        selection = Number(input());
        if (isNaN(selection)) {
            printInvalidNumber();
        } else {
            break;
        }
    }

    return selection;
}

function whatToDo() {
    let exit = false;
    while (!exit) {
        console.log("\nWhat do you want to do?");
        console.log("1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop");

        switch (getSelection()) {
            case 1:
                buyGift();
                break;
            case 2:
                addTickets();
                break;
            case 3:
                printTickets();
                break;
            case 4:
                printGifts();
                break;
            case 5:
                exit = true;
                break;
            default:
                printInvalidNumber();
        }
    }
}

function main() {
    printWelcome();
    printGifts();
    whatToDo();
    console.log("Have a nice day!");
}

main();
