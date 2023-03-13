import { MoniesController } from "./Controllers/MoniesController.js";
import { SnacksController } from "./Controllers/SnacksControllers.js";

class App {

  snacksController = new SnacksController()
  moniesController = new MoniesController();
}

window["app"] = new App();
