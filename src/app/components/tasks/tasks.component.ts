import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/Task';

@Component({
    selector: 'app-tasks',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

    tasks: Task[];
    constructor() { }

    ngOnInit() {
        
        // Fetch from a json file
        this.tasks = [
            {
                id: 1,
                description: 'Bring icecream'
            },
            {
                id: 2,
                description: 'Bring Football'
            },
            {
                id: 3,
                description: 'Bring Pizza'
            },
            {
                id: 4,
                description: 'Book tickets'
            },
        ]
    }

}
