import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _http = inject(HttpClient);


  login(req: any) {
    return this._http.post(environment.api_url + '/auth/login-all', {
      ...req
    });
  }
}
