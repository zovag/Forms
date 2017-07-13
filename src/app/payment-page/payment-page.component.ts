import { Component, OnInit } from '@angular/core';
import { routes } from '../app.routes';
import { ActivatedRoute, Params } from '@angular/router';
import { NgForm} from '@angular/forms';
import { LastPageComponent } from '../last-page/last-page.component'

@Component({
  selector: 'payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent implements OnInit {
  phone: string;
  email: string;
  sum: number;
  cvs: number;
  card: number;
  months = ["Jan", "Feb", "Mar","Apr","May","Jun","Jul","Aug","Sep","Okt","Nov","Dec"];
  years = ["2017","2018", "2019","2020", "2021"]
  addMonth;
  addYear;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
