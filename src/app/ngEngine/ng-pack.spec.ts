import { NgPack } from './ng-pack'

describe('NgPack', () => {
  it('should create a NgPack instance', () => {
    expect(new NgPack({}, {
      config: {},
      pkg: {
        name: 'ngPack-test'
      },
      actions: {},
      effects: {},
      reducers: {}
    })).toBeTruthy()
  })
})
