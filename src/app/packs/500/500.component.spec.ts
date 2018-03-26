import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { NgEngineModule } from 'ng-engine'
import { FiveZeroZeroComponent } from './500.component'

describe('FiveZeroZeroComponent', () => {
  let component: FiveZeroZeroComponent
  let fixture: ComponentFixture<FiveZeroZeroComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:  [
        RouterTestingModule,
        NgEngineModule
      ],
      declarations: [ FiveZeroZeroComponent ]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(FiveZeroZeroComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
