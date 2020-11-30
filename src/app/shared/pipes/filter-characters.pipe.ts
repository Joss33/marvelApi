import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCharacters'
})
export class FilterCharactersPipe implements PipeTransform {

  transform(value: any[], arg: any): any {
    if (arg === '' || arg.length < 1) {
      if (value !== null) {
        return value;
      }
    }
    const resultCharacter = [];
    for (const character of value) {
      if (character.name !== null) {
        if (character.name.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
          resultCharacter.push(character);
        }
      }
    }
    return resultCharacter;
  }

}
