class Unit {
    constructor(name, cost, power, resilience){
        this.name = name;
        this.cost = cost;
        this.power = power;
        this.resilience = resilience;
    }
    attack(target){
        if (target instanceof Unit){
            if(target.resilience <= this.power){
                console.log(`${target.name} has been defeated!`)
            }
            else{
                target.resilience -= this.power;
            }
        }
    }
}

const redBeltNinja = new Unit("Red Belt Ninja",3, 3, 4);
const blackBeltNinja = new Unit("Black Belt Ninja",4, 5, 4);

class Effect {
    constructor(cost, text, stat, magnitude){
        this.cost = cost;
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    play(target){
        if(target instanceof Unit){
            target[this.stat] += this.magnitude;
            console.log(`${target.name}'s ${this.stat} has changed by ${this.magnitude}`);
        }
    }
}

const hardAlgorithm = new Effect(2, "increase target's resilience by 3", "resilience", 3);
const unhandledPromise = new Effect(1, "reduce target's resilience by 2", "resilience", -2);
const pairProgramming = new Effect(3, "increase target's power by 2", "power", 2);

hardAlgorithm.play(redBeltNinja);
unhandledPromise.play(redBeltNinja);
pairProgramming.play(redBeltNinja);
blackBeltNinja.attack(redBeltNinja);