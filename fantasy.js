const tossWinnerTeam = [];
const tossLooserTeam = [];
let totalCredit = 0;
console;
document.getElementById("matchStats").style.display = "none";
document.getElementById("battingTeamSection").style.display = "none";
document.getElementById("team1andTeam2").style.display = "none";
document.getElementById("divTeam2").style.display = "none";
document.getElementById("matchWinner").style.display = "none";
document.getElementById("hitBtn").style.display = "none";

function toss() {
  let team1 = document.getElementById("team1").value;
  let team2 = document.getElementById("team2").value;

  if ((team1.length && team2.length === 0) || team1 === team2) {
    alert("same name  or blank !");
    return;
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
function playerSelection(playerRole) {
  const player = playerList.filter(
    (player) => player.playingRole === playerRole
  );
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
    
    <button id="${p.name}" class = "addPlayer" onclick="addPlayer
    ('${p.name}' , '${p.playingRole}' , ${p.credit} , ${teamArray})">+</button> 
    <button id="${p.name}" class = "removePlayer" onclick="removePlayer
    ('${p.name}' , ${teamArray})">-</button> `;
    newTeam.appendChild(playerType);
    playerType.appendChild(playerDetails);
  });
}

function addPlayer(name, role, credit, teamArray) {
  let playerCountLimit = teamArray.filter((p) => p.playingRole === role);
  if (role === "Wicketkeeper" && playerCountLimit.length >= 1) {
    alert("Only one wk allowed to add");
  } else if (playerCountLimit.length >= 5) {
    alert("player is added or you are adding more than five batman");
  } else if (totalCredit + credit > 100) {
    alert("limit");
    return false;
  } else {
    getPlayer(name, teamArray);
    document.getElementById("totalCredits").innerHTML = totalCredit;
    summary(teamArray);
  }
}

function getPlayer(name, teamArray) {
  const checkPlayer = teamArray.includes(name);

  const playerToBeAdded = playerList.find((player) => player.name === name);

  if (checkPlayer) {
    alert("player is already there");
    return;
  } else if (playerToBeAdded === undefined) {
    alert("player is already there ");

    return;
  } else {
    const index = playerList.findIndex((p) => p.name === playerToBeAdded.name);
    playerList.splice(index, 1);
    teamArray.push(playerToBeAdded);
    totalCredit += playerToBeAdded.credit;

    document.getElementById("totalCredits").innerHTML = totalCredit;
  }
  console.log(totalCredit + "is total creadit");
}

function removePlayer(name, teamArray) {
  const checkPlayer = playerList.includes(name);
  const playerToBeRemoved = teamArray.find((player) => player.name === name);

  if (checkPlayer) {
    alert("player is already removed");
    return;
  } else if (playerToBeRemoved === undefined) {
    alert("Player is not added yet");
  } else {
    const index = teamArray.findIndex((p) => p.name === playerToBeRemoved.name);

    teamArray.splice(index, 1);
    playerList.push(playerToBeRemoved);
    totalCredit -= playerToBeRemoved.credit;
    document.getElementById("totalCredits").innerHTML = totalCredit;
    summary(teamArray);
  }

  console.log(totalCredit + "is total creadit");
}
function summary(teamChoose) {
  document.getElementById("teamSummary").innerHTML = " ";

  teamChoose.forEach((p) => {
    document.getElementById(
      "teamSummary"
    ).innerHTML += `${p.name}  ${p.credit}       [${p.playingRole}]<br/> <br/> `;
  });
}

function addLeaderProperty() {
  for (const obj of playerList) {
    obj.leader = " ";
  }
}
addLeaderProperty();

function selectCap(teamArray, teamChoose) {
  document.getElementById("chooseCap").innerHTML = " ";
  teamArray.forEach((p) => {
    document.getElementById(
      "chooseCap"
    ).innerHTML += ` ${p.name}  ${p.credit}       [${p.playingRole}] 
      <button id="${p.name}" class = "chooseCap" onclick= "captain('${p.name}', 'C' , ${teamChoose} )" >C</button> 
      <button id="${p.name}" class = "chooseViceCap" onclick= "captain('${p.name}', 'VC',${teamChoose})">VC</button>   <br/> <br/>`;
  });
}

