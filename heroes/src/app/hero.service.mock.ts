import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Hero } from './hero';

export class HeroServiceMock {

  heroes: Hero[] = [];

  constructor() {
    this.heroes.push(this.newHero(1, "Batman"));
    this.heroes.push(this.newHero(2, "He-Man"));
    this.heroes.push(this.newHero(3, "Flash"));
  }

  newHero(id: number, name: string): Hero {
    const hero: Hero = new Hero();
    hero.id = id;
    hero.name = name;
    return hero;
  }

  getHeroes (): Observable<Hero[]> {
    return of(this.heroes);
  }

  addHero(hero: Hero): Observable<Hero> {
    this.heroes.push(hero);
    return of(hero);
  }

  deleteHero (hero: Hero | number): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    return of(this.heroes[id-1]);
  }

  getHero(id: number): Observable<Hero> {
    return of(this.heroes[id-1]);
  }

  searchHeroes(term: string): Observable<Hero[]> {
    return of(this.heroes.filter((element) => {
      return element.name.startsWith(term)
    }));
  }

  updateHero (hero: Hero): Observable<any> {
    const index = this.heroes.findIndex((element) => {
      return element.id === hero.id &&
        element.name === hero.name
    });
    this.heroes[index] = hero;
    return of(this.heroes[index]);
  }
}