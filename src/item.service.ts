import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ItemService {
  getProjectData() {
    throw new Error('Method not implemented.');
  }
  private URL = "http://localhost:3000/posts"
  constructor(private http: HttpClient) { }
  getproductlist() {
    return this.http.get<any>(this.URL)}
  additem(data: any) {
    return this.http.post<any>(this.URL, data)
  }
  updateitem(data: any, id: any) {
    return this.http.put<any>(this.URL +'/'+ id, data)
  }
  rejectitem(id: number) {
    return this.http.delete<any>(this.URL +'/'+ id)
  }
  getiditem(id: any) {
    return this.http.get<any>(this.URL +'/'+ id)
  }

}
