import {Component} from '@angular/core';

import {FormControl, FormGroup, Validators} from '@angular/forms';
import { ValidationService } from 'src/app/common/validation.service';
import { ErrorMessage, regularExpressionOfMeerjavali } from 'src/app/common/static-message';
@Component({
  selector: 'app-meerjavali',
  templateUrl: './meerjavali.component.html',
  styleUrls: ['./meerjavali.component.css']
})
export class MeerjavaliComponent {
  meerjavaliForm= new FormGroup({
    nameFormControl : new FormControl('', [ValidationService.onlyAlphabets,Validators.required])
  })
  errorMessage:string=ErrorMessage.onlyAlphabets;
  Description:string = regularExpressionOfMeerjavali.description;
  syntax:string=regularExpressionOfMeerjavali.syntax;
}

