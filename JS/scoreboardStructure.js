/**
 * Created by Jeffrey on 7/1/2017.
 */

// Function to create a cell with attributes
// Cell ID is required, others are optional
function createCell(id, text, width, colspan) {
    var td = document.createElement('td');
    // make the id
    td.id = id;
    if (typeof text !== "undefined" && text !== null) {
        td.appendChild(document.createTextNode(text));
    }
    // Check width, make 100% if nothing entered
    if (typeof width !== "undefined" && width !== null) {
        td.style.width = width;
    }
    else {
        td.style.width = "100%";
    }

    // Check colspan, make 1 if nothing entered
    if (typeof colspan !== "undefined" && colspan !== null) {
        td.colSpan = colspan;
    }
    else {
        td.colSpan = 1;
    }

    return td;
}

// Function to develop the divisions table matrix
// text: is required and either 'al' or 'nl'
function devDivisionMatrix(text) {
    var division_table = document.createElement('table');
    division_table.style.width = '100%';
    // Loop to make 5 rows
    for (var i = 1; i < 6; i++) {
        var div_row = document.createElement('tr');

        var div_cellW = createCell(text+'West'+i, text+'West'+i, "33%");
        var div_cellC = createCell(text+'Central'+i, text+'Central'+i, "33%");
        var div_cellE = createCell(text+'East'+i, text+'East'+i, "33%");
        div_row.appendChild(div_cellW);
        div_row.appendChild(div_cellC);
        div_row.appendChild(div_cellE);

        division_table.appendChild(div_row);
    }
    return division_table;

}

// Function to develop the standings and time table
function devStandings() {
    var standing_table = document.createElement('table');
    standing_table.style.width = '100%';
    var standing_row = document.createElement('tr');
    var al_stand = createCell('alStanding', 'alStanding', "40%");
    al_stand.appendChild(devDivisionMatrix('al'));
    var time_date = createCell('timeDate', 'timeDate', "20%");
    var nl_stand = createCell('nlStanding', 'nlStanding', "40%");
    nl_stand.appendChild(devDivisionMatrix('nl'));

    // Put it together
    standing_row.appendChild(al_stand);
    standing_row.appendChild(time_date);
    standing_row.appendChild(nl_stand);
    standing_table.appendChild(standing_row);

    return standing_table;
}

// Function to create scores table
function scoresTable() {
    var scores_table = document.createElement('table');
    scores_table.style.width = "100%";
    // Loop to make 5 cells per row
    var cell_num = 1;
    for (var i = 0; i < 3; i++) {
        var scores_row = document.createElement('tr');
        for (var j = 0; j < 5; j++) {
            var score_cell = createCell('game'+cell_num, 'game'+cell_num, "20%");
            // table with visitor and home elements
            var match_table = document.createElement('table');
            match_table.style.width = "100%";
            var visitor_row = document.createElement('tr');
            var visitor_cell = createCell('vis_'+cell_num, 'vis_'+cell_num);
            visitor_row.appendChild(visitor_cell);
            match_table.appendChild(visitor_row);
            var home_row = document.createElement('tr');
            var home_cell = createCell('home_'+cell_num, 'home_'+cell_num);
            home_row.appendChild(home_cell);
            match_table.appendChild(home_row);
            score_cell.appendChild(match_table);
            cell_num++;
            scores_row.appendChild(score_cell);
        }
        scores_table.appendChild(scores_row);
    }
    return scores_table;

}

// function to develop the innings
function devInnings() {
    var inning_table = document.createElement('table');
    inning_table.style.width = "100%";
    // Label row
    var inning_row = document.createElement('tr');
    for (var i = 0; i < 16; i++) {
        var inning_cell = createCell('b_'+i, 'b_'+i);
        inning_row.appendChild(inning_cell);
    }
    inning_table.appendChild(inning_row);
    // visitor row
    var visitor_row = document.createElement('tr');
    for (var j = 0; j < 16; j++) {
        var visitor_cell = createCell('v_'+j, 'v_'+j);
        visitor_row.appendChild(visitor_cell);
    }
    inning_table.appendChild(visitor_row);
    // home row
    var home_row = document.createElement('tr');
    for (var k = 0; k < 16; k++) {
        var home_cell = createCell('h_'+k, 'h_'+k);
        home_row.appendChild(home_cell);
    }
    inning_table.appendChild(home_row);

    return inning_table;
}

