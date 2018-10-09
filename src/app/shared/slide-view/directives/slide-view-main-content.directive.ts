import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appSlideViewMainContent]'
})
export class SlideViewMainContentDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
