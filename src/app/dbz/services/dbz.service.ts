import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DBZService {

  public Characters: Array<Character> = [
    { uuid: uuidv4(), name: 'Krillin', power: 1000 },
    { uuid: uuidv4(), name: 'Goku', power: 9500 },
    { uuid: uuidv4(), name: 'Vegeta', power: 7500 }
  ];

  constructor() {}
  
  public addCharacter(character: Character) {
    this.Characters.push({ uuid: uuidv4(), ...character });
  }

  public deleteCharacterByUUID(uuid: string) {
    this.Characters = this.Characters.filter((item: Character) => item.uuid !== uuid);
  }
}