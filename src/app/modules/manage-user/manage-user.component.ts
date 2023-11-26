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
  constructor(private router: Router, private _http: HttpClient) { }

  data: any[] = [];

  ngOnInit(): void {
    this.getuser();
  }

  getuser() {
    this._http.get('http://localhost:3000/user/get-user-withdistrict-subdistrict').subscribe((response: any) => {
      this.data = response.message;
    });
  }

  btncreate() {
    this.router.navigate(['/create-user'], {
    });
  }

  btnviewpet(iduser: any) {
    this.router.navigate(['/view-pet'], {
      queryParams: {
        id_user: iduser
      }
    });
  }

  btnedituser(iduser: any) {
    this.router.navigate(['/edit-user'], {
      queryParams: {
        id_user: iduser
      }
    });
  }

  removeuser(iduser: any) {
    try {
      const deleteConfirmed = window.confirm('ต้องการลบข้อมูลผู้ใช้ใช่หรือไม่ ?');

      if (deleteConfirmed) {
        this._http.delete('http://localhost:3000/user/delete-user/' + iduser).subscribe(
          (response: any) => {
            this.data = response;
            this.getuser()
            alert('ลบข้อมูลผู้ใช้เรียบร้อยแล้ว');
          },
          (error: any) => {
            if (error.error.statusCode == 500) {
              // Handle error
            }
          }
        );
      }
    } catch (e) {
      console.error("An unexpected error occurred:", e);
    }
  }
}
