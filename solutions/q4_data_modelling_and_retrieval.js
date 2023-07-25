/* eslint-disable operator-assignment */
/* eslint-disable no-console */
// Create a list of fruits with their properties (name, color, pricePerKg)
// and convert it into a format so that for a given fruit name
// retrieval of its color and pricePerKg value is fast


// Write your code here

// npm install node-fetch@2
// npm install -g json-server
// json-server .\FruitsData.json
// const fetch = require('node-fetch');


class Fruits {
    constructor(name,color,pricePerKg) {
        this.name = name;
        this.color = color;
        this.pricePerKg = pricePerKg;
    }
}

const fruitFinder = (fruitName) => {
    // fetch('..\resources\FruitsData.json')
    // fetch('http://localhost:3000/Fruits',{method: 'GET'})
    //     .then(res => { return res.json()})
    //     .then(data => {  
    //         let outData = '';
    //         // console.log(data);
    //         data.forEach(item => {
    //             if(item.name === fruitName) {
    //                 outData += item.color + ' ' + item.name + ' ' + item.pricePerKg + '\n';
    //             }
    //         });
    //         console.table(outData);
    //         // return outData;
    //     })
    //     .catch(err => {
    //         console.error(err);
    //         console.log('Caught error - Fruit not found !!');
    //     });

    const fruitData = [];
    fruitData.push(new Fruits('Apple','Red',250));
    fruitData.push(new Fruits('Apple','Green',300));
    fruitData.push(new Fruits('Mango','Green',150));
    fruitData.push(new Fruits('Mango','Yellow',300));
    fruitData.push(new Fruits('Banana','Green',50));
    fruitData.push(new Fruits('Banana','Yellow',70));
    fruitData.push(new Fruits('Banana','Red',100));
    fruitData.push(new Fruits('Orange','Orange',120));
    fruitData.push(new Fruits('Grapes','Black',90));

    let outData = fruitData.filter(fruit=>fruit.name.toLowerCase() === fruitName.toLowerCase());
    // console.log(outData);
    return outData;
};

// fruitFinder("Apple");
console.table(fruitFinder('Banana'));
