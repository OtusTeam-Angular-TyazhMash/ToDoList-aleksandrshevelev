import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ToDoListItem, ToDoListItemStatus } from 'src/app/models/to-do-list-models';
import { ToDoListDataService } from 'src/app/services/to-do-list-data.service';

@Component({
    selector: 'app-board-view',
    templateUrl: './board-view.component.html',
    styleUrls: ['./board-view.component.scss'],
})
export class BoardViewComponent implements OnInit {
    readonly toDoListItemStatus = ToDoListItemStatus;
    allToDoListItems$!: Observable<Array<ToDoListItem>>;
    inProgressToDoListItems$!: Observable<Array<ToDoListItem>>;
    completedToDoListItems$!: Observable<Array<ToDoListItem>>;

    constructor(private toDoListDataService: ToDoListDataService) { }

    ngOnInit(): void {
        this.allToDoListItems$ = this.toDoListDataService.getItems;
        this.inProgressToDoListItems$ = this.toDoListDataService.getItems.pipe(
            map(items => items.filter(item => item.status === ToDoListItemStatus.InProgress)),
        );
        this.completedToDoListItems$ = this.toDoListDataService.getItems.pipe(
            map(items => items.filter(item => item.status === ToDoListItemStatus.Completed)),
        );
        this.toDoListDataService.update();
    }
}
