import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterCharactersPipe } from './pipes/filter-characters.pipe';



@NgModule({
  declarations: [FilterCharactersPipe],
  imports: [
    CommonModule
  ],
  exports: [
    FilterCharactersPipe
  ]
})
export class SharedModule { }