// Function to get the current count table
function currentCount() {
    var current_count_table = document.createElement('table');
    current_count_table.style.width = "100%";
    var current_count_row = document.createElement('tr');
    var balls_label = createCell('ballsLabel', 'ballsLabel');
    var ba1 = createCell('b1', 'b1');
    var ba2 = createCell('b2', 'b2');
    var ba3 = createCell('b3', 'b3');
    var sp1 = createCell('sp1', 'sp1');
    var strikes_label = createCell('strikesLabel', 'strikesLabel');
    var st1 = createCell('s1', 's1');
    var st2 = createCell('s2', 's2');
    var sp2 = createCell('sp2', 'sp2');
    var outs_label = createCell('outsLabel', 'outsLabel');
    var out1 = createCell('o1', 'o1');
    var out2 = createCell('o2', 'o2');
    current_count_row.appendChild(balls_label);
    current_count_row.appendChild(ba1);
    current_count_row.appendChild(ba2);
    current_count_row.appendChild(ba3);
    current_count_row.appendChild(sp1);
    current_count_row.appendChild(strikes_label);
    current_count_row.appendChild(st1);
    current_count_row.appendChild(st2);
    current_count_row.appendChild(sp2);
    current_count_row.appendChild(outs_label);
    current_count_row.appendChild(out1);
    current_count_row.appendChild(out2);
    current_count_table.appendChild(current_count_row);

    return current_count_table;
}

// Function to develop the pulled score frame
function pulledScore() {
    var pulled_score_table = document.createElement('table');
    pulled_score_table.style.width = "100%";
    var teams_row = document.createElement('tr');
    var teams_cell = createCell('teamsCell', 'teamsCell', "100%");

    // Table for the opposing teams title
    var opposing_teams_table = document.createElement('table');
    opposing_teams_table.style.width = "100%";
    var opposing_teams_row = document.createElement('tr');
    var visitor_cell = createCell('visitTeam', 'visitTeam', "45%");
    var vs_logo = createCell('vsLogo', 'vsLogo', "10%");
    var home_cell = createCell('homeTeam', 'homeTeam', "45%");
    opposing_teams_row.appendChild(visitor_cell);
    opposing_teams_row.appendChild(vs_logo);
    opposing_teams_row.appendChild(home_cell);
    opposing_teams_table.appendChild(opposing_teams_row);

    // Table for Pitcher and Batter Matchup
    var pitbat_matchup_table = document.createElement('table');
    pitbat_matchup_table.style.width = "100%";
    //Pitcher
    var pitcher_row = document.createElement('tr');
    var pitcher_name = createCell('pitcherName', 'pitcherName');
    var pitcher_era_label = createCell('eraLabel', 'eraLabel');
    var pitcher_era = createCell('eraStat', 'eraStat');
    pitcher_row.appendChild(pitcher_name);
    pitcher_row.appendChild(pitcher_era_label);
    pitcher_row.appendChild(pitcher_era);
    pitbat_matchup_table.appendChild(pitcher_row);
    //Batter
    var batter_row = document.createElement('tr');
    var batter_name = createCell('batterName', 'batterName');
    var batter_avg_label = createCell('avgLabel', 'avgLabel');
    var batter_avg = createCell('batterAvg', 'batterAvg');
    batter_row.appendChild(batter_name);
    batter_row.appendChild(batter_avg_label);
    batter_row.appendChild(batter_avg);
    pitbat_matchup_table.appendChild(batter_row);


    teams_cell.appendChild(opposing_teams_table);
    teams_cell.appendChild(pitbat_matchup_table);
    teams_cell.appendChild(devInnings());
    teams_cell.appendChild(currentCount());
    teams_row.appendChild(teams_cell);

    // Put it all together
    pulled_score_table.appendChild(teams_row);

    return pulled_score_table;
}

// function to develop current scores
function currentScores() {
    var curr_scores_table = document.createElement('table');
    curr_scores_table.style.width = "100%";
    var board_border_row = document.createElement('tr');
    var board_border_cell = createCell('boardBorder', 'boardBorder', "100%", 2);
    board_border_row.appendChild(board_border_cell);
    //Current Scores row
    var curr_scores_row = document.createElement('tr');
    var curr_scores = createCell('currentScores', 'currentScores', "50%");
    // Scores table
    curr_scores.appendChild(scoresTable());
    var pulled_scores = createCell('pulledScores', 'pulledScores', "50%");
    // Pulled Score
    pulled_scores.appendChild(pulledScore());
    curr_scores_row.appendChild(curr_scores);
    curr_scores_row.appendChild(pulled_scores);
    // Bottom wall buffer
    var bottom_board_row = document.createElement('tr');
    var bottom_border_cell = createCell('bottomBorder', 'bottomBorder', "100%", 2);
    bottom_board_row.appendChild(bottom_border_cell);

    // Put it all together
    curr_scores_table.appendChild(board_border_row);
    curr_scores_table.appendChild(curr_scores_row);
    curr_scores_table.appendChild(bottom_board_row);

    return curr_scores_table;

}

