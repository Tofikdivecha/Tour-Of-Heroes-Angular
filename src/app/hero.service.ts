import { Injectable } from '@angular/core';
import { Hero } from './hero'; // Interface file import
import { HEROES } from './mock-heroes'; // HEROES Object file import
import { Observable, of } from 'rxjs'; // Observable Of function import
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private heroesUrl = 'api/heroes'; // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
  /** GET heroes from the server */
  getHeroes(): Observable<Hero[]> {
    //getHeroes() method interface & HEROES Object service return HEROES
    // const heroes = of(HEROES); // function of in HEROES add
    // this.messageService.add('HeroService: fetched heroes'); //messageService add in msg
    return this.http.get<Hero[]>(this.heroesUrl);
  }
  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = HEROES.find((h) => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}
