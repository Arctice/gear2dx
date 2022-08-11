// Compiled by ClojureScript 1.10.758 {:static-fns true, :optimize-constants true}
goog.provide('gear2dx.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
gear2dx.core.init = (function gear2dx$core$init(){
(document.body["innerHTML"] = ["<table id=\"variables\">","<tr>","<td align=\"right\">GN:</td>","<td align=\"left\">","<input id=\"gn\" type=\"number\" minlength=\"1\" value=\"300\"></input></td>","</tr>","<tr> <td align=\"right\">WN (SUD:)</td> ","<td align=\"left\">","<input id=\"wn-sud\" type=\"number\" minlength=\"1\" value=\"41\"></input>","</td></tr>","<tr> <td align=\"right\">WN (LIFT):</td>","<td align=\"left\">","<input id=\"wn-lift\" type=\"number\" minlength=\"1\" value=\"0\"></input>","</td></tr>","<tr> <td align=\"right\">Offset (iidx):</td>","<td align=\"left\">","<input id=\"offset-iidx\" type=\"number\" minlength=\"1\" value=\"0.0\"></input>","</td></tr>","<tr> <td align=\"right\">Base offset:</td> ","<td align=\"left\">","<input id=\"base-offset\" type=\"number\" minlength=\"1\" value=\"-0.25\"></input>","</td></tr>","<tr><td></td><td>Base offset depends on the game.<br>For 120hz IIDX(TDJ), leave this at -0.25.<br>For LDJ IIDX, set it to 2.<br>For beatoraja, set it to 0. <td> </tr>","<tr> <td align=\"right\">Offset (ms):</td> ","<td align=\"left\">","<input id=\"offset-ms\" type=\"number\" minlength=\"1\" value=\"0\"></input>","</td></tr>","</table>","<div id=\"results\">","Note on-screen: <span id=\"screen-time\"></span>ms<br>","Time to react: <span id=\"reaction-time\"></span>ms<br>","Note speed: <span id=\"note-speed\"></span>wn/s<br>","</div>"].join(''));

return (document.getElementById("variables")["onchange"] = (function (e){
var gn = parseFloat((document.getElementById("gn")["value"]));
var wn_1 = parseFloat((document.getElementById("wn-sud")["value"]));
var wn_2 = parseFloat((document.getElementById("wn-lift")["value"]));
var iidx_offset = parseFloat((document.getElementById("offset-iidx")["value"]));
var base_offset = parseFloat((document.getElementById("base-offset")["value"]));
var ms_offset = parseFloat((document.getElementById("offset-ms")["value"]));
var wn = (wn_1 + wn_2);
var wn_complement = ((1000) - wn);
var frame_ms = 16.666666;
var note_time_ms = ((gn / (10)) * frame_ms);
var iidx_offset__$1 = (iidx_offset - base_offset);
var ms_offset__$1 = (ms_offset - (iidx_offset__$1 * frame_ms));
var reaction_time_ms = (note_time_ms + ms_offset__$1);
var note_speed = (wn_complement / note_time_ms);
(document.getElementById("screen-time")["innerHTML"] = note_time_ms.toFixed((2)));

(document.getElementById("reaction-time")["innerHTML"] = reaction_time_ms.toFixed((2)));

return (document.getElementById("note-speed")["innerHTML"] = ((1000) * note_speed).toFixed((2)));
}));
});
gear2dx.core.init();
