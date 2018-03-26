import { BrowserModule, BrowserTransferStateModule} from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

// NgEngine for NgPacks
import { NgEngineModule, ENGINE_CONFIG } from 'ng-engine'
// Routing Module
import { AppRoutingModule } from './app.routing.module'
// Root Component
import { AppComponent } from './app.component'
// Shared Module
import { SharedModule } from '../shared/shared.module'

// Environment shim from CLI
import { environment } from '../../environments/environment'
// App Config for NgEngine
import * as appConfig from '../../appConfig'

// Gun Module
import { NgGunModule, NgGunOptions } from '../ngGun'
const ngGunOptions: NgGunOptions = {
  // peers: [location.origin + '/gun']
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({
      appId: 'proxy-engine-ng'
    }),
    HttpClientModule,
    BrowserTransferStateModule,
    RouterModule,
    AppRoutingModule,
    SharedModule,
    NgEngineModule,
    NgGunModule.forRoot(ngGunOptions)
  ],
  providers: [
    {
      provide: ENGINE_CONFIG,
      useValue: {
        environment: environment,
        appConfig: appConfig
      }
    }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
