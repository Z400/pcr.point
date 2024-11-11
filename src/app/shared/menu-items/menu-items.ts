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
  { state: 'banco_de_horas', type: 'link', name: 'Banco de horas', icon: 'storage' },
  
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
