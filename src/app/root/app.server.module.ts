import { NgModule } from '@angular/core'
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server'
import { RouterModule } from '@angular/router'
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader'

// NgEngine for NgPacks
import { NgEngineModule } from '../ngEngine/ng-engine.module'
// Root Module
import { AppModule } from './app.module'
// Root Component
import { AppComponent } from './app.component'
// Route Module
import { AppRoutingModule } from './app.routing.module'
// Shared Module
import { SharedModule } from '../shared/shared.module'

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
  bootstrap: [
    AppComponent
  ]
})
export class AppServerModule {

}
