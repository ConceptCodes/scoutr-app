import { User } from "../../models/User";
export interface Response<T = any> {
  data: T;
  success: boolean;
  message: string;
  code: number;
}

/**
 * These types indicate the shape of the data you expect to receive from your
 * API endpoint, assuming it's a JSON object like we have.
 */
export interface EpisodeItem extends Response {
  data: {
    title: string
    pubDate: string
    link: string
    guid: string
    author: string
    thumbnail: string
    description: string
    content: string
    enclosure: {
      link: string
      type: string
      length: number
      duration: number
      rating: { scheme: string; value: string }
    }
    categories: string[]
  }
}

export interface ApiFeedResponse extends Response {
  data: {
    status: string
    feed: {
      url: string
      title: string
      link: string
      author: string
      description: string
      image: string
    }
    items: EpisodeItem[]
  }
}

export interface NotifcationsResponse extends Response {
  data: {
    id: string
    title: string
    body: string
  }[]
}

export interface GetProfileResponse extends Response {
  data: User
}

export interface GetTermsAndConditionsResponse {
  termsAndConditions: string
}

/**
 * The options used to configure apisauce.
 */
export interface ApiConfig {
  /**
   * The URL of the api.
   */
  url: string

  /**
   * Milliseconds before we timeout the request.
   */
  timeout: number
}
