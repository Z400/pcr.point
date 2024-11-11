import { Component, OnInit } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { DemoMaterialModule } from 'src/app/demo-material-module';
import { MaterialComponentService } from '../material-component.service';
import { FormsModule, NgForm } from '@angular/forms';
import { Colaborador } from '../buttons/Colaborador';
import { CommonModule } from '@angular/common';
import { dadosConsulta } from './dadosConsulta';
import { ApiResponsePonto } from '../buttons/ApiResponsePonto';
import jsPDF from 'jspdf';
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [DemoMaterialModule, MatMenuModule, CommonModule, FormsModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit{
  
  constructor(private service: MaterialComponentService){}
  
  listagemColaboradores: Colaborador[] |  undefined;
  dadosColaborador: ApiResponsePonto | undefined;

  messageSuccesBuscarPorColaborador: ApiResponsePonto | undefined | null;
  messageErrorBuscarPorColaborador: ApiResponsePonto | undefined | null;

  messageSuccessConsultaMesEano : ApiResponsePonto | undefined | null;
  messageErrorConsultaMesEano: ApiResponsePonto | undefined | null;



  ngOnInit(){

      this.listarColaboradores();  
  }
 
    public listarColaboradores(){
      this.service.listarColaboradores().subscribe(
        (res) => {
              this.listagemColaboradores = res;
        }, (error) => {

        }
      )
    }

    public buscarMesEano(form: NgForm){
      const data: Partial<dadosConsulta> = {
        mes: form.value.selectMes,
        ano: form.value.selectAno
      }

      const mes = Number(data.mes);
      const ano = Number(data.ano); 

      this.service.buscarPorMesEano(mes, ano).subscribe(
        (res) => {
          this.dadosColaborador = res;
          this.messageSuccessConsultaMesEano = res;
          this.messageErrorConsultaMesEano = null;
           this.imprimir();

          setTimeout(() => {
            this.messageSuccessConsultaMesEano = null;
            this.messageErrorConsultaMesEano = null;
          }, 3000);

          }, (error) => {
            this.messageErrorConsultaMesEano = error.error;
            this.messageSuccessConsultaMesEano = null;
         }
      )

    } 
    
    public buscarPorColaborador(form: NgForm){

      const data: dadosConsulta = {
        mes: form.value.selectMes,
        nome: form.value.selectColaborador,
        ano: form.value.selectAno
      }
      const mes = String(data.mes);
      const nome = String(data.nome);
      const ano = Number(data.ano);
      
      this.service.buscarPorColaborador(mes, nome, ano).subscribe(
        (res) => {
          this.messageSuccesBuscarPorColaborador = res;
          this.dadosColaborador = res;
          this.imprimir();
          this.messageErrorBuscarPorColaborador = null;
           
          setTimeout(() =>{
            this.messageSuccesBuscarPorColaborador = null;
          },3000)
        }, (error) => {
          this.messageSuccesBuscarPorColaborador = null;
          this.messageErrorBuscarPorColaborador = error.error;
         }
      )
      
    }

    public imprimir() {
      if (this.dadosColaborador && this.dadosColaborador.data && Array.isArray(this.dadosColaborador.data)) {
        const doc = new jsPDF();
        doc.setFontSize(10);
        let yOffset = 10;
    
        this.dadosColaborador.data.forEach((obj: any) => {
     
          if (yOffset > 270) { 
            doc.addPage();
            yOffset = 10; 
          }
    
          // Verifique a existência dos campos antes de adicionar ao PDF
          doc.text(`Colaborador: ${obj.dadosFuncionario.nome || 'Desconhecido'}`, 10, yOffset + 5);
          yOffset += 5;
          doc.text(`Data de registro: ${obj.pontoRegistrado || 'Sem data'}`, 10, yOffset + 5);
          yOffset += 5;
          doc.text(`Início trabalho: ${obj.inicioTrabalho || '-'}`, 10, yOffset + 5);
          yOffset += 5;
          doc.text(`Início almoço: ${obj.inicioAlmoco || '-'}`, 10, yOffset + 5);
          yOffset += 5;
          doc.text(`Fim almoço: ${obj.fimAlmoco || '-'}`, 10, yOffset + 5);
          yOffset += 5;
          doc.text(`Fim trabalho: ${obj.fimTrabalho || '-'}`, 10, yOffset + 5);
          yOffset += 10; // Adiciona um espaçamento entre os registros
        });
    
        // Salva o PDF
        doc.save('relatorio_ponto.pdf');
      } else {
        alert('Nenhum dado encontrado para gerar o PDF!');
      }
    }
    
    
     
    }



 
 
