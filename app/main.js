
import JobController from "./components/jobController.js"



class App {
  constructor() {
    this.controllers = {
      jobController: new JobController()
    }
  }
}

window.app = new App()