import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-pet',
  templateUrl: './create-pet.component.html',
  styleUrls: ['./create-pet.component.css']
})
export class CreatePetComponent implements OnInit {
  validateForm!: FormGroup;
  private _activatedRoute = inject(ActivatedRoute);
  private _location = inject(Location);

  constructor(private fb: FormBuilder, private router: Router, private _http: HttpClient) { }

  listpetbreed: any[] = []
  listpetskin: any[] = []
  listpetblood: any[] = []
  listuser: any[] = []
  data: any[] = []
  userbyid: any[] = []

  ngOnInit(): void {
    this.createForm();
    this.getpetbreed()
    this.getpetskin()
    this.getpetblood()
    this._activatedRoute.queryParams.subscribe(params => {
      const iduser = params['id_user'];
      console.log(iduser)
      if (iduser) {
        this.userbyid = iduser;
        this.validateForm.get("id_user")?.patchValue(iduser)
      }
    });
  }

  createForm() {
    this.validateForm = this.fb.group({
      id_pet: new FormControl<number | null>(null),
      picture_pet: new FormControl<string | null>(null, Validators.required),
      sex_pet: new FormControl<string | null>(null, Validators.required),
      health_pet: new FormControl<string | null>(null, Validators.required),
      name_pet: new FormControl<string | null>(null, Validators.required),
      age_pet: new FormControl<string | null>(null, Validators.required),
      id_skin: new FormControl<number | null>(null, Validators.required),
      id_blood: new FormControl<number | null>(null, Validators.required),
      id_user: new FormControl<number | null>(null, Validators.required),
      id_breed: new FormControl<number | null>(null, Validators.required),
    });
  }


  createpet(): void {
    if (this.validateForm.valid) {
      this._http.post('http://localhost:3000/pet/create-pet', this.validateForm.value).subscribe((response: any) => {
        this._location.back();
        this.data = response;
        alert('เพิ่มสัตว์เลี้ยงเรียบร้อยเเล้ว')
      }, (error) => {
        console.error('เกิดข้อผิดพลาด:', error);
      });
    } else {
      alert('กรุณากรอกให้ครบทุกช่อง')
    }
  }

  // getuserbyid():void{
  //   this._http.get('http://localhost:3000/user/get-user/' + this.userbyid).subscribe({
  //     next: (response: any) => {
  //       const data: any = response;
  //       console.log(data)
  //       this.validateForm.patchValue(data[0]);
  //       // console.log(data)
  //     },
  //     error: (err) => {
  //       console.error('Error', err);
  //     },
  //   });
  // }

  getpetbreed() {
    this._http.get('http://localhost:3000/petbreed/get-petbreed').subscribe((response: any) => {
      const data: any = response;
      this.listpetbreed = data;
    }, (error) => {
      console.error('เกิดข้อผิดพลาด:', error);
    });
  }

  getpetskin() {
    this._http.get('http://localhost:3000/petskin/get-petskin').subscribe((response: any) => {
      const data: any = response;
      this.listpetskin = data;
    }, (error) => {
      console.error('เกิดข้อผิดพลาด:', error);
    });
  }

  getpetblood() {
    this._http.get('http://localhost:3000/petblood/get-petblood').subscribe((response: any) => {
      const data: any = response;
      this.listpetblood = data;
    }, (error) => {
      console.error('เกิดข้อผิดพลาด:', error);
    });
  }

  // getuserbyuser() {
  //   this._http.get('http://localhost:3000/user/get-user-by-user').subscribe((response: any) => {
  //     const data: any = response;
  //     this.listuser = data;
  //   }, (error) => {
  //     console.error('เกิดข้อผิดพลาด:', error);
  //   });
  // }

  handleUploadimg(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      let data: any = "";
      if (reader.result?.toString().startsWith('data:image/png;base64,')) {
        data = reader.result?.toString().replace('data:image/png;base64,', '');
      } else if (reader.result?.toString().startsWith('data:image/jpeg;base64,')) {
        data = reader.result?.toString().replace('data:image/jpeg;base64,', '');
      } else {
        data = reader.result?.toString();
      }
      this.validateForm.get("picture_pet")?.patchValue(data)
    };
  }

  handleUploadimgcert(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      let data: any = "";
      if (reader.result?.toString().startsWith('data:image/png;base64,')) {
        data = reader.result?.toString().replace('data:image/png;base64,', '');
      } else if (reader.result?.toString().startsWith('data:image/jpeg;base64,')) {
        data = reader.result?.toString().replace('data:image/jpeg;base64,', '');
      } else {
        data = reader.result?.toString();
      }
      this.validateForm.get("health_pet")?.patchValue(data)
    };
  }

}
