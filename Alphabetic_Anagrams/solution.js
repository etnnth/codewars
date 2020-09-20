function listPosition(word) {
    let permutations = 1
    const counts = new Map()
    let count = 0
    const length = word.length
    const Alphabet = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
    let rang = 1
    for (let i = length - 1; i >= 0; i--) {
        let letter = word[i]
        if (!counts.has(letter)) {
            counts.set(letter, 0)
        }
        counts.set(letter, counts.get(letter) + 1)
        count ++
        permutations *= count / counts.get(letter)
        for (let j = 0; Alphabet[j] < letter; j++) {
            if (counts.has(Alphabet[j]) && counts.get(Alphabet[j]) > 0) {
                rang += permutations * counts.get(Alphabet[j]) / count
            }
        }
    }
    // permutations is the totalnumber of possible of permutations of the word
    // it is compute as count! / (counts[c0]! * counts[c1]! * ... * counts[cn]!) 
    // with count the number of character and counts[ci] the count of each 
    // character ci 
    // the rang of the word is compute as the sum of all permutations
    // that give a word lower in alphabetic order than the input
    // For each character (c) from left to right we add to the rang the sum of
    // all possible permutations with cj..... where ci < c
    return rang
}


testValues = {
    'A' : 1, 
    'ABAB' : 2, 
    'AAAB' : 1, 
    'BAAA' : 4, 
    'QUESTION' : 24572, 
    'BOOKKEEPER' : 10743,
    'NHWVBNYPGFIHQWQEKVZJ' : 36498843490023370,
    'KGUKGVZXBWX' : 1517515,
}

for (const [word, rang] of Object.entries(testValues)) {
    console.log(word)
    console.log('obtained ', listPosition(word))
    console.log('excepted ', rang)
    console.log('------------------')
}



