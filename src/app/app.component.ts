import { Component, OnInit } from '@angular/core';
import { Observable, of, timer } from 'rxjs';
import { map, share, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cond = true;

  timerWithShareReplay$: Observable<boolean>;
  timer$: Observable<boolean>;
  ofBoolean$: Observable<boolean>;

  public ngOnInit(): void {
    this.timer$ = timer(5000).pipe(map(Boolean));
    this.timerWithShareReplay$ = this.timer$.pipe(shareReplay());
    this.ofBoolean$ = of(true);
  }

  dis() {
    this.cond = false;
  }

  en() {
    this.cond = true;
  }
}
