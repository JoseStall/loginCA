import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { User } from '../models/user.model'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public nickNameCtrl: FormControl;
  public passwordCtrl: FormControl;
  public loginForm: FormGroup; 

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
  ) { }

  ngOnInit() {
    this.nickNameCtrl = this.fb.control('', Validators.required);
    this.passwordCtrl = this.fb.control('', Validators.required);
    this.loginForm = this.fb.group({
      nickName: this.nickNameCtrl,
      password: this.passwordCtrl
    }); 
  }
  login() {
    console.log(this.nickNameCtrl.value, this.passwordCtrl.value)
    this.authenticationService.searchUser(this.nickNameCtrl.value, this.passwordCtrl.value)
  }
}