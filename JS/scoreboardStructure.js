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

    // Put all the rows together
    score_table.appendChild(score_row);
    score_table.appendChild(title_row);
    score_table.appendChild(title_stand_row);
    score_table.appendChild(standings_row);
    score_table.appendChild(stand_wall_buff_row);
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
