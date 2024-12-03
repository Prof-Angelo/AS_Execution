function arithmeticSequence(n, firstTerm, commonDifference) {
    if (n <= 0) {
        return [];
    }

    let sequence = [];
    for (let i = 0; i < n; i++) {
        sequence.push(firstTerm + i * commonDifference);
    }
    return sequence;
}



const n = 10; /* Number of terms */
const firstTerm = 3; /* First Term */

const commonDifference = 5; 
/* Common difference */

console.log(`Arithmetic sequence:`, arithmeticSequence(n, firstTerm, commonDifference));