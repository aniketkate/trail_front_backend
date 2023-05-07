import { useState } from 'react';
import axios from 'axios';

import HomeComponent2 from './Hero2';
function dashboardForm() {

  return (
    <div>
         <div style={{ width: '100%', height: '100px', backgroundColor: 'transparent' }}></div>
      <h1>Dashboard</h1>
     <HomeComponent2/> 
      
    </div>
  );
}

export default dashboardForm;
