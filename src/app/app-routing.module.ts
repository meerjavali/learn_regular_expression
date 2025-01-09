import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeerjavaliComponent } from './users/meerjavali/meerjavali.component';
import { HomeComponent } from './home/home.component';
import { ImsabiyaComponent } from './users/imsabiya/imsabiya.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'meerjavali', component:MeerjavaliComponent},
  {path: 'imsabiya', component: ImsabiyaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
