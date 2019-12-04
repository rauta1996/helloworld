import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})


export class AuthService {


  constructor(public router: Router,
    public httpClient: HttpClient) { }

  postData(data) {
    return this.httpClient.post('endpoint', data)
  }

  getData() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/posts');
  }

  updateData(data) {
    return this.httpClient.put('endpoint', data);
  }

  deleteData(data) {
    return this.httpClient.delete('endpint', data)
  }


  onRegister(value) {
    return localStorage.setItem('userData', value)
  }




  onLogin(email, password) {

    const userData = JSON.parse(localStorage.getItem('userData'));

    console.log(userData);



    if (userData.email === email && userData.password === password) {
      this.router.navigateByUrl('home')

    } else {

      alert('wrong input')
    }


  }
}
