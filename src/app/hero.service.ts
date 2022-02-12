import { Injectable } from '@angular/core';
import { Hero } from './hero'; // Interface file import
import { HEROES } from './mock-heroes'; // HEROES Object file import
import { Observable, of } from 'rxjs'; // Observable Of function import
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    //getHeroes() method interface & HEROES Object service return HEROES
    const heroes = of(HEROES); // function of in HEROES add
    this.messageService.add('HeroService: fetched heroes'); //messageService add in msg
    return heroes;
  }
  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = HEROES.find((h) => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}
