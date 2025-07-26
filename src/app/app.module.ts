import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductsCardComponent } from './components/products-card/products-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { SignupComponent } from './components/signup/signup.component';
import { AboutComponent } from './components/about/about.component';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { ProductDashboardComponent } from './components/product-dashboard/product-dashboard.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { ShowNavbarDirective } from './directive/shownavbar.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsCardComponent,
    HomeComponent,
    ContactComponent,
    SignupComponent,
    AboutComponent,
    ProductDashboardComponent,
    FooterComponent,
    ShowNavbarDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
