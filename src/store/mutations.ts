import { MutationTree } from 'vuex'
import { State } from './state'
import { TodoTask, CommentItem } from '@/models'

export enum MutationType {
  CreateTask= 'CREATE_TASK',
  SetTasks = 'SET_TASKS',
  EditTask = 'EDIT_TASK',
  CompleteTask = 'COMPLETE_TASK',
  CreateComment = 'CREATE_COMMENT',
  SetComments = 'SET_COMMENTS',
  SetLoading = 'SET_LOADING',
  SetToggleAddModal = 'SET_ADD_MODAL_TOGGLE',
  SetToggleCommentModal ='SET_COMMENT_MODAL',
  SetCurrentId = 'SET_CURRENT_ID'
}

export type Mutations = {
  
  [MutationType.CreateTask](state: State, task: TodoTask): void
  [MutationType.SetTasks](state: State, tasks: TodoTask[]): void
  [MutationType.EditTask](
    state: State, 
    task: Partial<TodoTask> & { id: number }): void
  [MutationType.CompleteTask](
    state: State,
    task: Partial<TodoTask> & { id: number }
  ): void

  
  [MutationType.CreateComment](state: State, comment: CommentItem): void
  [MutationType.SetComments](state: State, comments: CommentItem[]): void
   
  [MutationType.SetLoading](state: State, value: boolean): void
  [MutationType.SetToggleAddModal](state: State, value: boolean):void
  [MutationType.SetToggleCommentModal](state: State, value: boolean): void
  [MutationType.SetCurrentId](state: State, id: number): void
}

export const mutations: MutationTree<State> & Mutations = {

  [MutationType.CreateTask](state, task) {
    state.tasks.unshift(task)
  },
  [MutationType.SetTasks](state, tasks) {
    state.tasks = tasks
  },
  [MutationType.CompleteTask](state, newTask) {
    const task = state.tasks.findIndex(s => s.id === newTask.id)
    if (task === -1) return
    state.tasks[task] = { ...state.tasks[task], ...newTask }
  },
  [MutationType.EditTask](state, newTask){
    const task =  state.tasks.findIndex(x => x.id === newTask.id ) 
    if (task === -1) return
    state.tasks[task] = { ...state.tasks[task], ...newTask }

  },

  [MutationType.CreateComment](state, comment) {
    state.comments.unshift(comment)
  },
  [MutationType.SetComments](state, comments) {
    state.comments = comments
  },

  [MutationType.SetLoading](state, value) {
    state.loading = value
  },
  [MutationType.SetToggleAddModal](state, value) {
    state.ToggleAddModal = value
  },
  [MutationType.SetToggleCommentModal](state, value) {
    state.ToggleCommentModal = value
  },
  [MutationType.SetCurrentId](state, id) {
    state.currentId = id
  },
}