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
    return this.http.get<any>(this.URL).pipe(map((res: any) => {
      return res;
    }))
  }
  additem(data: any) {
    return this.http.post<any>(this.URL, data).pipe(map((res: any) => {
      return res;
    }))
  }
  updateitem(data: any, id: any) {
    return this.http.put<any>(this.URL +'/'+ id, data).pipe(map((res: any) => {
      return res;
    }))
  }
  rejectitem(id: number) {
    return this.http.delete<any>(this.URL +'/'+ id).pipe(map((res: any) => {
      return res;
    }))
  }
  getiditem(id: any) {
    return this.http.get<any>(this.URL +'/'+ id).pipe(map((res: any) => {
      return res;
    }))
  }

}
