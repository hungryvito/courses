import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { LoginModel } from '../../model/LoginModel';
import { CommonModule } from '@angular/common';
import { MasterService } from '../../service/master.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  _loginData: LoginModel = { username: '', password: '' };

  constructor(private service: MasterService, private router: Router) {}

  ProceedLogin(form: any) {
    if (form.valid) {
      this.service.ProceedLogin(this._loginData).subscribe((item) => {
        let res = item;

        console.log(res);

        if (res.length > 0) {
          this.router.navigateByUrl('');
        } else {
          alert('Invalid Credentials');
        }
      });
    }
  }
}
