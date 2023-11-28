import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  validateForm!: FormGroup;
  private _location = inject(Location);
  constructor(private fb: FormBuilder, private router: Router, private _http: HttpClient) { }

  listdistricts: any[] = [];
  listsubdistricts: any[] = [];
  data: any[] = []

  ngOnInit(): void {
    this.getdistrict()
    this.validateForm = this.fb.group({
      id_user: new FormControl<number | null>(null),
      username: new FormControl<string | null>(null, Validators.required),
      password: new FormControl<string | null>(null, Validators.required),
      information: new FormControl<string | null>(null, Validators.required),
      contact: new FormControl<string | null>(null, Validators.required),
      id_district: new FormControl<number | null>(null, Validators.required),
      id_subdistrict: new FormControl<number | null>(null, Validators.required),
      id_typeuser: new FormControl<number | null>(1),
    });
  }

  // required(){
  //   if(this.validateForm.valid){
  //     this.createuser()
  //   }else{
  //     alert('กรุณากรอกให้ครบทุกช่อง')
  //   }
  // }

  createuser(): void {
    if (this.validateForm.valid) {
      this._http.post('http://localhost:3000/user/create-user', this.validateForm.value).subscribe((response: any) => {
        this._location.back();
        this.data = response;
        alert('สร้างผู้ใช้เรียบร้อยเเล้ว')
      }, (error) => {
        console.error('เกิดข้อผิดพลาด:', error);
      });
    } else {
      alert('กรุณากรอกให้ครบทุกช่อง')
    }
  }



  getdistrict() {
    this._http.get('http://localhost:3000/district/get-district').subscribe((response: any) => {
      const data: any = response;
      this.listdistricts = data;
    }, (error) => {
      console.error('เกิดข้อผิดพลาด:', error);
    });
  }

  getiddistrict(event: any) {
    this.findsubdistrictbyiddistrict(event)
  }

  findsubdistrictbyiddistrict(id_district: number) {
    this._http.get('http://localhost:3000/subdistrict/get-subdistrictbydistrictid/ ' + id_district).subscribe((response: any) => {
      const data: any = response;
      this.listsubdistricts = data;
    }, (error) => {
      console.error('เกิดข้อผิดพลาด:', error);
    });
  }
}
