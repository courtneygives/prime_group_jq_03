$(function() {

  //------------------ permanent array of individuals ----------------------//

  var permanentNames = function() {
    var roster = $(".groupMaker textarea").val().split(",");
    if (roster.length > 1){
      return roster;
    } else {
      return ["Tuttle", "Chris R", "Jessica", "Jennifer", "Taylor", "Erika", "Sasha", "Amy", "Cari", "Oliver", "Travis", "Courtney", "Russ", "Libby", "Lisa", "Max", "Kyle", "Suzanna", "Peter"];
    }
  }

  //--------------------------- team name generator -----------------------//
  //--------------------------- number buttons ---------------------------//



  var permanentAdjs = ["Funky", "Raging", "Surly", "Plain", "Purple", "Dangerous", "Unsinkable", "Wounded", "Wooden", "Laminated", "Jolly", "Four-Legged", "Peachy", "Gelatinous", "Possibly-Illegal", "Hydrophobic", "Powdery", "Troubled", "Dreamy", "Ludicrous", "Authoritative", "Definitely-Trustworthy", "Heroic", "Righteous", "Adjustable", "Disposable", "Super Fast", "Rambunctious"]

  var permanentNouns = ["Donkeys", "Hors d'oeuvres", "Bananna Sandwiches", "Troupers", "Ents", "Pterodactyls", "Ponies", "Narwhals", "Tauntauns", "Statues", "Squishy Cubes", "Cylinders", "Grassy Knolls", "Hot Dishes", "Lake-Dwellers", "Jam-bro-rees", "Blades", "Time-Travelers", "Astronauts"]

  var teams=[[]];    //declare two-dimensional array

  var numTeams= 0;

  $(".number").click(function(){
//    clearScreen();
    numTeams = $(this).children().attr("alt");
    console.log(numTeams)
  });

  //generate button
  $("#generateButton").click(function(){
    // clearScreen();
    if (numTeams == 0) {
      alert("Please select number of groups!");
    }else {
      generateTeams(numTeams);
      generateTeamNames(numTeams);
      writeGroups(numTeams);
    }
  });
  // 
  // function clearScreen (){
  //  $(".groups").empty();
  //  for (i=0; i<numTeams; i++){
  //    teams[i].shift();
  //  }
  // }


function writeGroups (numTeams){
  for (i = 0; i < numTeams; i++){
      var teamDisplay = "<ul>";
    for(j = 0; j < teams[i].length; j++){
      teamDisplay += "<li>" + teams[i][j] + "</li>";
    }
    teamDisplay += "</ul>";
    $(".groups").append(teamDisplay);
  }
}



  //--------------------------- generate teams ---------------------------//

  function generateTeams (numTeams) {    //// takes shuffled array
    var randNames=shuffle(permanentNames());
    var groupI = 0;
    console.log(numTeams)

    //10 should be replaced with number of teams
    for(var x =0; x < numTeams-1; x++){
      teams.push([]);
    }

    while (randNames.length > 0) {
      teams[groupI].push(randNames.pop());
      groupI++;
      if (groupI == numTeams) {
        groupI = 0;
      }
    }
  }

  function generateTeamNames (numTeams){
    var randNouns=shuffle(permanentNouns);
    var randAdjs=shuffle(permanentAdjs);

    for(var it=0; it< numTeams; it++){
      teams[it].unshift(randAdjs[it] + " " + randNouns[it]);
    }
  }

  //--------------------------- shuffler ---------------------------//

  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }


});
