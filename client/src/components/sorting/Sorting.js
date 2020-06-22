import React, { useState } from 'react';
import TabTable from '../tabTable/TabTable';
import Dropdown from '../dropdown/Dropdown';

const Page = (props) => {
  const [algorithm, updateAlgorithm] = useState('Choose Algorithm');

  return (
    <div className="container">
      <br />
      <div className="row justify-content-center">
        <div className="col-11 col-md-8">
          <h1>Sorting Algorithms</h1>
        </div>
        <div className="col-11 col-md-4 text-right">
          <Dropdown
            algorithm={algorithm}
            onClick={updateAlgorithm}
            data={[
              'Bubble Sort',
              'Merge Sort',
              'Quicksort',
              'Radix Sort',
              'Selection Sort',
              'Insertion Sort',
              'Counting Sort',
            ]}
          />
        </div>
      </div>
      <br />
      <div className="row justify-content-center">
        {algorithm === 'Choose Algorithm' ? (
          <div className="col-11 col-md-12">
            <div>Select an algorithm to visualize</div>
          </div>
        ) : (
          <div className="col-11 col-md-10">
            <TabTable description="Description" algorithm={algorithm} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
