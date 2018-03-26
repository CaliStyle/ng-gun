import { NgModule } from '@angular/core'
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server'
import { RouterModule } from '@angular/router'
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader'

// NgEngine for NgPacks
import { NgEngineModule, ENGINE_CONFIG } from 'ng-engine'
// Root Module
import { AppModule } from './app.module'
// Root Component
import { AppComponent } from './app.component'
// Route Module
import { AppRoutingModule } from './app.routing.module'
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
  peers: ['http://localhost:3000/gun']
}

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ServerTransferStateModule,
    RouterModule,
    AppRoutingModule,
    ModuleMapLoaderModule,
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
export class AppServerModule {

}
