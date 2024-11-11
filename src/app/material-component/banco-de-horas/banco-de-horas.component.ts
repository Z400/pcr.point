import { Component, OnInit } from '@angular/core';
import { MatGridList } from '@angular/material/grid-list';
import { DemoMaterialModule } from 'src/app/demo-material-module';
import { MaterialComponentService } from '../material-component.service';
import { Colaborador } from '../buttons/Colaborador';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ApiResponseRegistrosColaborador } from '../buttons/ApiResponseRegistrosColaborador';
import { ApiResponse } from '../buttons/ApiResponse';

@Component({
  selector: 'app-banco-de-horas',
  standalone: true,
  imports: [DemoMaterialModule, MatGridList, CommonModule, FormsModule],
  templateUrl: './banco-de-horas.component.html',
  styleUrl: './banco-de-horas.component.scss'
})
export class BancoDeHorasComponent implements OnInit {

  tabela: Boolean = false;
  listaDeColaboradores: Colaborador[] | undefined;
  listaDeRegistrosDoColaborador: any[] = [];  

  messageErrorRegistroInexistente: undefined | null;

  messageSuccessDeletarRegistrosPorNome: ApiResponse | null | undefined;
  messageErrorDeletarRegistros: String | null | undefined;


  constructor(private service: MaterialComponentService) { }

  ngOnInit(): void {
    this.listarColaboradores();
  }

  public listarColaboradores() {
    this.service.listarColaboradores().subscribe(
      (res) => {
        this.listaDeColaboradores = res;
      }, (error) => {
        console.log("Error:", error);
      }
    );
  }

  public buscarRegistrosPorNome(form: NgForm) {
    const data = {
      colaborador: form.value.optionColaborador
    };
    this.service.buscarRegistroPorNome(data.colaborador).subscribe(
      (res: ApiResponseRegistrosColaborador) => {
        this.listaDeRegistrosDoColaborador = res.data;
        this.tabela = true;
        this.messageErrorRegistroInexistente = null;
    
        console.log("Registros:", this.listaDeRegistrosDoColaborador);
      }, (error) => {
        this.messageErrorRegistroInexistente = error.error.message;
        setTimeout(()=> {
          window.location.reload();
        },2000);
      }
    );
  }


  public deletarRegistrosPorNome(){

    if(confirm("Desejar excluir os seguintes dados? Esse processo nao poderá ser disfeito!")){

      this.service.deletarRegistrosPorNome(this.listaDeRegistrosDoColaborador[0]?.dadosFuncionario?.registro).subscribe(
        (res)=> {
          this.messageSuccessDeletarRegistrosPorNome = res;
          setTimeout(()=>{
            window.location.reload();
          }, 2000)
        }, (HttpErrorResponse) => {
          this.messageErrorDeletarRegistros = "Erro interno de servidor!";

          
        })
    }
  
  }

}