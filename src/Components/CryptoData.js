// HENRY CODE
// import {useState, useEffect} from "react";
// import axios from "axios";

// const CryptoData = () => {
//     // data: represents our data, setdata sets the data we are pulling from the api
//     const [data, setData] = useState([]);
//     // const [data2, setData2] = useState([]);
//     // const [data3, setData3] = useState([]);
//     // collect user data, empty string
    
    
//     // Make a request to all exchanges
//     useEffect(() => {
//         axios.get('https://www.cryptingup.com/api/exchanges/COINBASE/markets?size=10&start=1&end=10').then((res) => {
//             setData(res.data.assets);
//             console.log(res.data.assets)
//         });
//         // axios.get('https://www.cryptingup.com/api/assets/COINBASE/markets?size=10&end=6').then((res) => {
//         //     setData2(res.data2.assets);
//         // });
//         // axios.get('https://www.cryptingup.com/api/assets/COINBASE/exchanges?size=10&end=6').then((res) => {
//         //     setData3(res.data3.assets);
//         // });
//         // Binance
//         // Coinbase
//         // Huobi Global
//         // Kraken
//         // Bitfinex
//         // Poloniex
//         // Bittrex

//     }, []);
   
//     console.log("check");

//     return (
//         <div>
//             <h1>Data from my API</h1>
//             {data.map((x, i) => <li key={i}>{x.symbol} : {x.status}</li>)};
//             {/* {data2.map((x, i) => 
//                 <li key={i}>{x.price}</li>)};
//             {data3.map((x, i) => 
//                 <li key={i}>{x.status} : {x.name}</li>)};
//              */}
//             {/* List specific data for the 3 exchanges  */}
//             <h1>Single Post data</h1>
//             <h3>Exchange Name: </h3>
//             {data.map((x, i) => <p key={i}>{x.symbol} : {x.status}</p>)};
//         </div>  
//     )
// };

// // YOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO NEW CODE STARTS HERE 







// export default CryptoData;
// SECOND PART

import {useState, useEffect} from "react";
import axios from "axios";

// function something(){
//     continue
// }

const CryptoData2 = () => {
    // data: represents our data, setdata sets the data we are pulling from the api
    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState([]);
    const [data3, setData3] = useState([]);
    
    // Make a request to all exchanges
    useEffect(() => {
        axios.get('https://www.cryptingup.com/api/exchanges/COINBASE/markets?size=10&start=1&end=1').then(res => {
            console.log (res)
            setData1(res.data.markets);
        });

        axios.get('https://www.cryptingup.com/api/exchanges/COINBASE/markets?size=10&start=1&end=1').then(res => {
            setData2(res.data.markets);
            
        });

        axios.get('https://www.cryptingup.com/api/exchanges/COINBASE/markets?size=10&start=1&end=1').then(res => {
            setData3(res.data.markets);
        
        });
    }, []);
   

    return (
        <div>
            <h1>Data from my API</h1>
        
            
            {/* List specific data for the 3 exchanges  */}
            <h1>Single Post data</h1>

<h3>Price:  {data3.map((x, i) => <li key={i}>{x.price}</li>)} </h3>
            <h3>Symbol: {data1.map((x, i) => <li key={i}>{x.symbol}</li>)} </h3>
            <h3>Exchange Name: {data2.map((x, i) => <li key={i}>{x.exchange_id}</li>)} </h3>
            
            <p> </p>
        </div>  
    )
};

export default CryptoData2;