import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl: string = "http://localhost:5000";
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) { }

  /* Making a Post Request */
  createEmployee(data: any) {
    let url = `${this.baseUrl}/insertEmployee`;
    return this.http.post(url, data, { responseType: 'text' });
  }

  /* Making a Get Request */
  getEmployee() {
    return this.http.get(`${this.baseUrl}/getAllEmployees`);
  }

  /* Making a Put Request */
  updateEmployee(data: any, email: any) {
    let url = `${this.baseUrl}/updateEmployee/${email}`;
    return this.http.put(url, data, { responseType: 'text' })
  }

  /* Making a Delete Request */
  deleteEmployee(emailId: any) {
    let url = `${this.baseUrl}/deleteEmployee/${emailId}`;
    return this.http.delete(url, { responseType: 'text' })
  }
}
