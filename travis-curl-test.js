var request = require('request');

/**
 * receive a webhook from github's Pull Request event and trigger
 * a Travis-CI Job if a comment contains a certain string.
 *
 * https://developer.github.com/v3/activity/events/types/#issuecommentevent
 * 
 * The hook url must include, as params, the following parameters
 * in order to properly build the jenkins callback url
 *
 */

module.exports = function (context, callback) {

  console.log(context);

  // request({ url: url, method: 'POST' }, function (err, res, body) {
  //   if (err) console.log('Error on request POST: ', err);
  //   return callback(err, body);
  // });

}
