/**
 * Created by the JavaScript Development Team
 * Name: Simeon Smith
 * Class: PWA
 * Goal: Goal7
 */

var names = ['John Smith', 'Michael Jones', 'Emily Kent', 'Robert Johnson', 'Maurice Milton'],  //Array of people names
    people = [];                                                                                //Array to hold people objects.

var populateHTML = function(){      //populateHTML function to display people information on the page
    for(var i = 0, j = people.length; i<j; i++){    //For each person.
        document.getElementById('r' + people[i].row + 'c1').innerHTML = people[i].fullName;     //Display the full name in the people objects row and column 1
        document.getElementById('r' + people[i].row + 'c2').innerHTML = people[i].job;          //Display the job in the people objects row and column 2
        document.getElementById('r' + people[i].row + 'c3').innerHTML = people[i].action;       //Display the action in the people objects row and column 3
    }
    return false;                       //Return false;
};

function runUpdate(){               //runUpdate function to update the actions on the page
    people.forEach(function(element){       //For each person
        element.update();                       //Run the persons update method.
    });
    return false;                       //Return false
};

for (var i = 0, j = 3; i<j; i++) {  //For 3 iterations
    var rowNum = i + 1,                 //Set the rowNum to iteration plus 1
        name = names[randNum(names.length - 1,0)];     //Set the name to a random name from the names array based on the randNum.

    if (i>0) {                          //If i>0
        for(var x = 0, y = people.length; x<y; x++){    //For each object in the people array
            if (name == people[x].fullName) {               //If the name generated is the same as the curent people's fullName
                name = names[randNum(4,0)];                 //Regenerate the name.
                x--;                                        //Subtract 1 from the iteration to re-compare.
            }
        }
    }

    people[i] = new person(name, rowNum);   //Create a new people based on the person constructor passing i the name and rowNum.
}

populateHTML();     //Run populateHTML function

setInterval(runUpdate, 5000);   //Run runUpdate function every 5 seconds.