import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-review',
  templateUrl: './edit-review.component.html',
  styleUrls: ['./edit-review.component.css']
})
export class EditReviewComponent implements OnInit{
  validateForm!: FormGroup;
  private _activatedRoute = inject(ActivatedRoute);
  private _changeDetectorRef = inject(ChangeDetectorRef);
  constructor(private fb: FormBuilder, private router: Router, private _http: HttpClient) { }
  
  reviewid: any[] = []
  petid: any[] = []

  ngOnInit(): void {

    this._activatedRoute.queryParams.subscribe(params => {
      const idreview = params['id_review'];
      const idPet = params['id_pet']
      if (idreview) {
        this.reviewid = idreview;
        this.getreviewbyid()
      }
      if (idreview) {
        this.petid = idPet;
      }
    });

    this.getreviewbyid()
    this.validateForm = this.fb.group({
      review_info: new FormControl<string | null>(null),
      star: new FormControl<number | null>(null),
    });
  }

  getreviewbyid(){
    this._http.get('http://localhost:3000/review/get-review-byid/' + this.reviewid).subscribe({
      next: (response: any) => {
        const data: any = response;
        console.log(data)
        this.validateForm.patchValue(data[0]);
        // console.log(data)
      },
      error: (err) => {
        console.error('Error', err);
      },
    });
  }

  editreviewbyid(){
    this._http.post('http://localhost:3000/review/edit-review/' + this.reviewid, this.validateForm.value).subscribe((response: any) => {
      this._changeDetectorRef.detectChanges()
      this.router.navigate(['/view-review'], {
        queryParams: {
          id_pet: this.petid
        }


      ]
      });
      },(error) => {
        console.error('เกิดข้อผิดพลาด:', error);
    });
  }
}
