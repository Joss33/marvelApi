import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

// Services
import { CharactersService } from './../../../core/services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
})
export class CharactersComponent implements OnInit {
  allCharacters: Observable<any>;
  toppings = new FormControl();
  filterCharacter = '';
  toppingList: string[] = ['Heroe', 'Villano'];


  constructor(
    private charactersService: CharactersService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters() {
    this.allCharacters = this.charactersService.getAllCharacters();
  }

  onlyCharacter(character) {
    this.router.navigate(['/personajes', character.id]);
  }

}
