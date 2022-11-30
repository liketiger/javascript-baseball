const RandomNumberGenerator = require('./RandomNumberGenerator.js');

class BaseBall {
  #randomNumber;

  #userInput;

  constructor() {
    this.#randomNumber = [];
    this.#userInput = [];
  }

  generateRandomNumber() {
    this.#randomNumber = RandomNumberGenerator.generate();
  }

  
}