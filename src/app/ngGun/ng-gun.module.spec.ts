import { NgGunModule } from './'

describe('NgGunModule', () => {
  let ngGunModule: NgGunModule

  beforeEach(() => {
    ngGunModule = new NgGunModule()
  })

  it('should create an instance', () => {
    expect(ngGunModule).toBeTruthy()
  })
})
