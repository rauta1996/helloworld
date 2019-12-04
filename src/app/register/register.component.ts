import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  registForm: FormGroup
  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router,

  ) {
    this.registForm = this.fb.group({
      firstname: '',
      lastname: '',
      email: '',
      password: ''
    })
  }

  ngOnInit() {
  }

  onRegister() {
    localStorage.clear();
    console.log(this.registForm.value);
    this.authService.postData(JSON.stringify(this.registForm.value))
      .subscribe((res) => {
        console.log(res);
        if (res) {
          this.router.navigateByUrl('/login')
        } else {
          alert('error')
        }
      })
  }
}
