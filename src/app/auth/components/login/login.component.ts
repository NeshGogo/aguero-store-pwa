import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }
  login(event: Event): void{
    event.preventDefault();
    if(this.form.valid){
      const value = this.form.value;
      this.authService.createUser(value.email, value.password)
      .then(() => {
        this.router.navigate(['/auth/login']);
      });
    }
  }

  private buildForm(): void{
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

}
