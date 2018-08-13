import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as _Features from './features/index';
const mediaRoutes: Routes = [
  { path: 'Media', component: _Features.MediaComponent },
  { path: '**', redirectTo: 'Media' }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(mediaRoutes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRouteConfig {}
