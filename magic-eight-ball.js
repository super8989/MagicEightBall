const userName = 'Juhui';

if (userName) {
  console.log('Hello, ' + userName);
} else {
  console.log('Hello!');
}

//  userName === "jane"
//  !userName === false
//  !!userName === true
// turning a variable into a boolean

switch(!!userName) {
  case true:
    console.log('Hello, ' + userName);
    break;
  case false:
    console.log('Hello!');
    break;
}

userName ? console.log('Hello, ' + userName) : console.log('Hello!');


const userQuestion = 'Will I become a werewolf tonight?';

console.log(userName + ' asked, ' + userQuestion);

const randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

switch(randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
}

console.log('The Magic 8-ball answered: ' + eightBall);
