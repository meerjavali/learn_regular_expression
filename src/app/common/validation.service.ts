import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }
  static onlyAlphabets(control: { value: string; }){
    const reg = /^[A-Za-z]+$/  
    if(reg.test(control.value)){
      return null;
    }
    else{
      return {invalidInput: true};
    }
  }
  static onlyDigits(control: { value: string; }){
    const reg = /^[0-9]{10}$/  
    if(reg.test(control.value)){
      return null;
    }
    else{
      return {invalidInput: true};
    }
  }
}
