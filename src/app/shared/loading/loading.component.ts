import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  ChangeDetectorRef,
} from '@angular/core';
import { LoadingService } from '@services/loading/loading.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit, AfterViewInit, OnDestroy {
  private readonly _unSubscribe$: Subject<void> = new Subject<void>();
  show: boolean;

  constructor(
    private _loadingService: LoadingService,
    private _cd: ChangeDetectorRef
  ) {}

  private _listenChangeStatusLoading(): void {
    const { _unSubscribe$, _loadingService } = this;
    _loadingService
      .listen()
      .pipe(takeUntil(_unSubscribe$))
      .subscribe((status: boolean) => {
        this.show = status;
        this._cd.detectChanges();
      });
  }

  ngOnInit(): void {
    this._listenChangeStatusLoading();
  }

  ngAfterViewInit(): void {
    this._cd.detectChanges();
  }

  ngOnDestroy(): void {
    this._unSubscribe$.next();
    this._unSubscribe$.complete();
  }
}
