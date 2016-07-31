var pubnub = PUBNUB.init({
  publish_key: 'pub-c-288b24ab-5534-4fc7-9f7e-3f18a963664a',
  subscribe_key: 'sub-c-7770a3e2-5699-11e6-b1c5-0619f8945a4f',
  ssl : (('https:' == document.location.protocol) ? true : false)
});

eon.chart({
  channel: "humidity",
  history: true,
  pubnub: pubnub,
  generate: {
    bindto: '#moist',
    data: {
      labels: false
    },
    axis: {
      x: {
        type: 'timeseries',
        tick: {
          format: '%H:%m:%S',
        },
        label: {
          text: 'Tempo',
        }
      },
      y: {
        label: {
          text: 'umidade',
          position: 'outer-middle'
        },
        max: 1,
        min: 0,
      }},
  },
  limit: 1000,
  });

eon.chart({
  channel: "tension",
  history: true,
  pubnub: pubnub,
  limit: 1000,
  generate: {
    bindto: '#tension',
    data: {
      labels: false
    }
  }
});
