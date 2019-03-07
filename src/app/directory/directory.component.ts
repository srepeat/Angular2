import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {
  //directory = "DirectoryTitle";
  /*person:any;
  constructor(private route:ActivatedRoute) {
      this.person = this.route.snapshot.params['person'];
  }*/

  //定义一个对象
  people=[
    {name:"Henry",color:"yellow",phone:"400-123-456"},
    {name:"Henry",color:"yellow",phone:"400-123-456"},
    {name:"Henry",color:"yellow",phone:"400-123-456"}
  ]


  ngOnInit() {
  }

}
