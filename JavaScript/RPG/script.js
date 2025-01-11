//Initial Player Status Variable
let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

//document querySelector to manipulate the HTML id's
const button1 = document.querySelector('#button1');
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");

//Multiple objects for weapons that has a properties value of name and power
const weapons = [
    { name: 'stick', power: 5 },
    { name: 'dagger', power: 30 },
    { name: 'claw hammer', power: 50 },
    { name: 'sword', power: 100 }
];

//Multiple objects for different type of monsters, each monster have a unique properties value
const monsters = [
    {
        name: "slime",
        level: 2,
        health: 15
    },
    {
        name: "fanged beast",
        level: 8,
        health: 60
    },
    {
        name: "dragon",
        level: 20,
        health: 300
    }
];

//Multiple objects that contains different locations and it's properties value.
//the name properties has a value name of the location.
//the "button text" properties value use for displaying the Text of the 3 buttons.
//"button functions" properties value use for calling the function for clicking the buttons.
//text properties value will be shown in the text.innerText if specific objects called.
const locations = [
    {
        name: "town square",
        "button text": ["Go to store", "Go to cave", "Fight dragon"],
        "button functions": [goStore, goCave, fightDragon],
        text: "You are in the town square. You see a sign that says \"Store\"."
    },
    {
        name: "store",
        "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
        "button functions": [buyHealth, buyWeapon, goTown],
        text: "You enter the store."
    },
    {
        name: "cave",
        "button text": ["Fight slime", "Fight fanged beast", "Go to town square"],
        "button functions": [fightSlime, fightBeast, goTown],
        text: "You enter the cave. You see some monsters."
    },
    {
        name: "fight",
        "button text": ["Attack", "Dodge", "Run"],
        "button functions": [attack, dodge, goTown],
        text: "You are fighting a monster."
    },
    {
        name: "kill monster",
        "button text": ["Go to town square", "Go to town square", "Go to town square"],
        "button functions": [goTown, goTown, easterEgg],
        text: 'The monster screams "Arg!" as it dies. You gain experience points and find gold.'
    },
    {
        name: "lose",
        "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
        "button functions": [restart, restart, restart],
        text: "You die. &#x2620;"
    },
    {
        name: "win",
        "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
        "button functions": [restart, restart, restart],
        text: "You defeat the dragon! YOU WIN THE GAME! &#x1F389;"
    },
    {
        name: "easter egg",
        "button text": ["2", "8", "Go to town square?"],
        "button functions": [pickTwo, pickEight, goTown],
        text: "You find a secret game. Pick a number above. Ten numbers will be randomly chosen between 0 and 10. If the number you choose matches one of the random numbers, you win!"
    }
];

// Initial calling function of the buttons.
// It means if one of them clicks it will call the function.
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

//Function for accessing the locations objects
//The update(location) the parameter will hold the value of the calling array so it means for example it will hold locations[0] to locations[7]
//And then the parameter it will passed the array value to call the object and assigned the properties based on which object is called.
/*
    So it means for example the location["button text"][0] the location holds the array value for calling objects(idk if the right term is calling)
    once the location has an array value it will now use and assigned the properties of the calling objects.
*/
function update(location) {
    monsterStats.style.display = "none";
    button1.innerText = location["button text"][0];
    button2.innerText = location["button text"][1];
    button3.innerText = location["button text"][2];
    button1.onclick = location["button functions"][0];
    button2.onclick = location["button functions"][1];
    button3.onclick = location["button functions"][2];
    text.innerHTML = location.text;
}

/* 
    Here's how to call the update function and it will passed the parameter value that holds
    an array value to used the it's properties and change the value of the buttons and the 
    function of the buttons and also the text.innerHTML
*/
//goTown function will call the location[0] objects it means the first objects
function goTown() {
    update(locations[0]);
}

//goStore function will call the location[1] objects it means the second objects
function goStore() {
    update(locations[1]);
}

//goCave function will call the location[2] objects it means the third objects
function goCave() {
    update(locations[2]);
}

/* 
    This function is inside of the goStore function along with buyWeapon and sellWeapon function.

    Inside of the goStore function there's a three buttons, and the first one is the buyHealth.
    Once this function is called or clicked by the user it will change the value of gold
    and add the value of the health.

    If the player has more than 10 gold the player allows to buy it. And it will execute the
    if statement gold -= 10 it will deduct the current value of the gold variable, health += 10 it will
    add the current value of the health variable, the innerText will display the value of gold and health
    variable.
    But if the player has less than 10 golds it will proceed to else statement which has the
    text.innerText to display.
*/
function buyHealth() {
    if (gold >= 10) {
        gold -= 10;
        health += 10;
        goldText.innerText = gold;
        healthText.innerText = health;
    } else {
        text.innerText = "You do not have enough gold to buy health.";
    }
}

