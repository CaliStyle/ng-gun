import { Routes } from '@angular/router'
import { ActionReducerMap, MetaReducer } from '@ngrx/store'
import { Injectable } from '@angular/core'
import { omit, merge } from 'lodash'

// Config and Config Class
import * as config from '../../appConfig'
import { NgConfig } from './ng-config'

// Root Reducers, Actions
import * as rootReducers from '../root/store/reducers'
import * as rootActions from '../root/store/actions'

// Environment Stub from  angular cli
import { environment } from '../../environments/environment'

// For browsers that don't implement the debug method, log will be used instead.
const CONSOLE_DEBUG_METHOD = console['debug'] ? 'debug' : 'log'

@Injectable()
export class NgEngine {
  public config: NgConfig
  public env: Object
  public environment: string
  public packs: {}

  private _actions: {}
  private _effects: {}
  private _metaReducers: MetaReducer<{}>
  private _models: {}
  private _reducers: ActionReducerMap<any>
  private _state: {}
  private _routes: Routes

  constructor() {
    // Set environment string
    this.environment = this.environmentString(environment)

    // Freeze process environment
    const processEnv = Object.freeze(JSON.parse(JSON.stringify({
      APP_ENV: this.environment
    })))

    // Define initial properties
    Object.defineProperties(this, {
      env: {
        configurable: true,
        writable: false,
        value: processEnv
      },
      config: {
        value: new NgConfig(config, processEnv),
        configurable: true,
        writable: false
      },
      packs: {
        value: { }
      },
      _actions: {
        value: rootActions
      },
      _effects: {
        value: { }
      },
      _metaReducers: {
        value: rootReducers.metaReducers
      },
      _models: {
        value: { }
      },
      _reducers: {
        value: rootReducers.reducers
      },
      _routes: {
        value: []// this.config.get('routes')
      },
      _state: {
        value: {root: omit(rootReducers, 'reducers', 'metaReducers')}
      }
    })

    // Assign routes from config
    Object.assign(this._routes, this.config.get('routes'))

    // Load Packs
    this.config.get('main.packs').forEach(Pack => {
      try {
        const pack = new Pack(this)
        this.packs[pack.name] = pack
        this.config.merge(pack.config)
        this.mergePack(pack)
      }
      catch (e) {
        this.log(e.stack)
        throw new Error('ng new pack constructor')
        // throw new NgPackError(Pack, e, 'constructor')
      }
    })
  }

  environmentString(env) {
    let e = 'development'
    if (env.production === true) {
      e = 'production'
    }
    else if (env.staging === true) {
      e = 'staging'
    }
    else if (env.testing === true) {
      e = 'testing'
    }
    return e
  }

  get development() {
    return this.environment === 'development'
  }
  get production() {
    return this.environment === 'production'
  }
  get staging() {
    return this.environment === 'staging'
  }
  get testing() {
    return this.environment === 'testing'
  }

  get actions() {
    return this._actions
  }

  get effects() {
    return this._effects
  }

  get metaReducers() {
    return Object.values(this._metaReducers)
  }

  get models() {
    return this._models
  }

  get reducers() {
    return this._reducers
  }

  get routes() {
    return this._routes
  }

  get state() {
    return this._state
  }

  /**
   * Merge a Pack into Engine
   * @param pack
   */
  private mergePack (pack) {
    Object.assign(this._actions, {[pack.id]: pack.actions || {}})
    Object.assign(this._effects, pack.effects || {})
    Object.assign(this._models,  pack.models || {})
    Object.assign(this._metaReducers,  pack.reducers['metaReducers'] || {})
    Object.assign(this._reducers,  pack.reducers['reducers'] || {})
    // Object.assign(this._routes, pack.routes)
    Object.assign(this._state, {[pack.id]: omit(pack.reducers, ['reducers', 'metaReducers'])})
  }

  public error(message?: any, ...optionalParams: any[]) {
    if (!this.production) {
      (<any>console).error.apply(console, arguments)
    }
  }

  public warn(message?: any, ...optionalParams: any[]) {
    if (!this.production) {
      (<any>console).warn.apply(console, arguments)
    }
  }

  public info(message?: any, ...optionalParams: any[]) {
    if (!this.production) {
      (<any>console).info.apply(console, arguments)
    }
  }

  public debug(message?: any, ...optionalParams: any[]) {
    if (!this.production) {
      (<any>console)[CONSOLE_DEBUG_METHOD].apply(console, arguments)
    }
  }

  public log(message?: any, ...optionalParams: any[]) {
    if (!this.production) {
      (<any>console).log.apply(console, arguments)
    }
  }
}
