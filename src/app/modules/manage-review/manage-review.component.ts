import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-review',
  templateUrl: './manage-review.component.html',
  styleUrls: ['./manage-review.component.css']
})
export class ManageReviewComponent implements OnInit{
    constructor(private router: Router, private _http: HttpClient) {} 
  
    data: any[] = [];
  
    ngOnInit(): void {
      this.allreview();
    }
  
    remove(data: any) {
      try {
        this._http.delete('http://localhost:3000/review/delete-review/' + data.id_review).subscribe(
          (response: any) => {
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
  
    allreview() {
      this._http.get('http://localhost:3000/review/get-all-review').subscribe((response: any) => {
        this.data = response.message;
      });
    }
  
    btnedituser(id: any) {
      this.router.navigate(['/edit-user'], {
        queryParams: {
          id_user: id
        }
      });
    }
  }


