import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute, Params } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  errors: String [];
  pet: any;
  constructor(
    private _httpService: HttpService, 
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.pet = { name: " ", type: " ", description: " ", skill1: " ", skill2: " ", skill3: " " }
    this.errors = [];
    this._route.params.subscribe((params: Params) => {//take the ID from the URL which gives id of specific pet
    this.getPet(params['id']);//important to get id from route
    })
  }

  getPet(id){// passing Id to getPet function
    let observable = this._httpService.getOne(id); // observable is waiting to recieve data from previous function call in this ase .getOne
    observable.subscribe(data =>{
     this.pet = data 
    })
  }

  editPet(id){
    this.errors = [];
    let observable = this._httpService.editOne(id, this.pet);
    observable.subscribe(data => {
      if('errors' in data){
        for(let error in data['errors'] ){
          this.errors.push(data['errors'][error]['message'])  
        }
        console.log(this.errors)
      }else{
        this._router.navigate(['/home'])
      }
      console.log(data)
    })
  }
}
