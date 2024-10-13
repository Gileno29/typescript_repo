class Character{
    name: string
    stregth: number;
    skill: number;

    constructor( stregth: number, skill:number){
        this.name='';
        this.stregth=stregth;
        this.skill=skill;
    }
    attack(): void{
        console.log(`Atack with ${this.stregth} points`);

    }
}

const p1 = new Character(10,98);
console.log(p1.attack());