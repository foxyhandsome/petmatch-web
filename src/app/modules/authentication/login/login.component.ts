import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formGroup!: FormGroup;
  private router = inject(Router);
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.formGroup = this.fb.group({
      username: new FormControl<string | null>(null, Validators.required),
      password: new FormControl<string | null>(null, Validators.required),
      type_name: new FormControl<string | null>("ผู้ดูเเลระบบ", Validators.required),

    });
  }


  login(): void {
    if(this.formGroup.valid){
      this.authService.login(this.formGroup.value).subscribe({
        next: (response: any) => {
          const data: any = response;
          this.router.navigate(['/main']);
          alert('ลงชื่อเข้าใช้เรียบร้อยเเล้ว')
        },        
      });
    }else{
      alert('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง')
    }
  }

}
