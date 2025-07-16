import { Routes } from "@angular/router";

export const adminAuthRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/admin-login/admin-login.component').then((c) => c.AdminLoginComponent)
    },
    {
        path: 'varification',
        loadComponent: () => import('./pages/admin-login-otp/admin-login-otp.component').then((c) => c.AdminLoginOtpComponent)
    }
]