import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import Description from '../description/Description';
import Visualize from '../visualize/Visualize';

const TabTable = (props) => {
  return (
    <Tabs defaultActiveKey="description" id="uncontrolled-tab-example">
      <Tab eventKey="description" title="Description">
        <div>
          <br />
          <Description algorithm={props.algorithm} />
        </div>
      </Tab>
      <Tab eventKey="visualize" title="Visualize">
        <div>
          <br />
          <Visualize algorithm={props.algorithm} />
        </div>
      </Tab>
    </Tabs>
  );
};

export default TabTable;
