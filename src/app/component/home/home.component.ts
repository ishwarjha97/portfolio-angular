import { Component, Injectable, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { CommonService } from 'src/app/services/common-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class HomeComponent implements OnInit {

  public about: any;
  public experiences: any;
  public projects: any;
  public sent = false;
  public aboutSpinner = false;
  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.getAbout();
    this.getExperiences();
    this.getProjects();
  }

  getAbout() {
    this.aboutSpinner = true;
    this.commonService.getAbout().subscribe(
      data => {
        if (data) {
          this.about = data;
          this.aboutSpinner = false;
        }
      },
      err => console.error(err)
    );
    
  }


  getExperiences() {
    this.commonService.getExperiences()
      .subscribe(
        data => {
          if (data) {
            this.experiences = data;
          }
        },
        err => console.error(err)
      );
  }

  getProjects() {
    this.commonService.getProjects().subscribe(
      data => { if (data) { this.projects = data } },
      err => console.error(err)
    );
  }

  onContactSubmit(event: NgForm) {
    this.sent = false;
    this.commonService.sendContact(event.value);
    event.resetForm();
    this.sent = true;
    setTimeout(() => {
      this.sent = false;
    }, 2000);
  }
}
