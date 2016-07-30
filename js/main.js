var pubnub = PUBNUB.init({
  publish_key: 'demo',
  subscribe_key: 'demo'


var channel = "c3-spline" + Math.random();
eon.chart({
  channel: channel,
  history: true,
  flow: true,
  pubnub: pubnub,
  generate: {
    bindto: '#charteon',
    data: {
      labels: false
    }
  }
});
