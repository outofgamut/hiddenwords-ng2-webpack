import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';
import { ITask } from '../models/task';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'task-item',
  styles: [
    require('./task-item.scss')
  ],
  template: require('./task-item.html'),
  animations: [
      trigger('taskState', [
        state('collapsed', style({
          backgroundColor: '#eee',
          transform: 'scale(1)'
        })),
        state('expanded',   style({
          backgroundColor: '#cfd8dc',
          transform: 'scale(1.1)'
        })),
        transition('collapsed => expanded', animate('100ms ease-in')),
        transition('expanded => collapsed', animate('100ms ease-out'))
      ])
    ]
})

export class TaskItemComponent {
  @Input() task: ITask;
  @Output() remove = new EventEmitter(false);
  @Output() update = new EventEmitter(false);

  editing: boolean = false;
  title: string = '';
  state: string = 'collapsed';

  editTitle(): void {
    this.editing = true;
    this.title = this.task.title;
  }

  toggleState(): void {
    var oldState = this.state;
    console.log('state is ' + this.state);
    if(oldState == 'collapsed'){
      this.state = 'expanded';
    }
    if(oldState == 'expanded'){
      this.state = 'collapsed';
    }
    console.log('now state is ' + this.state);
  }

  saveTitle(): void {
    if (this.editing) {
      const title: string = this.title.trim();
      if (title.length && title !== this.task.title) {
        this.update.emit({title});
      }
      this.stopEditing();
    }
  }

  stopEditing(): void {
    this.editing = false;
  }

  toggleStatus(): void {
    this.update.emit({
      completed: !this.task.completed
    });
  }
}
