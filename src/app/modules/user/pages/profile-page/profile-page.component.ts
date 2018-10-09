import { Component, OnInit } from '@angular/core';
import { SlideViewService } from '../../../../shared/slide-view/services/slide-view.service';
import { TestComponent } from '../../components/test/test.component';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  constructor(
    private slideView: SlideViewService
  ) { }

  ngOnInit() {
  }

  open() {
    console.log('OK');
    this.slideView.open(TestComponent);
  }
}
