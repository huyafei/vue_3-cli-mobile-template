/**
 * @name: vant
 * @description：vant.js
 * @date: 2022/10/20 9:57
 * @author: yf_hu
 */

import {
  Locale,
  Button,
  Field,
  Form,
  Icon,
  Cell,
  CellGroup,
  Tabbar,
  TabbarItem,
  NavBar,
  RadioGroup,
  Radio,
  Picker,
  Popup,
} from "vant";
import { getLanguage, messages } from "@/lang";

const language = getLanguage();
Locale.use(language, messages[language]);

export default function (app) {
  // app.use(Button);
  // app.use(Field);
  // app.use(Form);
  // app.use(Icon);
  // app.use(Cell);
  // app.use(CellGroup);
  // app.use(Tabbar);
  // app.use(TabbarItem);
  // app.use(NavBar);
  // app.use(RadioGroup);
  // app.use(Radio);
  // app.use(Picker);
  // app.use(Popup);
}
