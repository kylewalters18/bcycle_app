import React from 'react';

import { Slider } from 'react-mdl';


const Timeline = ({ updateEndDay, updateEndTime }) =>
(
  <div>
    <div className="headline mdl-typography--text-center mdl-color-text--grey-100">
      Activity over months of the year
    </div>
    <Slider
      min={0} max={12} defaultValue={12}
      onChange={event => updateEndDay(event.target.value)}
    />
    <div className="headline mdl-typography--text-center mdl-color-text--grey-100">
      Activity over hours in the day
    </div>
    <Slider
      min={0} max={24} defaultValue={24}
      onChange={event => updateEndTime(event.target.value)}
    />
  </div>
);

export default Timeline;
