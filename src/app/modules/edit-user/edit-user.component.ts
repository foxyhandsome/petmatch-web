import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit{
  validateForm!: FormGroup;
  private _activatedRoute = inject(ActivatedRoute);
  private _changeDetectorRef = inject(ChangeDetectorRef);
  constructor(private fb: FormBuilder, private router: Router, private _http: HttpClient) { }

  listdistricts: any[] = [];
  listsubdistricts: any[] = [];
  data: any[] = []
  userbyid: any[] = []
  ngOnInit(): void {
    this.getdistrict()

    this._activatedRoute.queryParams.subscribe(params => {
      const iduser = params['id_user'];
      if (iduser) {
        this.userbyid = iduser;
        this.getuserbyid();
      }
    });

    this.validateForm = this.fb.group({
      id_user: new FormControl<number | null>(null),
      username: new FormControl<string | null>(null, Validators.required),
      password: new FormControl<string | null>(null, Validators.required),
      information: new FormControl<string | null>(null),
      contact: new FormControl<string | null>(null),
      id_district: new FormControl<number | null>(null),
      id_subdistrict: new FormControl<number | null>(null),
      id_typeuser: new FormControl<number | null>(null),
    });
  }

  
  getuserbyid():void{
    this._http.get('http://localhost:3000/user/get-user/' + this.userbyid).subscribe({
      next: (response: any) => {
        const data: any = response;
        console.log(data)
        this.validateForm.patchValue(data);
        // console.log(data)
      },
      error: (err) => {
        console.error('Error', err);
      },
    });
  }

  edituserbyid(){
    this._http.post('http://localhost:3000/user/edit-user/' + this.userbyid, this.validateForm.value).subscribe((response: any) => {
      this._changeDetectorRef.detectChanges()
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
