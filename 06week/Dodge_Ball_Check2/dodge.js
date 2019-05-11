const arrOfPeople = [
    {
      id: 2,
      name: "Charles Young",
      age: 55,
      skillSet: "welding",
      placeBorn: "Omaha, Nebraska"
    },
    {
      id: 3,
      name: "Judy Twilight",
      age: 35,
      skillSet: "fishing",
      placeBorn: "Louisville, Kentucky"
    },
    {
      id: 4,
      name: "Cynthia Doolittle",
      age: 20,
      skillSet: "tic tac toe",
      placeBorn: "Pawnee, Texas"
    },
    {
      id: 5,
      name: "John Willouby",
      age: 28,
      skillSet: "pipe fitting",
      placeBorn: "New York, New York"
    },
    {
      id: 6,
      name: "Stan Honest",
      age: 20,
      skillSet: "boom-a-rang throwing",
      placeBorn: "Perth, Australia"
    },
    {
      id: 7,
      name: "Mia Watu",
      age: 17,
      skillSet: "acrobatics",
      placeBorn: "Los Angeles, California"
    },
    {
      id: 8,
      name: "Walter Cole",
      age: 32,
      skillSet: "jump rope",
      placeBorn: "New Orleans, Louisiana"
    },
  ]
  
  const listOfPlayers = []
  const blueTeam = []
  const redTeam = []
  
  class Player {
    constructor(id, name, age, skillSet, placeBorn, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience){
        this.id = id;
        this.name = name;
        this.age = age;
        this.skillSet = skillSet;
        this.placeBorn = placeBorn;
        this.canThrowBall = canThrowBall;
        this.canDodgeBall = canDodgeBall;
        this.hasPaid = hasPaid;
        this.isHealthy = isHealthy;
        this.yearsExperience = yearsExperience;
    }
    joinRedTeam(redTeam){
        this.redTeam = redTeam;
        player.redTeam.push(this);
    }
    joinBlueTeam(blueTeam){
        this.blueTeam = blueTeam
        player.blueTeam.push(this);
    }
  }
  class BlueTeammate {
    constructor(){}
  }
  class RedTeammate {
    constructor(){}
  }
  
  const listPeopleChoices = () => {
    const listElement = document.getElementById('people');
    arrOfPeople.map(person => {
      const li = document.createElement("li");
      const button = document.createElement("button");
      button.innerHTML = "Make Player";
      button.addEventListener('click', function() {makePlayer(person.id);
        listElement.removeChild(li);});
      li.appendChild(button);
      li.appendChild(document.createTextNode(person.name + " - " + person.skillSet));
      listElement.append(li);
    });
  }
  
  const makePlayer = (id) => {
      const players = document.getElementById('players');
      const findPlayer = arrOfPeople.find(function(entry){  
        return entry.id == id;  
      });
      //this is the generic instance of the Player Class
      const newPlayer = new Player (findPlayer.id, findPlayer.name, findPlayer.age, findPlayer.skillSet, findPlayer.placeBorn, true, true, true, true, 0);
      listOfPlayers.push(newPlayer);
      //this adds people to list of players DOM
      const li = document.createElement("li");
      li.appendChild(document.createTextNode(newPlayer.name));

      const button_blue = document.createElement("button");
      button_blue.innerHTML = "Blue Team";
      button_blue.addEventListener('click', function() {makeBluePlayer(newPlayer.id)})
      li.appendChild(button_blue);
      const button_red = document.createElement("button");
      button_red.innerHTML = "Red Team";
      button_red.addEventListener('click', function() {makeRedPlayer(newPlayer.id)})
      li.appendChild(button_red);
      players.append(li);
      }

      const makeBluePlayer = (id) =>{
        const playersBlue = document.getElementById('blue');
        const selectBlue = listOfPlayers.find(function(pick){  
          return pick.id == id;  
        });
        const newBluePlayer = new Player (selectBlue.id, selectBlue.name, selectBlue.age, selectBlue.skillSet, selectBlue.placeBorn, true, true, true, true, 0);
        blueTeam.push(newBluePlayer);
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(newBluePlayer.name));
        playersBlue.append(li);
      }
      const makeRedPlayer = (id) =>{
        const playersRed = document.getElementById('red');
        const selectRed = listOfPlayers.find(function(pick){
          return pick.id == id;
        });
        playersRed.append(li);
      }
