import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    const token = this.authService.getToken(); // método que retorna token do localStorage
    if (token) {
      // opcional: aqui você pode verificar se o token está expirado
      return true;
    } else {
      this.router.navigate(['/login']); // redireciona para login se não tiver token
      return false;
    }
  }
}
