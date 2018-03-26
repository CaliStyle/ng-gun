import { Injectable } from '@angular/core'
import * as Gun from 'gun/gun'
import { Observable } from 'rxjs/Observable'
import * as _ from 'lodash'
import { NgGunOptions } from './ng-gun.options'

@Injectable()
export class NgGunRef {
  public gun: Gun

  constructor(
    // Set Default options as empty object
    private options: NgGunOptions = {}
  ) {
    // Create the Gun instance
    this.gun = new Gun()

    // Apply any provided options if any
    if (!_.isEmpty(options)) {
      this.gun.opt(options)
    }
  }

  /**
   * Create
   */
  static create(gun: Gun) {
    const newRef = new NgGunRef()
    newRef.gun = gun
    return newRef
  }

  /**
   * Set Options
   */
  opt(options: NgGunOptions): NgGunRef {
    this.gun.opt(options)
    return this
  }

  /**
   * get
   */
  get(key: string): NgGunRef {
    return NgGunRef.create(this.gun.get(key))
  }

  /**
   * put
   */
  put(data: any): NgGunRef {
    return NgGunRef.create(this.gun.put(data))
  }

  /**
   * set
   */
  set(data: any): NgGunRef {
    return NgGunRef.create(this.gun.set(data))
  }

  /**
   * back
   */
  back(): NgGunRef {
    return NgGunRef.create(this.gun.back())
  }

  /**
   * map
   */
  map(): NgGunRef {
    return NgGunRef.create(this.gun.map())
  }

  /**
   * val
   */
  val<T>(): Observable<T> {
    return Observable.create(o => {
      this.gun.val((data, key, at, ev) => {
        console.log(data, key, at, ev)
        o.next(this.extractData(data))
        o.complete()
      })
    })
  }

  /**
   * on
   */
  on<T>(): Observable<T> {
    return Observable.create(o => {
      let stopped = false
      this.gun.on((data: T, key, at, ev) => {
        if (stopped) {
          o.complete()
          return ev.off()
        }
        o.next(this.extractData(data))
      })
      return () => {
        // Caller unsubscribe
        stopped = true
      }
    })
  }

  /**
   * extractData
   */
  private extractData(data) {
    return _.pickBy(data, (val, key) => val !== null && key !== '_')
  }

}

export { NgGunOptions }
