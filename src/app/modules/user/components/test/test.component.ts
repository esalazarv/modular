import { Component, OnInit } from '@angular/core';
import {SlideViewService} from '../../../../shared/slide-view/services/slide-view.service';
import {OtherComponentComponent} from '../other-component/other-component.component';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(
    private slideViewService: SlideViewService,
  ) { }

  ngOnInit() {
  }

  click() {
    this.slideViewService.open(OtherComponentComponent, {});
    console.log('ok');
  }
}
