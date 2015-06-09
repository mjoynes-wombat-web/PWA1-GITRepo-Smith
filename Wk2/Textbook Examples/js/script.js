/**
 * Created by Simeon on 6/8/2015.
 */

console.log("------------------WEEK 2 TEXTBOOK EXAMPLES----------------------");

var subject = 'Just a stringg';

var probe = typeof subject;

console.log(probe);

var test1 = 'abcdef',
    test2 = 123,
    test3 = true,
    test4 = {},
    test5 = [],
    test6,
    test7 = {'abcdef': 123},
    test8 = ['abcdef', 123],
    test10 = null;

function test9(){return 'abcdef'};

console.log(typeof test1);
console.log(typeof test2);
console.log(typeof test3);
console.log(typeof test4);
console.log(typeof test5);
console.log(typeof test6);
console.log(typeof test7);
console.log(typeof test8);
console.log(typeof test9);
console.log(typeof test10);

if (99 == '99'){
    console.log("A number equals a string.");
}else{
    console.log('No way a number equals a string.');
}