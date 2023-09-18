import { Component, Input } from '@angular/core'

@Component({
  selector: 'card-row-img-right',
  templateUrl: 'card-row-img-right.component.html',
  styleUrls: ['card-row-img-right.component.css'],
})
export class CardRowImgRight {
  @Input()
  content: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  @Input()
  image_src: string = '/assets/notre-philosophie-1500w.jpg'
  @Input()
  heading: string = 'heading'
  @Input()
  link_url: string = 'https://example.com'
  @Input()
  rootClassName: string = ''
  @Input()
  image_alt: string = 'image'
  @Input()
  link_label: string = 'LABEL'
  constructor() {}
}
