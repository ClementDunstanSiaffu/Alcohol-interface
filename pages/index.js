
import React from  'react';
import {Table} from 'reactstrap';
import Head from 'next/head';

function Home({data}){

  return(
    <div>
        <Head>
           <title>Alcohol level</title>
           <meta charSet="utf-8" />
           <meta name="viewport" content="width=device-width, initial-scale=1.0" />
           <meta name="theme-color" content="#000000" />
        </Head>
        
        <div className = "outer-container">
           <div className = "inner-container">
               <Table dark className = "table-container">
                 <thead>
                     <tr>
                       <th>ALCOHOL LEVEL (Litre)</th>
                       <th>DATE</th>
                       <th>TIME</th>
                     </tr>
                 </thead>
                 <tbody>
                   
                    {data.map((one)=><tr>
                        <th>{one.level}</th>
                        <th>{one.date}</th>
                        <th>{one.time}</th>
                    </tr>)}
                    
                 </tbody>
               </Table>
           </div>
        </div>


    </div>
  )
}

Home.getInitialProps = async ()=>{
  const response = await fetch('https://damp-ocean-38612.herokuapp.com/alcohol/pata')
  const data = await response.json()
  return {data}
}

export default Home;