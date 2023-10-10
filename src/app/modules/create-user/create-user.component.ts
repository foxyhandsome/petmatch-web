import { HttpClient } from '@angular/common/http';
import {  Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit{
  validateForm!: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private _http: HttpClient) { }

  listdistricts: any[] = [];
  listsubdistricts: any[] = [];
  data: any[] = []
  ngOnInit(): void {
    this.getdistrict()
    this.validateForm = this.fb.group({
      id_user: new FormControl<number | null>(null, Validators.required),
      username: new FormControl<string | null>(null, Validators.required),
      password: new FormControl<string | null>(null, Validators.required),
      information: new FormControl<string | null>(null, Validators.required),
      contact: new FormControl<string | null>(null, Validators.required),
      id_district: new FormControl<number | null>(null, Validators.required),
      id_subdistrict: new FormControl<number | null>(null, Validators.required),
      id_typeuser: new FormControl<number | null>(1),
    });
  }


  createuser():void {
    this._http.post('http://localhost:3000/user/create-user', this.validateForm.value).subscribe((response: any) => {
        this.data = response;
        this.router.navigate(['/manage-user']);
      },(error) => {
        console.error('เกิดข้อผิดพลาด:', error);
    });
  }


  getdistrict() {
    this._http.get('http://localhost:3000/district/get-district').subscribe((response: any) => {
      const data : any = response; 
      this.listdistricts = data;
    },(error) => {
      console.error('เกิดข้อผิดพลาด:', error);
  });
}
  getiddistrict(event:any){
    this.findsubdistrictbyiddistrict(event)
    console.log(event)
  }

  findsubdistrictbyiddistrict(id_district:number) {
    this._http.get('http://localhost:3000/subdistrict/get-subdistrictbydistrictid/ ' + id_district).subscribe((response: any) => {
      const data : any = response; 
      this.listsubdistricts = data;
  },(error) => {
    console.error('เกิดข้อผิดพลาด:', error);
  });
}
}
