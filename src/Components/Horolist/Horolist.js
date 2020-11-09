//stateless 
//receives props.savedHoros
//renders the saved horos by mapping a Horo.js for each horo
//method to edit saved horo, send res.data to App
//method to delete saved horo, send res.data to App

import React, {Component} from 'react';
import Horo from '../Horo/Horo';

const Horolist = props => {
   const mappedHoro = props.savedHoro.map((horo, i) => (
       <Horo
            key={i}
            horo={horo}
            nameFn={props.nameFn}
            releaseFn={props.releaseFn}/>

   ))

   return(
       <div>
           <div ClassName='horo-flex'>
               {mappedHoro}
           </div>
       </div>
   )
   }
   export default Horolist;





