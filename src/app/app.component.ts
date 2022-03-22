import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import dayjs from 'dayjs';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  readonly today = dayjs();
  readonly datePicked = new FormControl(this.today);

  readonly datePicked$ = this.datePicked.valueChanges.pipe(
    startWith(this.today)
  );
}
