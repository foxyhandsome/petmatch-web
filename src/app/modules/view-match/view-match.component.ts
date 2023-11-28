import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-match',
  templateUrl: './view-match.component.html',
  styleUrls: ['./view-match.component.css']
})
export class ViewMatchComponent implements OnInit{
  constructor(private router: Router, private _http: HttpClient) { }


  data: any[] = [];

  ngOnInit(): void {
    this.getmatch();
  }

  getmatch() {
    this._http.get('http://localhost:3000/match/get-match-withinfo').subscribe((response: any) => {
      this.data = response;
    });
  }

  btnviewdetailmatch(idmatch: any) {
    this.router.navigate(['/view-detail-match'], {
      queryParams: {
        id_match: idmatch,
      }
    });
  }

  convertImage(image: string) {
    return "data:image/jpeg;base64," + image
  }
}
