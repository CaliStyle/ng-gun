import { AppPage } from './app.po'

describe('proxy-engine-ng App', () => {
  let page: AppPage

  beforeEach(() => {
    page = new AppPage()
  })

  it('should display welcome message', () => {
    page.navigateTo('/')
    expect(page.getElementText('app-root h1')).toEqual('Welcome to Proxy Engine with Angular!')
  })
  it('should display 404', () => {
    page.navigateTo('/404')
    expect(page.getElementText('app-root h1')).toEqual('404')
  })
  it('should display 404', () => {
    page.navigateTo('/abcdefghijk')
    expect(page.getElementText('app-root h1')).toEqual('404')
  })
  it('should display 500', () => {
    page.navigateTo('/500')
    expect(page.getElementText('app-root h1')).toEqual('500')
  })
})
