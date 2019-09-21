import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parentochild';
  // Define variable in Parent Component
  // This varibale will pass to Child Component
  public name = 'VJ Tech Diary';
}
