import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output() onDeleteID: EventEmitter<string> = new EventEmitter();
  @Input() CharacterList: Array<Character> = [];

  public onDeleteCharacter(uuid: string): void {
    this.onDeleteID.emit(uuid);
  }
}
