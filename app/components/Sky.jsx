import {Entity} from 'aframe-react';
import React from 'react';

export default props => (
  <Entity
    geometry={{primitive: 'sphere', radius: 100}}
    material={{shader: 'flat', color: 'black'}}
    scale="1 1 -1"/>
);
