//src/app/services/task.service.ts

import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Task } from "../models/task.model";

@Injectable({
    providedIn:'root'
})

export class TaskService{
    private tasks: Task[] = [];
    private tasksSubject = new BehaviorSubject<Task[]>([]);

    constructor(){
        //Adiciona algumas tarefas iniciais automaticamente
        this.addTask('Aprender Angular');
        this.addTask('Criar um app de tarefas');
        this.addTask('Dominar TypeScript');
    }
    
    getTasks(): Observable<Task[]>{ 
        return this.tasksSubject.asObservable();
    }   

    addTask(title: string): void{
        const task: Task = {
            id:Date.now(),
            title,
            completed: false,
            createdAt: new Date()
        };

        this.tasks = [...this.tasks, task];
        this.tasksSubject.next([...this.tasks]);
    }

    toggleTaskStatus(id: number): void{
        this.tasks = this.tasks.map(
            task => task.id === id ? {...task, completed: !task.completed} : task
        );
        this.tasksSubject.next([...this.tasks]);
    }

    deleteTask(id: number): void{
        this.tasks = this.tasks.filter(task => task.id !== id);
        this.tasksSubject.next([...this.tasks]);
    }
}