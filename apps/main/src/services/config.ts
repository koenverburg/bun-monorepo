import {singleton} from "tsyringe"

export type ConfigType = {
  API_KEY: string
  NOTION_DBID: string
}

@singleton()
export class Config {
  static name = "config"

  API_KEY: string
  NOTION_DBID: string

  constructor() {
    this.API_KEY = this.#getOrThrow('API_KEY')
    this.NOTION_DBID = this.#getOrThrow('NOTION_DBID')
  }

  #getOrThrow(name: string) {
    if (!process.env[name]) {
      throw new Error(`Cant find ${name} on process.env`)
    }
    return process.env[name]
  }
}
