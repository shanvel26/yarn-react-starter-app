var moment = require('moment');

exports.getCurrentDate = (req, res, next) => {
  let now = moment().format('MMM DD, YYYY');
  return res.json(now);
}
