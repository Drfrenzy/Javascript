let arr = [2, 2, 3, 3, 5, 2, [5, 4, 4, 5, 6, 6]];
let counts = {};
let maxCount = 0;
let mostFrequent;

for (let num of arr) {
    counts[num] = (counts[num] || 0) + 1;
    if (counts[num] > maxCount) {
        maxCount = counts[num];
        mostFrequent = num;
    }
}

console.log(mostFrequent);
