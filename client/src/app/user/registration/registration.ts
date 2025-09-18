import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  imports: [ReactiveFormsModule],
  templateUrl: './registration.html',
  styleUrl: './registration.scss'
})
export class Registration implements OnInit {

  loginForm!: FormGroup;

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      fullName: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      confirmPassword: new FormControl('')
    });
  }

  onSubmit() {
    console.log(this.loginForm.value);
    
  }
}
