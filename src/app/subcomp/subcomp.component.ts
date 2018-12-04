import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval, Observable, Subject } from 'rxjs';
import { map, startWith, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-subcomp',
  templateUrl: './subcomp.component.html',
  styleUrls: ['./subcomp.component.css']
})
export class SubcompComponent implements OnChanges, OnInit, OnDestroy {
  @Input() public one: boolean;
  @Input() public two: boolean;
  @Input() public three: boolean;

  events: string[] = [];
  destroyed$: Subject<void> = new Subject();
  obs$: Observable<number>;

  constructor() {
    this.obs$ = interval(1000)
      .pipe(
        startWith(-1),
        map(a => ++a),
        takeUntil(this.destroyed$)
      );

    this.events.push('Component constructor called');
  }

  public ngOnChanges(changes: SimpleChanges): void {
    this.events.push('Changes detected!');

    this.events.push(`Input[one]=${this.one},\n Input[two]=${this.two},\n Input[three]=${this.three}`);
  }

  public ngOnInit(): void {
    this.events.push('On Init lifecycle hook called');
  }

  ngOnDestroy() {
    this.events.push('On Destroy lifecycle hook called');
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
