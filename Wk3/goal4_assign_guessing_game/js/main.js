/**
 * GUESSING GAME:
 *
 * Created By: Simeon Smith
 * Date: 06-16-2015
 * 
 * GUESSING GAME
 */

//Game variables

(function (){

    var randomNum = Math.floor((Math.random() * 10) + 1);

    console.log('Random Number: ' + randomNum);

    var html = document.getElementsByTagName('html');

    console.log('HTML Object:');
    console.log(html);

    var button = document.querySelector('button');
    var num = 0;
    var correct = false;

    console.log('Button Object:');
    console.log(button);

    var buttonClick = button.addEventListener("click", function(){

        var input = document.getElementById('input').value;

        console.log('-------Button Click Function Output -------');
        console.log('User input: ' + input);

        if(input == null || isNaN(input)){
            alert('Please enter a number.');
        }else if(correct) {
            alert('You already guessed the number correctly and it was ' + randomNum + '.');
        }else if((input<=10 && input>=1) && num<3){

            if (input > randomNum) {
                alert('Your number is too high.');
                num++
            } else if (input < randomNum) {
                alert('Your number is too low');
                num++
            } else if (input == randomNum){
                alert('You guessed correctly!');
                correct = true;
            }

        }else if(num<3){
            alert('You entered an incorrect number.');
        }else {
            alert('You are out of guesses.');
        }
    });

})();