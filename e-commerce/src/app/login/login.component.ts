import { Component, ViewChild } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [HeaderComponent, CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  @ViewChild('loginForm') form: NgForm;
  constructor(private router: Router) {}
  onformsubmit() {
    console.log(this.form);
    if (this.form.valid) {
      this.router.navigate(['/home']);
    }
  }
}
