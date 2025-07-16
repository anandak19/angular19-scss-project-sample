import { Routes } from "@angular/router";

export const adminRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/dashbord/dashbord.component').then((c) => c.DashbordComponent)
    }, 
    {
        path: 'users',
        loadComponent: () => import('./pages/users/users.component').then((c) => c.UsersComponent)
    }
]