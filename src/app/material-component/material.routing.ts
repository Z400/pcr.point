import { Routes } from '@angular/router';

import { ButtonsComponent } from './buttons/buttons.component';
import { GridComponent } from './grid/grid.component';
import { ListsComponent } from './lists/lists.component';
import { MenuComponent } from './menu/menu.component';
import { TabsComponent } from './tabs/tabs.component';
import { AtualizarColaboradorComponent } from './atualizar-colaborador/atualizar-colaborador.component';
import { authGuard } from '../guards/auth.guard';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { BancoDeHorasComponent } from './banco-de-horas/banco-de-horas.component';

export const MaterialRoutes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate:[authGuard]
  },
  {
    path: 'novo_colaborador',
    component: ButtonsComponent,
    canActivate: [authGuard]
  },
  {
    path: 'nova_jornada',
    component: GridComponent,
    canActivate: [authGuard]
  },
  {
    path: 'exibir_informacoes',
    component: ListsComponent,
    canActivate: [authGuard]
  },
  {
    path: 'extrato_de_hora',
    component: MenuComponent,
    canActivate: [authGuard]
  },
  {
    path: 'novo_administrador',
    component: TabsComponent,
    canActivate: [authGuard]
  },
  {
    path:'atualizarColaborador',
    component:AtualizarColaboradorComponent,
    canActivate: [authGuard]
  },
  {
    path:'banco_de_horas',
    component: BancoDeHorasComponent,
    canActivate:[authGuard]
  }
  // {
  //   path: 'stepper', 
  //   component: StepperComponent
  // },
  // {
  //   path: 'expansion',
  //   component: ExpansionComponent
  // },
  // {
  //   path: 'chips',
  //   component: ChipsComponent
  // },
  // {
  //   path: 'toolbar',
  //   component: ToolbarComponent
  // },
  // {
  //   path: 'progress-snipper',
  //   component: ProgressSnipperComponent
  // },
  // {
  //   path: 'progress',
  //   component: ProgressComponent
  // },
  // {
  //   path: 'dialog',
  //   component: DialogComponent
  // },
  // {
  //   path: 'tooltip',
  //   component: TooltipComponent
  // },
  // {
  //   path: 'snackbar',
  //   component: SnackbarComponent
  // },
  // {
  //   path: 'slider',
  //   component: SliderComponent
  // },
  // {
  //   path: 'slide-toggle',
  //   component: SlideToggleComponent
  // },
 
 
];
