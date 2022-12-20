import { ApiResponse, ApisauceInstance } from "apisauce"
import { GeneralApiProblem, getGeneralApiProblem } from "../apiProblem"
import { Response, GetTermsAndConditionsResponse } from "../api.types"

export class MetadataApi {
  private _api: ApisauceInstance

  constructor(api: ApisauceInstance) {
    this._api = api
  }

  async getTermsAndConditions(): Promise<{ kind: "ok"; data: string } | GeneralApiProblem> {
    const response: ApiResponse<Response<GetTermsAndConditionsResponse>> = await this._api.get(
      `/metadata/terms-and-conditions`,
    )

    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) return problem
    }

    try {
      const rawData = response.data
      return { kind: "ok", data: rawData.data.termsAndConditions }
    } catch (e) {
      if (__DEV__) {
        console.tron.error(`Bad data: ${e.message}\n${response.data}`, e.stack)
      }
      return { kind: "bad-data", message: e.message }
    }
  }
}
