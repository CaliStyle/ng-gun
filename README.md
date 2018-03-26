# ng-gun

[![Build status][ci-image]][ci-url]

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

## Usage

```ts
import { ChangeDetectionStrategy, Component, OnInit, OnDestroy } from '@angular/core'
import { NgGunService, NgGunRef } from '../ngGun'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, OnDestroy {
  private subs: Subscription[] = []
  private db: NgGunRef

  constructor(
    private _ngGun: NgGunService
  ) {
    this.db = this._ngGun.db
  }

  ngOnInit() {
    const testNode = this.db.get('test')

    this.subs = [
      // Keeps pushing values upon changes to this node:
      testNode.on().subscribe(data => {
        console.log(data)
      })
    ]

    // Gets data once and completes:
    testNode.val().subscribe(data => {
      console.log(data)
    })

    testNode.put({testing: true})

    setTimeout(() => {
      testNode.put({testing: true, timestamp: new Date().getTime()})
    }, 1000)

  }

  ngOnDestroy() {
    this.subs.forEach(sub => {
      if (sub.unsubscribe) {
        sub.unsubscribe()
      }
    })
  }
}

```

[ci-image]: https://img.shields.io/circleci/project/github/CaliStyle/ng-gun/master.svg
[ci-url]: https://circleci.com/gh/CaliStyle/ng-gun/tree/master
