import { Injectable } from '@angular/core';
import { iUser } from './../models/user.model';
//import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class RestService{

    constructor(private http: HttpClient){}
    private obj:any;

   
register(user) {
    console.log("POST");
    console.log(user);
    var headers = new Headers();
    headers.append('content-type','application/json');
    let url = `http://barbarellaserver.foolstack.it/api/elastic?index=utenti&type=utenti`;
    this.http.post(url, user).subscribe(res => console.log(res));
  }
}