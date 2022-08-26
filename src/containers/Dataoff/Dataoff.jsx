import React from 'react';
import Feature from '../../components/feature/Feature';
import './Dataoff.css';


const Dataoff = () => (
  <div className="zm__Dataoff section__margin" id="wzm">
  <div className="zm__Dataoff-feature">
    <Feature title="Our Data Offerings" text="" />
  </div>
    <div className="zm__Dataoff-container">
    
      <Feature title="Data Architecture" text="Shift to an agile data pipeline to support the needed flexibility and innovation of your business.​"/>
      <Feature title="Data Mesh" text="Treat data as a product for complex domain originating use cases including portal​." />
       </div>
    <div className="zm__Dataoff-container">
       <Feature title="Data Science" text="Build heuristics and AI/ML model to automate your business and operations work flows.​"  />
      <Feature title="Platform" text="Pre-built utilities to connect, ingest, transform and load your on-prem data to AWS cloud.​" />
    </div>
  </div>
);

export default Dataoff;
