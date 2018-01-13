import { TestBed, inject } from '@angular/core/testing'
import { NgGunModule, NgGunService } from './ng-gun.module'

describe('NgGunService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NgGunModule.forRoot()
      ]
    })
  })

  it('should be created', inject([NgGunService], (service: NgGunService) => {
    expect(service).toBeTruthy()
  }))
})
