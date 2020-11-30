import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {

  PUBLIC_KEY = '3aaca4df13038701dcd23463656e49dd';
  HASH = 'BA82457FC3CBE123CC806ED10E2B9918';
  URL_API = `https://gateway.marvel.com:443/v1/public/characters?apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;

  public ObjComic = new Subject<any>();

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  getComic(id) {
    const URL_API_ID = `https://gateway.marvel.com:443/v1/public/characters/${id}/comics?apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`
    return this.http.get<any>(URL_API_ID).pipe(map((data: any) => data.data.results));
  }

}
