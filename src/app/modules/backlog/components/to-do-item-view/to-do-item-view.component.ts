import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToDoListItem } from 'src/app/models/to-do-list-models';
import { Subject, map, takeUntil } from 'rxjs';
import { ToDoListDataService } from 'src/app/services/to-do-list-data.service';

@Component({
    selector: 'app-to-do-item-view',
    templateUrl: './to-do-item-view.component.html',
})
export class ToDoItemViewComponent implements OnInit, OnDestroy {
    itemDescription!: ToDoListItem["description"];
    componentDestroyed$: Subject<boolean> = new Subject<boolean>();

    constructor(private activatedRoute: ActivatedRoute,
        private toDoListDataService: ToDoListDataService) { }

    ngOnDestroy(): void {
        this.componentDestroyed$.next(true);
        this.componentDestroyed$.complete();
    }

    ngOnInit(): void {
        this.activatedRoute.params.pipe(takeUntil(this.componentDestroyed$)).subscribe((params) => {
            this.toDoListDataService.getItems.pipe(
                takeUntil(this.componentDestroyed$),
                map(items => items.find(item => item.id === +params["id"])),
            ).subscribe(item => {
                if (item)
                    this.itemDescription = item.description;
            });
        });
    }
}
