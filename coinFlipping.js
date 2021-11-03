function tossCoin() {
        return Math.random() > 0.5 ? "heads" : "tails";
    }
        
const fiveHeadsSync = new Promise((resolve, reject) => {
    
    let headsCount = 0;
    let attempts = 0;
    while(headsCount < 5) {
        attempts++;
        let result = tossCoin();
        console.log(`${result} was flipped`);
        if(result === "heads"){
            headsCount++;
        } else {
            headsCount = 0;
        }
    }
    if(headsCount === 5){
        resolve(`It took ${attempts} tries to flip five "heads"`)
    } else {
        reject("there was an error")
    }
})

fiveHeadsSync
    .then( res => console.log(res))
    .catch( err => console.log(err));