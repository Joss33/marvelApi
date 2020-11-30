import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from '@marvel/components/home/home.component';
import { CharactersComponent } from '@marvel/components/characters/characters.component';
import { CharacterComponent } from '@marvel/components/character/character.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'personajes',
    component: CharactersComponent
  },
  {
    path: 'personajes/:id',
    component: CharacterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarvelRoutingModule { } 
