import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

// Services
import { CharactersService } from './../../../core/services/characters.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
})
export class CharacterComponent implements OnInit {

  dataCharacter = [];

  constructor(
    private charactersService: CharactersService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getCharacter();
  }

  getCharacter() {
    const params = this.activatedRoute.snapshot.params;
    this.charactersService.getCharacter(params.id).subscribe(
      (res) => {
        this.dataCharacter.push({
          name: res[0].name,
          image: res[0].thumbnail.path.concat('.', res[0].thumbnail.extension),
          descripcion: res[0].description,
        });
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
