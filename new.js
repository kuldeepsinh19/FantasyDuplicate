const tossWinnerTeam = [];
const tossLooserTeam = [];
let totalCredit = 0;
function toss() {
  let team1 = document.getElementById("team1").value;
  let team2 = document.getElementById("team2").value;

  if ((team1.length && team2.length === 0) || team1 === team2) {
    alert("same name  or blank !");
    return;
    // tossBtn.disabled = false;
  } else {
    let tossing = Math.floor(Math.random() * 2);

    console.log(tossing);
    if (tossing === 0) {
      document.getElementById(
        "tossWinnerName"
      ).innerHTML = `Team ${team1} won the toss and choosed to bat `;
    } else {
      document.getElementById(
        "tossWinnerName"
      ).innerHTML = `Team ${team2} won the toss and choosed to bat  `;
    }
  }
  const tossBtn = document.getElementById("tosser");
  tossBtn.disabled = true;

  showPlayers("Batsman", "team1List", "tossWinnerTeam");
  showPlayers("Bowler", "team1List", "tossWinnerTeam");
  showPlayers("Wicketkeeper", "team1List", "tossWinnerTeam");
}

const playersData = [
  {
    name: "Virat Kohli",
    playingRole: "Batsman",
    credit: 10,
    // id : 1,
  },
  {
    name: "Jasprit Bumrah",
    playingRole: "Bowler",
    credit: 12,
  },
  {
    name: "Rohit Sharma",
    playingRole: "Batsman",
    credit: 11,
  },
  {
    name: "Yuzvendra Chahal",
    playingRole: "Bowler",
    credit: 9,
  },
  {
    name: "Mohammed Shami",
    playingRole: "Bowler",
    credit: 8,
  },
  {
    name: "Suryakumar Yadav",
    playingRole: "Batsman",
    credit: 9,
  },
  {
    name: "Prasidh Krishna",
    playingRole: "Bowler",
    credit: 7,
  },
  {
    name: "Hardik Pandya",
    playingRole: "Batsman",
    credit: 9,
  },
  {
    name: "Shikhar Dhawan",
    playingRole: "Batsman",
    credit: 8,
  },
  {
    name: "Ravindra Jadeja",
    playingRole: "Batsman",
    credit: 10,
  },
  {
    name: "Arshdeep Singh",
    playingRole: "Bowler",
    credit: 6,
  },
  {
    name: "Ravichandran Ashwin",
    playingRole: "Bowler",
    credit: 11,
  },
  {
    name: "Deepak Chahar",
    playingRole: "Bowler",
    credit: 9,
  },
  {
    name: "Ruturaj Gaikwad",
    playingRole: "Batsman",
    credit: 8,
  },
  {
    name: "Deepak Hooda",
    playingRole: "Batsman",
    credit: 9,
  },
  {
    name: "Ishan Kishan",
    playingRole: "Bowler",
    credit: 10,
  },
  {
    name: "Shreyas Iyer",
    playingRole: "Batsman",
    credit: 10,
  },
  {
    name: "Venkatesh Iyer",
    playingRole: "Wicketkeeper",
    credit: 9,
  },
  {
    name: "Dinesh Karthik",
    playingRole: "Wicketkeeper",
    credit: 11,
  },
  {
    name: "Kuldeep Yadav",
    playingRole: "Bowler",
    credit: 9,
  },
  {
    name: "Bhuvneshwar Kumar",
    playingRole: "Bowler",
    credit: 12,
  },
  {
    name: "Mohammed Siraj",
    playingRole: "Bowler",
    credit: 10,
  },
  {
    name: "Devdutt Padikkal",
    playingRole: "Batsman",
    credit: 9,
  },
  {
    name: "Rishabh Pant",
    playingRole: "Wicketkeeper",
    credit: 10,
  },
  {
    name: "Moeen Ali",
    playingRole: "Bowler",
    credit: 9,
  },
  {
    name: "James Anderson",
    playingRole: "Bowler",
    credit: 12,
  },
  {
    name: "Jonny Bairstow",
    playingRole: "Batsman",
    credit: 11,
  },
  {
    name: "Sam Billings",
    playingRole: "Batsman",
    credit: 10,
  },
  {
    name: "Stuart Broad",
    playingRole: "Bowler",
    credit: 9,
  },
  {
    name: "Rory Burns",
    playingRole: "Bowler",
    credit: 8,
  },
  {
    name: "Jos Buttler",
    playingRole: "Batsman",
    credit: 10,
  },
  {
    name: "Zak Crawley",
    playingRole: "Batsman",
    credit: 9,
  },
  {
    name: "Sam Curran",
    playingRole: "Bowler",
    credit: 8,
  },
  {
    name: "Tom Curran",
    playingRole: "Bowler",
    credit: 7,
  },
  {
    name: "Chris Jordan",
    playingRole: "Bowler",
    credit: 11,
  },
  {
    name: "Jack Leach",
    playingRole: "Batsman",
    credit: 10,
  },
  {
    name: "Liam Livingstone",
    playingRole: "Batsman",
    credit: 12,
  },
  {
    name: "Reece Topley",
    playingRole: "Bowler",
    credit: 11,
  },
  {
    name: "David Willey",
    playingRole: "Wicketkeeper",
    credit: 9,
  },
  {
    name: "Joe Root",
    playingRole: "Batsman",
    credit: 9,
  },
  {
    name: "Ben Stokes",
    playingRole: "Batsman",
    credit: 10,
  },
  {
    name: "Pat Cummins",
    playingRole: "Bowler",
    credit: 11,
  },
  {
    name: "Aaron Finch",
    playingRole: "Batsman",
    credit: 10,
  },
  {
    name: "Cameron Green",
    playingRole: "Batsman",
    credit: 9,
  },
  {
    name: "Josh Hazlewood",
    playingRole: "Bowler",
    credit: 9,
  },
  {
    name: "Travis Head",
    playingRole: "Wicketkeeper",
    credit: 8,
  },
  {
    name: "Usman Khawaja",
    playingRole: "Batsman",
    credit: 11,
  },
  {
    name: "Marnus Labuschagne",
    playingRole: "Bowler",
    credit: 10,
  },
  {
    name: "Nathan Lyon",
    playingRole: "Bowler",
    credit: 9,
  },
];
const playerList = [...playersData];
//    console.log(playerList)
function playerSelection(playerRole) {
  const player = playerList.filter(
    (player) => player.playingRole === playerRole
  );
  //   console.log(player);
  return player;
}

