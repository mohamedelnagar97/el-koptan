import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export abstract class CommonService<T> {
  t: T;
  name: string;
  constructor(private http: HttpClient) { }

  List() {
    return (this.http.get<T[]>(`http://localhost:8080/` + this.name + `/`));
  }
  getbyId(id) {
    return (this.http.get<T>(`http://localhost:8080/` + this.name + `/${id}`));
  }
  /*delete(id) {
    return (this.http.delete(`http://localhost:8080/` + this.name + `/` + `${id}`));
  }
  update(category: T) {
    return (this.http.put<T>(`http://localhost:8080/` + this.name + `/`, category));
  }
  add(category: T) {
    return (this.http.post<T>(`http://localhost:8080/` + this.name + `/`, category));
  }
  */
}
export class PropertyBean {
  public id: number;
  public description: string;
  public images: ImageBean[];
  constructor() { }
}
export class ImageBean {
  public id: number;
  public path: string;
  constructor() { }
}
