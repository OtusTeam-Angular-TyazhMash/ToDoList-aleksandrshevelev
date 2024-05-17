import { Component, OnInit } from '@angular/core';
import { ToDoListItem, ToDoListItemStatus } from 'src/app/models/to-do-list-models';
import { ToDoListService } from './to-do-list.service';
import { ToastService } from 'src/app/shared/services/toast.service';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { CreateItemFormData } from '../to-do-create-item/to-do-create-item.component';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-to-do-list',
    templateUrl: './to-do-list.component.html',
    styleUrls: ['./to-do-list.component.scss'],
})
export class ToDoListComponent implements OnInit {
    toDoListItems: Array<ToDoListItem> = [];
    isLoading = true;
    editedItemId: ToDoListItem["id"] | null = null;
    readonly toDoListItemStatus = ToDoListItemStatus;

    constructor(private toDoListService: ToDoListService,
        private toastService: ToastService,
        private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
        setTimeout(() => this.isLoading = false, 500);
        this.fetchToDoList();
    }

    public get getItemIdFromRoute(): number | null {
        return this.activatedRoute.snapshot.children.length === 0 ?
            null : +this.activatedRoute.snapshot.children[0].params['id'];
    }

    fetchToDoList(): void {
        this.toDoListService.getToDoListItems().subscribe({
            next: (receivedToDoListItems) => {
                this.toDoListItems = receivedToDoListItems;
            },
            error: () => {
                this.toastService.showToast("Failed to load todo list");
            },
        });
    }

    addToDoListItem(formData: CreateItemFormData): void {
        this.toDoListService.addToDoListItem(formData.text, formData.description).subscribe({
            next: (addedToDoListItem) => {
                this.toDoListItems.push(addedToDoListItem);
                this.toastService.showToast("Item added");
            },
            error: () => {
                this.toastService.showToast("Failed to add todo");
            },
        });
    }

    deleteToDoListItemById(itemId: ToDoListItem["id"]): void {
        this.toDoListService.deleteToDoListItemById(itemId).subscribe({
            next: () => {
                const deletedItemIndex = this.toDoListItems.findIndex(item => item.id === itemId);
                if (deletedItemIndex > -1)
                    this.toDoListItems.splice(deletedItemIndex, 1);
                this.toastService.showToast("Todo deleted");
            },
            error: () => {
                this.toastService.showToast("Failed to delete todo");
            },
        });
    }

    editToDoListItemTitleById(itemId: ToDoListItem["id"], title: ToDoListItem["text"]): void {
        this.toDoListService.editItemTitleById(itemId, title).subscribe({
            next: (editedToDoListItem) => {
                const deprecatedItemIndex = this.toDoListItems.findIndex(item => item.id === editedToDoListItem.id);
                this.toDoListItems[deprecatedItemIndex] = editedToDoListItem;
                this.editedItemId = null;
                this.toastService.showToast("Item edited");
            },
            error: () => {
                this.toastService.showToast("Failed to edit todo");
            },
        });
    }

    setEditedItemId(itemId: ToDoListItem["id"]): void {
        this.editedItemId = itemId;
    }

    editToDoListItemStatusById(itemId: ToDoListItem["id"], itemStatus: ToDoListItem["status"]): void {
        this.toDoListService.editItemStatusById(itemId, itemStatus).subscribe({
            next: (editedToDoListItem) => {
                const deprecatedItemIndex = this.toDoListItems.findIndex(item => item.id === editedToDoListItem.id);
                this.toDoListItems[deprecatedItemIndex] = editedToDoListItem;
                this.toastService.showToast("Task status has been changed");
            },
            error: () => {
                this.toastService.showToast("Failed to edit todo");
            },
        });
    }

    onStatusFilterChange(matButtonToggleChange: MatButtonToggleChange): void {
        if (matButtonToggleChange.value === null)
            this.fetchToDoList();
        else
            this.toDoListService.getToDoListItemsByStatus(matButtonToggleChange.value).subscribe({
                next: (receivedToDoListItems) => {
                    this.toDoListItems = receivedToDoListItems;
                },
                error: () => {
                    this.toastService.showToast("Failed to load todo list");
                },
            });
    }
}
