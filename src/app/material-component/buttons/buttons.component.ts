import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { DemoMaterialModule } from 'src/app/demo-material-module';
import { Colaborador } from './Colaborador';
import { MaterialComponentService } from '../material-component.service';
import { ApiResponse } from './ApiResponse';
import { CommonModule } from '@angular/common';
import { NovaRotina } from '../grid/NovaRotina';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [DemoMaterialModule, MatButtonModule, FormsModule, CommonModule],
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit{

  constructor(private service: MaterialComponentService) { }
  
  ngOnInit(): void {
   this.listarItinerarios();
  }

  messageSuccess: ApiResponse | undefined | null;
  messageError: ApiResponse | undefined | null;

  
  listItinerarios: NovaRotina | undefined;
  itinerarios: NovaRotina[] = [];

  enviarDados(form: NgForm){
    const data: Colaborador = {
      nome: form.value.nome,
      dataNascimento: form.value.dataNascimento,
      email: form.value.email,
      contato: form.value.contato,
      funcao: form.value.funcao,
      jornadaTrabalho: form.value.jornadaTrabalho,
      id: undefined
    } 
    
    console.log("Dados do formularios:", data);
    this.service.adicionarColaborador(data).subscribe(
      res => {
        this.messageSuccess = res;
        
        setTimeout( () => {
          form.reset();
          this.messageSuccess = null;
        }, 5000)


      }, error => {
        this.messageSuccess = null;
        this.messageError = error;
          
      }
    )}

  public listarItinerarios(){
    this.service.listarItinerarios().subscribe
    (
       (res) => {
         console.log("Itinerarios:", res);
        this.itinerarios = res;

    }, (error) => {

    }
  )}

  


}
