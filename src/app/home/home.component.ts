import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LoggingService} from '../logging.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  //声明这个类被调用
  providers:[LoggingService]
})
export class HomeComponent implements OnInit {
  //定义属性值==>准备数据
  homeTitle = "HomeTitle Home";
  HeString = "I Like Home and ball";
  changeColor = {'bule':false,'nave':true};
  bool = false;

  pople=[
    {name:"李四",job:"Web开发工程师"},
    {name:"张三",job:"前端工程师"},
    {name:"王五",job:"后端工程师"}
  ];
  //input引入父组件传递给子组件的属性
  @Input() person;
  myClick(val){
    alert(val);
  };
  //使用output子组件给父组件传递事件
  @Output() onYell = new EventEmitter();
  firstYellEvent(){
    this.onYell.emit();
  }

  //调用服务层的方法执行
  constructor(private logger:LoggingService){}

  //写方法，调用serve中的方法
  logIt(){
    this.logger.log();
  }

  ngOnInit() {
  }

}
