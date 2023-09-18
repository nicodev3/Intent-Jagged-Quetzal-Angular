import { Component, Input } from '@angular/core'

@Component({
  selector: 'card-row-img-left',
  templateUrl: 'card-row-img-left.component.html',
  styleUrls: ['card-row-img-left.component.css'],
})
export class CardRowImgLeft {
  @Input()
  mainText: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  @Input()
  imageAlt: string = 'alt text'
  @Input()
  imagePath: string = '/assets/pourquoi-century212-1500w.jpg'
  @Input()
  rootClassName: string = ''
  @Input()
  heading: string = 'heading'
  @Input()
  linkLabel: string = 'LABEL'
  @Input()
  linkUrl: string = 'https://example.com'
  constructor() {}
}
