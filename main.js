// We are in need of a sorting and organizing app for our community dodge ball league.
// There are already 6 players signed up and we hope to get more!
// We need to select from our currently signed-up people to make them dodge ball players
// and from there we need to be able to select them to be on different teams.
// Please look over the Specs Checklist to make sure you understand the needs of this app.

"use strict";
console.log("JS is now loaded");

const arrOfPeople = [
  {
    id: 2,
    name: "Charles Young",
    age: "age " + 55,
    skillSet: "welding",
    placeBorn: "Omaha, Nebraska",
    canThrowBall: true,
    canDodgeBall: true,
    hasPaid: true,
    isHealthy: true,
    yearsExperience: 6 + " years of experience",
  },
  {
    id: 3,
    name: "Judy Twilight",
    age: "age " + 35,
    skillSet: "fishing",
    placeBorn: "Louisville, Kentucky",
    canThrowBall: true,
    canDodgeBall: true,
    hasPaid: true,
    isHealthy: true,
    yearsExperience: 5 + " years of experience",
  },
  {
    id: 4,
    name: "Cynthia Doolittle",
    age: "age " + 20,
    skillSet: "tic tac toe",
    placeBorn: "Pawnee, Texas",
    canThrowBall: true,
    canDodgeBall: true,
    hasPaid: true,
    isHealthy: true,
    yearsExperience: 7 + " years of experience",
  },
  {
    id: 5,
    name: "John Willouby",
    age: "age " + 28,
    skillSet: "pipe fitting",
    placeBorn: "New York, New York",
    canThrowBall: true,
    canDodgeBall: true,
    hasPaid: true,
    isHealthy: true,
    yearsExperience: 6 + " years of experience",
  },
  {
    id: 6,
    name: "Stan Honest",
    age: "age " + 20,
    skillSet: "boom-a-rang throwing",
    placeBorn: "Perth, Australia",
    canThrowBall: true,
    canDodgeBall: true,
    hasPaid: true,
    isHealthy: true,
    yearsExperience: 8 + " years of experience",
  },
  {
    id: 7,
    name: "Mia Watu",
    age: "age " + 17,
    skillSet: "acrobatics",
    placeBorn: "Los Angeles, California",
    canThrowBall: true,
    canDodgeBall: true,
    hasPaid: true,
    isHealthy: true,
    yearsExperience: 6 + " years of experience",
  },
  {
    id: 8,
    name: "Walter Cole",
    age: "age " + 32,
    skillSet: "jump rope",
    placeBorn: "New Orleans, Louisiana",
    canThrowBall: true,
    canDodgeBall: true,
    hasPaid: true,
    isHealthy: true,
    yearsExperience: 4 + " years of experience",
  },
];
// Names of players need to be pushed from list of players array to their
// respective teams
const listOfPlayers = [];
const blueTeam = [];
const redTeam = [];

class Player {
  //  These are the requirements needed to construct a player
  constructor(
    id,
    name,
    age,
    skillSet,
    placeBorn,
    canThrowBall,
    canDodgeBall,
    hasPaid,
    isHealthy,
    yearsExperience
  ) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.skillset = skillSet;
    this.placeBorn = placeBorn;
    this.canThrowBall = canThrowBall;
    this.canDodgeBall = canDodgeBall;
    this.hasPaid = hasPaid;
    this.isHealthy = isHealthy;
    this.yearsExperience = yearsExperience;
  }
}

// dodgeballPlayer is a child class that extends the player class with added keys
// Maybe once they become a player on either team these will be relevant
class DodgeballPlayer extends Player {
  // The requirements below are what I deemed necessary to construct our players
  constructor(mascot, color) {
    //  Super refers to the parent class
    super();
    this.mascot = mascot;
    this.color = color;
  }
  //  Using this function to push players to the read team
  joinRedTeam() {
    //  Pushed dodgeball player on to the red team
    redTeam.push(this.player);
  }
}

const listPeopleChoices = () => {
  // listElement is a constant variable that retrieves the people ul from the dom
  // it then creates an li and button element and appends those to the dom
  const listElement = document.getElementById("people");
  arrOfPeople.map((person) => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    //  below is the inner text for the newly created button
    button.innerHTML = "Make Player";
    button.addEventListener("click", function () {
      console.log(person.name, "has been made a player");
      //  removing name from the list element, remove li from ul
      listElement.removeChild(li);
      makePlayer(person.id);
    });
    li.appendChild(button);
    li.appendChild(
      document.createTextNode(
        person.name +
          " - " +
          person.age +
          " - " +
          person.skillSet +
          " - " +
          person.yearsExperience
      )
    );
    listElement.append(li);
  });
};

const makePlayer = (id) => {
  //  Creating a variable to push people onto the list of players array
  //  I grabbed the players ul
  let personFound = arrOfPeople.find((person) => {
    //  this is firing off the id from when the function is called
    return person.id == id;
  });
  console.log(personFound);
  // The method below provides the index of the person clicked
  let playerSearch = arrOfPeople.indexOf(personFound);
  console.log(playerSearch);
  // Used splice to remove person from the array of people
  arrOfPeople.splice(playerSearch, 1);
  console.log(arrOfPeople);
  // newPlayer calls the personFound function to retrieve the credentials of a player from the
  //   array of people and use that information to push that players credentials onto one of two
  //   teams
  let newPlayer = new Player(
    personFound.id,
    personFound.name,
    personFound.skillSet,
    personFound.placeBorn,
    personFound.canThrowBall,
    personFound.canDodgeBall,
    personFound.hasPaid,
    personFound.isHealthy,
    personFound.yearsExperience
  );
  listOfPlayers.push(newPlayer);
  console.log(listOfPlayers);
  let dodgeBallPlayersArray = document.getElementById("players");

  const li = document.createElement("li");
  li.appendChild(document.createTextNode(newPlayer.name));
  dodgeBallPlayersArray.append(li);
  // Created red button for red team
  let redButton = document.createElement("button");
  redButton.innerHTML = "red team";
  li.append(redButton);
  redButton.addEventListener("click", function () {
    console.log("red button was clicked");
    makeRed(newPlayer);
  });
  // Created blue button for blue team
  let blueButton = document.createElement("button");
  blueButton.innerHTML = "blue team";
  li.append(blueButton);
  blueButton.addEventListener("click", function () {
    console.log("blue button was clicked");
    makeBlue();
  });
};
let makeRed = (player) => {
  const redTeammate = new DodgeballPlayer();
  // "red",
  // "lion"
  redTeammate.joinRedTeam(player);
  console.log(redTeammate);
};