function showPlayers(type, team, teamArray) {
  const player = playerSelection(type);

  const newTeam = document.getElementById(team);
  const playerType = document.createElement("div");

  playerType.innerHTML = type;

  player.forEach((p) => {
    const playerDetails = document.createElement("p");
    playerDetails.innerHTML = `${p.name} [${p.credit}] 
    
    <button id="${p.name}" class = "addPlayer" onclick="addPlayer('${p.name}' , '${p.playingRole}' , ${p.credit} , ${teamArray})">+</button> 
    <button id="${p.name}" class = "removePlayer" onclick="removePlayer('${p.name}' , ${teamArray})">-</button> `;
    newTeam.appendChild(playerType);
    playerType.appendChild(playerDetails);
  });
}

function addPlayer(name, role, credit, teamArray) {
  let valid = teamArray.filter((p) => p.playingRole === role);
  if (role === "Wicketkeeper" && valid.length >= 1) {
    alert("Only one wk allowed to add");
  } else if (valid.length >= 5) {
    alert("player is added or you are adding more than five batman");
  } else if (totalCredit + credit > 100) {
    alert("limit");
    return false;
  } else {
    addingPlayer(name, teamArray);
    document.getElementById("totalCredits").innerHTML = totalCredit;
  }
}

function addingPlayer(name, teamArray) {
  const checkPlayer = teamArray.includes(name);
  // console.log(checkPlayer);

  const playerToBeAdded = playerList.find((player) => player.name === name);

  if (checkPlayer) {
    alert("player is alreadty there");

    return;
  } else if (playerToBeAdded === undefined) {
    alert("player is already there ");

    return;
  } else {
    const index = playerList.findIndex((p) => p.name === playerToBeAdded.name);
    // console.log(index);
    playerList.splice(index, 1);
    // console.log(playerList.length);
    teamArray.push(playerToBeAdded);
    totalCredit += playerToBeAdded.credit;

    document.getElementById("totalCredits").innerHTML = totalCredit;
  }
  console.log(totalCredit + "is total creadit");
  // console.log(playerList.length);
  // console.log(teamArray);
}

