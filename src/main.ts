import { SkyRouter } from "skyrouter";
import Home from "./view/Home";
import Help from "./view/Help";
import Command from "./view/Command";
import Inventory from "./view/Inventory";

(async () => {

    SkyRouter.route("", Home);

    SkyRouter.route("help", Help);
    SkyRouter.route("command", Command);
    SkyRouter.route("inventory", Inventory);

    if (sessionStorage.__spa_path) {
        SkyRouter.go(sessionStorage.__spa_path);
        sessionStorage.removeItem("__spa_path");
    }
})();