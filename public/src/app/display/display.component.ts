import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute, Params } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  pet: any;

  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.pet = this.pet = { name: " ", type: " ", description: " ", skill1: " ", skill2: " ", skill3: " " }

    this.getOnePet(this.pet);

    this._route.params.subscribe((params: Params) => { //POMISES take the ID from the URL which gives id of specific pet
      this.getOnePet(params['id']); //important to get id from route
    })
  }

  getOnePet(id) {
    this._httpService.getOne(id).subscribe(data => {
      this.pet = data // assigning data to pet
    })
  }
  
    delete(id) {
    console.log(id);
    this._httpService.deleteOne(id).subscribe(data => {
      console.log("deleted has been delete")
      this.goHome()
    })
  }

  goHome() {
    this._router.navigate(["/home"])
  }

}
