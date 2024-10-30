import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { DemoMaterialModule } from 'src/app/demo-material-module';
import { MaterialComponentService } from '../material-component.service';
 import { DadosAdministrador} from './DadosAdministrador';
import { ApiResponse } from '../buttons/ApiResponse';

@Component({
  selector: 'app-atualizar-colaborador',
  standalone: true,
  imports: [DemoMaterialModule, MatTabsModule, CommonModule, FormsModule],
  templateUrl: './atualizar-colaborador.component.html',
  styleUrl: './atualizar-colaborador.component.scss'
})
export class AtualizarColaboradorComponent implements OnInit{

  constructor(private service: MaterialComponentService){}

  dadosAdministrador: DadosAdministrador | undefined;

  messageSuccess: ApiResponse | undefined | null;

  messageError: ApiResponse | undefined | null;

  showPassword: boolean = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  ngOnInit() {
    this.listarAdministradorPorId();
   }

  listarAdministradorPorId(){
    const email = localStorage.getItem("currentUser");
 
     if(email){
       this.service.listarAdministadorPorEmail(email).subscribe(
         (res) => {
          this.dadosAdministrador = res;
         
         }, (error) => {
         
        }
       )
     }
 
   }

   public atualizarAdministrador(form: NgForm){

    const data:DadosAdministrador = {
      id: undefined,
      nome: form.value.nome || this.dadosAdministrador?.nome,
      dataNascimento: form.value.dataNascimento || this.dadosAdministrador?.dataNascimento,
      email: form.value.email || this.dadosAdministrador?.email,
      contato: form.value.contato || this.dadosAdministrador?.contato,
      funcao: form.value.funcao || this.dadosAdministrador?.funcao,
      senha: form.value.senha || this.dadosAdministrador?.senha
    }

    const email = localStorage.getItem("currentUser");
    this.service.atualizarAdministrador(this.dadosAdministrador?.id, data).subscribe(
      (res) => {
        this.messageSuccess = res;
         setTimeout(() => {
          this.messageSuccess = null;
          this.messageError = null;
        }, 3000)
      }, (error) => {
        this.messageError = error;
          setTimeout(() => {
          this.messageSuccess = null;
          this.messageError = null;
        }, 3000)
      }
    )
   }
   


}
