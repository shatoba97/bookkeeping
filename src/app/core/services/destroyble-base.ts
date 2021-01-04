import { OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

export class DestroybleBase implements OnDestroy {
  /** Subject for destroy */
  public destroy$ = new Subject();

  /** @inheritdoc */
  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
