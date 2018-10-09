import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSlideViewClose]',
})
export class SlideViewCloseDirective {

  constructor (
    private elementRef: ElementRef<HTMLElement>,
  ) {}

  @HostListener('click') onClick() {
    this.test();
  }

  test() {
    let parent: HTMLElement | null = this.elementRef.nativeElement.parentElement;

    while (parent && !parent.classList.contains('slide-view-wrapper')) {
      parent = parent.parentElement;
    }

    console.log(parent);

    // return parent ? openDialogs.find(dialog => dialog.id === parent!.id) : null;
  }
}
