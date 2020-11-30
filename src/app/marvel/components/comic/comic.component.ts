import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

// Services
import { ComicsService } from './../../../core/services/comics.service';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
})
export class ComicComponent implements OnInit {

  dataComic = [];

  constructor(
    private comicsService: ComicsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getComic();
  }

  getComic() {
    const params = this.activatedRoute.snapshot.params;
    this.comicsService.getComic(params.id).subscribe(
      (res) => {
        console.log(res);
        res.forEach(comic => {
          this.dataComic.push({
            title: comic.title,
            format: comic.format,
            image: comic.thumbnail.path.concat('.', comic.thumbnail.extension),
          });
        });
      }
    )
  }

}
