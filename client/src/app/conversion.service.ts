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

  updateConversion(obj : any) {
    console.log(obj);
    return this.http.put(this.apiurl + 'api/conv/' + obj._id, obj);
  }

  deleteConversion(id) {
    return this.http.delete(this.apiurl + 'api/conv/' + id);
  }

  getTimestamp() {
    return this.http.get(this.apiurl + 'api/conv/timestamp');
  }

  deleteAll() {
      return this.http.delete(this.apiurl + 'api/conv/deleteAll');
  }

  refreshRates() {
      return this.http.get(this.apiurl + 'api/conv/refreshRates');
  }

}
