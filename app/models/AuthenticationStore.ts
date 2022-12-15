import { Instance, SnapshotOut, types } from "mobx-state-tree"

export const AuthenticationStoreModel = types
  .model("AuthenticationStore")
  .props({
    authToken: types.maybe(types.string),
    authEmail: types.optional(types.string, ""),
    authPassword: types.optional(types.string, ""),
  })
  .views((store) => ({
    get isAuthenticated() {
      return !!store.authToken
    },
    get validationErrors() {
      return {
        authEmail: (function () {
          if (store.authEmail.length === 0) return "can't be blank"
          if (!store.authEmail.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) return "must be a valid email"
          return ""
        })(),
        authPassword: (function () {
          if (store.authPassword.length === 0) return "can't be blank"
          if (store.authPassword.length < 8) return "must be at least 8 characters"
          if (!store.authPassword.match(/[a-z]/)) return "must contain at least one lowercase letter"
          if (!store.authPassword.match(/[A-Z]/)) return "must contain at least one uppercase letter"
          if (!store.authPassword.match(/[0-9]/)) return "must contain at least one number"
          if (!store.authPassword.match(/[^a-zA-Z0-9]/)) return "must contain at least one special character"
          return ""
        })(),
      }
    },
  }))
  .actions((store) => ({
    setAuthToken(value?: string) {
      store.authToken = value
    },
    async setAuthEmail(value: string) {
      store.authEmail = value.replace(/ /g, "")
    },
    async setAuthPassword(value: string) {
      store.authPassword = value.replace(/ /g, "")
    },
    logout() {
      store.authToken = undefined
      store.authEmail = ""
      store.authPassword = ""
    },
    login() {
      store.authPassword = ""
    },
  }))

export interface AuthenticationStore extends Instance<typeof AuthenticationStoreModel> {}
export interface AuthenticationStoreSnapshot extends SnapshotOut<typeof AuthenticationStoreModel> {}
