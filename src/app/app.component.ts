import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  length = 0;
  isLetters = false;
  isNumbers = false;
  isSymbols = false;

  password = ""

  onChangeLength(event: any) {
    const parsedValue = parseInt(event.target.value)

    console.log(event.target.value)

    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }


  byNumbers() {
    this.isNumbers = !this.isNumbers;
  }

  bySymbols() {
    this.isSymbols = !this.isSymbols;
  }

  byLetters() {
    this.isLetters = !this.isLetters;
  }

  generate() {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "1234567890";
    const symbols = "~!@#$%^&*()_+";

    let value = "";

    if (this.isLetters) {
      value += letters;
    }

    if (this.isNumbers) {
      value += numbers;
    }

    if (this.isSymbols) {
      value += symbols;
    }

    let generatedPassword = "";

    for (let index = 0; index < this.length; index++) {
      const element = Math.floor(Math.random() * value.length);
      generatedPassword += value[element]
    };

    this.password = generatedPassword;

    console.log(`
    include letters: ${this.isLetters}
    include numbers: ${this.isNumbers}
    include symbols: ${this.isSymbols}
    `)
  }


}
