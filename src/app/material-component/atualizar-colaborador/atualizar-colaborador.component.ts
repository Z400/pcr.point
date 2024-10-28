import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { DemoMaterialModule } from 'src/app/demo-material-module';

@Component({
  selector: 'app-atualizar-colaborador',
  standalone: true,
  imports: [DemoMaterialModule, MatTabsModule, CommonModule, FormsModule],
  templateUrl: './atualizar-colaborador.component.html',
  styleUrl: './atualizar-colaborador.component.scss'
})
export class AtualizarColaboradorComponent {

}
