import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  // Adding event with the help of EventEmitter and with @Output decorator 
  @Output() public childEvent = new EventEmitter();
  constructor() { }
  ngOnInit() {
  }
  // Adding function sendToParent
  // With the help of event emitting a string 
  sendToParent() {
    this.childEvent.emit('VJ Tech Diary from Child to Parent');
    }
}