import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  checkMode: boolean = false;
  modeName: string = 'Night';

  changeMode(){
    this.checkMode = !this.checkMode
    if (this.checkMode){
      this.modeName = 'Light';
    } else {
      this.modeName = 'Night'
    }
  }
}
