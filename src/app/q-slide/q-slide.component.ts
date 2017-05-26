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
  private activateNext: boolean = false

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
        if (!this.hasInit) {
          // set slide-contain width
          this.containWidth = l * 100 + "%"
          this.slideWidth = 100 / l + "%"
        }

        let i = this.currentIndex
        let transLength = +this.slideWidth.replace("%", "")
        this.translate = `translate3d(-${(i - 1) * transLength}%, 0, 0)`
        // reset next button
        this.activateNext = false

      })
  }

  ngAfterContentInit() {
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.hasInit = true
      this.transition = "all 1000ms ease"
    }, 1000)
  }
  ngDoCheck() {
    let i = this.currentIndex
    if (this.chooseValues[i - 1]) this.activateNext = true
  }

  next(e) {
    let i = this.currentIndex
    // end this test
    if (i === this.slideLength) return this.endTest()
    this.go(++this.currentIndex)
    // console.log(this.chooseValues)
  }
  prev(e) {
    let i = this.currentIndex
    if (i === 1) return
    this.go(--this.currentIndex)
  }
  go(index: number) {
    this.router.navigate([`/test/${this.id}/${index}`])
  }

  // post answer and go to end page
  endTest() {
    console.log(131111)
    this.testService.postAnswer({
      id: this.id,
      answer: this.chooseValues,
      // user time cost
      timeCost: 100
    })
    .subscribe(d=>{
      console.log(d)
    })
    


    // todo: navigate to end page after server response in future, when user collection is added

    return this.router.navigate([`/end/${this.id}`])
  }

}
