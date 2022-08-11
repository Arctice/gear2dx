(ns gear2dx.core
  (:require [clojure.string :as str]))

(defn init []
  (aset js/document.body "innerHTML"
        (str
         "<table id=\"variables\">"
         "<tr>"
         "<td align=\"right\">GN:</td>"
         "<td align=\"left\">" "<input id=\"gn\" type=\"number\" minlength=\"1\" value=\"300\"></input></td>"
         "</tr>"
         "<tr> <td align=\"right\">WN (SUD:)</td> "
         "<td align=\"left\">" "<input id=\"wn-sud\" type=\"number\" minlength=\"1\" value=\"41\"></input>"
         "</td></tr>"
         "<tr> <td align=\"right\">WN (LIFT):</td>"
         "<td align=\"left\">" "<input id=\"wn-lift\" type=\"number\" minlength=\"1\" value=\"0\"></input>"
         "</td></tr>"
         "<tr> <td align=\"right\">Offset (iidx):</td>"
         "<td align=\"left\">" "<input id=\"offset-iidx\" type=\"number\" minlength=\"1\" value=\"0.0\"></input>"
         "</td></tr>"
         "<tr> <td align=\"right\">Offset (ms):</td> "
         "<td align=\"left\">" "<input id=\"offset-ms\" type=\"number\" minlength=\"1\" value=\"0\"></input>"
         "</td></tr>"
         "</table>"
         "<div id=\"results\">"
         "Note on-screen: <span id=\"screen-time\"></span>ms<br>"
         "Time to react: <span id=\"reaction-time\"></span>ms<br>"
         "Note speed: <span id=\"note-speed\"></span>wn/s<br>"
         "</div>"))
  (aset (js/document.getElementById "variables") "onchange"
        (fn [e]

          (let [gn (js/parseFloat (aget (js/document.getElementById "gn") "value"))
                wn-1 (js/parseFloat (aget (js/document.getElementById "wn-sud") "value"))
                wn-2 (js/parseFloat (aget (js/document.getElementById "wn-lift") "value"))
                iidx-offset (js/parseFloat (aget (js/document.getElementById "offset-iidx") "value"))
                ms-offset (js/parseFloat (aget (js/document.getElementById "offset-ms") "value"))

                wn (+ wn-1 wn-2)
                wn-complement (- 1000 wn)
                frame-ms 16.666666
                note-time-ms (* (/ gn 10) frame-ms)
                ms-offset (- ms-offset (* iidx-offset frame-ms))
                reaction-time-ms (+ note-time-ms ms-offset)
                note-speed (/ wn-complement note-time-ms)]

            (aset (js/document.getElementById "screen-time") "innerHTML"
                  (. note-time-ms toFixed 2))
            (aset (js/document.getElementById "reaction-time") "innerHTML"
                  (. reaction-time-ms toFixed 2))
            (aset (js/document.getElementById "note-speed") "innerHTML"
                  (. (* 1000 note-speed) toFixed 2))

            ))
        ))

(init)
