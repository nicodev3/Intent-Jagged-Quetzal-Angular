import { Component, Input } from '@angular/core'

@Component({
  selector: 'video-card',
  templateUrl: 'video-card.component.html',
  styleUrls: ['video-card.component.css'],
})
export class VideoCard {
  @Input()
  text: string = 'Text'
  @Input()
  image_src: string = 'https://play.teleporthq.io/static/svg/default-img.svg'
  @Input()
  text2: string = 'Text'
  @Input()
  rootClassName: string = ''
  @Input()
  guillemets: string = '"'
  @Input()
  text1: string = 'Text'
  @Input()
  image_alt: string = 'image'
  constructor() {}
}
