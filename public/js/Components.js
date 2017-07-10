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
    <div className="ui calendar" id="start_time6">
      <div className="ui input left icon">
        <i className="time icon"></i>
        <input type="text" name="fromTime6" placeholder="From Time" style={{width: 'auto'}} />
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

export const Floor = () => {
  return (
    <div className="field">
      <select className="ui dropdown" name="floor">
        <option value="">Floor</option>
        <option value="1">F1</option>
        <option value="2">F2</option>
      </select>
    </div>
  );
}

export const Room = () => {
  return (
    <div className="field">
      <select className="ui dropdown" name="room">
        <option value="">Room</option>
        <option value="1">CABIN-1</option>
        <option value="2">CABIN-2</option>
      </select>
    </div>
  );
}