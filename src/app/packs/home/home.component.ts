import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { NgEngineService } from 'ng-engine'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  public app
  public home

  constructor(
    private _ngEngine: NgEngineService
  ) { }

  ngOnInit() {
    this.app = this._ngEngine.config.get('app')
    this.home = this._ngEngine.config.get('home')
  }
}
