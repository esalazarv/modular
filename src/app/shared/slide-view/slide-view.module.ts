import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideViewContainerDirective } from './directives/slide-view-container.directive';
import { SlideViewService } from './services/slide-view.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SlideViewContainerDirective
  ],
  providers: [
    SlideViewService,
  ]
})
export class SlideViewModule { }
