/* eslint-disable no-unused-expressions */
!(function (e) {
  var t,
    n,
    o,
    i,
    c,
    d =
      '<svg><symbol id="icon-code_px_rounded" viewBox="0 0 1024 1024"><path d="M371.2 678.4L204.8 512l166.4-166.4c17.066667-17.066667 17.066667-42.666667 0-59.733333-8.533333-8.533333-17.066667-12.8-29.866667-12.8s-21.333333 4.266667-29.866666 12.8l-196.266667 196.266666c-17.066667 17.066667-17.066667 42.666667 0 59.733334l196.266667 196.266666c17.066667 17.066667 42.666667 17.066667 59.733333 0 17.066667-17.066667 17.066667-42.666667 0-59.733333z m281.6 0l166.4-166.4-166.4-166.4c-8.533333-8.533333-12.8-17.066667-12.8-29.866667 0-12.8 4.266667-21.333333 12.8-29.866666 17.066667-17.066667 42.666667-17.066667 59.733333 0l196.266667 196.266666c17.066667 17.066667 17.066667 42.666667 0 59.733334l-196.266667 196.266666c-17.066667 17.066667-42.666667 17.066667-59.733333 0-8.533333-8.533333-12.8-17.066667-12.8-29.866666s4.266667-21.333333 12.8-29.866667z"  ></path></symbol></svg>',
    l = (l = document.getElementsByTagName("script"))[
      l.length - 1
    ].getAttribute("data-injectcss"),
    s = function (e, t) {
      t.parentNode.insertBefore(e, t);
    };
  if (l && !e.__iconfont__svg__cssinject__) {
    e.__iconfont__svg__cssinject__ = !0;
    try {
      document.write(
        "<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>"
      );
    } catch (e) {
      console && console.log(e);
    }
  }
  function a() {
    c || ((c = !0), o());
  }
  function r() {
    try {
      i.documentElement.doScroll("left");
    } catch (e) {
      return void setTimeout(r, 50);
    }
    a();
  }
  (t = function () {
    var e,
      t = document.createElement("div");
    (t.innerHTML = d),
      (d = null),
      (t = t.getElementsByTagName("svg")[0]) &&
        (t.setAttribute("aria-hidden", "true"),
        (t.style.position = "absolute"),
        (t.style.width = 0),
        (t.style.height = 0),
        (t.style.overflow = "hidden"),
        (t = t),
        (e = document.body).firstChild ? s(t, e.firstChild) : e.appendChild(t));
  }),
    document.addEventListener
      ? ~["complete", "loaded", "interactive"].indexOf(document.readyState)
        ? setTimeout(t, 0)
        : ((n = function () {
            document.removeEventListener("DOMContentLoaded", n, !1), t();
          }),
          document.addEventListener("DOMContentLoaded", n, !1))
      : document.attachEvent &&
        ((o = t),
        (i = e.document),
        (c = !1),
        r(),
        (i.onreadystatechange = function () {
          // eslint-disable-next-line no-unused-expressions
          "complete" == i.readyState && ((i.onreadystatechange = null), a());
        }));
})(window);