function captain(name, leadership, teamArray) {
  const player = teamArray.find((p) => p.name === name);
  const currentCaptain = teamArray.find((p) => p.leader === "C");
  const currentVC = teamArray.find((p) => p.leader === "VC");

  if (leadership === "C" && currentVC && currentVC.name === player.name) {
    alert(
      `${player.name} is already a vice-captain so can't become a captain.`
    );
    return;
  }

  if (
    leadership === "VC" &&
    currentCaptain &&
    currentCaptain.name === player.name
  ) {
    alert(
      `${player.name} is already a captain and cannot become a vice-captain.`
    );
    return;
  }

  if (leadership === "VC" && currentVC && currentVC.name !== player.name) {
    currentVC.leader = " ";
  }

  if (
    leadership === "C" &&
    currentCaptain &&
    currentCaptain.name !== player.name
  ) {
    currentCaptain.leader = " ";
  }

  player.leader = leadership;
  alert(`You choosed ${player.name} as a ${leadership}`);
}

document.getElementById("nextTeamBtn").disabled = false;
document.getElementById("team2summary").style.display = "none";
document.getElementById("bothTeam").style.display = "none";

function nextTeam(teamArray) {
  let check = teamArray.filter((p) => p.leader === "C" || p.leader === "VC");
  if (teamArray.length < 11) {
    alert("please make team of 11 players");
  } else if (check.length != 2) {
    alert("please choose cap and vice cap");
  } else {
    document.getElementById("nextTeamBtn").style.display = "none";
    document.getElementById("team1andTeam2").style.display = "block";

    document.getElementById("team1List").style.display = "none";
    document.getElementById("divTeam2").style.display = "block";

    document.getElementById("team1summary").style.display = "none";
    document.getElementById("team2summary").style.display = "block";
    document.getElementById("bothTeam").style.display = "block";

    totalCredit = 0;
    document.getElementById("totalCredits").innerHTML = totalCredit;

    showPlayers("Batsman", "team2List", "tossLooserTeam");
    showPlayers("Bowler", "team2List", "tossLooserTeam");
    showPlayers("Wicketkeeper", "team2List", "tossLooserTeam");
    document.getElementById("teamSummary").innerHTML = " ";
    document.getElementById("chooseCap").innerHTML = " ";
  }
}

function showBothTeam() {
  let checkLeader = tossLooserTeam.filter(
    (p) => p.leader === "C" || p.leader === "VC"
  );
  console.log(checkLeader);

  if (tossLooserTeam.length < 11) {
    alert("please make team of 11 players first");
    document.getElementById("bothTeamPlayers").disabled = false;
    return;
  } else if (checkLeader.length != 2) {
    alert("choose one cap and one vice cap");
    document.getElementById("bothTeamPlayers").disabled = false;
    return;
  } else {
    document.getElementById("hitBtn").style.display = "block";
    document.getElementById("battingTeamSection").style.display = "block";

    document.getElementById("s1").style.display = "none";
    document.getElementById("s2").style.display = "none";
    document.getElementById("s3").style.display = "none";
    document.getElementById("s4").style.display = "none";

    tossWinnerTeam.forEach((p) => {
      document.getElementById(
        "team1choosedPlayers"
      ).innerHTML += ` ${p.name}   ${p.credit}  ${p.leader} <br/>`;
    });
    tossLooserTeam.forEach((p) => {
      document.getElementById(
        "team2choosedPlayers"
      ).innerHTML += ` ${p.name}   ${p.credit} ${p.leader} <br/> `;
    });
  }
  document.getElementById("bothTeamPlayers").disabled = true;
}

// ''''''''''''''''''''''''''''''''''''''start match''''''''''''''''''''''''
let shots = [0, 1, 2, 3, 4, 6, "W"];

let ballThrown = 0;
let bat = 0;
let bowl = 0;
let totalOver = 0;
let takenWickets = 0;
let innings = 0;
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

let overUpdate = [];
function arr() {
  for (let i = 0; i <= 5; i++) {
    for (let j = 0; j < 6; j++) {
      let value = i + j * 0.1;
      if (value <= 5) {
        overUpdate.push(parseFloat(value.toFixed(1)));
      }
    }
  }
}
arr();

