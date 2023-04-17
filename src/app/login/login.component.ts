import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../core/services/api.service';
import { JwtService } from '../core/services/jwt.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private apiService: ApiService,
    private jwt: JwtService,
  ) { }

  loginForm = new FormGroup({
    account: new FormControl(),
    password: new FormControl()
  })

  ngOnInit(): void { }

  getVerificationCode() {
    // const account = this.loginForm.get('account')?.value;
    // if(!account) return;
    // const httpParams = new HttpParams().set('account', account);
    // this.apiService.get(
    //   '/api/regAndLogin/sendVerificationCode',
    //   httpParams
    // )
    // .subscribe(res => {
    //   console.log(res)
    // })
  }
  login() {
    const account = this.loginForm.get('account')?.value;
    const password = this.loginForm.get('password')?.value;
    this.apiService.post(
      '/api/regAndLogin/login',
      {
        account: account,
        password: password
      }
    )
    .subscribe(res => {
      if(!res || !res.data) return; 
      if(res.code !== 200) return;
      this.jwt.saveToken(res.data.token);
      this.router.navigate(['/home']);
    })
  }

}
