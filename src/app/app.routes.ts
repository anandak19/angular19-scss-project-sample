import { Routes } from '@angular/router';
import { AdminAuthLayoutComponent } from './features/adminAuth/admin-auth-layout/admin-auth-layout.component';
import { AdminLayoutComponent } from './features/admin/layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './features/auth/auth-layout/auth-layout.component';
import { UserLayoutComponent } from './features/user/user-layout/user-layout.component';

export const routes: Routes = [
  {
    path: 'admin',
    children: [
      {
        path: 'login',
        component: AdminAuthLayoutComponent,
        loadChildren: () =>
          import('./features/adminAuth/adminAuth.routes').then(
            (r) => r.adminAuthRoutes
          ),
      },
      {
        path: '',
        component: AdminLayoutComponent,
        loadChildren: () =>
          import('./features/admin/admin.routes').then((r) => r.adminRoutes),
      },
    ],
  },
  {
    path: '',
    component: UserLayoutComponent,
    loadChildren: () =>
      import('./features/user/user.routes').then((r) => r.userRoutes),
  },
  {
    path: '',
    component: AuthLayoutComponent,
    loadChildren: () =>
      import('./features/auth/auth.routes').then((r) => r.authRoutes),
  },
];
