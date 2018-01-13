import { TestBed, inject } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { NgEngine } from './ng-engine'
import { NgEngineModule } from './ng-engine.module'
import { NgEngineService } from './ng-engine.service'

describe('NgEngineService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NgEngineModule
      ]
    })
  })

  it('should be created', inject([NgEngineService], (service: NgEngineService) => {
    expect(service).toBeTruthy()
  }))
  it('should get engine', inject([NgEngineService], (service: NgEngineService) => {
    expect(service.engine).toBeTruthy()
  }))
  it('should get config from engine', inject([NgEngineService], (service: NgEngineService) => {
    expect(service.config.get('app.title')).toBeTruthy()
  }))
  it('should get store', inject([NgEngineService], (service: NgEngineService) => {
    expect(service.store).toBeTruthy()
  }))
  it('should select from store', inject([NgEngineService], (service: NgEngineService) => {
    expect(service.select('getAppState')).toBeTruthy()
  }))
  it('should dispatch from store', inject([NgEngineService], (service: NgEngineService) => {
    expect(service.select('getAppState')).toBeTruthy()
  }))
})
