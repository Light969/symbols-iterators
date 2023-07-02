import Team from './Team.js';
import Character from './Character.js';

const team = new Team('Heroes');
console.log(team);

const Mike = new Character();
const Lesya = new Character();
const Genya = new Character();
const Kesha = new Character();

team.add(Mike);
team.add(Lesya);
team.add(Genya);
team.add(Kesha);
// team.add(Mike);

console.log(Mike);
console.log(team);

const iterator = team[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

for (const unit of team) {
  console.log(unit);
}

const teamTwo = new Team('Demons');
console.log(teamTwo);

const Sasha = new Character();
const Olya = new Character();

teamTwo.add(Sasha);
teamTwo.add(Olya);

console.log(teamTwo);

const iteratorTwo = teamTwo[Symbol.iterator]();
console.log(iteratorTwo.next());
console.log(iteratorTwo.next());
console.log(iteratorTwo.next());
