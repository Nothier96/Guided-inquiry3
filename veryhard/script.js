class person {
  constructor(name, job, age) {
    this.age = age;
    this.name = name;
    this.job = job;

    this.exercise = function () {
      return console.log("Jogging is cool");
    };
    this.fetchJob = function () {
      return console.log(`${this.name} is a ${this.job}`);
    };
  }
}

const thierno = new person("Thierno", "Engineer", 25);

class programmer extends person {
  constructor(name, job, age, languages) {
    super(name, age, job);
    this.age = age;
    this.name = name;
    this.job = job;
    this.languages = languages;
    this.exercise = function () {
      return console.log("Jogging is not cool at all");
    };
    this.fetchJob = function () {
      return console.log(`${this.name} is a ${this.job}`);
    };
  }
}
programmer.prototype.busy = true;
programmer.prototype.completeTask = function () {
  return console.log((this.busy = false));
};
programmer.prototype.acceptNewTask = function () {
  return console.log((this.busy = true));
};
programmer.prototype.offerNewTask = function () {
  if (this.busy === false) {
    return console.log(`${this.name} can't accept any task now`);
  } else if (this.busy === true) {
    return console.log(
      `${this.name} would love to take on a new responsibility.`
    );
  } else {
    console.log(`Case not available`);
  }
};
programmer.prototype.learnLanguage = function (lang) {
  this.languages = [lang];
};
programmer.prototype.listLanguages = function () {
  return console.log(this.languages);
};

const sissoko = new programmer("Thierno", "software engineer", 25, "english");
thierno.exercise();
thierno.fetchJob();
sissoko.exercise();
sissoko.acceptNewTask();
sissoko.offerNewTask();
sissoko.learnLanguage("javascript");
sissoko.listLanguages();