// Function to develop the wall portion
function devWall() {
    var wall_table = document.createElement('table');
    wall_table.style.width = '100%';
    var wall_top_row = document.createElement('tr');
    var wall_top = createCell('wallTop', 'wallTop', "100%", 4);
    wall_top_row.appendChild(wall_top);
    wall_table.appendChild(wall_top_row);
    //Actual scores row
    var wall_scores_row = document.createElement('tr');
    var wall_buff_1 = createCell('wallBuff1', 'wallBuff1', "5%");
    var wall_scores_cell = createCell('scoreBoard', 'scoreBoard', "90%");
    // Wall Ground
    var wall_ground_row = document.createElement('tr');
    var wall_ground_cell = createCell('wallGround', 'wallGround', "100%", 4);
    wall_ground_row.appendChild(wall_ground_cell);
    // Current Scores table
    wall_scores_cell.appendChild(currentScores());
    var wall_buff_2 = createCell('wallBuff2', 'wallBuff2', "5%");
    wall_scores_row.appendChild(wall_buff_1);
    wall_scores_row.appendChild(wall_scores_cell);
    wall_scores_row.appendChild(wall_buff_2);
    wall_table.appendChild(wall_scores_row);
    wall_table.appendChild(wall_ground_row);

    return wall_table
}

// Function to develop the Scoreboard section
function devScoreboard() {
    var score_table = document.createElement('table');
    score_table.style.width = '100%';
    var score_row = document.createElement('tr');
    var top_buffer = createCell('topBuffer', 'topBuffer', null, 3);
    score_row.appendChild(top_buffer);

    // Title Row
    var title_row = document.createElement('tr');
    var title_buff_1 = createCell('titleBuff1', 'titleBuff1', "10%");
    var the_title = createCell('theTitle', 'theTitle', "80%");
    var title_buff_2 = createCell('titleBuff2', 'titleBuff2', "10%");
    title_row.appendChild(title_buff_1);
    title_row.appendChild(the_title);
    title_row.appendChild(title_buff_2);

    // Title Stand Buffer
    var title_stand_row = document.createElement('tr');
    var title_stand_buff = createCell('titleStandBuff', 'titleStandBuff', null, 3);
    title_stand_row.appendChild(title_stand_buff);

    // Standings Row
    var standings_row = document.createElement('tr');
    var stand_buff_1 = createCell('standBuff1', 'standBuff1', "10%");
    var stand_table = createCell('standTable', 'standTable', "80%");
    // Function to create Standings and Time table
    stand_table.appendChild(devStandings());
    var stand_buff_2 = createCell('standBuff2', 'standBuff2', "10%");
    standings_row.appendChild(stand_buff_1);
    standings_row.appendChild(stand_table);
    standings_row.appendChild(stand_buff_2);
    // Buffer with standings
    var stand_wall_buff_row = document.createElement('tr');
    var stand_wall_buff_cell = createCell('standWallBuff', 'standWallBuff', null, 3);
    stand_wall_buff_row.appendChild(stand_wall_buff_cell);

    // Create the wall row
    var wall_row = document.createElement('tr');
    var wall_cell = createCell('theWall', 'theWall', null, 3);
    // Create stuff in the wall cell
    wall_cell.appendChild(devWall());
    wall_row.appendChild(wall_cell);

    // Put all the rows together
    score_table.appendChild(score_row);
    score_table.appendChild(title_row);
    score_table.appendChild(title_stand_row);
    score_table.appendChild(standings_row);
    score_table.appendChild(stand_wall_buff_row);
    score_table.appendChild(wall_row);
    return score_table;
}

// Function that develops main table cell
function devMainTable() {
    var div = document.getElementById('mainTable');
    var main_table = document.createElement('table');
    main_table.style.width = '100%';
    var main_row = document.createElement('tr');
    var main_cell = createCell('mainCell');
    // Start scoreboard structure
    main_cell.appendChild(devScoreboard());
    // append the rest to main
    main_row.appendChild(main_cell);
    main_table.appendChild(main_row);
    div.appendChild(main_table);
}


// Main Function
devMainTable();
