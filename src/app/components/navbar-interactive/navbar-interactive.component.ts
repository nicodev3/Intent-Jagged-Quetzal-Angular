import { Component, Input } from '@angular/core'

@Component({
  selector: 'navbar-interactive',
  templateUrl: 'navbar-interactive.component.html',
  styleUrls: ['navbar-interactive.component.css'],
})
export class NavbarInteractive {
  @Input()
  rootClassName: string = ''
  constructor() {}
}
