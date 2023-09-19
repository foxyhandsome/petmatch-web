
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  constructor(private router: Router, private _http: HttpClient) {} 

  data: any[] = [];

  ngOnInit(): void {
    this.review();
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

  review() {
    this._http.get('http://localhost:3000/review/get-review').subscribe((response: any) => {
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
}

