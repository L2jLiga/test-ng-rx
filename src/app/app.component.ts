import { Component, OnInit } from '@angular/core';
import { Observable, of, timer } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showSubComp = true;
  showSubCompOnpush = true;

  timerWithShareReplay$: Observable<boolean>;
  timer$: Observable<boolean>;
  ofBoolean$: Observable<boolean>;

  public ngOnInit(): void {
    this.timer$ = timer(5000).pipe(map(Boolean));
    this.timerWithShareReplay$ = this.timer$.pipe(shareReplay());
    this.ofBoolean$ = of(true);
  }
}
