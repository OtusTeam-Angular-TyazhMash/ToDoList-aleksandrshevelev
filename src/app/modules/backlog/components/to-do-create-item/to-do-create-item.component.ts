import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToDoListItem } from 'src/app/models/to-do-list-models';

export type CreateItemFormData = Pick<ToDoListItem, "text" | "description">;

@Component({
    selector: 'app-to-do-create-item',
    templateUrl: './to-do-create-item.component.html',
    styleUrls: ['./to-do-create-item.component.scss'],
})
export class ToDoCreateItemComponent implements OnInit {
    toDoItemForm!: FormGroup;
    @Output() createItemEvent = new EventEmitter<CreateItemFormData>();

    constructor(private fb: FormBuilder) { }

    ngOnInit(): void {
        this.toDoItemForm = this.fb.group({
            itemTitle: ['', Validators.required],
            itemDescription: ['', Validators.required],
        });
    }

    emitCreatingItem(): void {
        this.createItemEvent.emit({
            text: this.toDoItemForm.controls['itemTitle'].value,
            description: this.toDoItemForm.controls['itemDescription'].value,
        });
        this.toDoItemForm.reset();
    }
}
