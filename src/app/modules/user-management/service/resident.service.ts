import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ResidentService {
  private _http = inject(HttpClient);

  getResident() {
    return this._http.get(environment.api_url + '/user/get-resident');
  }


}
