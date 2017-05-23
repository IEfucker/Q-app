import { Component, OnInit, AfterViewInit, AfterContentInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router"

import { Test } from "../test"
import { Question } from "../question"
import { TestService } from "../test.service"

import 'rxjs/add/operator/switchMap'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

// import {RadioButtonModule} from 'primeng/primeng';

@Component({
  selector: 'app-q-slide',
  templateUrl: './q-slide.component.html',
  styleUrls: ['./q-slide.component.css'],
})
export class QSlideComponent implements OnInit, AfterViewInit, AfterContentInit, DoCheck {
  private id: string
  private test: Test
  private questions: Question[]
  private containWidth: string
  private slideWidth: string
  private translate: string
  private transition: string
  // current index start form 1
  private currentIndex: number
  private slideLength: number

  private chooseValues: string[] = []

  private hasInit: boolean = false

  constructor(
    private testService: TestService,
    private router: Router,
    private route: ActivatedRoute

  ) { }

  ngOnInit() {

    this.route.params
      .switchMap((params: Params) => {
        this.id = params["id"]
        this.currentIndex = +params["index"]
        // return Observable.of<string>(this.id)
        if (this.test) return Observable.of<Test>(this.test)
        return this.testService.getTest(this.id)
      })
      .subscribe((test: Test) => {
        this.test = test
        this.questions = test.questions

        let l = this.slideLength = this.questions.length
        // set slide-contain width
        this.containWidth = l * 100 + "%"
        this.slideWidth = 100 / l + "%"

        let i = this.currentIndex
        let transLength = +this.slideWidth.replace("%", "")
        this.translate = `translate3d(-${(i - 1) * transLength}%, 0, 0)`

      })
  }

  ngAfterContentInit() {
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.hasInit = true
    }, 1000)
  }
  ngDoCheck() {
    if (this.hasInit) this.transition = "all 1000ms ease"
  }

  next(e) {
    let i = this.currentIndex
    if (i === this.slideLength) return
    this.go(++this.currentIndex)
    console.log(this.chooseValues)
  }
  prev(e) {
    let i = this.currentIndex
    if (i === 1) return
    this.go(--this.currentIndex)
  }
  go(index: number) {
    this.router.navigate([`/test/${this.id}/${index}`])
  }

}
