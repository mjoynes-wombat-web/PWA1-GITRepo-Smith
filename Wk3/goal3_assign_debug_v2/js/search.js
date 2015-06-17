/*
 * Simeon Smith
 * 6-3-2015
 * Week 1 Analyze Buggy Search v1
 */

// Create privatized scope using a self-executing function
(function(){

    // Variable initialization (DO NOT FIX ANY OF THE BELOW VARs)
    var resultsDIV = document.getElementById("results"),
        searchInput = document.forms[0].search
        ;                                       //Unused Var.

    // Validates search query
    var validate = function(query){ //Extra = for assigning the var to a function. Validate is miss-spelled

        // Trim whitespace from start and end of search query
        while(query.charAt(0) === " "){	//Should be === not = since strings are being compared.
            query = query.substring(1, query.length);
        };
        while(query.charAt(query.length-1) === "") {
            query = query.substring(0, query.length - 1);
        };		//No closing curly brace.

        // Check search length, must have 3 characters
        if(query.length < 3){
            alert("Your search query is too small, try again.");	//Missing the quote at the end of the string.

            // (DO NOT FIX THE LINE DIRECTLY BELOW)
            searchInput.focus();
            return;
        };

        search(query);
    };

    // Finds search matches
    var search = function(query){	//Missing beginning curly brace at the end.

        // split the user's search query string into an array
        var queryArray = query.split(" ");  //Should be query.split not join.

        // array to store matched results from database.js
        var results = [];

        // loop through each index of db array
        for(var i=0, j=db.length; i<j; i++) {

            // each db[i] is a single video item, each title ends with a pipe "|"
            // save a lowercase variable of the video title
            var dbTitleEnd = db[i].indexOf('|');
            var dbItem = db[i].toLowerCase().substring(0, dbTitleEnd);	  //.toLowerCase doesn't use proper camel case. .dbItem doesn't use proper camel case.

            // loop through the user's search query words
            // save a lowercase variable of the search keyword
            for (var ii = 0, jj = queryArray.length; ii < jj; ii++) {
                var qItem = queryArray[ii].toLowerCase();  //.toLowerCase doesn't use proper camel case.

                // is the keyword anywhere in the video title?
                // If a match is found, push full db[i] into results array
                var compare = dbItem.indexOf(qItem);    //qItem and .dbItem doesn't use proper camel case.
                if (compare !== -1) {
                    results.push(db[i]);
                };
            };	//Missing closing curly braces.
        };	//Missing closing curly braces.

        results.sort();

        // Check that matches were found, and run output functions
        if(results.length === 0){	 //Should use === to compare instead of = to assign.
            noMatch();
        }else{
            showMatches(results);
        };
    };

    // Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
    var noMatch = function(){
        /*          //Redundant, simplified below.
        var html = '<p>No Results found.</p>'+  //Unnecessary '' +.
                '<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>'
            ;
        resultsDIV.innerHTML = html;
        */

        resultsDIV.innerHTML = '<p>No Results found.</p>' +  //Unnecessary '' +.
            '<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>';
    };

    // Put matches into page as paragraphs with anchors
    var showMatches = function(results){

        // THE NEXT 4 LINES ARE CORRECT.
        var html = '<p>Results</p>',
            title,
            url
            ;

        // loop through all the results search() function
        for(var i=0, j=results.length; i<j; i++){

            // title of video ends with pipe
            // pull the title's string using index numbers
            var titleEnd = results[i].indexOf('|');     //Missing var declaration making in a global var.
            title = results[i].substring(0, titleEnd);	//Should be .substring

            // pull the video url after the title
            url = results[i].substring(titleEnd+1, results[i].length); //Simplify using the titleEnd var.

            // make the video link - THE NEXT LINE IS CORRECT.
            html += '<p><a href=' + url + '>' + title + '</a></p>';
        };
        resultsDIV.innerHTML = html; //THIS LINE IS CORRECT.
    };

    // The onsubmit event will be reviewed in upcoming Course Material.
    // THE LINE DIRECTLY BELOW IS CORRECT
    document.forms[0].onsubmit = function() {
        var query = searchInput.value;
        validate(query);    //validate is miss-spelled.

        // return false is needed for most events - this will be reviewed in upcoming course material
        // THE LINE DIRECTLY BELOW IS CORRECT
        return false;
    };	//No closing curly brace for document.forms[0].onsubmit = function()

})();