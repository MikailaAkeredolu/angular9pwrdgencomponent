import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = '';
  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;

onChangeLength(value: string) {
    // tslint:disable-next-line: radix
    const parsedValue = parseInt(value);
    // Check if user entered text and not a number
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }

}

onChangeUseLetters() {
  this.includeLetters = !this.includeLetters ;
}

onChangeUseNumbers() {
  this.includeNumbers = !this.includeNumbers;
}

onChangeUseSymbols() {
  this.includeSymbols = !this.includeSymbols;
}


onButtonClick() {
  const numbers = '1234567890';
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  const symbols = '!@#$%^&*()';

  let validChars = '';

  if (this.includeLetters) {
    validChars += letters;
  }

  if (this.includeNumbers) {
    validChars += numbers;
  }

  if (this.includeSymbols) {
    validChars += symbols;
  }

  // create a local variable
  let generatedPassword = '';
  // tslint:disable-next-line: prefer-for-of
  for (let x = 0; x < this.length; x++) {
        const index = Math.floor(Math.random() * validChars.length);
        generatedPassword += validChars[index];
    }

  this.password = generatedPassword;      // Set to password property
  }

}



  // this.password = 'My Password';
  // console.log(
  // `
  // About to geenrate a password with the ff:
  // Includes  letters: ${this.includeLetters}
  // Includes  letters: ${this.includeNumbers}
  // Includes  letters: ${this.includeSymbols}
  // `
  // );
