import { Routes } from '@angular/router';

import { ButtonsComponent } from './buttons/buttons.component';
import { GridComponent } from './grid/grid.component';
import { ListsComponent } from './lists/lists.component';
import { MenuComponent } from './menu/menu.component';
import { TabsComponent } from './tabs/tabs.component';
import { StepperComponent } from './stepper/stepper.component';
import { ExpansionComponent } from './expansion/expansion.component';
import { ChipsComponent } from './chips/chips.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ProgressSnipperComponent } from './progress-snipper/progress-snipper.component';
import { ProgressComponent } from './progress/progress.component';
import { DialogComponent } from './dialog/dialog.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { SliderComponent } from './slider/slider.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { AtualizarColaboradorComponent } from './atualizar-colaborador/atualizar-colaborador.component';
import { authGuard } from '../guards/auth.guard';
import { DashboardComponent } from '../dashboard/dashboard.component';

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
