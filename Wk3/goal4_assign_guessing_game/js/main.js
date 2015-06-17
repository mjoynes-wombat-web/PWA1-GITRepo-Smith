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

    console.log('Button Object:');
    console.log(button);

    var buttonClick = button.addEventListener("click", function(){

        console.log('-------Button Click Function Output -------');
        var input = document.getElementById('input').value;
        console.log('User input: ' + input);


    });

})();