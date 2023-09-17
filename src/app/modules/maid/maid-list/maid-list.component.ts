
import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { Maid } from '../interface/miad.interface';
import { MaidService } from '../service/maid.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-maid-list',
  templateUrl: './maid-list.component.html',
  styleUrls: ['./maid-list.component.scss']
})
export class MaidListComponent implements OnInit {
  private router = inject(Router);
  private service = inject(MaidService);
  private _changeDetectorRef = inject(ChangeDetectorRef);
  
  dataMaids: Maid[] = [];
  ngOnInit(): void {
    this.getMaid()
  }

  getMaid(): void {
    this.service.getMaid().subscribe({
      next: (response: any) => {
        const data: any = response;
        this.dataMaids = data
        this._changeDetectorRef.detectChanges()
      },
      error: (err) => {
      }
    });
  }

  add() {
    this.router.navigate(['/maid/maid-add']);
  }

}
