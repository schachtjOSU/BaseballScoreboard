/**
 * Created by Jeffrey Schachtsick on 4/2/2017.
 * Get today's date.  Return an object with the day's date, month, and year.
 * Example of April 2nd, 2017 is day: 02, month: 04, year: 2017.
 * Source of date example: http://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript
 */

function getDate() {
    // Create date object to get the day, month, and full year
    var date = new Date();
    // Create object to store current date data
    var today = new Object();
    today.day = date.getDate();
    // Add 1, cause January is 0.
    today.month = date.getMonth() + 1;
    today.year = date.getFullYear();

    // Modify day and month to add 0 to end of string if less than 10
    if(today.day < 10) {
        today.day = '0' + today.day;
    }
    if(today.month < 10) {
        today.month = '0' + today.month;
    }
    //console.log(today.day);
    //console.log(today.month);
    //console.log(today.year);

    return today;

}

// Get the Date
getDate();
