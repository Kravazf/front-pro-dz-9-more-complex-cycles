number = 20;

do {
  document.write(`
  ${number.toLocaleString('uk-UA')}`)
  number += 0.5;
} while (number <=30);

document.write(`<br><br>`);

dollarAmount = 10;
dollarExchangeRate = 27;

do {
  document.write(`
  ${dollarAmount}\ $ * ${dollarExchangeRate} UAH 
  = ${dollarAmount * dollarExchangeRate} UAH <br>` )
  dollarAmount += 10;
} while (dollarAmount <=100);

document.write(`<br><br>`);

wholeNumber = parseInt(prompt('Введіть ціле число число:').trim());
variableNumber = 1;
squareOfIntegers = null;

do {
  if (squareOfIntegers <= wholeNumber) {
    document.write(`${variableNumber} `);
  }
  variableNumber++;
  squareOfIntegers = variableNumber * variableNumber;
} while (squareOfIntegers <= wholeNumber && variableNumber <= 100);

document.write(`<br><br>`);

number = parseInt(prompt('Введіть ціле число:'));

divisor = 2;
isPrime = true;

do {
  if (number % divisor === 0 && number !== divisor || number === 1) {
    isPrime = false;
  }
  divisor++;
} while (divisor < number);

if (isPrime) {
  document.write(`${number} є простим числом`);
} else {
  document.write(`${number} не є простим числом`);
}

document.write(`<br><br>`);

number = parseInt(prompt('Введіть ціле число:').trim());
result = number;

while (result % 3 === 0 && result >= 3) {
  result /= 3;
}

if (result === 1) {
  document.write(`${number} можна отримати шляхом зведення числа 3 у деякий ступінь`);
} else {
  document.write(`${number} не можна отримати шляхом зведення числа 3 у деякий ступінь`);
}
