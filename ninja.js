class Ninja {
    constructor(name){
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log(this.name);
    }
    showStats(){
        console.log(this.health);
        console.log(this.speed);
        console.log(this.strength);
    }
    drinkSake(){
        this.health += 10;
    }
}

class Sensei extends Ninja{
    constructor(name){
        super(name);
        this.wisdom = 10;
    }
    wisdom(){
        super.drinkSake();
        console.log("Do as I say, not as I do.");
    }

}