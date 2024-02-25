import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Graph1 from  './Graphs/Graph1';
import Graph2 from  './Graphs/Graph2';
import Graph3 from  './Graphs/Graph3';
import Graph4 from  './Graphs/Graph4';
import Graph5 from  './Graphs/Graph5';
import Graph6 from  './Graphs/Graph6';

const Skills=()=> {

  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <> <h1 className='heading'>Skills</h1>
    <div  className='skills-part'>
    <Box sx={{ width: '100%', typography: 'body1' ,margin:'0 auto',minHeight:'300px'}}>
      <TabContext value={value}>
        <Box>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Languages" value="1" />
            <Tab label="CS Core" value="2" />
            <Tab label="Technologies" value="3" />
            <Tab label="Web Technologies" value="4" />
            <Tab label="Data Bases" value="5" />
            <Tab label="Soft Skills" value="6" />
          </TabList>
        </Box>
        <TabPanel value="1"><Graph1/></TabPanel>
        <TabPanel value="2"><Graph2/></TabPanel>
        <TabPanel value="3"><Graph3/></TabPanel>
        <TabPanel value="4"><Graph4/></TabPanel>
        <TabPanel value="5"><Graph5/></TabPanel>
        <TabPanel value="6"><Graph6/></TabPanel>
      </TabContext>
    </Box>
    </div></>
  );
}
export default Skills;