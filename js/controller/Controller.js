import Dictionary from "../model/Dictionary.js";
import DictionaryView from '../view/DictionaryView.js';
import InputView from '../view/InputView.js';
import InputPanel from "../model/InputPanel.js";

export default class Controller {
    constructor(model) {
        this.model = model;

        this.dictionaryView = new DictionaryView(model);
        this.inputView = new InputView();


        this.initOnModelChange();

        document
            .querySelector('#word-add')
            .addEventListener('click', e => {
                let word = document.getElementById("word-input").value;
                this.model.addWord(word);
            });

        document.querySelector('#dictionary-list').innerHTML = this.dictionaryView.toHtml();


    }

    onChangeCallback() {
        /* updates UI when a model has changed (title, done attributes) */
        document.querySelector('#dictionary-list').innerHTML = this.view.toHtml();
    }

    itemToggleDone(id) {
        console.log("itemToggleDone")
    }


    initOnModelChange() {
        /* updates UI when a model list has changed (adds, deletes items) */
        let handler = {
            set: (obj, prop, val) => {
                obj[prop] = val;
                document
                    .querySelector('#to-do')
                    .innerHTML = this.itemListView.toHtml();
                return true;
            }
        };
        this.model.items = new Proxy(this.model.words, handler);
    }

    //  dictionary manipulations endpoints

}