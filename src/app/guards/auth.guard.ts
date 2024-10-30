import { inject, Inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  // Verifica se há um usuário logado no localStorage
  const isLoggedIn = !!localStorage.getItem('currentUser');

  if (isLoggedIn) {
    return true; // Permite o acesso
  } else {
    // Redireciona para a página de login
    router.navigate(['/login']);
    return false;
  }
};
