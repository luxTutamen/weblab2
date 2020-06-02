export default class Dictionary {
    constructor() {
        this.words = new Set(["can", "this", "add", "plus", "sub", "minus", "apple", "dog", "horse", "fly"]);
    }

    addWord(word) {
        this.words.add(word);

        console.log("new word added! " + word)
    }

    deleteWord(word) {
        console.log("delere" + word);
    }

    checkWord(word) {
        return this.words.has(word.toLowerCase());
    }

}