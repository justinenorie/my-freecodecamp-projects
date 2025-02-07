const lunches = [];

//Add Value in the END of the array
const addLunchToEnd = (receive, item) => {
    receive.push(item); 
    console.log(`${item} added to the end of the lunch menu.`);
    return receive; 
}
console.log(addLunchToEnd(lunches, "Tacos")); 
console.log(addLunchToEnd(["Pizza", "Tacos"], "Burger")); 

//Add Value in the START of the array
const addLunchToStart = (receive, item) => {
    receive.unshift(item);
    console.log(`${item} added to the start of the lunch menu.`)
    return receive;
}
console.log(addLunchToEnd(lunches, "Sushi")); 
console.log(addLunchToEnd(["Pizza", "Burger"], "Sushi")); 

//Remove LAST value in the array
const removeLastLunch = (remove) => {
    const removeLast = remove.pop();
    if (remove.length === 0){
        console.log("No lunches to remove.");
    }else{
        console.log(`${removeLast} removed from the end of the lunch menu.`);
    }
    return remove;
}
removeLastLunch(["Stew", "Soup", "Toast"]);
removeLastLunch(["Sushi", "Pizza", "Noodles"]);

const removeFirstLunch = (remove) => {
    const removeFirst = remove.shift();
    if (remove.length === 0){
        console.log("No lunches to remove.");
    }else{
        console.log(`${removeFirst} removed from the start of the lunch menu.`);
    }
    return remove;
}
removeFirstLunch(["Salad", "Eggs", "Cheese"]);
removeFirstLunch(["Sushi", "Pizza", "Burger"]);

const getRandomLunch = (random) => {
    const randomLunchNumber = Math.floor(Math.random() * random.length);
    const randomLunch = random[randomLunchNumber];
    if (random.length === 0){
        console.log("No lunches available.");
    }else{
        console.log(`Randomly selected lunch: ${randomLunch}`);
    }
    return random;
}
const showLunchMenu = (menu) => {
    if (menu.length === 0){
        console.log("The menu is empty.");
    }else{
        console.log(`Menu items: ${menu.join(', ')}`);
    }
    return menu;
}

showLunchMenu(["Greens", "Corns", "Beans"]);
