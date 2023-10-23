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

  removepet(data: any) {
    try {
      this._http.delete('http://localhost:3000/pet/delete-Pet/' + data.id_pet).subscribe(
        (response: any) => {
          this.data = response;
          this.petlist()
        },
        (error: any) => {
          if (error.error.statusCode == 500) {
          }
        }
      );
    } catch (error) {
      console.error("An unexpected error occurred:", error);
    }
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

}
