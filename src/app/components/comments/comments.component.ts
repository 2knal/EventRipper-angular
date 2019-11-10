import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../../models/Comment';
import { CommentService } from '../../services/comment.service';

@Component({
    selector: 'app-comments',
    templateUrl: './comments.component.html',
    styleUrls: ['./comments.component.css']
})

export class CommentsComponent implements OnInit {

    @Input() taskId: number;
    comments: Comment[];

    constructor(private commentService: CommentService) { }

    ngOnInit() {
        this.commentService.getComments(this.taskId).subscribe(comments => {
            this.comments = comments;
            // console.log("Comments:", this.comments);
        })
    }

    // Submit comment
    handleComment() {
        console.log('submit');
        let body = (<HTMLInputElement>document.getElementById(`${this.taskId}`)).value;
        const newComment = {
            postId: +this.taskId,
            body,
            id: this.comments.length + 1,
            name: 'Placeholder',
            email: 'anonymous@abc.xyz'
        }
        // console.log(newComment);
        // Add it to UI
        this.comments.push(newComment)

        // POST it to jsonplaceholder
        this.commentService.submitComment(newComment).subscribe();
    }

}