function hit(team1, team2) {
  if (ballThrown === 6) {
    bowl++;
    ballThrown = 0;
  }
  ballThrown++;
  totalOver++;
  over++;

  if (totalOver === 31 || takenWickets === 11) {
    innings++;
    if (innings === 1) {
      alert("overs are finished or team1 is all out");
      document.getElementById("playTeam2").style.display = "block";
      document.getElementById("hitBtn").style.display = "none";
      return;
    } else {
      document.getElementById("battingTeamSection").style.display = "none";
      document.getElementById("matchStats").style.display = "block";
      document.getElementById("matchWinner").style.display = "block";

      matchWinner();
      matchStats1();
      matchStats2();
    }

    return;
  }
  console.log(ballThrown + " th Ball");

  let type = Math.floor(Math.random() * shots.length);
  console.log(shots[type] + " is scored");

  showOvers(shots[type]);

  let currBatter = team1[bat];
  let currBowler = team2.filter((p) => p.playingRole === "Bowler")[bowl];

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

      takenWickets++;
      bat++;
      break;
  }

  if (
    currBatter.leader === "C" &&
    currBatter.runs === 0 &&
    shots[type] === "W"
  ) {
    currBatter.points -= 4;
  } else if (
    currBatter.leader === "VC" &&
    currBatter.runs === 0 &&
    shots[type] === "W"
  ) {
    currBatter.points -= 3;
  } else if (currBatter.runs === 0 && shots[type] === "W") {
    currBatter.points -= 2;
  }
  if (currBatter.balls > 0) {
    currBatter.played = "yes";
  }
  console.log(team1);
  console.log(team2);
  console.log(totalOver);

  inningOneDetails(currBatter, currBowler);
}

