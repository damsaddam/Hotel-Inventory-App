import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'hiapp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  constructor(private route: Router, private LoginService: LoginService) { }
  ngOnInit(): void { }

  login() {
    if (this.LoginService.login(this.email, this.password)) {
      this.route.navigate(['/rooms']);
    } else {
      alert('The email or password was wrong. Please check it again.');
    }
  }
}