function removePlayer(name, teamArray) {
  const checkPlayer = playerList.includes(name);
  // console.log(checkPlayer);
  const playerToBeRemoved = teamArray.find((player) => player.name === name);
  // console.log(playerToBeRemoved);

  if (checkPlayer) {
    alert("player is already removed");
    return;
  } else if (playerToBeRemoved === undefined) {
    alert("Player is not added yet");
  } else {
    const index = teamArray.findIndex((p) => p.name === playerToBeRemoved.name);
    // console.log(index);

    teamArray.splice(index, 1);
    playerList.push(playerToBeRemoved);
    totalCredit -= playerToBeRemoved.credit;
    document.getElementById("totalCredits").innerHTML = totalCredit;
  }

  console.log(totalCredit + "is total creadit");
  // console.log(teamArray);
  // console.log(totalCredit);
}

function summary(teamChoose) {
  // console.log(tossWinnerTeam);
  document.getElementById("team1Players").innerHTML = " ";

  teamChoose.forEach((p) => {
    document.getElementById(
      "team1Players"
    ).innerHTML += `${p.name}  ${p.credit}       [${p.playingRole}]<br/> <br/> `;
  });
  // return tossWinnerTeam , tossLooserTeam
  // console.log(teamChoose);
}

function selectCap(teamArray, teamChoose) {
  // console.log(teamArray);

  document.getElementById("chooseCap").innerHTML = " ";
  teamArray.forEach((p) => {
    document.getElementById(
      "chooseCap"
    ).innerHTML += ` ${p.name}  ${p.credit}       [${p.playingRole}] 
      <button id="${p.name}-cap" class = "chooseCap" onclick= "captain('${p.name}', 'captain' , ${teamChoose} )" >C</button> 
      <button id="${p.name}-" class = "chooseViceCap" onclick= "captain('${p.name}', 'vice captain',${teamChoose})">VC</button>   <br/> <br/>`;
  });
  // console.log(teamArray);
}
function captain(name, leadership, teamArray) {
  const player = teamArray.find((obj) => obj.name === name);
  const currentCaptain = teamArray.find((obj) => obj.leader === "captain");
  const currentViceCaptain = teamArray.find(
    (obj) => obj.leader === "vice captain"
  );

  if (
    leadership === "captain" &&
    currentViceCaptain &&
    currentViceCaptain.name === player.name
  ) {
    alert(
      `${player.name} is already a vice-captain and cannot become a captain.`
    );
    return;
  }

  if (
    leadership === "vice captain" &&
    currentCaptain &&
    currentCaptain.name === player.name
  ) {
    alert(
      `${player.name} is already a captain and cannot become a vice-captain.`
    );
    return;
  }

  if (
    leadership === "vice captain" &&
    currentViceCaptain &&
    currentViceCaptain.name !== player.name
  ) {
    delete currentViceCaptain.leader;
  }

  if (
    leadership === "captain" &&
    currentCaptain &&
    currentCaptain.name !== player.name
  ) {
    delete currentCaptain.leader;
  }

  player.leader = leadership;
}

/////////////////////////////////////Creating next team2 who loss the toss////////////////////////
document.getElementById("nextTeamBtn").disabled = false;
document.getElementById("team2summary").style.display = "none";
document.getElementById("bothTeam").style.display = "none";

