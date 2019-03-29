import { Injectable } from '@angular/core';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  playersUrl = 'http://localhost:8090/player';
  matchesUrl = 'http://localhost:8090/match';
  authenticationUrl = 'http://localhost:8100/authenticate';
  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Authorization': 'Basic ' + btoa('user:dupa')
    })
  };
  httpJsonOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      // 'Access-Control-Allow-Headers': 'Content-Type',
  //    'Access-Control-Allow-Methods': 'GET,POST',
      'Authorization': 'Basic ' + btoa('user:dupa'),
      'Content-Type':  'application/json'
    })
  };

  constructor() { }
}
