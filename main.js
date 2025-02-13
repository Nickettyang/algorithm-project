function analyzeSentence(sentence) {
    // Initialize counters
    let length = 0;
    let wordCount = 0;
    let vowelCount = 0;
    const vowels = 'aeiou';

    // Ensure the sentence ends with a period
    if (sentence.charAt(sentence.length - 1) !== '.') {
        throw new Error("The sentence must end with a period.");
    }

    // Iterate through each character except the last period
    for (let i = 0; i < sentence.length - 1; i++) {
        const char = sentence.charAt(i);
        length++;

        // Count vowels
        if (vowels.includes(char.toLowerCase())) {
            vowelCount++;
        }

        // Count words
        if (char === ' ') {
            wordCount++;
        }
    }

    // Add one to wordCount for the last word
    wordCount++;

    return {
        length: length,
        wordCount: wordCount,
        vowelCount: vowelCount
    };
}

// Example usage
const sentence = "This is an example sentence.";
const result = analyzeSentence(sentence);
console.log(`Length of the sentence: ${result.length}`);
console.log(`Number of words: ${result.wordCount}`);
console.log(`Number of vowels: ${result.vowelCount}`);
