import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-detail-match',
  templateUrl: './view-detail-match.component.html',
  styleUrls: ['./view-detail-match.component.css']
})
export class ViewDetailMatchComponent implements OnInit{
  private _activatedRoute = inject(ActivatedRoute);
  private _changeDetectorRef = inject(ChangeDetectorRef);
  constructor(private fb: FormBuilder, private router: Router, private _http: HttpClient) { }

  matchbyid : any[] = []
  data : any[] = []

  ngOnInit(): void {

    this._activatedRoute.queryParams.subscribe(params => {
      const idmatch = params['id_match'];
      if (idmatch) {
        this.matchbyid = idmatch;
        this.getmatchbyid();
      }
    });

  }

  getmatchbyid() {
    this._http.get('http://localhost:3000/match/get-match/' + this.matchbyid).subscribe((response: any) => {
      this.data = response;
    });
  }

  convertImage(image: string) {
    return "data:image/jpeg;base64," + image
  }

  convertToThaiDate(inputDate: string): string {
    const monthsInThai = [
      "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน",
      "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"
    ];
  
    const date = new Date(inputDate);
    const thaiMonth = monthsInThai[date.getMonth()];
    const thaiYear = date.getFullYear() + 543;
    const thaiDate = `${date.getDate()} ${thaiMonth} ${thaiYear}`;
  
    // Get time components
    const hours = date.getUTCHours().toString().padStart(2, '0');
    const minutes = date.getUTCMinutes().toString().padStart(2, '0');
    const seconds = date.getUTCSeconds().toString().padStart(2, '0');
  
    const time = `${hours}:${minutes}:${seconds}`;
  
    return `${thaiDate} ${time}`;
  }
  

  }
