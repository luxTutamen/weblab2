export default class DictionaryView {
  constructor(model) {
    this.model = model;
  }

  toHtml() {

    let words = Array.from(this.model.words).map(w => `
        <div id="${this.model.words.values().pos}"
        <tr>
          <td>
            ${w}
          </td>
          <td>
            <button class="del-button" onClick="model.deleteWord()" >Remove</button>
          </td>
        </tr>
    `);

    // console.log(this.model.words);

    return`
          <table>
            <tr>
              ${words}
            </tr>
          </table>
         `;

  }
}