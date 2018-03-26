# ng-gun
Angular 5+ implementation of Gun.js. Supports AOT and SSR.

Based on the incredible work by the Gun.js contributors.

## Install
`npm install ngx-gun --save`

## Config
Configure the ng-gun options which are passed:

```ts
import { BrowserModule, BrowserTransferStateModule} from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

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
    ...
    NgGunModule.forRoot(ngGunOptions)
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}

```

[![Build status][ci-image]][ci-url]

[ci-image]: https://img.shields.io/circleci/project/github/CaliStyle/ng-gun/master.svg
[ci-url]: https://circleci.com/gh/CaliStyle/ng-gun/tree/master
