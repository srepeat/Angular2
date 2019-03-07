import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app2';
  name = "鱼羊";
  /*person={
    name:"李四",
    color:"yello"
  };*/
  yell(){
    alert("父组件子组件调用！");
  }
}
