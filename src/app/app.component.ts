import {
  Component,
  OnDestroy,
} from '@angular/core';
import { App } from '@capacitor/app';
import { Capacitor } from '@capacitor/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnDestroy {
  title = 'x2';

  private destroy$ = new Subject<void>();

  ngOnDestroy(): void {
    if (Capacitor.isNativePlatform()) {
      App.removeAllListeners();
    }

    this.destroy$.next();
    this.destroy$.complete();
  }
}
