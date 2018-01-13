import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SharedModule } from '../../shared/shared.module'
import { HomeComponent } from './home.component'
import { homeRouter } from './home.router'

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    homeRouter
  ],
  declarations: [
    HomeComponent
  ],
  entryComponents: [
    HomeComponent
  ]
})
export class HomeModule { }