/* 
    This is the second function for clicking the button.
    Inside of the goStore function there's a three buttons, and the second one is the buyWeapon.
    If the player has more than 30 gold the player allows to buy it. And it will execute the
    if statement gold -= 30 it will deduct the current value of the gold variable, currentWeapon++
    it will add the current value of the currentWeapon variable to +1.

    In newWeapon variable is assigned to weapons array and the currentWeapon is holding the value and the .name calling the properties of name
    from weapons object. 
    It means weapons[currentWeapon].name will hold the value based on the currentWeapon variable integer value from 0-3.
    For example if the currentWeapon have 1 because the function is called it will call the weapons object and the currentWeapon value holds the number
    for calling the array objects [1] in weapons and .name will display the second objects from the weapons objects array.  
    But if the player has less than 30 golds it will proceed to else statement which has the
    text.innerText to display.

    Inside of if there's another if statement which is I explained above.
    The outside if is for selling the weapons.
    The currentWeapon only holds up to 3 integer because there's only 3 weapons to buy.
    If the currentWeapon is less than the weapons array length which is should be 4 but -1 it will holds the value of 3.
    And the inside If will be executed but once the currentWeapon reached the value 3 it will execute the else statement
    that allows you to sell the weapons.

    So it will call the sell function let's make it short, inventory.shift which is an array method to remove the first value of the arrays.


*/
function buyWeapon() {
    if (currentWeapon < weapons.length - 1) {
        if (gold >= 30) {
            gold -= 30;
            currentWeapon++;
            goldText.innerText = gold;
            let newWeapon = weapons[currentWeapon].name;
            text.innerText = "You now have a " + newWeapon + ".";
            inventory.push(newWeapon);
            text.innerText += " In your inventory you have: " + inventory;
        } else {
            text.innerText = "You do not have enough gold to buy a weapon.";
        }
    } else {
        text.innerText = "You already have the most powerful weapon!";
        button2.innerText = "Sell weapon for 15 gold";
        button2.onclick = sellWeapon;
    }
}

function sellWeapon() {
    if (inventory.length > 1) {
        gold += 15;
        goldText.innerText = gold;
        let currentWeapon = inventory.shift();
        text.innerText = "You sold a " + currentWeapon + ".";
        text.innerText += " In your inventory you have: " + inventory;
    } else {
        text.innerText = "Don't sell your only weapon!";
    }
}

/* 
    This is the fighting monster functions.

    We have 3 monsters which are Slime, Beast and the Dragon.
    Each fight function has a changing value of the fighting variable.
    So it means if the fightBeast function is called it will change the variable fight to 1.
    And called the goFight function.

    This fighting variable value will be used for calling the monsters objects.
*/

function fightSlime() {
    fighting = 0;
    goFight();
}

function fightBeast() {
    fighting = 1;
    goFight();
}

function fightDragon() {
    fighting = 2;
    goFight();
}

/* 
    Calling the goFight function will execute the logics inside of it.
    It will call the update function which is calling the 4th objects in locations.

    monsterHealth will be change the value based on the fighting variable value in our example the beast so it means the fighting has value of 1
    and the value of it will be monsters[1].health it means selecting the object second value and the health properties.
    style.display to block to show the monster name and the monster health.

*/
function goFight() {
    update(locations[3]);
    monsterHealth = monsters[fighting].health;
    monsterStats.style.display = "block";
    monsterName.innerText = monsters[fighting].name;
    monsterHealthText.innerText = monsterHealth;
}

