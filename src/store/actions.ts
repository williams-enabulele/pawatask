import { ActionContext, ActionTree } from 'vuex'
import { Mutations, MutationType } from './mutations'
import { State } from './state'

export enum ActionTypes {
  GetTaskItems = 'GET_TASKS',
  GetTaskComments = 'GET_COMMENTS'
}

type ActionAugments = Omit<ActionContext<State, State>, 'commit'> & {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>
}

export type Actions = {
  [ActionTypes.GetTaskItems](context: ActionAugments): void,
  [ActionTypes.GetTaskComments](context: ActionAugments): void,

}

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const actions: ActionTree<State, State> & Actions = {
   [ActionTypes.GetTaskItems]({ commit }) {
    commit(MutationType.SetTasks, [])
  },
  [ActionTypes.GetTaskComments]({ commit }) {
    commit(MutationType.SetComments, [
      {
        id: 200,
        name: "Williams Enabs",
        content: 'Task description lorem ipsum dolor lorem task description lorem ipsum dolor lorem task description lorem ipsum dolor lorem task description lorem ipsum dolor lorem task',
        date: "27/02/2022"

      },
      {
        id: 201,
        name: "Holand Mathew",
        content: 'Task description lorem ipsum dolor lorem task description lorem ipsum dolor lorem task description lorem ipsum dolor lorem task description lorem ipsum dolor lorem task',
        date: "28/02/2022"

      }
    ])
    }
}