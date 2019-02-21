import { Component, OnInit } from '@angular/core';
import { routes } from '../app.routes';
import { ActivatedRoute, Params } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthentificationService } from '../authentification.service';
import { LastPageComponent } from '../last-page/last-page.component'

@Component({
  selector: 'payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent implements OnInit {
  userForm: FormGroup;
  isValid: boolean;
  addMonth;
  addYear;

  constructor(private fb: FormBuilder, private AuthentificationService: AuthentificationService ) { }

  msgErrors = {
    "userPhone": "",
    "userEmail": "",
    "userSum": "",    
    "userCard": "",
    "userMonth": "",
    "userYear": "",
    "userCVS": ""
  }

  validationMessages = {
    "userPhone": {
      "required": "Обязательное поле.",
      "pattern": "Не правильный формат номера телефона."
    },
    "userEmail": {
      "required": "Обязательное поле.",
      "pattern": "Не правильный формат email"
    },
    "userSum": {
      "required": "Обязательное поле.",
      "min": "Сумма должна быть больше 5",
      "max": "Сумма должна быть меньше 5000"
    },    
    "userCard": {
      "required": "Обязательное поле.",
      "pattern": "Не правильный формат кода карточки"
    },
    "userMonth": {
      "required": "Обязательное поле."
    },
    "userYear": {
      "required": "Обязательное поле."
    },
    "userCVS": {
      "required": "Обязательное поле.",
      "pattern": "Не правильный формат CVV2"
    }
}
  
  ngOnInit() {
    this.buildForm();
    this.AuthentificationService.months;
    this.AuthentificationService.years;
  }

  isBtnDisabled() {
    return (this.userForm.status == 'INVALID') ? true : false;   
  }

  isOnValid() {
    this.isValid = true;
  }

  buildForm() {
    this.userForm = this.fb.group ({
      userPhone: ['', [
        Validators.required,
        Validators.pattern("380[0-9]{9}")
      ]],
      userEmail: ['', [
        Validators.required,
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
      ]],
      userSum: ['', [
        Validators.required,
        Validators.min(5),
        Validators.max(5000)
      ]],      
      userCard: ['', [
        Validators.required,
        Validators.pattern("[0-9]{16}")
      ]],
      userMonth: ['', [
        Validators.required
      ]],
      userYear: ['', [
        Validators.required
      ]],
      userCVS: ['', [
        Validators.required,
        Validators.pattern("[0-9]{3}")
      ]]
    });
    this.userForm.valueChanges.subscribe(data => this.onValueChange());
  }

  onValueChange() {
    if (!this.userForm) return;

    for (let item in this.msgErrors) {
      this.msgErrors[item] = "";
      let control = this.userForm.get(item);

      if (control && control.dirty && !control.valid) {
          let message = this.validationMessages[item];
          for (let key in control.errors) {
              this.msgErrors[item] += message[key] + " ";
          }
      }
    }
}

}
