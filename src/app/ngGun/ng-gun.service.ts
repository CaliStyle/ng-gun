import { Injectable, Inject } from '@angular/core'
import { NgGunRef, NgGunOptions } from './ng-gun.ref'

@Injectable()
export class NgGunService {
  public db: NgGunRef

  constructor(
    @Inject('ngGunOptions') options?
  ) {
    this.db = new NgGunRef(options || {})
  }
}

export {
  NgGunRef,
  NgGunOptions
}
