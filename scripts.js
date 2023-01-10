// Знайти суму та кількість позитивних елементів.

const userArrey = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
let sum = 0;
let quantity = 0;

for (let i of userArrey) {
    if (i >= 0) {
        sum += i;
        quantity++
    }
}

console.log(sum, quantity);

// Знайти мінімальний елемент масиву та його порядковий номер.

let minElement = null;
let minElementIndex = 0;


for (let b = 1; b < userArrey.length; b++) {
    const item = userArrey[b];
        
    if (item < minElement) {
        minElement = item;
        minElementIndex = b;
    }
}

console.log(minElement, minElementIndex);

// Знайти максимальний елемент масиву та його порядковий номер.

let maxElement = null;
let maxElementIndex = 0;


for (let a = 1; a < userArrey.length; a++) {
    const itemMax = userArrey[a];
        
    if (itemMax > maxElement) {
        maxElement = itemMax;
        maxElementIndex = a;
    }
}

console.log(maxElement, maxElementIndex);

// Визначити кількість негативних елементів.

let minQuantity = 0;

for (let i of userArrey) {
    if (i <= 0) {
        minQuantity++
    }
}

console.log(minQuantity);

// Знайти кількість непарних позитивних елементів.

let posQuantity = 0;

for (let c of userArrey) {
    if (c >= 0) {
        if (c % 2 !== 0) {
            posQuantity ++
        }
    }
}

console.log(posQuantity);

// Знайти кількість парних позитивних елементів.

let pos2Quantity = 0;

for (let d of userArrey) {
    if (d >= 0) {
        if (d % 2 == 0) {
            pos2Quantity ++
        }
    }
}

console.log(pos2Quantity);

// Знайти суму парних позитивних елементів.

let posSum = 0;

for (let g of userArrey) {
    if (g >= 0) {
        if (g % 2 == 0) {
            posSum += g;
        }
    }
}

console.log(posSum);

// Знайти суму непарних позитивних елементів.

let pos2Sum = 0;

for (let f of userArrey) {
    if (f >= 0) {
        if (f % 2 !== 0) {
            pos2Sum += f;
        }
    }
}

console.log(pos2Sum);

// Знайти добуток позитивних елементів.

let plural = 1;

for (let h of userArrey) {
    if (h >= 0) {
        plural *= h;
    }
}

console.log(plural);

// Знайти найбільший серед елементів масиву, остальні обнулити.

let max2Element = null;


for (let a = 1; a < userArrey.length; a++) {
    const itemMax = userArrey[a];
        
    if (itemMax > max2Element) {
        max2Element = itemMax;
    }
}

for (let a = 0; a < userArrey.length; a++) {
    if (userArrey[a] < max2Element) {
        userArrey[a] = 0;
    }
}

console.log(userArrey);







