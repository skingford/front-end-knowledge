/*
 * @Author: kingford
 * @Date: 2021-05-18 13:49:33
 * @LastEditTime: 2021-05-18 15:12:03
 */
import _ from "lodash";
import "./styles/index.css";
import QRCode from "./assets/download.png";
import Data from "./assets/data/data.xml";
import Notes from "./assets/data/data.csv";
import toml from "./assets/data/data.toml";
import yaml from "./assets/data/data.yaml";
import json from "./assets/data/data.json5";

console.log(toml.title); // output `TOML Example`
console.log(toml.owner.name); // output `Tom Preston-Werner`

console.log(yaml.title); // output `YAML Example`
console.log(yaml.owner.name); // output `Tom Preston-Werner`

console.log(json.title); // output `JSON5 Example`
console.log(json.owner.name); // output `Tom Preston-Werner`

function component() {
  const element = document.createElement("div");
  element.innerHTML = _.join(["Hello", "wepack"], "");
  element.classList.add("hello");

  const img = new Image();
  img.src = QRCode;
  element.appendChild(img);

  console.log("xml:", Data);
  console.log("Notes:", Notes);
  return element;
}

document.body.appendChild(component());
