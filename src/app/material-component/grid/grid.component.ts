import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { DemoMaterialModule } from 'src/app/demo-material-module';
import { NovaRotina } from './NovaRotina';
import { MaterialComponentService } from '../material-component.service';
import { ApiResponse } from '../buttons/ApiResponse';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [DemoMaterialModule, MatGridListModule, NgFor, FormsModule, CommonModule],
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent {

  constructor(private service: MaterialComponentService){}

  messageSucces: ApiResponse | undefined | null;
  
  messageError: string [] | null = null;

  erroInterno: string | null | undefined;

  public adicionarRotina(form: NgForm){
    const data: NovaRotina = {
      id: undefined,
      inicioTrabalho: form.value.inicioTrabalho,
      inicioAlmoco: form.value.inicioAlmoco,
      fimAlmoco: form.value.fimAlmoco,
      fimTrabalho: form.value.fimTrabalho
      
    }

 
    this.service.adicionarRotina(data).subscribe(
      res => {
         this.messageSucces = res;
        this.messageError = null;
        setTimeout( () => {
          form.reset();
          this.messageSucces = null;
        }, 5000);
      }, error => {
       if(error.error && typeof error.error === 'object'){
         this.messageError = Object.values(error.error);
        this.messageSucces = null;
       }  
      }
    )

  }


}
