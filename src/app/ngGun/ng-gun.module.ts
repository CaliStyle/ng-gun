import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NgGunService, NgGunRef, NgGunOptions } from './ng-gun.service'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    // NgGunRef,
    // NgGunService
  ]
})
export class NgGunModule {
  static forRoot(config?: NgGunOptions): ModuleWithProviders {
    return {
      ngModule: NgGunModule,
      providers: [
        // NgGunRef,
        NgGunService,
        { provide: 'ngGunOptions', useValue: config }
      ]
    }
  }
}

export { NgGunService, NgGunRef, NgGunOptions }
