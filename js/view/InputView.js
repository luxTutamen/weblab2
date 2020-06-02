export default class InputView {

  constructor(text) {
    this.text = text;
  }

  toHtml() {
    return `
    <textarea cols="50" rows="10">
     
    </textarea>>
    `
  }

}