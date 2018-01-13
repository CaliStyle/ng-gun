import { NgModule, InjectionToken } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes, ROUTES } from '@angular/router'
import { StoreModule, ActionReducerMap, MetaReducer, META_REDUCERS } from '@ngrx/store'
import { StoreRouterConnectingModule } from '@ngrx/router-store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { EffectsModule } from '@ngrx/effects'

// NgEngine for NgPacks
import { NgEngine } from './ng-engine'
import { NgEngineStore } from './ng-engine.store'
import { NgEngineService } from './ng-engine.service'

// Return Root Reducers with Pack Reducers
export const REDUCER_TOKEN = new InjectionToken<ActionReducerMap<any>>('REDUCER_TOKEN')
export function getReducers(ngEngine: NgEngine) {
  return ngEngine.reducers
}

// Return Root Meta Reducers with Pack Meta Reducers
export function getMetaReducers(ngEngine: NgEngine): MetaReducer<{}>[] {
  return ngEngine.metaReducers
}

// Return Root Routes
export const ROUTES_TOKEN: InjectionToken<Routes[]> = new InjectionToken<Routes[]>('ROUTES_TOKEN')
export function getRoutes(ngEngine: NgEngine) {
  return ngEngine.routes
}
// export const EFFECTS_TOKEN = new InjectionToken<Array<any>>('Pack Effects')
// export function getEffects(ngEngine: NgEngine) {
//   return Object.values(ngEngine.effects)
// }

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    StoreModule.forRoot(REDUCER_TOKEN),
    EffectsModule.forRoot([]), // EFFECTS_TOKEN),
    StoreRouterConnectingModule,
    StoreDevtoolsModule.instrument({ maxAge: 50 })
  ],
  declarations: [],
  exports: [
    StoreModule
  ],
  providers: [
    NgEngine,
    NgEngineStore,
    NgEngineService,
    {
      provide: REDUCER_TOKEN,
      deps: [ NgEngine ],
      useFactory: getReducers
    },
    {
      provide: META_REDUCERS,
      deps: [ NgEngine ],
      useFactory: getMetaReducers
    },
    {
      provide: ROUTES_TOKEN,
      deps: [ NgEngine ],
      useFactory: getRoutes
    },
    // {
    //   provide: EFFECTS_TOKEN,
    //   deps: [ NgEngine ],
    //   useFactory: getEffects
    // }
  ]
})
export class NgEngineModule {

}
