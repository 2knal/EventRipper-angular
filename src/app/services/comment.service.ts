import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Comment } from '../models/Comment';

@Injectable({
    providedIn: 'root'
})

export class CommentService {

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json'
        })
    };

    commentsUrl = 'https://jsonplaceholder.typicode.com/comments'
    constructor(private http: HttpClient) { }

    getComments(taskId): Observable<Comment[]> {
        return this.http.get<Comment[]> (`${this.commentsUrl}?postId=${taskId}`);
    }

    submitComment(comment: Comment): Observable<Comment> {
        return this.http.post <Comment> (`${this.commentsUrl}`, comment, this.httpOptions)
    }
}
