import {DirectoryComponent} from './directory/directory.component';
import {HomeComponent} from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from "@angular/core";

const appRoutes:Routes = [
  /*{path:'directory/:person',component:DirectoryComponent},*/
  {path:'directory',component:DirectoryComponent},
  {path:'',component:HomeComponent}
];
//引入路由配置模块
export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);
