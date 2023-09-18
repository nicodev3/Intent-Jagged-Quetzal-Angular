import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { CardRowImgLeft } from './card-row-img-left/card-row-img-left.component'
import { NavbarInteractive } from './navbar-interactive/navbar-interactive.component'
import { Card } from './card/card.component'
import { TheTopBar } from './the-top-bar/the-top-bar.component'
import { TheFooter } from './the-footer/the-footer.component'
import { PatronsCards } from './patrons-cards/patrons-cards.component'
import { Form } from './form/form.component'
import { Numbers } from './numbers/numbers.component'
import { MenuContainer } from './menu-container/menu-container.component'
import { VideoCard } from './video-card/video-card.component'
import { CardRowImgRight } from './card-row-img-right/card-row-img-right.component'

@NgModule({
  declarations: [
    CardRowImgLeft,
    NavbarInteractive,
    Card,
    TheTopBar,
    TheFooter,
    PatronsCards,
    Form,
    Numbers,
    MenuContainer,
    VideoCard,
    CardRowImgRight,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    CardRowImgLeft,
    NavbarInteractive,
    Card,
    TheTopBar,
    TheFooter,
    PatronsCards,
    Form,
    Numbers,
    MenuContainer,
    VideoCard,
    CardRowImgRight,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
