// TODO config.json
 const BUILDINGS = {
   cursor: {
     displayString: "Cursor",
     cost: 15,
     cps: 0.1
   },
   grandma: {
     displayString: "Grandma",
     cost: 100,
     cps: 1
   },
   farm: {
     displayString: "Farm",
     cost: 1100,
     cps: 8
   },
   mine: {
     displayString: "Mine",
     cost: 12000,
     cps: 47
   },
   factory: {
     displayString: "Factory",
     cost: 130000,
     cps: 260
   },
   bank: {
     displayString: "Bank",
     cost: 1400000,
     cps: 1400
   },
   temple: {
     displayString: "Temple",
     cost: 20000000,
     cps: 7800
   },
   wizardTower: {
     displayString: "Wizard Tower",
     cost: 330000000,
     cps: 44000
   },
   shipment: {
     displayString: "Shipment",
     cost: 5100000000,
     cps: 260000
   },
   alchemyLab: {
     displayString: "Alchemy Lab",
     cost: 75000000000,
     cps: 1600000
   },
   portal: {
     displayString: "Portal",
     cost: 1000000000000,
     cps: 10000000
   },
   timeMachine: {
     displayString: "Time Machine",
     cost: 14000000000000,
     cps: 65000000
   },
   antimatterCondenser: {
     displayString: "Antimatter Condenser",
     cost: 170000000000000,
     cps: 430000000
   }
 }

 const BUILDINGS_COLLECTION = {
   cursor: 0,
   grandma: 0,
   farm: 0,
   mine: 0,
   factory: 0,
   bank: 0,
   temple: 0,
   wizardTower: 0,
   shipment: 0,
   alchemyLab: 0,
   portal: 0,
   timeMachine: 0,
   antimatterCondenser: 0
 }

class Game {
  init() {
    this.fps = 30;
    this.bigCookie = document.getElementById('bigCookie');
    this.cookiesDisplay = document.getElementById('cookiesDisplay'); // Shows the current number of cookies
    this.cpsDisplay = document.getElementById('cpsDisplay'); // Shows the current CPS
    this.currentCookies = 0;
    this.currentCps = 0;
    this.buildings = BUILDINGS_COLLECTION;
    this.cookiesPerClick = 1;
    this.totalTime = 0;

    this.cookiesDisplay.innerHTML = `${this.currentCookies} cookies`;
    this.cpsDisplay.innerHTML = `Per second: ${this.currentCps}`;

    this.setupEventListeners();
    this.loop(performance.now());
  }

  setupEventListeners() {
    this.bigCookie.addEventListener('click', this.clickCookie.bind(this));

    for (const buildingName in BUILDINGS) {
      const capitalisedBuildingName = buildingName.charAt(0).toUpperCase() + buildingName.slice(1);
      document.getElementById(`purchase${capitalisedBuildingName}Button`).addEventListener('click', this.buyBuilding.bind(this, buildingName));
    }
  }

  clickCookie() {
    this.addCookies(this.cookiesPerClick);
  }

  addCookies(amount) {
    this.currentCookies += amount;
  }

  deductCookies(amount) {
    this.currentCookies -= amount;
  }

  updateCurrentCps() {
    this.currentCps = Object.keys(this.buildings).reduce((accumulator, buildingName) => {
      const buildingCps = BUILDINGS[buildingName].cps;
      const currentlyOwned = this.buildings[buildingName];

      return (buildingCps * currentlyOwned) + accumulator;
    }, 0);
    this.cpsDisplay.innerHTML = `Per second: ${this.currentCps}`;
  }

  buyBuilding(buildingType) {
    const costOfBuilding = BUILDINGS[buildingType].cost;
    const capitalisedBuildingName = buildingType.charAt(0).toUpperCase() + buildingType.slice(1)

    if (this.currentCookies >= costOfBuilding) {
      this.buildings[buildingType] += 1;
      this.deductCookies(costOfBuilding);
      document.getElementById(`owned${capitalisedBuildingName}sDisplay`).innerHTML = `Currently owned: ${this.buildings[buildingType]}`;
    }
  }

  // Calls itself approximately 30 times per second, updates ALL THE THINGS!
  // Compares current time with the time of the previous loop so that cps stays accurate
  // There are probably other things we need to do to make sure it keeps time on slower machines etc., but this works for now
  loop(timestamp) {
    if (this.disabled) { return };

    const previousTimestamp = timestamp;
    const currentTimestamp = performance.now();
    const timeSinceLastLoop = currentTimestamp - previousTimestamp;
    this.totalTime += timeSinceLastLoop;

    this.updateCurrentCps();
    this.addCookies(this.currentCps / (1000 / timeSinceLastLoop));
    this.cookiesDisplay.innerHTML = `${Math.floor(this.currentCookies)} cookies`;

    // Going with setTimeout instead of requestAnimationFrame because apparently requestAnimationFrame doesn't do anything while out of focus
    // (and we want to be able to run this in a separate tab and behave normally)
    setTimeout(this.loop.bind(this, currentTimestamp), 1000 / this.fps);
  }

  // For debugging in case I don't want the console going crazy
  stop() {
    console.warn('GAME LOOP STOPPED');
    this.disabled = true;
  }
}
