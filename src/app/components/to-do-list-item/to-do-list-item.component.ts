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
    @Output() deleteItemEvent = new EventEmitter();
    @Output() editItemTitleEvent = new EventEmitter<ToDoListItem["text"]>();
    itemTitle!: ToDoListItem["text"];

    ngOnInit(): void {
        this.itemTitle = this.toDoListItem ? this.toDoListItem.text : "";
    }

    emitItemDeletion(): void {
        this.deleteItemEvent.emit();
    }

    emitItemTitleEditing(): void {
        this.editItemTitleEvent.emit(this.itemTitle);
    }
}
