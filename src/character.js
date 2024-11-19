class Character {
    constructor(name) {
        this.name = name;
    }
}


const character1 = new Character('Warrior');
const character2 = new Character('Mage');

const team = new Team();
team.add(character1);
team.addAll(character2);

console.log(team.toArray()); 


try {
    team.add(character1); 
} catch (error) {
    console.error(error.message); 
}