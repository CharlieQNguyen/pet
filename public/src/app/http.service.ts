import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getOne(id) {
    return this._http.get("/api/pets/" + id)
  }
  getAll() {
    return this._http.get("/api/pets")
  }
  editOne(id, data) {
    return this._http.patch("/api/pets/" + id, data)
  }
  createOne(data) {
    return this._http.post("/api/pets", data)
  }
  deleteOne(id) {
    return this._http.delete("/api/pets/" + id)
  }

}
