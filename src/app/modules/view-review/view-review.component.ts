import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-view-review',
  templateUrl: './view-review.component.html',
  styleUrls: ['./view-review.component.css']
})
export class ViewReviewComponent implements OnInit {
  private _activatedRoute = inject(ActivatedRoute);
  private _changeDetectorRef = inject(ChangeDetectorRef);
  constructor(private router: Router, private _http: HttpClient) {}
  
  data: any[] = [];
  idpet : any[] = [];

  ngOnInit(): void {

    this._activatedRoute.queryParams.subscribe(params => {
      const id_pet = params['id_pet'];
      if (id_pet) {
        this.idpet = id_pet;
        this.getreview();
      }
    });

  }

  getreview() {
    this._http.get('http://localhost:3000/review/get-review-web/' + this.idpet).subscribe((response: any) => {
      this.data = response;
      console.log(this.data)
    });
  }

  // btneditreview(idreview: any) {
  //   this.router.navigate(['/edit-review'], {
  //     queryParams: {
  //       id_review: idreview,
  //       id_pet: this.idpet
  //     }
  //   });
  // }

  removereview(id_review: any) {
    try {
      const deleteConfirmed = window.confirm('ต้องการลบข้อมูลรีวิวใช่หรือไม่ ?');

      if (deleteConfirmed) {
        this._http.delete('http://localhost:3000/review/delete-review/' + id_review).subscribe(
          (response: any) => {
            this.data = response;
            this.getreview()
            alert('ลบข้อมูลรีวิวเรียบร้อยแล้ว');
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
