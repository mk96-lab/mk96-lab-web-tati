import { Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    component: MainPageComponent
  },
  {
    path: 'productos',
    component: ProductsPageComponent
  },
  {
    path: 'sobre-nosotros',
    component: AboutPageComponent
  },
  {
    path: 'contacto',
    component: ContactPageComponent
  },
  {
    path: '**',
    redirectTo: 'inicio'
  }
];
