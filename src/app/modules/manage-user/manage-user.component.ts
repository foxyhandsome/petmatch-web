import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css']
})
export class ManageUserComponent implements OnInit {
  constructor(private router: Router, private _http: HttpClient) {} 

  data: any[] = [];

  ngOnInit(): void {
    this.user();
  }

  remove(data: any) {
    try {
      this._http.delete('http://localhost:3000/user/delete-user/' + data.id_user).subscribe(
        (response: any) => {
          this.data = response;
        },
        (error: any) => {
          if (error.error.statusCode == 500) {
            // Handle error
          }
        }
      );
    } catch (e) {
      console.error("An unexpected error occurred:", e);
    }
  }

  user() {
    this._http.get('http://localhost:3000/user/get-district-subdistrict').subscribe((response: any) => {
      this.data = response.message;
    });
  }

  btnedit(id: any) {
    this.router.navigate(['/edit-user'], {
      queryParams: {  
        id_user: id
      }
    });
  }

  btncreate() {
    this.router.navigate(['/create-user'], {
    });
  }
}
