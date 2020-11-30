import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

// Components
import { LayoutComponent } from '@layout/layout.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('@marvel/marvel.module').then(
            (m) => m.MarvelModule
          ),
      }
    ]
  },
  {
    path: '**',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('@marvel/marvel.module').then(
            (m) => m.MarvelModule
          ),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    preloadingStrategy: PreloadAllModules,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
