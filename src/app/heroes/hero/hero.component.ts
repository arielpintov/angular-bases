import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent {

  name: string = 'ironman';
  age: number = 45;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }
  
  getHeroDescripcion():string{
    return `${ this.name } - ${ this.age }`; 
  }

  changeHero():void{
      this.name = "Spiderman";
  }

  changeAge():void{
      this.age = 21;
  }

  resetForm():void{
    this.name = 'ironman';
    this.age = 45
  }

}
