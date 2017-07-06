var moment = require('moment');

var parseDate = (fromDate, fromTime, toDate, toTime) => {
  console.log(fromDate, fromTime)
  fromDate = new Date(`${fromDate} ${fromTime}`);
  toDate = new Date(`${toDate} ${toTime}`);

  return {
    fromDate,
    toDate
  }
}

exports.new = (req, res, next) => {
  let { 
    fromDate, 
    toDate, 
    fromTime, 
    toTime, 
    floor, 
    room, 
    capacity, 
    purpose, 
    invitees, 
    chairperson, 
  } = req.body;

  fromDate = moment(fromDate, 'MMM DD, YYYY');
  fromDate = moment(fromDate).format('YYYY-MM-DD');
  toDate = moment(toDate, 'MMM DD, YYYY');
  toDate = moment(toDate).format('YYYY-MM-DD');

  let query = {
    fromDate,
    toDate,
    fromTime,
    toTime, 
    floor, 
    room, 
    capacity,
    purpose,
    invitees,
    chairperson,
  }

  query.status = 'scheduled';

  db.collection('scheduled').insertOne(
    query, 
    (err, result) => {
      // console.log(result);
      return res.json(result);
    });
}

exports.find = (req, res, next) => {
  
}
