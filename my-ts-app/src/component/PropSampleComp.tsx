import React from 'react';
import {Props} from '../model/SampleProps';

const PropSampleComp: React.FC<Props> = (props) => {
  return (
    <div className="PropSampleComp">
      <h1>User ID:{props.userId}</h1>
      <h2>User Name:{props.userName}</h2>
    </div>
  )
}

export default PropSampleComp;