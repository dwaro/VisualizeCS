import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';

const TabTable = (props) => {
  return (
    <Tabs defaultActiveKey="description" id="uncontrolled-tab-example">
      <Tab eventKey="description" title="Description">
        <div>
          <br />
          <h1>{props.algorithm}</h1>
        </div>
      </Tab>
      <Tab eventKey="visualize" title="Visualize">
        <div>
          <br />
          <h1>Visualize</h1>
        </div>
      </Tab>
    </Tabs>
  );
};

export default TabTable;
