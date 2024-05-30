import { Component, OnInit } from '@angular/core';
import { ToDoListItem, ToDoListItemStatus } from 'src/app/models/to-do-list-models';
import { ToDoListService } from 'src/app/services/to-do-list.service';

@Component({
    selector: 'app-board-view',
    templateUrl: './board-view.component.html',
    styleUrls: ['./board-view.component.scss'],
})
export class BoardViewComponent implements OnInit {
    readonly toDoListItemStatus = ToDoListItemStatus;
    allToDoListItems: ToDoListItem[] = [];
    inProgressToDoListItems: ToDoListItem[] = [];
    completedToDoListItems: ToDoListItem[] = [];

    constructor(private toDoListService: ToDoListService) { }

    ngOnInit(): void {
        this.toDoListService.getToDoListItems().subscribe(
            (toDoListItems) => {
                this.allToDoListItems = toDoListItems;
                this.inProgressToDoListItems = toDoListItems.filter(item => item.status === ToDoListItemStatus.InProgress);
                this.completedToDoListItems = toDoListItems.filter(item => item.status === ToDoListItemStatus.Completed);
            });
    }
}
