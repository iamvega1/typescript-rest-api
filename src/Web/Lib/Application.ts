import express from 'express'

export abstract class Application {
  static PORT = process.env.PORT || 5000

  protected readonly _server = express()

  constructor() {
    this.run()
  }

  public abstract boot(): Promise<void>

  private async run() {
    this._server.use(express.json())

    await this.boot()
    this._server.listen(Application.PORT, this.onSuccessListen.bind(this))
  }

  private onSuccessListen() {
    console.log(`💹 Server is running on http://localhost:5000`)
  }
}