/* 
    This is a RNG based attack function. It means random attack damage value.
    Every Time clicking the attack button will execute this function.

    The innerText will be displaying the selected object of monsters and the weapons.
    
    The health will be deducted based on the monster level.
    
    
    The isMonsterHit function this works if the player missed or hit the monster.
    The isMonsterHit will return true or false.
    It means if isMonsterHit equal to true it will execute the if statement which is
    deducting the value of monsterHealth to weapons power value plus the random value based on the xp variable and it will plus it to 1.

    If the isMonsterHit is equal to false it will missed and do nothing.

    There's another if statement it means if the health variable is less than or equal to 0 it will execute the lose function which is resetting
    all the progress variable back to inital value.

    else if the monster is defeated or monsterHealth is less than or equal to 0 it will execute the if or else statement
    the fighting === 2 it means if the dragon is defated it will execute the function called winGame() it means you finally defeated the 
    game and it works like the lose function but the differences is you win the game. else it will call the defeatMonster function which
    give you a reward for adding a value variable of gold and xp.
*/
function attack() {
    text.innerText = "The " + monsters[fighting].name + " attacks.";
    text.innerText += " You attack it with your " + weapons[currentWeapon].name + ".";
    health -= getMonsterAttackValue(monsters[fighting].level);
    if (isMonsterHit()) {
        monsterHealth -= weapons[currentWeapon].power + Math.floor(Math.random() * xp) + 1;
    } else {
        text.innerText += " You miss.";
    }
    healthText.innerText = health;
    monsterHealthText.innerText = monsterHealth;
    if (health <= 0) {
        lose();
    } else if (monsterHealth <= 0) {
        if (fighting === 2) {
            winGame();
        } else {
            defeatMonster();
        }
    }
    if (Math.random() <= .1 && inventory.length !== 1) {
        text.innerText += " Your " + inventory.pop() + " breaks.";
        currentWeapon--;
    }
}

/* 
    The function getMonsterAttackValue holds the level parameter which is based on this monsters[fighting].level
    the level * 5 the monster level will be multiply by 5 and minus it to the random value based on the xp variable.

    If the xp is high it will return negatives value. And there's a ternary operator used for if the hit is greater than 0 it will
    return the hit variable and if it's less than to 0 it will only return 0.
*/
function getMonsterAttackValue(level) {
    const hit = (level * 5) - (Math.floor(Math.random() * xp));
    console.log(hit);
    return hit > 0 ? hit : 0;
}

//Generate random value to return true or false
function isMonsterHit() {
    return Math.random() > .2 || health < 20;
}

//Do nothing and dodge the attack of the monster
function dodge() {
    text.innerText = "You dodge the attack from the " + monsters[fighting].name;
}

//Give a reward for adding a value of gold and the xp variable
function defeatMonster() {
    gold += Math.floor(monsters[fighting].level * 6.7);
    xp += monsters[fighting].level;
    goldText.innerText = gold;
    xpText.innerText = xp;
    update(locations[4]);
}

//lose function and use the 6th objects in locations.
function lose() {
    update(locations[5]);
}

//winGame function and use the 7th objects in locations.
function winGame() {
    update(locations[6]);
}

//The restart function will change the current value variable to initial value of this variable inside of it.
function restart() {
    xp = 0;
    health = 100;
    gold = 50;
    currentWeapon = 0;
    inventory = ["stick"];
    goldText.innerText = gold;
    healthText.innerText = health;
    xpText.innerText = xp;
    goTown();
}

/*
    Easter Egg Function
    The easterEgg function will call the update function and it will passed the parameter value that holds
    an array value to used the it's properties and change the value of the buttons and the 
    function of the buttons and also the text.innerHTML.
*/
function easterEgg() {
    update(locations[7]);
}

/*
    The pickTwo and pickEight function will call the pick function and passed the guess value to the parameter
*/
function pickTwo() {
    pick(2);
}

function pickEight() {
    pick(8);
}

//Easter Gambling Function
/* 
    We have the numbers array which stores the value.
    The while loop means if the numbers.length is less than to 10
    It will push the array means it will add the value based on the generated value from 0 to 10.
    It will continuesly generates value until the numbers has 10 arrays.

    The for loop works showing the generated value from the numbers it means
    it will continuesly showing the value until it reaches the 10th value of the array.

    The if and else statement
    The numbers.includes it means if the guess parameter holds the value that has inside of the numbers array
    it will execute the if statement for rewarding logic

    and if the guess parameter is not included in the numbers array it means the guess is wrong the proceed to the lose logic. 
*/
function pick(guess) {
    const numbers = [];
    while (numbers.length < 10) {
        numbers.push(Math.floor(Math.random() * 11));
    }
    text.innerText = "You picked " + guess + ". Here are the random numbers:\n";

    for (let i = 0; i < 10; i++) {
        text.innerText += numbers[i] + "\n";
    }

    if (numbers.includes(guess)) {
        text.innerText += "Right! You win 20 gold!";
        gold += 20;
        goldText.innerText = gold;
    } else {
        text.innerText += "Wrong! You lose 10 health!";
        health -= 10;
        healthText.innerText = health;
        if (health <= 0) {
            lose();
        }
    }
} 