import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToDoListItem } from 'src/app/models/to-do-list-models';

@Component({
    selector: 'app-to-do-list-item',
    templateUrl: './to-do-list-item.component.html',
    styleUrls: ['./to-do-list-item.component.scss'],
})
export class ToDoListItemComponent implements OnInit {
    @Input({ required: true }) toDoListItem!: ToDoListItem;
    @Input() isEditMode = false;
    @Output() deleteItemEvent = new EventEmitter<ToDoListItem["id"]>();
    @Output() editItemEvent = new EventEmitter<ToDoListItem>();
    itemTitle!: ToDoListItem["text"];

    ngOnInit(): void {
        this.itemTitle = this.toDoListItem ? this.toDoListItem.text : "";
    }

    emitItemDeletion(): void {
        this.deleteItemEvent.emit(this.toDoListItem.id);
    }

    emitItemEditing(): void {
        this.toDoListItem.text = this.itemTitle;
        this.editItemEvent.emit(this.toDoListItem);
    }
}
