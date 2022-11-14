import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoAddTodoComponent } from './todo-add-todo.component';

describe('TodoAddTodoComponent', () => {
  let component: TodoAddTodoComponent;
  let fixture: ComponentFixture<TodoAddTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoAddTodoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoAddTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
