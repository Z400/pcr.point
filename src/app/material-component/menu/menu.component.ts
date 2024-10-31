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
        // Agrupa os registros pelo nome do colaborador
        const registrosAgrupados = this.dadosColaborador.data.reduce((agrupado: { [key: string]: any[] }, obj: any) => {
          const nomeColaborador = obj.dadosFuncionario.nome;
          if (!agrupado[nomeColaborador]) {
            agrupado[nomeColaborador] = [];
          }
          agrupado[nomeColaborador].push(obj);
          return agrupado;
        }, {});
    
        // Itera sobre os grupos de registros
        Object.keys(registrosAgrupados).forEach((nomeColaborador: string) => {
          const doc = new jsPDF();
          doc.setFontSize(10);
    
          registrosAgrupados[nomeColaborador].forEach((obj: any, index: number) => {


            const yOffset = 10 + (index * 35); // Aumentei o espaçamento para evitar sobreposição
             doc.text(`Colaborador: ${obj.dadosFuncionario.nome}`, 10, yOffset + 5);
            doc.text(`Data de registro: ${obj.pontoRegistrado}`, 10, yOffset + 10);
            doc.text(`Início trabalho: ${obj.inicioTrabalho || '-'}`, 10, yOffset + 15); // Mantive o espaçamento
            doc.text(`Início almoço: ${obj.inicioAlmoco || '-'}`, 10, yOffset + 20);
            doc.text(`Fim almoço: ${obj.fimAlmoco || '-'}`, 10, yOffset + 25);
            doc.text(`Fim trabalho: ${obj.fimTrabalho || '-'}`, 10, yOffset + 30);
           
            
          });
    
          // Salva o PDF com o nome do funcionário, evitando caracteres inválidos
          const nomeArquivo = `informacoes_${nomeColaborador.replace(/\s+/g, '_')}.pdf`;
          doc.save(nomeArquivo);
        });
      }  
    }








  }

 
