import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-pet',
  templateUrl: './view-pet.component.html',
  styleUrls: ['./view-pet.component.css']
})
export class ViewPetComponent implements OnInit {
  private _activatedRoute = inject(ActivatedRoute);
  private _changeDetectorRef = inject(ChangeDetectorRef);
  constructor(private router: Router, private _http: HttpClient) { }

  data: any[] = [];
  petbyuserid: any[] = [];

  ngOnInit(): void {


    this._activatedRoute.queryParams.subscribe(params => {
      const iduser = params['id_user'];
      if (iduser) {
        this.petbyuserid = iduser;
        this.getpetbyuserid();
      }
    });

  }

  getpetbyuserid() {
    this._http.get('http://localhost:3000/pet/get-pet-by-userid/' + this.petbyuserid).subscribe((response: any) => {
      this.data = response;
    });
  }

  btncreatepet() {
    this.router.navigate(['/create-pet'], {
      queryParams: {
        id_user: this.petbyuserid
      }
    });
  }

  btneditpet(idpet: any) {
    this.router.navigate(['/edit-pet'], {
      queryParams: {
        id_pet: idpet
      }
    });
  }

  removepet(idpet: any) {
    try {
      const deleteConfirmed = window.confirm('ต้องการลบข้อมูลสัตว์เลี้ยงใช่หรือไม่ ?');

      if (deleteConfirmed) {
        this._http.delete('http://localhost:3000/pet/delete-Pet/' + idpet).subscribe(
          (response: any) => {
            this.data = response;
            this.getpetbyuserid()
            alert('ลบข้อมูลสัตว์เลี้ยงเรียบร้อยแล้ว');
          },
          (error: any) => {
            if (error.error.statusCode == 500) {
            }
          }
        );
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error);
    }
  }

  btnreview(idpet: any) {
    this.router.navigate(['/view-review'], {
      queryParams: {
        id_pet: idpet
      }
    });
  }

  convertImage(image: string) {
    return "data:image/jpeg;base64," + image
  }

}
