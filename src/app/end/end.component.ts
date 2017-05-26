import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router"

@Component({
  selector: 'app-end',
  templateUrl: './end.component.html',
  styleUrls: ['./end.component.css']
})
export class EndComponent implements OnInit {
  private score: string
  private remark: string

  constructor(
    router: Router,
    route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.score = "95"
    this.remark = "nice"

  }
  replay(e){

  }
  share(e){

  }

}
