import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommonService } from 'src/app/services/common-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public about: any;
  public experiences: any;
  public projects: any;
  public sent = false;

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.getAbout();
    this.getExperiences();
    this.getProjects();
  }

  getAbout() {
    this.commonService.getAbout().subscribe(
      data => {
        if (data) {
          this.about = data;
          this.check(this.about);
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
            this.check(this.experiences);
          }
        },
        err => console.error(err)
      );
  }
  check(v: any) {
    console.log(v);
  }

  getProjects() {
    this.commonService.getProjects().subscribe(
      data => { if (data) { this.projects = data } },
      err => console.error(err)
    );
  }

  onContactSubmit(event: NgForm) {
    this.sent = false;
    this.commonService.sendContact(event);
    event.resetForm();
    this.sent = true;
    setTimeout(() => {
      this.sent = false;
    }, 2000);
  }
}
