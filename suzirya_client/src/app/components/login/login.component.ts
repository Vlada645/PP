import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private router: Router) { }
  _email: string = '';
  password: string = '';
  _password: string = '';

  private AdminEmail: string = 'hara@gmail.com';
  private AdminPassword: string = '12345678';


  login(form: NgForm) {
    if (!form.value.email || !form.value.password) {
      console.log('Email or Password is missing!');
      return;
    }
    if (form.value.email === this.AdminEmail && form.value.password === this.AdminPassword) {
    console.log(form.value);
    console.log('Admin is logged in!');
    this.router.navigate(['admin']);} else {
      console.log('Email or Password is incorrect!');
    }
  }

}