function nextTeam(teamArray) {
  let check = teamArray.filter((p) => p.leader);
  if (teamArray.length < 11) {
    alert("please make team of 11 players");
  } else if (check.length != 2) {
    alert("please choose cap and vice cap");
  } else {
    document.getElementById("nextTeamBtn").disabled = true;

    document.getElementById("team1List").style.display = "none";
    document.getElementById("team1summary").style.display = "none";
    document.getElementById("team2summary").style.display = "block";
    document.getElementById("bothTeam").style.display = "block";

    totalCredit = 0;
    document.getElementById("totalCredits").innerHTML = totalCredit;

    showPlayers("Batsman", "team2List", "tossLooserTeam");
    showPlayers("Bowler", "team2List", "tossLooserTeam");
    showPlayers("Wicketkeeper", "team2List", "tossLooserTeam");
    document.getElementById("team1Players").innerHTML = " ";
    document.getElementById("chooseCap").innerHTML = " ";
  }
}

function showBothTeam() {
  let check2 = tossLooserTeam.filter((p) => p.leader);

  if (tossLooserTeam.length < 11) {
    alert("please make team of 11 players first");
  } else if (check2.length != 2) {
    alert("choose one cap and one vice cap");
  } else {
    document.getElementById("s1").style.display = "none";
    document.getElementById("s2").style.display = "none";
    document.getElementById("s3").style.display = "none";
    document.getElementById("s4").style.display = "none";

    tossWinnerTeam.forEach((p) => {
      document.getElementById(
        "t1"
      ).innerHTML += ` ${p.name}   ${p.credit}  <br/>`;
    });
    tossLooserTeam.forEach((p) => {
      document.getElementById(
        "t2"
      ).innerHTML += ` ${p.name}   ${p.credit}  <br/> `;
    });
  }
}

// ''''''''''''''''''''''''''''''''''''''start match''''''''''''''''''''''''

let shots = [0, 1, 2, 3, 4, 6, "W"];
// let shots = [0, 0, 0, 3, 0, 0, "W"];
// let shots = ["w" , "W" , "W" , "W" ,"W"];

let ballThrown = 0;
let num = 0;
let numB = 0;
let totalOver = 0;
let takenWickets = 0;

let over = 0;

function playerProperties(p) {
  [
    "runs",
    "dots",
    "points",
    "balls",
    "fours",
    "sixes",
    "wickets",
    "dotsThrown",
  ].forEach((key) => {
    p[key] = 0;
  });
}

const overUpdate = [
  0, 0.1, 0.2, 0.3, 0.4, 0.5, 1, 1.1, 1.2, 1.3, 1.4, 1.5, 2, 2.1, 2.2, 2.3, 2.4,
  2.5, 3, 3.1, 3.2, 3.3, 3.4, 3.5, 4, 4.1, 4.2, 4.3, 4.4, 4.5, 5,
];

function hit() {
  if (ballThrown === 6) {
    numB++;
    ballThrown = 0;
  }
  ballThrown++;
  totalOver++;
  over++;

  if (totalOver === 31 || takenWickets === 11) {
    alert("overs are finished or team1 is all out");
    document.getElementById("hitBtn").disabled = true;
    return;
  }

  console.log(ballThrown + "nth Ball");

  let type = Math.floor(Math.random() * shots.length);
  console.log(shots[type] + " is scored");

  showOvers(shots[type]);

  let currBatter = tossWinnerTeam[num];
  let currBowler = tossLooserTeam.filter((p) => p.playingRole === "Bowler")[
    numB
  ];

  console.log(currBatter);

  console.log(currBowler);

  if (!currBatter.hasOwnProperty("runs")) {
    playerProperties(currBatter);
  }
  if (!currBowler.hasOwnProperty("runs")) {
    playerProperties(currBowler);
  }

  switch (shots[type]) {
    case 0:
      batsmanState(currBatter, 1, 0, 1, 0, 0, 0);
      bowlerState(currBowler, 0, 1, 1);
      break;

    case 1:
      batsmanState(currBatter, 1, 1, 0, 0, 0, 1);
      break;

    case 2:
      batsmanState(currBatter, 1, 2, 0, 0, 0, 2);
      break;

    case 3:
      batsmanState(currBatter, 1, 3, 0, 0, 0, 3);
      break;

    case 4:
      batsmanState(currBatter, 1, 4, 0, 1, 0, 5);
      break;

    case 6:
      batsmanState(currBatter, 1, 6, 0, 0, 1, 8);
      break;

    case "W":
      batsmanState(currBatter, 1, 0, 1, 0, 0, 0);
      bowlerState(currBowler, 1, 10, 0);

      currBatter.played = "yes";
      takenWickets++;
      num++;
      break;
  }

  if (
    currBatter.leader === "captain" &&
    currBatter.runs === 0 &&
    shots[type] === "W"
  ) {
    currBatter.points -= 4;
  } else if (
    currBatter.leader === "vice captain" &&
    currBatter.runs === 0 &&
    shots[type] === "W"
  ) {
    currBatter.points -= 3;
  } else if (currBatter.runs === 0 && shots[type] === "W") {
    currBatter.points -= 2;
  }
  console.log(tossWinnerTeam);
  console.log(tossLooserTeam);
  console.log(totalOver);

  inningOneDetails(currBatter, currBowler);
  playingTeam();
}

