const GA = (trackingID => {
  if (!window.site.ga_tracking_id) return;
  if (navigator.userAgent.indexOf('Speed Insights') > -1) return;

  (function(i, s, o, g, r, a, m) {
    i.GoogleAnalyticsObject = r;
    (i[r] =
      i[r] ||
      function() {
        (i[r].q = i[r].q || []).push(arguments);
      }),
      (i[r].l = 1 * new Date());
    (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m);
  })(
    window,
    document,
    'script',
    'https://www.google-analytics.com/analytics.js',
    'ga',
  );

  window.ga('create', trackingID, 'auto');
  window.ga('send', 'pageview');
  window.ga('set', 'anonymizeIp', true);
})(window.site.ga_tracking_id);
