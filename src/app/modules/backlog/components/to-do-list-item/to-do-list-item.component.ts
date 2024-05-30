import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { ToDoListItem, ToDoListItemStatus } from 'src/app/models/to-do-list-models';

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
    @Output() changeItemStatusEvent = new EventEmitter<ToDoListItem["status"]>();

    itemTitle!: ToDoListItem["text"];
    readonly toDoListItemStatus = ToDoListItemStatus;

    ngOnInit(): void {
        this.itemTitle = this.toDoListItem ? this.toDoListItem.text : "";
    }

    emitItemDeletion(): void {
        this.deleteItemEvent.emit();
    }

    emitItemTitleEditing(): void {
        this.editItemTitleEvent.emit(this.itemTitle);
    }

    emitItemStatusChange(matCheckboxChange: MatCheckboxChange): void {
        this.changeItemStatusEvent.emit(matCheckboxChange.checked ?
            ToDoListItemStatus.Completed : ToDoListItemStatus.InProgress);
    }
}
