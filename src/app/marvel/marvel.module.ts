import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MarvelRoutingModule } from './marvel-routing.module';
import { CoreModule } from './../core/core.module';
import { SharedModule } from './../shared/shared.module';

import { HomeComponent } from './components/home/home.component';
import { CharactersComponent } from './components/characters/characters.component';
import { CharacterComponent } from './components/character/character.component';

// Material
import { MaterialModule } from './../material/material.module';
import { ComicComponent } from './components/comic/comic.component';
import { ComicsComponent } from './components/comics/comics.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [HomeComponent, CharactersComponent, CharacterComponent, ComicComponent, ComicsComponent, LoginComponent],
  imports: [
    CommonModule,
    MarvelRoutingModule,
    MaterialModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    CoreModule,
    SharedModule
  ]
})
export class MarvelModule { }
