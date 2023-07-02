export default class Team {
  constructor(teamName) {
    this.teamName = teamName;
    this.units = new Set();
  }

  add(unit) {
    if (this.units.has(unit)) {
      throw new Error('Данный персонаж уже присутствует');
    }
    this.units.add(unit);
  }

  [Symbol.iterator]() {
    const team = Array.from(this.units);
    let current = -1;
    return {
      next() {
        current += 1;
        if (team[current] === undefined) {
          return {
            done: true,
          };
        }
        return {
          value: team[current],
          done: false,
        };
      },
    };
  }
}
