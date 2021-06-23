import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  getAbout() {
    return this.http.get('/server/about');
  }

  getExperiences() {
    return this.http.get('/server/experiences');
  }

  getProjects() {
    return this.http.get('/server/projects');
  }

  sendContact(contact: any) {
    return this.http.post<any>('/server/contact', contact, httpOptions).subscribe(data => {

    });
  }
}
