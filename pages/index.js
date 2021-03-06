
import React from  'react';
import {Table} from 'reactstrap';
import Head from 'next/head';
import fetch from 'isomorphic-unfetch';

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
             <h1 className = "title-text">ALCOHOL MONITORING SYSTEM</h1>
               <Table dark className = "table-container">
                 <thead>
                     <tr>
                       <th>ALCOHOL LEVEL (%)</th>
                       <th>DATE</th>
                       <th>TIME</th>
                       <th>ID</th>
                     </tr>
                 </thead>
                 <tbody>
                   
                    {data.map((one)=><tr>
                        <th>{one.level}</th>
                        <th>{one.date}</th>
                        <th>{one.time}</th>
                        <th>120034DEV01</th>
                    </tr>)}
                    
                 </tbody>
               </Table>
           </div>
        </div>


    </div>
  )
}

Home.getInitialProps = async ()=>{
  const response = await fetch('https://sleepy-dawn-61965.herokuapp.com/pata')
  const data = await response.json()
  return {data}
}

export default Home;