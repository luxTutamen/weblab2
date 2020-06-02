export default class Word {
    constructor(word) {
        this.word = word.toLowerCase();
    }

    getFirstLetter() {
        return this.word.charAt(0);
    }

    compareTo(otherWord) {
        return (this.word == otherWord.word)
            ? 1
            : (this.word > otherWord.word)
                ? 2
                : 0
    }
}