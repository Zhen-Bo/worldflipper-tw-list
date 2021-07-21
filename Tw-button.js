// ==UserScript==
// @name         彈射世界背包網只顯示台服角色
// @namespace    http://tampermonkey.net/
// @version      0.8
// @description  讓背包網只顯示台服現有角色
// @author       Paver
// @include      https://eliya-bot.herokuapp.com/*
// @icon         https://images.uncyc.org/zh-tw/thumb/e/eb/BLACK-ORANGE.PNG/300px-BLACK-ORANGE.PNG
// @grant        none
// @require      http://code.jquery.com/jquery-3.4.1.min.js
// ==/UserScript==

(function () {
  $("#switchUnits").append('<li id="btnShowTw" class>台版列表</li>');
  let list_id = [".rarity5 li", ".rarity4 li", ".rarity3 li", ".rarity2 li"];
  let json_url =
    "https://raw.githubusercontent.com/Zhen-Bo/worldflipper-tw-list/main/tw.json";
  fetch(json_url)
    .then((data) => data.json())
    .then(function (TW) {
      $("#btnShowTw").click(function () {
        if ($("#btnShowTw").hasClass("on")) {
          for (let index in list_id) {
            $(list_id[index]).each(function (i, n) {
              if (
                !TW.includes($(n).attr("id")) &&
                !$(n).hasClass("spookyStuff")
              ) {
                $(n).show();
              }
            });
          }
          $("#btnShowTw").removeClass("on");
        } else {
          for (let index in list_id) {
            $(list_id[index]).each(function (i, n) {
              if (
                !TW.includes($(n).attr("id")) &&
                !$(n).hasClass("spookyStuff")
              ) {
                $(n).hide();
              }
            });
          }
          $("#btnShowTw").addClass("on");
        }
      });
    });
})();
