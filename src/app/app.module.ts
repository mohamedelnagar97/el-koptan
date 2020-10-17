import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SearchComponent } from './home/search/search.component';
import { SliderComponent } from './home/slider/slider.component';
import { PropertyComponent } from './home/property/property.component';
import { ImpPropertyComponent } from './home/imp-property/imp-property.component';
import { ContactUsComponent } from './shared/pages/contact-us/contact-us.component';
import { AboutUsComponent } from './shared/pages/about-us/about-us.component';
import { MorePropertyComponent } from './more-property/more-property.component';

const appRoutes: Routes =[

     { path:'',component: HomeComponent },
     { path:'contact-us',component: ContactUsComponent },
     { path:'about-us',component: AboutUsComponent },
     { path:'sign-in',component: SignInComponent },
     { path:'sign-up',component: SignUpComponent },
     { path:'property-details',component: PropertyDetailsComponent },
     { path:'more-property',component: MorePropertyComponent },


]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PropertyDetailsComponent,
    HeaderComponent,
    FooterComponent,
    SignInComponent,
    SignUpComponent,
    SearchComponent,
    SliderComponent,
    PropertyComponent,
    ImpPropertyComponent,
    ContactUsComponent,
    AboutUsComponent,
    MorePropertyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
