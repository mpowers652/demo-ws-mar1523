import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app1';
  names:string[] = [
    'John Smith', 
    'Alan Rickman', 
    'Test-Name1', 
    'Test', 
    'Jon', 
    'Ava', 
    'Fred', 
    'Jacob F', 
    'Matt P', 
    'Jeff J.'
  ]

}
