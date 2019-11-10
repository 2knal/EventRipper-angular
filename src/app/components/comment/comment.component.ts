import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../../models/Comment';

@Component({
    selector: 'app-comment',
    templateUrl: './comment.component.html',
    styleUrls: ['./comment.component.css']
})

export class CommentComponent implements OnInit {

    // Formatting dates, because why not?
    getDayOfWeek(date) {
        var dayOfWeek = new Date(date).getDay();
        return isNaN(dayOfWeek) ? null : ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'][dayOfWeek];
    }

    getMonthOfYear(date) {
        var month = new Date(date).getMonth();
        return isNaN(month) ? null : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'][month];
    }

    formatDate(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var day = this.getDayOfWeek(date);
        var month = this.getMonthOfYear(date);
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return `${day}, ${month} ${date.getDate()} ${strTime}`;
    }

    @Input() comment: Comment;
    time: String;
    constructor() { }

    ngOnInit() {
        // Generating random time stamps for comments
        let timestamp = Date.now() - Math.floor(Math.random()*10000000000);
        this.time = this.formatDate(new Date(timestamp));
        // console.log('Time:', this.time);
    }

}
