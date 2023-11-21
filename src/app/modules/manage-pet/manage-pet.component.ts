import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-pet',
  templateUrl: './manage-pet.component.html',
  styleUrls: ['./manage-pet.component.css']
})
export class ManagePetComponent implements OnInit {
  constructor(private router: Router, private _http: HttpClient) {} 

  data: any[] = [];

  ngOnInit(): void {
    this.petlist();
  }

  petlist() {
    this._http.get('http://localhost:3000/pet/get-pet-withinfo').subscribe((response: any) => {
      this.data = response.message;
    });
  }

  btneditpet(id: any) {
    this.router.navigate(['/edit-pet'], {
      queryParams: {  
        id_pet: id
      }
    });
  }

  removepet(id_pet: any) {
    try {
      const deleteConfirmed = window.confirm('ต้องการลบข้อมูลสัตว์เลี้ยงใช่หรือไม่ ?');

    if (deleteConfirmed) {
      this._http.delete('http://localhost:3000/pet/delete-Pet/' + id_pet).subscribe(
        (response: any) => {
          this.data = response;
          this.petlist()
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

  btnreview(id: any) {
    this.router.navigate(['/view-review'], {
      queryParams: {  
        id_pet: id
      }
    });
  }

  convertImage(image:string) {
    return "data:image/jpeg;base64," + image
  }
}
