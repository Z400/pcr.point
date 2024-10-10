import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Colaborador } from './buttons/Colaborador';
import { Observable, ObservableLike } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiResponse } from './buttons/ApiResponse';
import { Gestor } from './tabs/Gestor';
import { NovaRotina } from './grid/NovaRotina';
import { AtualizarColaborador } from './lists/AtualizarColaborador';

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

  ////////////////////////////////////GET////////////////////////////////////////////////

  public listarColaboradores():Observable<Colaborador[]>{
    return this.http.get<Colaborador[]>(`${this.url}/listarColaborador`);
  }

  public listarItinerarios():Observable<NovaRotina[]>{
    return this.http.get<NovaRotina[]>(`${this.url}/listarItinerario`);
  }


    ////////////////////////////////////DELETE////////////////////////////////////////////////


    public deletarColaborador(codigo: Colaborador):Observable<ApiResponse>{
      return this.http.delete<ApiResponse>(`${this.url}/deletarColaborador/${codigo}`);
    }

    public deletarItinetario(codigo: any):Observable<ApiResponse>{
      return this.http.delete<ApiResponse>(`${this.url}/deletarItinerario/${codigo}`);
    }

    ////////////////////////////////////UPDATE////////////////////////////////////////////////
    public atualizarColaborador(codigo: any, data: Colaborador):Observable<ApiResponse>{
      return this.http.put<ApiResponse>(`${this.url}/atualizarColaborador/${codigo}`,data);
    }

    public atualizarItinerarios(codigo: any, data:NovaRotina):Observable<ApiResponse>{
      console.log("Codigo do servico:", codigo);
      console.log("Data do servico:", data);
      return this.http.put<ApiResponse>(`${this.url}/atualizarItinerario/${codigo}`, data);
    }
  

}
