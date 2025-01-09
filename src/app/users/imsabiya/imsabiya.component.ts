import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { regexOfPhoneNumber, ErrorMessage } from 'src/app/common/static-message';
import { ValidationService } from 'src/app/common/validation.service';


@Component({
  selector: 'app-imsabiya',
  templateUrl: './imsabiya.component.html',
  styleUrls: ['./imsabiya.component.css']
})
export class ImsabiyaComponent{
  phoneNumForm = new FormGroup({
    phoneNumFormControl : new FormControl('', [Validators.required, ValidationService.onlyDigits, Validators.maxLength(10)])
  })
  
  errorMessage: string = ErrorMessage.validPhoneNum;
  Description: string = regexOfPhoneNumber.description;
  syntax: string = regexOfPhoneNumber.syntax;

}