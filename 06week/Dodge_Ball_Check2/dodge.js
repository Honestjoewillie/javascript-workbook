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
  

  
  class player {
    constructor(canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience){
        this.canThrowBall = canThrowBall;
        this.canDodgeBall = canDodgeBall;
        this.hasPaid = hasPaid;
        this.isHealthy = isHealthy;
        this.yearsExperience = yearsExperience;
    }
    joinRedTeam(player){
        this.redTeam = redTeam;
        player.redTeam.push(this);
    }
    joinBlueTeam(player){
        this.blueTeam = blueTeam
        player.blueTeam.push(this);
    }
  }
  class blueTeammate {
    constructor(){}
  }
  class redTeammate {
    constructor(){}
  }
  
  const listPeopleChoices = () => {
    const listElement = document.getElementById('people')
    arrOfPeople.map(person => {
      const li = document.createElement("li")
      const button = document.createElement("button")
      button.innerHTML = "Make Player"
      button.addEventListener('click', function() {makePlayer(person.id)} )
      li.appendChild(button)
      li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
      listElement.append(li)
    })
  }
  
  const makePlayer = (id) => {
    //   if(){
    //       aler "cant play"
    //   }else {}
      const players = document.getElementById('players');
      const li = document.createElement("li");
      const button_red = document.createElement("button");
      button_red.innerHTML = "Red Team";
      button_red.addEventListener('click', function() {makeRedPlayer(person.id)})
      li.appendChild(button_red);
      const button_blue = document.createElement("button");
      button_blue.innerHTML = "Blue Team";
      button_blue.addEventListener('click', function() {makeBluePlayer(person.id)})
      li.appendChild(button_blue);
      players.append(li);
      const remove = indexOf(person.id);
      players.splice(remove, 1);
    console.log(`li ${id} was clicked!`)
  }