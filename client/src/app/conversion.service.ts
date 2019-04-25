import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable()
export class ConversionService {

  private apiurl = environment.apiurl;

  constructor(private http: HttpClient) {
  }

  listConversions() {
    return this.http.get(this.apiurl + 'api/conv');
  }

}
