import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Colaborador } from './buttons/Colaborador';
import { Observable, ObservableLike } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiResponse } from './buttons/ApiResponse';
import { Gestor } from './tabs/Gestor';
import { NovaRotina } from './grid/NovaRotina';
import { AtualizarColaborador } from './lists/AtualizarColaborador';
import { ApiResponsePonto } from './buttons/ApiResponsePonto';
import { ApiResponseLogin } from '../login/ApiResponseLogin';
import { Login } from '../login/Login';
import { DadosAdministrador} from './atualizar-colaborador/DadosAdministrador';
import { ApiResponseRegistrosColaborador } from './buttons/ApiResponseRegistrosColaborador';

@Injectable({
  providedIn: 'root'
})
export class MaterialComponentService {
  url: String = environment.apiUrl; 

  
   constructor(private http: HttpClient) { }

  

  ////////////////////////////////////POST////////////////////////////////////////////////

  public adicionarColaborador(data: Colaborador):Observable<ApiResponse>{
    return this.http.post<ApiResponse>(`${this.url}/adicionarColaborador`, data);
  }

  public adicionarGestor(data:Gestor):Observable<ApiResponse>{
    return this.http.post<ApiResponse>(`${this.url}/adicionarGestor`, data);
  }

  public adicionarRotina(data: NovaRotina):Observable<ApiResponse>{
    return this.http.post<ApiResponse>(`${this.url}/adicionarItinerario`, data);
  }

  public registrarPonto(codigo: number):Observable<ApiResponsePonto>{
    return this.http.post<any>(`${this.url}/salvarPonto/${codigo}`,{});
    }
    
  public login(data: Login):Observable<ApiResponseLogin>{
    return this.http.post<any>(`${this.url}/login`, data);
      
    }

  ////////////////////////////////////GET////////////////////////////////////////////////

  public listarColaboradores():Observable<Colaborador[]>{
    return this.http.get<Colaborador[]>(`${this.url}/listarColaborador`);
  }

  public listarItinerarios():Observable<NovaRotina[]>{
    return this.http.get<NovaRotina[]>(`${this.url}/listarItinerario`);
  }

  public listarAdministadorPorEmail(email: string):Observable<DadosAdministrador>{
    return this.http.get<DadosAdministrador>(`${this.url}/listarDadosGestor/${email}`);
  }

  public buscarPorMesEano(month: number, year: number):Observable<ApiResponsePonto>{
    return this.http.get<any>(`${this.url}/buscarPontoMesEano?month=${month}&year=${year}`);
  }

  public buscarPorColaborador(mes: string, nome: string, ano: number):Observable<ApiResponsePonto>{
    return this.http.get<any>(`${this.url}/buscarPontoNomeMesEano?name=${nome}&month=${mes}&year=${ano}`);
  }

  public buscarRegistroPorNome(nome: string):Observable<ApiResponseRegistrosColaborador>{
    return this.http.get<any>(`${this.url}/buscarRegistrosPorNome?nome=${nome}`);

  }

    ////////////////////////////////////DELETE////////////////////////////////////////////////


    public deletarColaborador(codigo: Colaborador):Observable<ApiResponse>{
      return this.http.delete<ApiResponse>(`${this.url}/deletarColaborador/${codigo}`);
    }

    public deletarItinetario(codigo: any):Observable<ApiResponse>{
      return this.http.delete<ApiResponse>(`${this.url}/deletarItinerario/${codigo}`);
    }

    public deletarRegistrosPorNome(codigo:any):Observable<ApiResponse>{
      return this.http.delete<ApiResponse>(`${this.url}/deletarRegistrosPorNome?registro=${codigo}`);
    }

    ////////////////////////////////////UPDATE////////////////////////////////////////////////
    public atualizarColaborador(codigo: any, data: Colaborador):Observable<ApiResponse>{
      return this.http.put<ApiResponse>(`${this.url}/atualizarColaborador/${codigo}`,data);
    }

    public atualizarItinerarios(codigo: any, data:NovaRotina):Observable<ApiResponse>{
     return this.http.put<ApiResponse>(`${this.url}/atualizarItinerario/${codigo}`, data);
    }

    public atualizarAdministrador(codigo: any, data: DadosAdministrador):Observable<ApiResponse>{
      return this.http.put<ApiResponse>(`${this.url}/atualizarAdministrador/${codigo}`, data);
    }
 


  
  

}
