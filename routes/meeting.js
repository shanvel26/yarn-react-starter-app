var moment = require('moment');
var pretty = require('stringify-object');

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
  let date = req.query.date;
  console.log(date);

  date = moment(new Date(date)).format('YYYY-MM-DD');
  console.log(date);

  let scheduled = db.collection('scheduled');
  scheduled.aggregate([
    {
      $match: { fromDate: { $lte: date }, toDate: { $gte: date } },
    },
    {
      $project: {
        room: '$room',
        fromDate: '$fromDate',
        toDate: '$toDate',
        fromTime: '$fromTime',
        toTime: '$toTime',
        floor: '$floor',
        room: { $concat: ['$room', '-', '$floor']},
        purpose: '$purpose',
        invitees: '$invitees',
        chairperson: '$chairperson',
        status: '$status',
      }
    },
    {
      $group: {
        _id: '$room',
        details: {
          $addToSet: {
            _id: '$_id',
            fromDate: '$fromDate',
            toDate: '$toDate',
            fromTime: '$fromTime',
            toTime: '$toTime',
            room: '$room',
            floor: '$floor',
            purpose: '$purpose',
            invitees: '$invitees',
            chairperson: '$chairperson',
            status: '$status',
          }
        }
      }
    },
    {
      $project: {
        room: '$_id',
        details: '$details'
      }
    }
  ], (err, docs) => {
    if (err) {
      console.log(err.errmsg);
      return res.json(err);
    }
    if (docs) {
      // console.log(pretty(docs));
      return res.json(docs);
    }
  });
}

exports.getNewMeetingConfig = (req, res, next) => {
  let newMeetingConfig = db.collection('new_meeting_config');
  newMeetingConfig.aggregate([
    {
      $group: {
        _id: '$floor',
        rooms: {
          $addToSet: '$room'
        }
      }
    },
    {
      $project: {
        floor: '$_id',
        rooms: '$rooms'
      }
    },
    {
      $sort: {
        floor: 1
      }
    }
  ], (err, docs) => {
    if (err) {
      console.log(err.errmsg);
      return res.json(err);
    }
    return res.json(docs);
  });
}
