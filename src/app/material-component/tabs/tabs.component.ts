import { CommonModule } from '@angular/common';
import {Component} from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { DemoMaterialModule } from 'src/app/demo-material-module';
import { Gestor } from './Gestor';
import { MaterialComponentService } from '../material-component.service';
import { ApiResponse } from '../buttons/ApiResponse';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports:[DemoMaterialModule, MatTabsModule, CommonModule, FormsModule],
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {

  constructor(private api: MaterialComponentService){}

  messageSuccess: ApiResponse | undefined | null;
  messageError: ApiResponse | undefined | null;

  public enviarDados(form: NgForm){
    const data: Gestor = {
      nome: form.value.nome,
      dataNascimento: form.value.dataNascimento,
      email: form.value.email,
      contato: form.value.contato,
      funcao: form.value.funcao,
      senha: form.value.senha
    }
   
    this.api.adicionarGestor(data).subscribe(
      (res) => {
        console.log(res);
        this.messageSuccess = res;

        setTimeout( () => {
          form.reset();
          this.messageSuccess = null;
        }, 5000)
      }, (error) => {
       
        this.messageError = error;
        this.messageSuccess = null;

      }
    )
  }


}
