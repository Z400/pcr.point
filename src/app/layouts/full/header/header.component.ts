import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class AppHeaderComponent {

  constructor(private router: Router){}

  public deslogar() {
    if (confirm("Encerrar sessão?")) {
      alert("Usuario deslogado!")
      localStorage.removeItem('currentUser');
      this.router.navigate(['/login']);
    }
  }



}
 
