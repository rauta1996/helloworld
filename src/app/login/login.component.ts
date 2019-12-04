import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder } from '@angular/forms';

import { AuthService } from '../services/auth.service';

import { Router } from '@angular/router';



@Component({
  selector: 'app-login',

  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {
  userData: any;

  login: FormGroup

  constructor(

    public fb: FormBuilder,

    public authService: AuthService,
    public router: Router
  ) {

    this.login = this.fb.group({

      email: '',

      password: ''
    })

  }
  ngOnInit() {
    this.authService.getData()
      .subscribe((res) => {
        console.log(res);
        this.userData = res
      });
  }



  onLogin() {

    // console.log(this.login.value);

    // this.authService.onLogin(this.login.get('email').value,

    // this.login.get('password').value)

  }

}
