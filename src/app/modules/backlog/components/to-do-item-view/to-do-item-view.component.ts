import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToDoListItem } from 'src/app/models/to-do-list-models';
import { ToDoListService } from '../../../../services/to-do-list.service';
import { ToastService } from 'src/app/services/toast.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Subject, takeUntil } from 'rxjs';

@Component({
    selector: 'app-to-do-item-view',
    templateUrl: './to-do-item-view.component.html',
})
export class ToDoItemViewComponent implements OnInit, OnDestroy {
    itemDescription!: ToDoListItem["description"];
    componentDestroyed$: Subject<boolean> = new Subject<boolean>();

    constructor(private activatedRoute: ActivatedRoute,
        private toastService: ToastService,
        private toDoListService: ToDoListService) { }

    ngOnDestroy(): void {
        this.componentDestroyed$.next(true);
        this.componentDestroyed$.complete();
    }

    ngOnInit(): void {
        this.activatedRoute.params.pipe(takeUntil(this.componentDestroyed$)).subscribe((params) => {
            this.toDoListService.getToDoListItemsById(params["id"]).subscribe({
                next: (toDoListItem) => {
                    this.itemDescription = toDoListItem.description;
                },
                error: (err: HttpErrorResponse) => {
                    this.toastService.showToast(err.message);
                },
            });
        });
    }
}
