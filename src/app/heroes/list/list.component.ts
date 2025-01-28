import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroesName: Array<string> = ['Spiderman', 'IronMan', 'Hulk', 'SheHulk', 'Thor'];
  public deletedHero?: string;

  public removeLastHero(): void {
    this.deletedHero = this.heroesName.pop();
  }
}
