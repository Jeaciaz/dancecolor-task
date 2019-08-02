import * as dropdown from "./dropdown";
import * as slider from "./slider";

function importImages(r) {
  return r.keys().map(r);
}

function importFonts(r) {
  return r.keys().map(r);
}

importImages(require.context("../assets/", false, /\.(png|svg)$/));

import * as reset from "../css/reset.css";
import * as fonts from "../css/fonts.css";
import * as style from "../css/style.css";
