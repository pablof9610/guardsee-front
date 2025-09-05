import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent {
  mode: 'login' | 'register' = 'login';
  authForm: FormGroup;
  hidePassword = true;
  loading = false;
  error: string | null = null;

  constructor(private fb: FormBuilder, private authService: AuthService
  ) {
    this.authForm = this.fb.group({
      name: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['']
    });

    this.toggleMode(this.mode);
  }

  toggleMode(mode?: 'login' | 'register') {
    this.mode = mode ?? (this.mode === 'login' ? 'register' : 'login');

    if (this.mode === 'register') {
      this.authForm.get('name')?.setValidators([Validators.required, Validators.minLength(2)]);
      this.authForm.get('confirmPassword')?.setValidators([Validators.required]);
    } else {
      this.authForm.get('name')?.clearValidators();
      this.authForm.get('confirmPassword')?.clearValidators();
    }

    this.authForm.get('name')?.updateValueAndValidity();
    this.authForm.get('confirmPassword')?.updateValueAndValidity();
  }

  submit() {
    // this.error = null;
    // if (this.authForm.invalid) {
    //   this.authForm.markAllAsTouched();
    //   return;
    // }

    const {email, password} = this.authForm.value;

    if (this.mode === 'login') {
      this.authService.login(email, password).subscribe(
        (data) => {
          console.log(data);
        },
        (err) => {
          const customErrorMessage = err.error?.error || 'Erro ao fazer login. Tente novamente.';
          this.error = customErrorMessage;
          console.log("Erro ao fazer login: ", err);
        }
      )
      console.log('Login', {email, password});
    } else {
      // Call register service
      console.log('Register', {email, password});
    }

    // const { name, email, password, confirmPassword } = this.authForm.value;

    // if (this.mode === 'register' && password !== confirmPassword) {
    //   this.error = 'As senhas não coincidem.';
    //   return;
    // }

    // this.loading = true;

    // // Simulação de chamada ao backend — substitua pelo seu AuthService
    // setTimeout(() => {
    //   this.loading = false;
    //   // success or error handling
    //   console.log(this.mode === 'login' ? 'Login' : 'Registro', { name, email });
    // }, 900);
  }

  get f() {
    return this.authForm.controls;
  }
}
