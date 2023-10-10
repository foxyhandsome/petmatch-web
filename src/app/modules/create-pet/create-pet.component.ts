import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-pet',
  templateUrl: './create-pet.component.html',
  styleUrls: ['./create-pet.component.css']
})
export class CreatePetComponent {
  validateForm!: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private _http: HttpClient) { }

  listpetbreed: any[] = []
  listpetskin: any[] = []
  listpetblood: any[] = []
  listuser: any[] = []
  data: any[] = []
  ngOnInit(): void {
    this.getpetbreed()
    this.getpetskin()
    this.getpetblood()
    this.getuserbyuser()
    this.validateForm = this.fb.group({
      id_pet: new FormControl<number | null>(null, Validators.required),
      picture_pet: new FormControl<string | null>(null,  Validators.required),
      sex_pet: new FormControl<string | null>(null,  Validators.required),
      health_pet: new FormControl<string| null>(null,  Validators.required),
      name_pet: new FormControl<string | null>(null,  Validators.required),
      age_pet: new FormControl<string | null>(null,  Validators.required),
      id_skin: new FormControl<number | null>(null,  Validators.required),
      id_blood: new FormControl<number | null>(null,  Validators.required),
      id_user: new FormControl<number | null>(null,  Validators.required),
      id_breed: new FormControl<number | null>(null,  Validators.required),
    });
  }


  createpet():void {
    this._http.post('http://localhost:3000/pet/create-pet', this.validateForm.value).subscribe((response: any) => {
        this.data = response;
        this.router.navigate(['/manage-pet']);
      },(error) => {
        console.error('เกิดข้อผิดพลาด:', error);
    });
  }

  getpetbreed() {
    this._http.get('http://localhost:3000/petbreed/get-petbreed').subscribe((response: any) => {
      const data : any = response; 
      this.listpetbreed = data;
    },(error) => {
      console.error('เกิดข้อผิดพลาด:', error);
  });
}

  getpetskin() {
    this._http.get('http://localhost:3000/petskin/get-petskin').subscribe((response: any) => {
      const data : any = response; 
      this.listpetskin = data;
  },(error) => {
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

  getuserbyuser() {
    this._http.get('http://localhost:3000/user/get-user-by-user').subscribe((response: any) => {
      const data: any = response;
      this.listuser = data;
    }, (error) => {
      console.error('เกิดข้อผิดพลาด:', error);
    });
  }

  handleUploadimg(event:any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        console.log(reader.result);
        this.validateForm.get("picture_pet")?.patchValue(reader.result)
    };
}

  handleUploadimgcert(event:any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      console.log(reader.result);
      this.validateForm.get("health_pet")?.patchValue(reader.result)
  };
}

}
