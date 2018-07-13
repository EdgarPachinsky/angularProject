import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  heroes = HEROES;
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  constructor() { }
  l(data): void {
    console.log(data);
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.l(this.selectedHero);
  }
  ngOnInit() {
  }
}
