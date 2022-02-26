import { MutationTree } from 'vuex'
import { State } from './state'
import { TaskItem, CommentItem } from '@/models'

export enum MutationType {
  CreateTask= 'CREATE_ITEM',
  SetTasks = 'SET_ITEMS',
  CompleteItem = 'COMPLETE_ITEM',
  CreateComment = 'CREATE_COMMENT',
  SetComments = 'SET_COMMENTS',
  SetLoading = 'SET_LOADING'
}

export type Mutations = {
  // Task Item
  [MutationType.CreateTask](state: State, item: TaskItem): void
  [MutationType.SetTasks](state: State, items: TaskItem[]): void
  [MutationType.CompleteItem](
    state: State,
    item: Partial<TaskItem> & { id: number }
  ): void

  // Comment
  [MutationType.CreateComment](state: State, item: CommentItem): void
  [MutationType.SetComments](state: State, items: CommentItem[]): void
   
  [MutationType.SetLoading](state: State, value: boolean): void
}

export const mutations: MutationTree<State> & Mutations = {
  // Task
  [MutationType.CreateTask](state, item) {
    state.task.unshift(item)
  },
  [MutationType.SetTasks](state, items) {
    state.task = items
  },
  [MutationType.CompleteItem](state, newItem) {
    const item = state.task.findIndex(s => s.id === newItem.id)
    if (item === -1) return
    state.task[item] = { ...state.task[item], ...newItem }
  },

  [MutationType.CreateComment](state, item) {
    state.comment.unshift(item)
  },
  [MutationType.SetComments](state, items) {
    state.comment = items
  },

  [MutationType.SetLoading](state, value) {
    state.loading = value
  }
}