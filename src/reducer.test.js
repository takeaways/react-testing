import reducer from "./reducer";
import {
    addTask,
    deleteTask,
    updateTaskTitle,
} from "./actions";

describe('reducer', () => {
    describe('updateTaskTitle', () => {
        it('return updated title', () => {
            const previousState = {
                taskTitle: ''
            }
            const newState = reducer(previousState, updateTaskTitle('HelloWorld'));

            expect(newState.taskTitle).toBe('HelloWorld')
        })
    })
    describe('addTask', () => {

        context('with taskTitle', () => {
            it('return added new Task', () => {
                const previousState = {
                    taskTitle: 'Hello',
                    tasks: [],
                    newId: 100
                }
                const newState = reducer(previousState, addTask());

                expect(newState.tasks).toHaveLength(1);
                expect(newState.tasks[0].id).not.toBeUndefined();
                expect(newState.tasks[0].title).toBe("Hello");
            })
            it('return new task and remove taskTitle', () => {
                const previousState = {
                    taskTitle: 'Hello',
                    tasks: [],
                    newId: 100
                }
                const newState = reducer(previousState, addTask());
                expect(newState.newId).toBe(101)
            })
        });
        context('without taskTitle', () => {
            const previousState = {
                taskTitle: '',
                tasks: [],
                newId: 100
            }

            const newState = reducer(previousState, addTask());
            expect(newState.tasks).toHaveLength(0);
        })
    })

    describe('deleteTask', () => {
        context('with id',()=>{
            it('remove the task from task task id',()=>{
                const state = reducer({tasks:[{id:1}]}, deleteTask(1));
                expect(state.tasks).toHaveLength(0);
            })
        })
        context('without id',()=>{
            it('remove the task from task task id',()=>{
                const state = reducer({tasks:[{id:1}]}, deleteTask());
                expect(state.tasks).toHaveLength(1);
            })
        })
    })
})



