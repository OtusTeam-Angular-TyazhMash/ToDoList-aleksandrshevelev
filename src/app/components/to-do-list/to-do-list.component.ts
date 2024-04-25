import { Component, OnInit } from '@angular/core';
import { ToDoListItem } from 'src/app/models/to-do-list-models';

@Component({
    selector: 'app-to-do-list',
    templateUrl: './to-do-list.component.html',
    styleUrls: ['./to-do-list.component.scss'],
})
export class ToDoListComponent implements OnInit {
    toDoListItems: Array<ToDoListItem> = [
        { id: 0, text: "Complete task 1" },
        { id: 1, text: "Complete task 2" },
        { id: 2, text: "Complete task 3" },
        { id: 3, text: "Complete task 4" },
        { id: 4, text: "Complete task 5" },
    ];
    toDoInputValue = "";
    isLoading = true;

    ngOnInit(): void {
        setTimeout(() => this.isLoading = false, 500);
    }

    addToDoListItem(): void {
        const maxItemId: number = Math.max(...this.toDoListItems.map(item => item.id), -1);
        this.toDoListItems.push({
            id: maxItemId + 1,
            text: this.toDoInputValue,
        });
        this.toDoInputValue = "";
    }

    deleteToDoListItem(itemId: ToDoListItem["id"]): void {
        const itemIndex: number = this.toDoListItems.findIndex(item => item.id === itemId);
        if (itemIndex > -1)
            this.toDoListItems.splice(itemIndex, 1);
    }
}
