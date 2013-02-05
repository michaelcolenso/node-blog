var Firehose = require('./github-firehose');

var firehose = new Firehose();

firehose.on('error', function(e) {
  console.log('ERROR: ', e.stack);
});

firehose.on('event', function(event) {
  console.log('event: ', event.id);
});

firehose.start();
