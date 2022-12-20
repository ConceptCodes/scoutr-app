import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"
import { withSetPropAction } from "./helpers/withSetPropAction"
import { api } from "../services/api"

/**
 * Model description here for TypeScript hints.
 */
export const UserModel = types
  .model("User")
  .props({
    id: types.maybeNull(types.string),
    email: types.maybeNull(types.string),
    displayName: types.maybeNull(types.string),
    phoneNumber: types.maybeNull(types.string),
    avatar: types.maybeNull(types.string),
    gender: types.maybeNull(types.enumeration(["MALE", "FEMALE"])),
    bio: types.maybeNull(types.string),
  })
  .actions(withSetPropAction)
  .actions((self) => ({
    async fetchProfile() {
      const response = await api.profile.getProfile()
      if (response.kind === "ok" && response.profile) {
        const { profile } = response
        self.setProp("id", profile.id)
        self.setProp("email", profile.email)
        self.setProp("displayName", profile.displayName)
        self.setProp("phoneNumber", profile.phoneNumber)
        self.setProp("gender", profile.gender)
        self.setProp("bio", profile.bio)
        self.setProp("avatar", profile.avatar)
      } else {
        console.tron.error(`Error fetching sermons: ${JSON.stringify(response)}`, [])
      }
    },
    async updateProfile(profile: UserSnapshotIn) {
      const response = await api.profile.updateProfile(profile)
      if (response.kind === "ok") {
        const { profile } = response
        self.setProp("id", profile.id)
        self.setProp("email", profile.email)
        self.setProp("displayName", profile.displayName)
        self.setProp("phoneNumber", profile.phoneNumber)
        self.setProp("roles", profile.roles)
        self.setProp("gender", profile.gender)
        self.setProp("bio", profile.bio)
        self.setProp("avatar", profile.avatar)
      } else {
        console.tron.error(`Error fetching sermons: ${JSON.stringify(response)}`, [])
      }
    },
    clearProfile() {
      self.setProp("id", null)
      self.setProp("email", null)
      self.setProp("displayName", null)
      self.setProp("phoneNumber", null)
      self.setProp("roles", null)
      self.setProp("gender", null)
      self.setProp("bio", null)
      self.setProp("avatar", null)
    },
  }))
  .views((self) => ({
    profile() {
      return {
        id: self.id,
        email: self.email,
        displayName: self.displayName,
        phoneNumber: self.phoneNumber,
        roles: self.roles,
        avatar: self.avatar,
        self: self.bio,
      }
    },
    get firstName() {
      return self.displayName.split(" ")[0] ?? ""
    },
    get lastName() {
      return self.displayName.split(" ")[1] ?? ""
    },
    get isAdmin() {
      return self.roles.includes("ADMIN")
    },
    get isProfileEmpty() {
      return !!self.email && !!self.displayName
    },
  }))

export interface User extends Instance<typeof UserModel> {}
export interface UserSnapshotOut extends SnapshotOut<typeof UserModel> {}
export interface UserSnapshotIn extends SnapshotIn<typeof UserModel> {}
