import { Database } from 'Data/Database'
import { Application } from 'Web/Lib/Application'

import Routes from 'Web/Routes'

class App extends Application {
  // Needed for testing
  get server() {
    return this._server
  }

  public async boot() {
    if (process.env.NODE_ENV != 'test') {
      await Database.connect()
    }

    this._server.use(Routes)
  }
}

export default new App()
