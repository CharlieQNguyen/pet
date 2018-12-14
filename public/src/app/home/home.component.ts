import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  errors: String = " "
  pets: any;

  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    this.showAll()
  }
  showAll(){
    let observable = this._httpService.getAll();
    observable.subscribe(data => {
      this.pets = data
    })
  }
}
