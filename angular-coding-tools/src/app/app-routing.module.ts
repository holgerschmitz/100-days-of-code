import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BinhexComponent } from './conversion/binhex/binhex.component';
const routes: Routes = [
  { path: '', component: BinhexComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
