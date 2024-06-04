import { Component, OnInit } from '@angular/core';
import { ToDoListItem, ToDoListItemStatus } from 'src/app/models/to-do-list-models';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { CreateItemFormData } from '../to-do-create-item/to-do-create-item.component';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { ToDoListDataService } from 'src/app/services/to-do-list-data.service';

@Component({
    selector: 'app-to-do-list',
    templateUrl: './to-do-list.component.html',
    styleUrls: ['./to-do-list.component.scss'],
})
export class ToDoListComponent implements OnInit {
    toDoListItems$!: Observable<Array<ToDoListItem>>;
    isLoading = false;
    editedItemId: ToDoListItem["id"] | null = null;
    readonly toDoListItemStatus = ToDoListItemStatus;

    constructor(private activatedRoute: ActivatedRoute,
        private toDoListDataService: ToDoListDataService) { }

    ngOnInit(): void {
        this.toDoListItems$ = this.toDoListDataService.getItems;
        this.toDoListDataService.update();
    }

    public get getItemIdFromRoute(): number | null {
        return this.activatedRoute.snapshot.children.length === 0 ?
            null : +this.activatedRoute.snapshot.children[0].params['id'];
    }

    addToDoListItem(formData: CreateItemFormData): void {
        this.toDoListDataService.addItem(formData);
    }

    deleteToDoListItemById(itemId: ToDoListItem["id"]): void {
        this.toDoListDataService.deleteItemById(itemId);
    }

    editToDoListItemTitleById(itemId: ToDoListItem["id"], title: ToDoListItem["text"]): void {
        this.toDoListDataService.editItemTitleById(itemId, title);
        this.editedItemId = null;
    }

    setEditedItemId(itemId: ToDoListItem["id"]): void {
        this.editedItemId = itemId;
    }

    editToDoListItemStatusById(itemId: ToDoListItem["id"], itemStatus: ToDoListItem["status"]): void {
        this.toDoListDataService.editItemStatusById(itemId, itemStatus);
    }

    onStatusFilterChange(matButtonToggleChange: MatButtonToggleChange): void {
        this.toDoListItems$ = matButtonToggleChange.value === null ?
            this.toDoListDataService.getItems :
            this.toDoListDataService.getItems.pipe(
                map(items => items.filter(item => item.status === matButtonToggleChange.value)),
            );
    }
}
