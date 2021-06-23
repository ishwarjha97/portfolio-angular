import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }

  getAbout() {
    return this.http.get(this.baseUrl + '/about');
  }

  getExperiences() {
    return this.http.get(this.baseUrl + 'experiences');
  }

  getProjects() {
    return this.http.get(this.baseUrl + 'projects');
  }

  sendContact(contact: any) {
    return this.http.post<any>(this.baseUrl + 'contact', contact, httpOptions).subscribe(data => {

    });
  }
}
