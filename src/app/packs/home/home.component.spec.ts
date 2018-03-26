import { ComponentFixture, TestBed, async } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'

import { NgEngineModule, NgEngineService } from 'ng-engine'
import { HomeComponent } from './home.component'

describe('HomeComponent', () => {
  let component: HomeComponent
  let ngEngineService: NgEngineService
  let fixture: ComponentFixture<HomeComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NgEngineModule
        // other imports
      ],
      declarations: [ HomeComponent ]
    }).compileComponents()
  }))

  beforeEach(() => {
    ngEngineService = TestBed.get(NgEngineService)
    // spyOn(ngEngineService, 'dispatch').and.callThrough()
    fixture = TestBed.createComponent(HomeComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create the app', () => {
    expect(component).toBeTruthy()
  })
})
