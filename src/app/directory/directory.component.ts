import { Component, OnInit } from '@angular/core';
//import {ActivatedRoute} from "@angular/router";
import {LoggingService} from '../logging.service'

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
  //声明这个类被调用
  providers:[LoggingService]
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
    {name:"Benry",color:"yellow",phone:"400-123-456"},
    {name:"Cenry",color:"yellow",phone:"400-123-456"}
  ]

  //调用服务层的方法
  constructor(private logger:LoggingService){}

  //写方法调用服务处的方法
  logIt(){
    this.logger.log();
  }

  ngOnInit() {
  }

}
