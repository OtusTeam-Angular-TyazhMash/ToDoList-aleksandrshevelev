import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDoListItem, ToDoListItemStatus } from 'src/app/models/to-do-list-models';

@Injectable({
    providedIn: 'root',
})
export class ToDoListService {
    private toDoListUrl = "http://localhost:3000/to-do-list";

    constructor(private httpClient: HttpClient) { }

    getToDoListItems(): Observable<Array<ToDoListItem>> {
        return this.httpClient.get<Array<ToDoListItem>>(this.toDoListUrl);
    }

    getToDoListItemsByStatus(status: ToDoListItem["status"]): Observable<Array<ToDoListItem>> {
        return this.httpClient.get<Array<ToDoListItem>>(this.toDoListUrl + "?status=" + status);
    }

    addToDoListItem(text: ToDoListItem["text"], description: ToDoListItem["description"]): Observable<ToDoListItem> {
        return this.httpClient.post<ToDoListItem>(this.toDoListUrl, {
            text: text,
            description: description,
            status: ToDoListItemStatus.InProgress,
        });
    }

    deleteToDoListItemById(itemId: ToDoListItem["id"]): Observable<void> {
        return this.httpClient.delete<void>(this.toDoListUrl + "/" + itemId);
    }

    editItemTitleById(itemId: ToDoListItem["id"], text: ToDoListItem["text"]): Observable<ToDoListItem> {
        return this.httpClient.patch<ToDoListItem>(this.toDoListUrl + "/" + itemId, { text: text });
    }

    editItemStatusById(itemId: ToDoListItem["id"], itemStatus: ToDoListItem["status"]): Observable<ToDoListItem> {
        return this.httpClient.patch<ToDoListItem>(this.toDoListUrl + "/" + itemId, { status: itemStatus });
    }
}
