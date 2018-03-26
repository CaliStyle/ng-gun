import { ChangeDetectionStrategy, Component, OnInit, OnDestroy } from '@angular/core'
import { NgEngineService } from 'ng-engine'
import { NgGunService, NgGunRef } from '../ngGun'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, OnDestroy {
  private subs: any[] = []// Subscription[] = []
  private db: NgGunRef

  constructor(
    private _ngEngine: NgEngineService,
    private _ngGun: NgGunService
  ) {
    this.db = this._ngGun.db
  }

  ngOnInit() {
    const title = this._ngEngine.config.get('app.title')
    const testNode = this.db.get('test')

    this.subs = [
      // Keeps pushing values upon changes to this node:
      testNode.on().subscribe(data => { console.log(data) })
    ]

    // Gets data once and completes:
    testNode.val().subscribe(data => { console.log(data) })

    testNode.put({testing: true})

    setTimeout(() => {
      testNode.put({testing: true, timestamp: new Date().getTime()})
    }, 2000)
  }
  ngOnDestroy() {
    this.subs.forEach(sub => {
      if (sub.unsubscribe) {
        sub.unsubscribe()
      }
    })
  }
}
