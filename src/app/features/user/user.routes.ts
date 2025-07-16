import { Routes } from "@angular/router";


export const userRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/home.component').then((c) => c.HomeComponent)
    },
    {
        path: 'contact',
        loadComponent: () => import('./pages/contact/contact.component').then((c) => c.ContactComponent)
    }
]