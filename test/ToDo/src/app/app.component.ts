import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To do list';
  textValue = 'initial value';
  log = '';

  logText(value: string): void {
    this.log += `Text changed to '${value}'\n`;
  }
}
