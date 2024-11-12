import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Login } from './Login';
import { MaterialComponentService } from '../material-component/material-component.service';
import { ApiResponseLogin } from './ApiResponseLogin';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{

constructor(private service: MaterialComponentService, private router: Router){}
  ngOnInit(){
   alert("Este sistema por está hospedado em um serviço gratuíto, poderá levar até 50 segundos para carregar o funcionamento da API! OBS: Proteção de rotas ativa!");
   alert("Login => Email: matheusgoldship@gmail.com  ------ senha: admin")
  }

messageSuccessLogin: ApiResponseLogin | undefined | null;
messageErrorLogin : ApiResponseLogin | undefined | null;
messageErrorInterno: String | null | undefined;

public login(form: NgForm){

  const data: Login = {
    email: form.value.formEmail,
    senha: form.value.formSenha
  }  

  this.service.login(data).subscribe(
    (res) => {
      this.messageSuccessLogin = res; 
      this.messageErrorLogin = null;
      this.messageErrorInterno = null;
      setTimeout(() => {
        alert("Redirecionando para dashboard!");
        localStorage.setItem("currentUser", data.email);
        this.router.navigate(['/dashboard']);
      },1000)
    }, (error) => {
      console.log("Error:",error);

      if(error.status === 0){

        this.messageErrorInterno = "Erro interno de servidor";
        this.messageSuccessLogin = null;
 
      } else {
        this.messageErrorInterno = null;
        this.messageErrorLogin = error.error;
      this.messageSuccessLogin = null;
      }

      
    }

  )





}




}
