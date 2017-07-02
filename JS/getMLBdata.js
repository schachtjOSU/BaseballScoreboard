/**
 * Created by Jeffrey Schachtsick on 4/2/2017.
 *
 */

// Get the current Date
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
    // Return the date object
    return today;
}

// Function to create an URL string to be sent to get the data
function createUrl(today) {
    var dd = today.day;
    var mm = today.month;
    var yyyy = today.year;
    var url = "http://gd2.mlb.com/components/game/mlb/";

    // Add the year to the string
    url += "year_" + yyyy;
    // Add the month to the string
    url += "/month_" + mm;
    // Add the day to the string
    url += "/day_" + dd;

    // Add the rest of the string
    url += "/master_scoreboard.json";

    // return the string
    return url;
}

// Function to make a request
function dataRequest(url_string) {
    $.ajax({
        dataType: "json",
        url: url_string,
        success: function (data) {
            // Get array of games for the day
            var arr_game = []
            arr_game = data.data.games.game;

            // Get the number of games
            var num_games = arr_game.length;

            console.log(arr_game);

            // If there are no games, display no games
            if (num_games == 0) {
                console.log("There are no games today!");
            }
            else {
                // Display the teams and scores
                for (var i = 0; i < num_games; i++) {
                    // Get the home and away abbreviations and the score for both
                    var away_team = arr_game[i].away_name_abbrev;
                    var home_team = arr_game[i].home_name_abbrev;

                    // Check the status of the game before getting a score
                    if (arr_game[i].status.status == "Postponed") {
                        console.log("Away: " + away_team);
                        console.log("Home: " + home_team + " - PPD");
                    }
                    else if (arr_game[i].status.status == "Preview") {
                        var time_zone = arr_game[i].home_time_zone;
                        var time_game = arr_game[i].home_time;
                        console.log("Away: " + away_team);
                        console.log("Home: " + home_team + " - " + time_game + " / " + time_zone);
                    }
                    else {
                        // Get the scores
                        var away_runs = arr_game[i].linescore.r.away;
                        var home_runs = arr_game[i].linescore.r.home;
                        var game_status = "";
                        // If the game is final
                        if (arr_game[i].status.status == "Final") {
                            game_status = "F";
                            if (arr_game[i].status.inning != "9") {
                                game_status += "/" + arr_game[i].status.inning;
                            }
                        }
                        // If the game is in progress
                        else if (arr_game[i].status.status == "In Progress") {
                            // Find out if in top of the inning
                            if (arr_game[i].status.top_inning == "Y") {
                                game_status = "TOP/" + arr_game[i].status.inning;
                            }
                            else {
                                game_status = "BOT/" + arr_game[i].status.inning;
                            }
                        }
                        // any other situation??
                        else {
                            game_status = arr_game[i].status.status + "/" + arr_game[i].status.inning;
                        }
                        console.log("Away: " + away_team + " - " + away_runs);
                        console.log("Home: " + home_team + " - " + home_runs + "     " + game_status);
                    }
                }
            }


        }
    });
}

// Get the current Date
today = getDate();
// Create the string to be sent
var url_string = createUrl(today);
console.log(url_string);
// Data Request, then display
dataRequest(url_string);