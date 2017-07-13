import React, { Component } from 'react';

export const StartDate = () => {
  return (
    <div className="ui calendar" id="start_date">
      <div className="ui input left icon">
        <i className="calendar icon"></i>
        <input type="text" name="fromDate" placeholder="Start Date" style={{width: 'auto'}} />
      </div>
    </div>
  );
};

export const StartTime = () => {
  return (
    <div className="ui calendar" id="start_time">
      <div className="ui input left icon">
        <i className="time icon"></i>
        <input type="text" name="fromTime" placeholder="From Time" style={{width: 'auto'}} />
      </div>
    </div>
  );
}

export const EndDate = () => {
  return (
    <div className="ui calendar" id="end_date">
      <div className="ui input left icon">
        <i className="calendar icon"></i>
        <input type="text" name="toDate" placeholder="End Date" style={{width: 'auto'}} />
      </div>
    </div>
  );
}

export const EndTime = () => {
  return (
    <div className="ui calendar" id="end_time">
      <div className="ui input left icon">
        <i className="time icon"></i>
        <input type="text" name="toTime" placeholder="End Time" style={{width: 'auto'}}/>
      </div>
    </div>
  )
}

export const Floor = ({floors, callback}) => {
  let onChangeFloor = (e) => {
    let value = e.target.value;
    callback(value);
  }

  let myfloors = floors.map((f, index) => {
    return (
      <option key={index} value={f}>{f}</option>
    )
  });

  return (
    <select id="floor" onChange={onChangeFloor} className="ui dropdown" name="floor" placeholder="Select floor">
      <option value="">Floor</option>
      { myfloors }
    </select>
  );
}

export const Room = ({rooms}) => {
  $('#room').dropdown('clear');
  rooms = rooms ? rooms : [];
  let myrooms = rooms.map(room => {
    return (
      <option value={room}>{room}</option>
    )
  });

  return (
    <select className="ui dropdown" id="room" name="room">
      <option value="">Room</option>
      { myrooms }
    </select>
  );
}
