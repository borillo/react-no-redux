const LATENCY = 1500;

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class PeopleList {
  constructor() {
    this.people = [new Person("Vilva", 27), new Person("Sam", 29)];
  }

  map(cb) {
    return this.people.map(cb);
  }
}

class Repository {
  whoIsThere() {
    const people = new PeopleList();

    return new Promise(resolve => {
      setTimeout(() => {
        resolve(people);
      }, LATENCY);
    });
  }
}

export { Repository };
