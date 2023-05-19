import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CreateCVComponent } from './create-cv/create-cv.component';
import { HomeComponent } from './home/home.component';
import { ImgComponent } from './img/img.component';
import { Img2Component } from './img2/img2.component';
import { Img3Component } from './img3/img3.component';
import { MenuComponent } from './menu/menu.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'menu',component:MenuComponent},

  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'createCV',component:CreateCVComponent},
  {path:'img',component:ImgComponent},

  {path:'img2',component:Img2Component},
  {path:'img3',component:Img3Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
