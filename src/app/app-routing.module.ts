import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { MenuDetailComponent } from './menu-detail/menu-detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/menu', pathMatch: 'full' },
  {path: 'home', component: HomeComponent },
  {path:'menu',component:MenuComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  { path: 'menu/:{food.id}', component: MenuDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }