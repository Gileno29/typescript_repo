"use strict";
class Character {
    constructor(stregth, skill) {
        this.name = '';
        this.stregth = stregth;
        this.skill = skill;
    }
    attack() {
        console.log(`Atack with ${this.stregth} points`);
    }
}
const p1 = new Character(10, 98);
console.log(p1.attack());
