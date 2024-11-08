import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}

const MENUITEMS = [
  { state: 'dashboard', name: 'Dashboard', type: 'link', icon: 'av_timer' },
  { state: 'novo_colaborador', type: 'link', name: 'Novo colaborador', icon: 'person_add' },
  { state: 'novo_administrador', type: 'link', name: 'Novo administrador', icon: 'person_add' },
  { state: 'nova_jornada', type: 'link', name: 'Jornada de tabalho', icon: 'timer' },
  { state: 'exibir_informacoes', type: 'link', name: 'Listar informações', icon: 'badge' },
  { state: 'extrato_de_hora', type: 'link', name: 'Extrato de horas', icon: 'swap_vert' },
  
  //   type: 'link',
  //   name: 'Progress Bar',
  //   icon: 'blur_circular'
  // },
  // {
  //   state: 'dialog',
  //   type: 'link',
  //   name: 'Dialog',
  //   icon: 'assignment_turned_in'
  // },
  // { state: 'tooltip', type: 'link', name: 'Tooltip', icon: 'assistant' },
  // { state: 'snackbar', type: 'link', name: 'Snackbar', icon: 'adb' },
  // { state: 'slider', type: 'link', name: 'Slider', icon: 'developer_mode' },
  // {
  //   state: 'slide-toggle',
  //   type: 'link',
  //   name: 'Slide Toggle',
  //   icon: 'all_inclusive'
  // }
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
