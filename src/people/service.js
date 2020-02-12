import {Repository} from './repository'

class PeopleService {
  constructor() {
    this.repository = new Repository();
  }

  async whoIsThere() {
    const people = await this.repository.whoIsThere();

    return people;
  }
}

export { PeopleService };
