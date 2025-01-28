import { Component } from '@angular/core';
import { DBZService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  constructor(private _dbz: DBZService) {}

  public get Characters(): Array<Character> {
    return [...this._dbz.Characters];
  }

  public onDeleteCharacter(uuid: string): void {
    this._dbz.deleteCharacterByUUID(uuid);
  }

  public onNewCharacter(character: Character): void {
    this._dbz.addCharacter(character);
  }
}