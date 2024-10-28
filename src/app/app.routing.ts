import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RegistrarPontoComponent } from './registrar-ponto/registrar-ponto.component';
import { LoginComponent } from './login/login.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'login',
    component:LoginComponent
  },
{
  path:'registrarPonto',
  component: RegistrarPontoComponent 
},
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: '',
        loadChildren:
          () => import('./material-component/material.module').then(m => m.MaterialComponentsModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      }
    ]
  }
];
