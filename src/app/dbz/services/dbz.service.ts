import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({ providedIn: 'root' })
export class DbzService {

  public characters: Character[] = [{
    id: uuid(), name: 'Krilin', power: 1000
  }, {
    id: uuid(), name: "goku", power: 9900
  }, {
    id: uuid(), name: "vegueta", power: 7999
  }];

  addCharacter(character: Character): void {

    const newCharacter: Character = {
      id: uuid(), ...character
    };

    this.characters.push(newCharacter);
  }

  // onDeleteCharacter(index: number) {
  //   this.characters.splice(index, 1);
  // }

    deleteCharacterById(id:string){
      this.characters = this.characters.filter(character => character.id !==id);
    }
}
