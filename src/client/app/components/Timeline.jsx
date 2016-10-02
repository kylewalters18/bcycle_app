import React from 'react';

import { Slider } from 'react-mdl';

function Timeline() {
  return (
    <div>
      <div className="headline mdl-typography--text-center mdl-color-text--grey-100">
        Activity over months of the year
      </div>
      <Slider
        min={0} max={12} defaultValue={12}
        onChange={event => this.props.updateEndDay(event.target.value)}
      />
      <div className="headline mdl-typography--text-center mdl-color-text--grey-100">
        Activity over hours in the day
      </div>
      <Slider
        min={0} max={24} defaultValue={24}
        onChange={event => this.props.updateEndTime(event.target.value)}
      />
    </div>
    );
}


export default Timeline;
