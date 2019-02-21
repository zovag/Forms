import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm} from '@angular/forms';
import { routes } from '../app.routes';
import { ActivatedRoute, Params } from '@angular/router';
import { AuthentificationService } from '../authentification.service';
import { PaymentPageComponent } from '../payment-page/payment-page.component'


@Component({
  selector: 'log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  userEmail;
  userPass;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
