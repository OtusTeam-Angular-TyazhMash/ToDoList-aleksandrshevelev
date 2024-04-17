import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToDoListItem } from 'src/app/models/to-do-list-models';

@Component({
    selector: 'app-to-do-list-item',
    templateUrl: './to-do-list-item.component.html',
    styleUrls: ['./to-do-list-item.component.scss'],
})
export class ToDoListItemComponent {
    @Input({ required: true }) toDoListItem!: ToDoListItem;
    @Output() deleteItemEvent = new EventEmitter<ToDoListItem["id"]>();

    emitItemDeletion(itemId: ToDoListItem["id"]): void {
        this.deleteItemEvent.emit(itemId);
    }
}
