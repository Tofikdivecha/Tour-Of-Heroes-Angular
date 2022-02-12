import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit {
  // @Input() hero?: Hero;
  hero: Hero | undefined;

  constructor(
    private rout: ActivatedRoute,
    private location: Location,
    private heroService: HeroService
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero() {
    const id = Number(this.rout.snapshot.paramMap.get('id'));
    console.log(id);
    this.heroService.getHero(id).subscribe((hero) => {
      this.hero = hero;
      console.log(hero);
    });
  }
  goBack() {
    this.location.back();
  }
}
