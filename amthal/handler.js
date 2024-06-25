const AMTHAL = require("./data/index.json");


const randomMathal = () => {
    return AMTHAL[Math.floor(Math.random() * AMTHAL.length)];
}

const randomTen = () => {
    let randomList = new Set();

    while (randomList.size < 10) {
        let random = Math.floor(Math.random() * AMTHAL.length);
        if (!randomList.has(random)) {
            randomList.add(random);
        }
    }

    return [...randomList].map(index => {
        return AMTHAL[index];
    })


    // let array = [...randomList];
    // let output = [];
    // for (let i in array) {
    //     output.push(AMTHAL[array[i]]);
    // }
    // return output

}
module.exports = { randomMathal, randomTen };