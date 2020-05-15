import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { WebComponent } from './web/web.component';
// Defining routes
const routes: Routes = [
  {path: 'web', component: WebComponent}
];

@NgModule({
  imports: [CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