function inningOneDetails(batter, bowler) {
  let batterHtml = document.getElementById("currBatter");
  batterHtml.innerHTML = " ";

  batterHtml.innerHTML += `${batter.name}   ${batter.leader}<br/>
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
  bowlerHtml.innerHTML += `${bowler.name}  ${bowler.leader}<br/>
  W: ${bowler.wickets}  
  <br/>
  B: ${ballThrown}
  `;
  let overDetail = document.getElementById("overDetail");
  overDetail.textContent = "Overs : " + overUpdate[over];
}

function batsmanState(batsman, ballsPlayed, run, dot, fours, sixes, point) {
  if (batsman.leader === "C") {
    point = point * 2;
  } else if (batsman.leader === "VC") {
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
  if (bowler.leader === "C") {
    point = point * 2;
  } else if (bowler.leader === "VC") {
    point = point * 1.5;
  }

  bowler.wickets += wicket;
  bowler.points += point;
  bowler.dotsThrown += dotThrowed;
}
function showOvers(shot) {
  if (over === 1 || over === 7 || over === 13 || over === 19 || over === 25) {
    document.getElementById("currShot").innerHTML = " ";
  }
  document.getElementById("currShot").innerHTML += ` (${
    overUpdate[over]
  }) [Shot] : ${shot}   [Time] : ${new Date().toLocaleString()}  <br/> `;
}

function showBatting(team1, team2) {
  document.getElementById(
    "firstBatting"
  ).textContent = ` (1)  battingTeam :  ${team1}  
     (2)    bowling Team : ${team2}`;
}

function playingTeamDetails(teamType1, teamType2) {
  let TeamOneRuns = tossWinnerTeam
    .filter((p) => p.runs)
    .reduce((x, p) => x + p.runs, 0);
  let TeamTwoRuns = tossLooserTeam

    .filter((p) => p.runs)
    .reduce((x, p) => x + p.runs, 0);

  let teamOnePoints = tossWinnerTeam
    .filter((p) => p.points)
    .reduce((x, p) => x + p.points, 0);

  let teamTwoPoints = tossLooserTeam
    .filter((p) => p.points)
    .reduce((x, p) => x + p.points, 0);

  let teamOneName = document.getElementById("team1").value;
  let teamTwoName = document.getElementById("team2").value;
  document.getElementById(
    "battingTeamPoints"
  ).textContent = ` Team1 [${teamType1}] =   ${teamOnePoints}`;
  document.getElementById(
    "bowlingTeamPoints"
  ).textContent = ` Team2 [${teamType2}] = ${teamTwoPoints}`;

  document.getElementById("battingTeam").innerHTML = ` ${teamType1} <br/>
  wickets: ${takenWickets}<br/> 
  Runs : ${TeamOneRuns}  <br/>
  Points : ${teamOnePoints} `;

  document.getElementById("bowlingTeam").innerHTML = `${teamType2} <br/>
  Points : ${teamTwoPoints} <br/>
  Runs : ${TeamTwoRuns}  <br/>
  Wickets: ${takenWickets}`;
  document.getElementById("teamOnePoints").textContent =
    teamOneName + " : " + teamOnePoints;
  document.getElementById("teamTwoPoints").textContent =
    teamTwoName + " : " + teamTwoPoints;
}

function hitShot() {
  setTimeout(hit(tossWinnerTeam, tossLooserTeam), 1000);
  showBatting(
    document.getElementById("team1").value,
    document.getElementById("team2").value
  );
  playingTeamDetails("Batting Team", "BowlingTeam");
}
document.getElementById("hitBtn2").style.display = "none";
document.getElementById("playTeam2").style.display = "none";


function playTeam2() {
  document.getElementById("battingTeamSection").style.display = "block";
  document.getElementById("hitBtn").style.display = "none";
  document.getElementById("hitBtn2").style.display = "block";
  document.getElementById("currShot").innerHTML = " ";
  document.getElementById("currBatter").innerHTML = " ";
  document.getElementById("bowlingTeam").innerHTML = " ";
  document.getElementById("currBowler").innerHTML = " ";
  document.getElementById("overDetail").textContent = " ";
  document.getElementById("battingTeam").innerHTML = " ";
  ballThrown = 0;
  bat = 0;
  bowl = 0;
  totalOver = 0;
  takenWickets = 0;
  over = 0;
  document.getElementById("playTeam2").style.display = "none";
}
function hitShot2() {
  setTimeout(hit(tossLooserTeam, tossWinnerTeam), 1000);
  showBatting(
    document.getElementById("team2").value,
    document.getElementById("team1").value
  );
  playingTeamDetails("Bowling Team", "Batting Team");
}

function teamOneStats(team, inning, dnbId) {
  team
    .filter((p) => p.played === "yes" || p.balls > 0)
    .forEach(
      (p) =>
        (document.getElementById(inning).innerHTML += ` <tr>
           <td> ${p.name} ${p.leader} </td> 
           <td> ${p.runs}  </td>
            <td>${p.balls}  </td>  
            <td>${p.fours}  </td>
           <td> ${p.sixes} </td>
            <td>${p.points} </td> 
          
            </tr>
                  `)
    );
  team
    .filter((p) => p.played !== "yes")
    .forEach(
      (p) => (document.getElementById(dnbId).innerHTML += p.name + "<br/>")
    );
}
function teamTwoStats(team, inning) {
  team
    .filter((p) => p.playingRole === "Bowler")
    .forEach((p) => {
      document.getElementById(inning).innerHTML += ` <tr>
      <td> ${p.name} ${p.leader}  </td> 
      <td> ${p.dotsThrown}  </td>
      <td> ${p.wickets}  </td>
  
       <td>${p.points} </td> 
            
       </tr>`;
    });
}
function matchWinner() {
  let matchWinner = document.getElementById("matchWinner");

  if (teamOnePoints > teamTwoPoints) {
    matchWinner.textContent =
      document.getElementById("team1").value + " " + "Won this match";
  } else {
    matchWinner.textContent =
      document.getElementById("team2").value + " " + "Won this match";
  }
}

function matchStats1() {
  teamOneStats(tossWinnerTeam, "inningOneBatter", "dnb1");
  teamTwoStats(tossLooserTeam, "inningOneBowler");
}
function matchStats2() {
  teamOneStats(tossLooserTeam, "inningTwoBatter", "dnb2");
  teamTwoStats(tossWinnerTeam, "inningTwoBowler");
}
