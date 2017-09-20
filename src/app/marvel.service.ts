import { Injectable, Input } from '@angular/core';
import { Http, Response } from '@angular/http'

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class MarvelService {



  characterParam;

  @Input() characterString;
  

  private baseUrl: string = "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=8e8d27528df8e1068e2773e3a7161575&hash=412852e32d04be7d8218808df40d53f1";
  private characterUrl: string = "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=8e8d27528df8e1068e2773e3a7161575&hash=412852e32d04be7d8218808df40d53f1&nameStartsWith=";

  constructor(private http: Http) { }


  getCharacterInfo(): Observable<any> {
    
        return this.http.get(this.baseUrl)
          .map(result => {
            return result.json()
          })
    
      }

      getSingleCharacterInfo(string): Observable<any> {

          this.characterString = string;
        
            return this.http.get(this.characterUrl + this.characterString )
              .map(result => {
                return result.json()
              })
        
          }
}
