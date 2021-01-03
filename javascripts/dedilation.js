class dedilationChallenge {
  constructor(challengeDesc, challengeID, goal, rewardDesc) {
    this.challengeDesc = challengeDesc;
    this.challengeID = challengeID;
    this.goal = goal;
    this.rewardDesc = rewardDesc;
  }
  
  get update() {
    // document.getElementById(challengeID)
  }
}

let dedilationChallenges = [
  new dedilationChallenge("The buy-10 multiplier for the 1st Dimension is 1x.", "dbChallenge1", 1, "Get 2x to 1st Dimension for each DBC completed."),
  new dedilationChallenge("Dimension production is divided by 10.", "dbChallenge2", 1, "Get ((DBCs completed)^0.5)x to each Normal Dimension."),
  new dedilationChallenge("There is a second layer of dilation stacked on, ignored by Dedilation Power.", "dbChallenge3", 1, "Get 2x to 1st Dimension for each DBC completed."),
  new dedilationChallenge("DBCs 1-3 are all applied at once.", "dbChallenge4", 1, "Get 2x to 1st Dimension for each DBC completed."),
  new dedilationChallenge("The 8th Dimension has no effect.", "dbChallenge5", 1, "Get 2x to 1st Dimension for each DBC completed."),
  new dedilationChallenge("All production is square rooted.", "dbChallenge6", 1, "Get 2x to 1st Dimension for each DBC completed."),
  new dedilationChallenge("Multiplier per 10 dimensions is equal to 1 + (DB / 10).", "dbChallenge7", 1, "Get 2x to 1st Dimension for each DBC completed."),
  new dedilationChallenge("DBCs 4-7 are all applied at once.", "dbChallenge8", 1, "Get 2x to 1st Dimension for each DBC completed."),
]

function updateDedilationChallenges() {
  if (player.resets >= 4) {
    document.getElementById("onions1").style.display = "inline-block"
    document.getElementById("dimBoostMessage").style.display = "none"
  } else {
    document.getElementById("onions1").style.display = "none"
    document.getElementById("dimBoostMessage").style.display = "inline-block"
  }
  
}

