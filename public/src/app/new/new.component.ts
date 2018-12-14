import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  //errors: String [] = [];
  errors: String [];
  newPet: any;

  constructor(
    private _httpService: HttpService, 
    private _router: Router,
  ) { }

  ngOnInit() {
    this.newPet = { name: " ", type: " ", description: " ", skill1: " ", skill2: " ", skill3: " "}
    this.errors = [];
  }
  makePet(){
    this.errors = []; 
    this._httpService.createOne(this.newPet).subscribe(data =>{
      console.log(data)// to see check data in browser/
      if("errors" in data){
        for(let error in data['errors']){
          this.errors.push(data['errors'][error]['message']);
        }
      }else{
          // this.goHome()
          this._router.navigate(['/home'])
        }
    })
  }
  // goHome() {
  //   this._router.navigate(["/home"])
  // }
}
