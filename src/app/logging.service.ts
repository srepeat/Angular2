import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  log(){
    alert("I am logging Service")
  }

  constructor() { }
}
