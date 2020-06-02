import DictionaryView from './DictionaryView.js';
import InputView from './InputView.js';

export default class View {
    constructor(model) {
        this.model = model;
        
        this.controllerOnAddWord = null;
        this.controllerOnDelWord = null;

        this.controllerOnFieldChange = null;
        this.controllerOnRuleChange = null;

        document.querySelector('#fields-lst').addEventListener('input', (e) => this.onFieldChange(e));
        document.querySelector('#rules-lst').addEventListener('input', (e) => this.onRuleChange(e));
        document.querySelector('#fields-lst').addEventListener('click', (e) => this.onFieldClick(e));
        document.querySelector('#rules-lst').addEventListener('click', (e) => this.onRuleClick(e));
    }

    onFieldChange(e) {
        this.controllerOnFieldChange(Number(e.target.id), e.target.value);
    }

    onRuleChange(e) {
        this.controllerOnRuleChange(Number(e.target.id), e.target.value);
    }

    onFieldClick(e) {
        if (e.target.className === 'delf-button') {
            this.controllerOnDelWord(e.target.dataset.id);
            return;
        }
    }

    onRuleClick(e) {
        if (e.target.className === 'delr-button') {
            this.controllerOnDelWord(e.target.dataset.id);
            return;
        }
    }

    onAddWord(e) {
        this.controllerOnAddWord();
    }

    fieldsToHtml() {
        const fieldsHtml = this.model.words.map( (field) => {
            const fieldView = new InputView();
            return fieldView.toHtml();
        }).join("");
        return `<table border="0">${fieldsHtml}</table>`;
    }

    rulesToHtml() {
        const rulesHtml = this.model.rules.map( (rule) => {
            const ruleView = new DictionaryView(rule);
            return ruleView.toHtml();
        }).join("");
        return `<table border="0">${rulesHtml}</table>`;
    }

    setControllerOnAddWord(fn) {
        this.controllerOnAddWord = fn;
    }

    setControllerOnDelWord(fn) {
        this.controllerOnDelWord = fn;
    }

    setControllerOnFieldChange(fn) {
        this.controllerOnFieldChange = fn;
    }

    setControllerOnRuleChange(fn) {
        this.controllerOnRuleChange = fn;
    }
}