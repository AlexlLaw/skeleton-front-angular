import { Component } from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';

import { AlertService } from './shared/components/alert/alert.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'skeleton-front-angular';

  constructor(
    private alertService: AlertService,
    private modalService: BsModalService,
  ) {  }

  public teste(): void {
    this.alertService.openModal('atenção', 'nenhuma funcionalidade cadastrada', 'warning');

    return;
  }
}
