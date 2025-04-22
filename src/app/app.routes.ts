import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';

export const routes: Routes = [
    {path:'', component:HomeComponent, title:"Home"},
    {path:'tienda', component:ProductsComponent, title: "Tienda"}
];
    