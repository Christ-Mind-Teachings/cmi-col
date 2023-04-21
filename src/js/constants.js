/*
  Teaching specific data
*/

const keyInfo = require("./modules/_config/key");
import {getReservation, getAudioInfo, getPageInfo} from "./modules/_config/config";

let env = "integration";
let sid = "col";
let lang = "en";
let title = "Choose Only Love";
const HOME_URI = `/t/${sid}`;

export default {
  env: env,
  lang: lang,
  sid: sid,
  title: title,
  url_prefix: HOME_URI,
  configUrl: `${HOME_URI}/public/config`,
  getPageInfo: getPageInfo,
  keyInfo: keyInfo,
  sourceId: 17,
  quoteManagerId: "05399539cca9ac38db6db36f5c770ff1",
  quoteManagerName: "CMI",
  store: {
    bmList: "bm.list",
    bmCreation: "bm.creation",
    bmTopics: "bm.topics",
    bmModal: "bm.modal",
    srchResults: "srch.results",
    pnDisplay: "pn.display",
    cfgacq: "cfg.acq",
    cfgbook1: "cfg.book1",
    cfgbook2: "cfg.book2",
    cfgbook3: "cfg.book3",
    cfgbook4: "cfg.book4",
    cfgbook5: "cfg.book5",
    cfgbook6: "cfg.book6",
    cfgbook7: "cfg.book7"
  }
};
