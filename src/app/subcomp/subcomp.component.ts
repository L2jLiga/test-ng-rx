import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval, Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-subcomp',
  templateUrl: './subcomp.component.html',
  styleUrls: ['./subcomp.component.css']
})
export class SubcompComponent implements OnChanges, OnInit, OnDestroy {
  @Input() public one: boolean;
  @Input() public two: boolean;
  @Input() public three: boolean;

  destroyed$: Subject<void> = new Subject();

  obs$: Observable<number>;

  constructor() {
    this.obs$ = interval(1000)
      .pipe(takeUntil(this.destroyed$));

    console.log('Component constructor called');
  }

  public ngOnChanges(changes: SimpleChanges): void {
    console.log('Changes detected!');

    console.log('Input[one]=%s,\nInput[two]=%s,\nInput[three]=%s', this.one, this.two, this.three);
  }

  public ngOnInit(): void {
    console.log('On Init lifecycle hook called');
  }

  ngOnDestroy() {
    console.log('On Destroy lifecycle hook called');
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
