// import { TYPE_LOG} from "./constants.js";
import { TYPE_LOG} from "../js/constants.js";

function logger(log, type= TYPE_LOG) {
    console[type](log);
}

export default logger;