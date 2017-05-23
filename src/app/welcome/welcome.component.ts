import { Component, OnInit } from '@angular/core';

import {Router,ActivatedRoute,Params} from '@angular/router'

import {Test} from "../test"
import {TestService} from "../test.service"

import 'rxjs/add/operator/switchMap'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  private id:string
  private emptyTest:Test

  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private testService:TestService
  ) { }

  ngOnInit() {
  }

  start(){
    this.route.params
    .switchMap((params:Params)=>{
      // why params.id throw error "id does not exist on type..."
      this.id  = params["id"]
      return Observable.of<string>(this.id)
    })
    .subscribe((id:string)=>{
      this.router.navigate([`/test/${id}/1`])
    })
    // 
  }

}
