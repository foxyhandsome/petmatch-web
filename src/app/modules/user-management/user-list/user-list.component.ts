import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { Maid } from '../../maid/interface/miad.interface';
import { ResidentService } from '../service/resident.service';

interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  private service = inject(ResidentService);
  private _changeDetectorRef = inject(ChangeDetectorRef);
  dataResident: Maid[] = [];
  ngOnInit(): void {
    this.getResident()
  }

  getResident(): void {
    this.service.getResident().subscribe({
      next: (response: any) => {
        const data: any = response;
        this.dataResident = data
        this._changeDetectorRef.detectChanges()
      },
      error: (err) => {
      }
    });
  }

}
