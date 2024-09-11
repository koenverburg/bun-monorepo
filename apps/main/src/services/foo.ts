import {inject, injectable} from "tsyringe"
import { Config } from "./config"

@injectable()
export class Foo {
  static name = 'Foo'
  private config: Config

  constructor(
    @inject(Config.name) private _config: Config
  ) {
    this.config = _config
  }

  public dump() {
    console.log(this.config)
  }




}
