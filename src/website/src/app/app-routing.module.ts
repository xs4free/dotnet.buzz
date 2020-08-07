import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ItemCommentsComponent } from './itemcomments/itemcomments.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'items', redirectTo: '', pathMatch: 'full' },
  { path: 'comments/:id', component: ItemCommentsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
