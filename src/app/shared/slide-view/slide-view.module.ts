import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideViewContainerDirective } from './directives/slide-view-container.directive';
import { SlideViewService } from './services/slide-view.service';
import { SlideViewWrapperComponent } from './components/slide-view-wrapper/slide-view-wrapper.component';
import { UIModule } from '../../ui/ui.module';
import { SlideViewMainContentDirective } from './directives/slide-view-main-content.directive';
import { SlideViewCloseDirective } from './directives/slide-view-close.directive';

@NgModule({
  imports: [
    CommonModule,
    UIModule,
  ],
  declarations: [
    SlideViewContainerDirective,
    SlideViewMainContentDirective,
    SlideViewCloseDirective,
    SlideViewWrapperComponent,
  ],
  providers: [
    SlideViewService,
  ],
  exports: [
    SlideViewContainerDirective,
    SlideViewCloseDirective,
  ],
  entryComponents: [
    SlideViewWrapperComponent,
  ]
})
export class SlideViewModule { }
