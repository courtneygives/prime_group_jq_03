$(function() {

  //------------------ permanent array of individuals ----------------------//

  var permanentNames = ["Tuttle", "Chris R", "Jessica", "Jennifer", "Taylor", "Erika", "Sasha", "Amy", "Cari", "Oliver", "Travis", "Courtney", "Russ", "Libby", "Lisa", "Max", "Kyle", "Suzanna", "Peter"]

  //--------------------------- team name generator -----------------------//
  //--------------------------- number buttons ---------------------------//



  var permanentAdjs = ["Funky", "Raging", "Surly", "Plain", "Purple", "Dangerous", "Unsinkable", "Wounded", "Wooden", "Laminated", "Jolly", "Ludicrous", "Hungry", "Waxing", "Waning", "Adjustable", "Disposable", "Super Fast", "Rambunctious", "Wise", "Superior"]

  var permanentNouns = ["Donkies", "Hors d'oeuvres", "Bananna Sandwiches", "Troupers", "Ents", "Pterodactyls", "Ponies", "Narwals", "Tauntauns", "Squishy Cubes", "Cylinders", "Grassy Knoll", "Hot Dish", "Lake-Dwellers", "Jam-bro-rees", "Time-Travelers", "Astronauts"]

  var teams=[[]];    //declare two-dimensional array

  var numTeams= 0;

  $(".number").click(function(){
    numTeams = $(this).children().attr("alt");

    generateTeams(numTeams);
    generateTeamNames(numTeams);
    console.log(teams);
  });

//generate button



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


  //--------------------------- generate button ---------------------------//

  function generateTeams (numTeams) {    //// takes shuffled array
    var randNames=shuffle(permanentNames);
    var groupI = 0;

    //10 should be replace with number of teams
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

});
