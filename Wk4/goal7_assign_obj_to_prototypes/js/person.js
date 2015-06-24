/**
 * Created by the JavaScript Development Team
 * Name: Simeon Smith
 * Class: PWA
 * Goal: Goal7
 */

var person = function(name, row){       //Person constructor with name and row args.
                    this.fullName = name,           //Person's fullName = name arg
                    this.job = jobs[randNum(jobs.length - 1, 0)],   //Person's job  = random job from the jobs array.
                    this.action = actions[randNum(actions.length - 1, 0)],  //Person's action = random action from the actions array.
                    this.row = row                  //Person's row = row arg
                },
    randNum = function(max, min){       //Random number generation function with max and min arg
                    return Math.round(Math.random()*(max - min) + min); //Return a random whole number based on the max and min args.
                },
    jobs = ['Accountant', 'Graphic Designer', 'Fire Fighter', 'Professor'], //Job's array
    actions = ['Eating', 'Sleeping', 'Exercising', 'Working', 'Playing'];   //Action's array


window.person = person;         //Provide window with person constructor
window.randNum = randNum;       //Provide window with randNum function


person.prototype.update = function(){   //Add update method to person prototype
    this.action = actions[randNum(actions.length - 1, 0)];  //Redesign the current persons action randomly from the actions array
    document.getElementById('r' + this.row + 'c3').innerHTML = this.action; //Update the corresponding HTML

    return false;   //Return false.
};


