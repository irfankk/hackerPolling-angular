import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PollingService {

  constructor(
    private http: HttpClient
  ) { }

  bestCandidate() {
    return this.http.get(environment.api_services + 'polling/best-hacker');
  }

  listCandidate() {
    return this.http.get(environment.api_services + 'polling/list-hackers');
  }

}
