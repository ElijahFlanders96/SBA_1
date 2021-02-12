var legends = ["Wraith", "Bangalore", "Mirage", "Octane", "Revenant", "Horizon", "Fuse", "Gibraltar", "Caustic", "Wattson", "Rampart", "Lifeline", "Loba", "Bloodhound", "Pathfinder", "Crypto"]

function getRandomNumber(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;

    return result;
}

function getRandomLegend() {
    for (i=0; i<3; i++) {
        let index = getRandomNumber(0, legends.length-1);
        console.log(legends[index]);
        legends.splice(index, 1);
    } if (i=3) {
        console.log("Where we droppin' boys?")
    }
}