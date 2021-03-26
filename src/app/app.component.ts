import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MainService } from './services/main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  arrPost: any;

  constructor(private mainService: MainService) {}

  getPostDetails(): any {
    this.mainService.getData().subscribe((posts) => {
      this.arrPost = posts;
    });
  }
}
