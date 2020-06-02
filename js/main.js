import Controller from './controller/Controller.js';
import Dictionary from './model/Dictionary.js';
import View from "./view/View";

let model = new Dictionary();
let view = new View(model);

let controller = new Controller(model, view);
