import { useLocation } from "react-router";
utils.getQuery = function useQuery(keyword) {
  return new URLSearchParams(useLocation().search).get(keyword);
};
utils.toEnglishChar = function toEnglishChar(text) {
  var trMap = {
    çÇ: "c",
    ğĞ: "g",
    şŞ: "s",
    üÜ: "u",
    ıİ: "i",
    öÖ: "o",
  };
  text = text.replaceAll("/", "");
  for (var key in trMap) {
    text = text.replace(new RegExp("[" + key + "]", "g"), trMap[key]);
  }

  var textx = text

    .replace(/[^-a-zA-Z0-9./#\s]+/gi, "")

    .replace(/\s/gi, "-")
    .replace(/ +/gi, "-")
    .toLowerCase();
  return textx;
};
