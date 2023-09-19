import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css']
})
export class ManageUserComponent implements OnInit {

  private _http = inject(HttpClient);
  data: any[] = []
  ngOnInit(): void {
    this.user()
  }

  remove(data: any) {
    try {
      this._http.delete('http://localhost:3000/user/delete-user/' + data.id_user).subscribe((response: any) => {
        this.data = response;
      },
        (error: any) => {
          if (error.error.statusCode == 500) {

          }
        }
      );
    } catch (e) {
      console.error("An unexpected error occurred:", e);
    }
  }

  user() {
    this._http.get('http://localhost:3000/user/get-user').subscribe((response: any) => {
      this.data = response
    })
  }
}
