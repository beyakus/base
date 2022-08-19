import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private _loading$: Subject<boolean> = new Subject<boolean>();
  /**
   * Indicates that it should show the loading
   */
  show(): void {
    this._loading$.next(true);
  }
  /**
   * Indicates that you should hide loading
   */
  hidden(): void {
    this._loading$.next(false);
  }
  /**
   * Returns the Observable type boolean
   * @returns Observable
   */
  listen(): Observable<boolean> {
    return this._loading$.asObservable();
  }
}
