import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { MaterialComponentService } from '../material-component/material-component.service';
import { ApiResponse } from '../material-component/buttons/ApiResponse';
import { ApiResponsePonto } from '../material-component/buttons/ApiResponsePonto';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-registrar-ponto',
  standalone: true,
  imports: [FormsModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './registrar-ponto.component.html',
  styleUrl: './registrar-ponto.component.scss'
})
export class RegistrarPontoComponent {

  messageSuccess: ApiResponsePonto | undefined | null;

  responseApi: ApiResponsePonto | undefined | null;

  messageError: ApiResponsePonto | undefined | null;

  messageErrorInterno: String | undefined | null;


  constructor(private service: MaterialComponentService){}

  public registarPonto(form: NgForm){
    const data:any = {
      numeroRegistro: form.value.numeroRegistro
    }

    // console.log("Data:",data)
    const dataNumber = Number(data.numeroRegistro);
    // console.log("dataNumber:", dataNumber)

    this.service.registrarPonto(dataNumber).subscribe(
      (res) => {   
     
        console.log("Resposta api:", res);
        this.responseApi = res;
        this.messageSuccess = res;
        this.messageError = null;
        this.messageErrorInterno = null;
        this.imprimir();
        setTimeout( () => {
          window.location.reload();
          form.reset();
        }, 3000);
     }, (error) => {
        this.messageSuccess = null;
        if(error.status === 0){
           this.messageErrorInterno = "Erro interno de servidor";
        }else{
          this.messageError = error.error;
        }
        console.log("ERROR:", error);
      }
    )
  }


  imprimir() {
    const element = document.createElement('div');
    element.innerHTML = `
      <h3>Registro de ponto</h3>
      <p>Nome: ${this.responseApi?.data?.dadosFuncionario?.nome ?? 'Não registrado'}</p>
      <p>Registro: ${this.responseApi?.data?.dadosFuncionario?.registro ?? 'Não registrado'}</p>
      <p>Jornada de trabalho: ${this.responseApi?.data?.dadosFuncionario?.jornadaTrabalho ?? 'Não registrado'}</p>
      <p>Início de expediente: ${this.responseApi?.data?.inicioTrabalho ?? 'Não registrado'}</p>
      <p>Início de almoço: ${this.responseApi?.data?.inicioAlmoco ?? 'Não registrado'}</p>
      <p>Fim de almoço: ${this.responseApi?.data?.fimAlmoco ?? 'Não registrado'}</p>
      <p>Fim de expediente: ${this.responseApi?.data?.fimTrabalho ?? 'Não registrado'}</p>
    `;
  
    // Aplica alguns estilos básicos ao div
    element.style.width = '400px';
    element.style.padding = '10px';
    element.style.border = '1px solid #000';
    element.style.backgroundColor = '#fff';
    document.body.appendChild(element); // Adiciona ao corpo do documento temporariamente
  
    // Usa html2canvas para capturar o conteúdo do div e gerar a imagem
    html2canvas(element).then((canvas) => {
      const link = document.createElement('a');
      link.download = 'ponto-registrado.png';
      link.href = canvas.toDataURL();
      link.click(); // Faz o download da imagem
  
      document.body.removeChild(element); // Remove o div temporário
    });
  }
  
}