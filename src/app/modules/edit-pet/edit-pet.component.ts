import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-pet',
  templateUrl: './edit-pet.component.html',
  styleUrls: ['./edit-pet.component.css']
})
export class EditPetComponent {
  validateForm!: FormGroup;
  private _activatedRoute = inject(ActivatedRoute);
  private _changeDetectorRef = inject(ChangeDetectorRef);
  constructor(private fb: FormBuilder, private router: Router, private _http: HttpClient) { }

  listpetbreed: any[] = []
  listpetskin: any[] = []
  listpetblood: any[] = []
  listuser: any[] = []
  petbyid: any[] = []
  data: any[] = []
  ngOnInit(): void {
    this.getpetbreed()
    this.getpetskin()
    this.getpetblood()
    this.getuser()

    this._activatedRoute.queryParams.subscribe(params => {
      const idpet = params['id_pet'];
      if (idpet) {
        this.petbyid = idpet;
        this.getpetbyid();
      }
    });
    this.validateForm = this.fb.group({
      id_pet: new FormControl<number | null>(null),
      picture_pet: new FormControl<string | null>(null),
      sex_pet: new FormControl<string | null>(null),
      health_pet: new FormControl<string| null>(null),
      name_pet: new FormControl<string | null>(null),
      age_pet: new FormControl<string | null>(null),
      id_skin: new FormControl<number | null>(null),
      id_blood: new FormControl<number | null>(null),
      id_user: new FormControl<number | null>(null),
      id_breed: new FormControl<number | null>(null),
    });
  }


    getpetbyid():void{
    this._http.get('http://localhost:3000/pet/get-pet/' + this.petbyid).subscribe({
      next: (response: any) => {
        const data: any = response;
        console.log(data)
        this.validateForm.patchValue(data[0]);
        console.log(data)
      },
      error: (err) => {
        console.error('Error', err);
      },
    });
  }

  editpetbyid(){
    this._http.post('http://localhost:3000/pet/edit-pet/' + this.petbyid, this.validateForm.value).subscribe((response: any) => {
      this._changeDetectorRef.detectChanges()
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

  getuser() {
    this._http.get('http://localhost:3000/user/get-user').subscribe((response: any) => {
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
