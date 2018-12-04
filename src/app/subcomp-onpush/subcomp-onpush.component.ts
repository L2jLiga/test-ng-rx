import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SubcompComponent } from '../subcomp/subcomp.component';

@Component({
  selector: 'app-subcomp-onpush',
  templateUrl: './subcomp-onpush.component.html',
  styleUrls: ['./subcomp-onpush.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubcompOnpushComponent extends SubcompComponent {}
