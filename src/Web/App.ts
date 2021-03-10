// https://github.com/WebDevSimplified/Your-First-Node-REST-API
import { Database } from '../Data/Database'
import { Application } from './Lib/Application'
import Routes from './Routes'

class App extends Application {
  public async boot() {
    await Database.connect()

    this._server.use(Routes)
  }
}

export default new App()
