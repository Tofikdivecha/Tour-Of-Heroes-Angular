import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}
  // onSelect(hero: Hero) {
  //   this.selectedHero = hero;
  //   this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  //   alert('Selected Id : ' + hero.id + ' Name: ' + hero.name);
  // }
  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroObj) => {
      this.heroes = heroObj;
    }); //synchronous signature,
  }
  ngOnInit() {
    this.getHeroes();
  }
}
