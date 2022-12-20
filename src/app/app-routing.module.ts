import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './first-component/first-component.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SecondComponentComponent } from './second-component/second-component.component';

const routes: Routes = [
  { path: 'first-component', component: FirstComponentComponent },
  { path: 'second-component', component: SecondComponentComponent },
  {path: '', redirectTo: '/second-component', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
