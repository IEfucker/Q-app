import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router"

import { Test } from "../test"
import {Question} from "../question"
import { TestService } from "../test.service"

import 'rxjs/add/operator/switchMap'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-q-slide',
  templateUrl: './q-slide.component.html',
  styleUrls: ['./q-slide.component.css']
})
export class QSlideComponent implements OnInit {
  private id: string
  private test: Test
  private questions: Question[]

  constructor(
    private testService: TestService,
    private router: Router,
    private route: ActivatedRoute

  ) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => {
        this.id = params["id"]
        // return Observable.of<string>(this.id)
        return this.testService.getTest(this.id)
      })
      .subscribe((test: Test) => {
        this.test = test
        this.questions = test.questions
      })
  }

}
