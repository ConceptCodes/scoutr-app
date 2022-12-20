import { ApiResponse, ApisauceInstance } from "apisauce"
import { GeneralApiProblem, getGeneralApiProblem } from "../apiProblem"
import { GetProfileResponse } from "../api.types"
import type { User, UserSnapshotIn } from "../../../models/User"

export class ProfileApi {
  private _api: ApisauceInstance

  constructor(api: ApisauceInstance) {
    this._api = api
  }

  /**
   * Get user profile.
   */
  async getProfile(): Promise<{ kind: "ok"; profile: UserSnapshotIn } | GeneralApiProblem> {
    // make the api call
    const response: ApiResponse<GetProfileResponse> = await this._api.get("/profile")

    // the typical ways to die when calling an api
    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) return problem
    }

    // transform the data into the format we are expecting
    try {
      const rawData = response.data

      // This is where we transform the data into the shape we expect for our MST model.
      const profile: UserSnapshotIn = rawData.data

      return { kind: "ok", profile }
    } catch (e) {
      if (__DEV__) {
        console.tron.error(`Bad data: ${e.message}\n${response.data}`, e.stack)
      }
      return { kind: "bad-data", message: e.message }
    }
  }

  async updateProfile(
    _profile: UserSnapshotIn,
  ): Promise<{ kind: "ok"; profile: User } | GeneralApiProblem> {
    // make the api call
    const response: ApiResponse<GetProfileResponse> = await this._api.patch("/profile", _profile)

    // the typical ways to die when calling an api
    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) return problem
    }

    // transform the data into the format we are expecting
    try {
      const rawData = response.data

      // This is where we transform the data into the shape we expect for our MST model.
      const profile: UserSnapshotIn = rawData.data
      console.tron.display({ name: "PROFILE", value: profile })

      return { kind: "ok", profile }
    } catch (e) {
      if (__DEV__) {
        console.tron.error(`Bad data: ${e.message}\n${response.data}`, e.stack)
      }
      return { kind: "bad-data", message: e.message }
    }
  }
}
