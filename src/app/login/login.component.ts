import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
export class LoginComponent {

constructor (private service: MaterialComponentService, private router : Router){}

messageSuccessLogin: ApiResponseLogin | undefined | null;
messageErrorLogin : ApiResponseLogin | undefined | null;

public login(form: NgForm){

  const data: Login = {
    email: form.value.formEmail,
    senha: form.value.formSenha
  }  

  this.service.login(data).subscribe(
    (res) => {
      this.messageSuccessLogin = res; 
      this.messageErrorLogin = null;
      setTimeout(() => {
        alert("Redirecionando para dashboard!");
        localStorage.setItem("currentUser", data.email);
        this.router.navigate(['/dashboard']);
      },1000)
    }, (error) => {
      this.messageErrorLogin = error.error;
      this.messageSuccessLogin = null;
    }

  )
  console.log(data);




}




}
