import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReactTabMarvel from '../ReactTabMarvel/ReactTabMarvel';
import DcReactTab from '../DcReactTab/DcReactTab';
import TransformersReactTab from '../TransformersReactTab/TransformersReactTab';
import { MoonLoader } from 'react-spinners';


const ReactTab = () => {

  const [tabToy, setTabToy] = useState([])

  console.log(tabToy);

  useEffect(() => {
    fetch("https://toyfinity-server.up.railway.app/tabToys")
      .then(res => res.json())
      .then(data => setTabToy(data))
  }, [])

  useEffect(() => {
    if (tabToy.length === 0) {
      console.log("retryy");
      fetch("https://toyfinity-server.up.railway.app/tabToys")
        .then(res => res.json())
        .then(data => setTabToy(data))
    }
  }, []);
  
  return (
    <div>
     
      <Tabs>
        <TabList>
          <Tab>Marvel Universe Toys</Tab>
          <Tab>DC Universe Toys</Tab>
          <Tab>Transformers Toys</Tab>
        </TabList>
        {
        tabToy.length === 0 &&
        <div className='flex justify-center'>
        <MoonLoader
          color="#36d7b7"
          size={100}
        />
      </div>
      }

        <TabPanel>
          <div className='md:flex md:gap-5 m-3 justify-center '>
            {
              tabToy?.slice(0, 3)?.map(marvelToy => <ReactTabMarvel marvelToy={marvelToy} key={marvelToy._id}></ReactTabMarvel>)
            }
          </div>
        </TabPanel>
        <TabPanel>
          <div className='md:flex md:gap-5 m-3 justify-center '>
            {
              tabToy?.slice(3, 6)?.map(dcToy => <DcReactTab dcToy={dcToy} key={dcToy._id}></DcReactTab>)
            }
          </div>
        </TabPanel>
        <TabPanel>
          <div className='md:flex md:gap-5 m-3 justify-center '>
            {
              tabToy?.slice(6, 9)?.map(transToy => <TransformersReactTab transToy={transToy} key={transToy._id}></TransformersReactTab>)
            }
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReactTab;