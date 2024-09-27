var S = 0;
var P = 0;
var E = 0;
var C = 0;
var I = 0;
var A = 0;
var L = 0;

S = Strength.value - 5;
P = Perception.value - 5;
E = Endurance.value - 5;
C = Charisma.value - 5;
I = Intelligence.value - 5;
A = Agility.value - 5;
L = Luck.value - 5;
var intimidation = 0;
if (C >= S)
{
    intimidation = C;
} else
{
    intimidation = S;
}


let skills = [C,P,I,P,P,A,intimidation,P,S,I,A,C,E,S];
let skills_name = ["Barter","Breach","Crafting","Energy weapons","Explosives","Guns","Intimidation","Medicine","Melee weapons","Science","Sneak","Speech","Survival","Unarmed"];

var back = 0;

var backgrounds = [];
backgrounds[0] = {name: "Cultist",skills:["Melee wapons","Speech","Sneak"]};
backgrounds[1] = {name: "Entertainer",skills:["Barter","Speech","Intimidation"]};
backgrounds[2] = {name: "Farmer",skills:["Crafting","Survival","Intimidation"]};
backgrounds[3] = {name: "Journalist",skills:["Breach","Speech","Sneak"]};
backgrounds[4] = {name: "Mercenary",skills:["Guns","Melee weapons","Survival"]};
backgrounds[5] = {name: "Pastor",skills:["Barter","Speech","Intimidation"]};
backgrounds[6] = {name: "Scientist",skills:["Energy weapons","Breach","Science"]};
backgrounds[7] = {name: "Scribe",skills:["Crafting","Energy weapons","Medicine"]};
backgrounds[8] = {name: "Vault dweller",skills:["Science","Speech","Medicine"]};
backgrounds[9] = {name: "Doctor",skills:["Science","Breach","Medicine"]};
backgrounds[10] = {name: "Drifter",skills:["Sneak","Breach","Unarmed"]};
backgrounds[11] = {name: "Guard",skills:["Guns","Speech","Melee weapons"]};
backgrounds[12] = {name: "Hermit",skills:["Explosives","Medicine","Survival"]};
backgrounds[13] = {name: "Laborer",skills:["Crafting","Speech","Melee weapons"]};
backgrounds[14] = {name: "Mechanic",skills:["Crafting","Guns","Science"]};
backgrounds[15] = {name: "Pilgrim",skills:["Energy weapons","Sneak","Survival"]};
backgrounds[16] = {name: "Pit fighter",skills:["Barter","Melee","Unarmed"]};
backgrounds[17] = {name: "Soldier",skills:["Explosives","Guns","Medicine"]};
backgrounds[18] = {name: "Trader",skills:["Barter","Speech","Intimidation"]};
backgrounds[19] = {name: "Wastelander",skills:["Guns","Survival","Unarmed"]};    

function submit_special()
{
    S = Strength.value - 5;
    P = Perception.value - 5;
    E = Endurance.value - 5;
    C = Charisma.value - 5;
    I = Intelligence.value - 5;
    A = Agility.value - 5;
    L = Luck.value - 5;
    if (C >= S)
    {
        intimidation = C;
    } else
    {
        intimidation = S;
    } 

    skills = [C,P,I,P,P,A,intimidation,P,S,I,A,C,E,S];

    
    var ab = document.getElementById("skills");
    ab.innerText = ""

    for (let i = 0; i < skills_name.length; i++)
    {
        ab.innerText = ab.innerText + skills_name[i] + ": " + skills[i] + "\n"
    }

    var bg = document.getElementById("Backgrounds");
    bg.innerText = ""
    for (let i = 0; i < backgrounds.length; i++)
    {
        bg.innerHTML = bg.innerHTML + "\n <option>" + (i+1) + ". " + backgrounds[i].name + "</option>" + "\n";
    }

}

function selectbox()
{
    S = Strength.value - 5;
    P = Perception.value - 5;
    E = Endurance.value - 5;
    C = Charisma.value - 5;
    I = Intelligence.value - 5;
    A = Agility.value - 5;
    L = Luck.value - 5;
    if (C >= S)
    {
        intimidation = C;
    } else
    {
        intimidation = S;
    } 

    skills = [C,P,I,P,P,A,intimidation,P,S,I,A,C,E,S];

    var sb = Backgrounds.value;
    back = sb.slice(0,1);
    back -= 1;
    console.log(back)
    for (let i = 0; i < 14; i++)
    {
        skills[skills_name.indexOf(backgrounds[back].skills[i])] = skills[skills_name.indexOf(backgrounds[back].skills[i])] + 2;
    }

    var ab = document.getElementById("skills");
    ab.innerText = ""

    for (let i = 0; i < 14; i++)
    {
        ab.innerText = ab.innerText + skills_name[i] + ": " + skills[i] + "\n"
    }
}