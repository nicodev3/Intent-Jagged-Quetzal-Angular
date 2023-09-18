import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-numbers',
  templateUrl: 'numbers.component.html',
  styleUrls: ['numbers.component.css'],
})
export class Numbers {
  @Input()
  textLeftTop: string = 'text'
  @Input()
  numberRight: string = '000'
  @Input()
  rootClassName: string = ''
  @Input()
  textMiddleBottom: string = 'text'
  @Input()
  textRightBottom: string = 'text'
  @Input()
  textRightTop: string = 'text'
  @Input()
  textLeftBottom: string = 'text'
  @Input()
  numberLeft: string = '0'
  @Input()
  numberMiddle: string = '000'
  @Input()
  textMiddleTop: string = 'text'
  constructor() {}
}
