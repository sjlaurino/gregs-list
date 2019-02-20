
import JobController from "./components/jobController.js"
import HouseController from "./components/houseController.js";



class App {
  constructor() {
    this.controllers = {
      jobController: new JobController(),
      houseController: new HouseController()
    }
  }
}

window['app'] = new App()