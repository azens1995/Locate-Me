import { Component, OnInit, Input } from '@angular/core';
import { Market } from '@ionic-native/market/ngx';
import { AppVersion } from '@ionic-native/app-version/ngx';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() name: string;

  constructor(private market: Market, private appVersion: AppVersion) { }

  ngOnInit() {}

  openStore() {
    this.market.open('com.tributementorship.teknikos.app');
    // to retreive the package name
    this.appVersion.getPackageName().then(pacakageName => {
      alert(pacakageName);
    });
  }

}
