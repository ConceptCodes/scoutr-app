/**
 * This Api class lets you define an API endpoint and methods to request
 * data and process it.
 *
 * See the [Backend API Integration](https://github.com/infinitered/ignite/blob/master/docs/Backend-API-Integration.md)
 * documentation for more details.
 */
import { ApisauceInstance, create } from "apisauce"
import Config from "../../config"
import type { ApiConfig } from "./api.types"
import { AuthApi } from "./endpoints/auth"
import { ProfileApi } from "./endpoints/profile"
import { NotificationApi } from "./endpoints/notification"
import { MetadataApi } from "./endpoints/metadata"

/**
 * Configuring the apisauce instance.
 */
export const DEFAULT_API_CONFIG: ApiConfig = {
  url: Config.API_URL,
  timeout: 10000,
}

/**
 * Manages all requests to the API. You can use this class to build out
 * various requests that you need to call from your backend API.
 */
export class Api {
  apisauce: ApisauceInstance
  config: ApiConfig
  auth: AuthApi
  profile: ProfileApi
  notification: NotificationApi
  metadata: MetadataApi

  /**
   * Set up our API instance. Keep this lightweight!
   */
  constructor(config: ApiConfig = DEFAULT_API_CONFIG) {
    this.config = config
    this.apisauce = create({
      baseURL: this.config.url,
      timeout: this.config.timeout,
      headers: {
        Accept: "application/json",
      },
    })
    this.auth = new AuthApi(this.apisauce)
    this.profile = new ProfileApi(this.apisauce)
    this.notification = new NotificationApi(this.apisauce)
    this.metadata = new MetadataApi(this.apisauce)
  }
}

// Singleton instance of the API for convenience
export const api = new Api()
