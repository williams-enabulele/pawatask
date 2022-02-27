import { MutationTree } from 'vuex'
import { State } from './state'
import { TaskItem, CommentItem } from '@/models'

export enum MutationType {
  CreateTask= 'CREATE_ITEM',
  SetTasks = 'SET_ITEMS',
  CompleteItem = 'COMPLETE_ITEM',
  CreateComment = 'CREATE_COMMENT',
  SetComments = 'SET_COMMENTS',
  SetLoading = 'SET_LOADING',
  SetToggleAddModal = 'SET_ADD_MODAL_TOGGLE',
  SetToggleCommentModal ='SET_COMMENT_MODAL'
}

export type Mutations = {
  
  [MutationType.CreateTask](state: State, item: TaskItem): void
  [MutationType.SetTasks](state: State, items: TaskItem[]): void
  [MutationType.CompleteItem](
    state: State,
    item: Partial<TaskItem> & { id: number }
  ): void

  
  [MutationType.CreateComment](state: State, item: CommentItem): void
  [MutationType.SetComments](state: State, items: CommentItem[]): void
   
  [MutationType.SetLoading](state: State, value: boolean): void
  [MutationType.SetToggleAddModal](state: State, value: boolean):void
  [MutationType.SetToggleCommentModal](state: State, value: boolean): void
}

export const mutations: MutationTree<State> & Mutations = {

  [MutationType.CreateTask](state, item) {
    state.tasks.unshift(item)
  },
  [MutationType.SetTasks](state, items) {
    state.tasks = items
  },
  [MutationType.CompleteItem](state, newItem) {
    const item = state.tasks.findIndex(s => s.id === newItem.id)
    if (item === -1) return
    state.tasks[item] = { ...state.tasks[item], ...newItem }
  },

  [MutationType.CreateComment](state, item) {
    state.comment.unshift(item)
  },
  [MutationType.SetComments](state, items) {
    state.comment = items
  },

  [MutationType.SetLoading](state, value) {
    state.loading = value
  },
  [MutationType.SetToggleAddModal](state, value) {
    state.ToggleAddModal = value
  },
  [MutationType.SetToggleCommentModal](state, value) {
    state.ToggleCommentModal = value
  }
}