function inningOneDetails(batter, bowler) {
  let batLeader =
    batter.leader === "captain"
      ? "[c]"
      : batter.leader === "vice captain"
      ? "[vc]"
      : "";
  let bowLeader =
    bowler.leader === "captain"
      ? "[c]"
      : bowler.leader === "vice captain"
      ? "[vc]"
      : "";

  let batterHtml = document.getElementById("currBatter");
  batterHtml.innerHTML = " ";

  batterHtml.innerHTML += `${batter.name}   ${batLeader}<br/>
  R: ${batter.runs} 
  <br/>
  B: ${batter.balls}
  <br/>
  4s:${batter.fours}
  <br/>
  6s: ${batter.sixes}
  `;

  let bowlerHtml = document.getElementById("currBowler");

  bowlerHtml.innerHTML = " ";
  bowlerHtml.innerHTML += `${bowler.name}  ${bowLeader}<br/>
  W: ${bowler.wickets}  
  <br/>
  B: ${ballThrown}
  `;
  let overDetail = document.getElementById("overDetail");
  overDetail.textContent = "Overs : " + overUpdate[over];
}

function batsmanState(batsman, ballsPlayed, run, dot, fours, sixes, point) {
  if (batsman.leader === "captain") {
    point = point * 2;
  } else if (batsman.leader === "vice captain") {
    point = point * 1.5;
  }
  batsman.runs += run;
  batsman.dots += dot;
  batsman.balls += ballsPlayed;
  batsman.points += point;
  batsman.fours += fours;
  batsman.sixes += sixes;
}

function bowlerState(bowler, wicket, point, dotThrowed) {
  if (bowler.leader === "captain") {
    point = point * 2;
  } else if (bowler.leader === "vice captain") {
    point = point * 1.5;
  }

  bowler.wickets += wicket;
  bowler.points += point;
  bowler.dotsThrown += dotThrowed;
}
function showOvers(shot) {
  if (over === 7 || over === 13 || over === 19 || over === 25) {
    document.getElementById("currShot").innerHTML = " ";
  }
  document.getElementById("currShot").innerHTML += ` (${
    overUpdate[over]
  }) [Shot] : ${shot}   [Time] : ${new Date().toLocaleString()}  <br/> `;
}

function playingTeam() {
  let battingTeam = document.getElementById("team1").value;
  document.getElementById(
    "battingTeam"
  ).innerHTML = `Batting Team : ${battingTeam}<br/>
  wickets: ${takenWickets}<br/>`;

  let bowlingTeam = document.getElementById("team2").value;
  document.getElementById(
    "bowlingTeam"
  ).innerHTML = `Bowling Team : ${bowlingTeam} <br/>`;
}

function hitShot(){
  
  setTimeout(hit, 1000);
}


// =====================================
document.getElementById("hit2").display = "none"
function secondInning(){
  document.getElementById("battingTeamSection").display = "none;"
  document.getElementById("hit2").display = "block"
}