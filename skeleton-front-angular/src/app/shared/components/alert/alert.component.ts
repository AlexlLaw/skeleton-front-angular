import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { Subscription } from 'rxjs';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import { AlertService } from './alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent  implements OnInit, OnDestroy {
  @ViewChild('alert', { static: false }) private content: ElementRef<any>;
  public show: boolean;
  public modalRef: BsModalRef;
  public body: string;
  public style: string;
  public alert: string;
  public title: string;
  public closeResult: string;
  private subscription: Subscription;

  constructor(private modalService: BsModalService, private alertService: AlertService) {
      this.show = false;
  }
  ngOnInit(): void {
      this.subscription = this.alertService.loaderState.subscribe((state) => {
          if (state.show) {
              this.title = state.title;
              this.body = state.body;
              this.style = state.style;
              this.modalRef = this.modalService.show(this.content);
          }
      });
  }

  public ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

  public close(): void {
      this.modalRef.hide();
  }
}
