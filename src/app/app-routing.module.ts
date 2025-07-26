import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { ContactComponent } from "./components/contact/contact.component";
import { SignupComponent } from "./components/signup/signup.component";
import { AboutComponent } from "./components/about/about.component";
import { ProductDashboardComponent } from "./components/product-dashboard/product-dashboard.component";
import { ProductsCardComponent } from "./components/products-card/products-card.component";


const routes : Routes = [
    {
        path : '',
        // component : HomeComponent,
        redirectTo : 'home',
        pathMatch : 'full'
    },
    {
        path : 'home',
        component : HomeComponent
    },
    {
        path : 'contact',
        component : ContactComponent
    },
    {
        path : 'signup',
        component : SignupComponent
    },
    {
        path : 'about',
        component : AboutComponent
    },
    {
        path : 'product',
        component : ProductDashboardComponent
    },
    {
        path : 'productCard',
        component : ProductsCardComponent
    }
   
]

@NgModule({
    imports : [
       RouterModule.forRoot(routes)
    ],
    exports : [

    ]
})
export class AppRoutingModule{
  
}