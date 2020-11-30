import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Services
import { CharactersService } from './services/characters.service';
import { ComicsService } from './services/comics.service';


@NgModule({
    declarations: [],
    imports: [CommonModule],
    providers: [CharactersService, ComicsService],
})
export class CoreModule { }
