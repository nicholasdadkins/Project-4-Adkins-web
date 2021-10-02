import React from 'react';
import Stock from './Stock'
import './App.css';

function App() {
  return (
    <>

        <div className={'grid grid-cols-12'}>
            <div className={'col-span-12 h-20 bg-gray-300 text-center border-b-4 border-gray-900'}>
                <h1 className={'text-4xl mt-4 font-semibold tracking-wider'}>Paper Trader</h1>

            </div>

            <div className={'col-span-7 h-screen bg-gray-300 border-r-4 border-gray-900'}>

                <h1>Search Box</h1>

                <div className={'w-1/2 p-4'}>
                    <input type="search" className={'w-full rounded-full p-2'} placeholder={'Search...'}/>
                </div>

                <div className={'flex p-4'}>
                    <div className={'w-1/2'}>
                        <h1 className={'text-3xl'}>BHP - BHP Group Limited</h1>
                    </div>
                    <div className="App">
                      <Stock></Stock>
                      </div>

                    <div className={'w-1/2 flex justify-center'}>

                        <button className={'bg-blue-600 text-white text-xl font-semibold py-3 px-4 w-32 rounded'}>Buy</button> &nbsp;&nbsp;&nbsp;
                        <button className={'bg-red-600 text-white text-xl font-semibold py-3 px-4 w-32 rounded'}>Sell</button>

                    </div>
                </div>









            </div>








            <div className={'col-span-5 h-screen bg-gray-500 p-8'}>


                <div className={'grid grid-cols-12 border'}>
                    <div className={'col-span-3 p-2 bg-gray-400 text-center font-semibold'}>
                        Stock
                    </div>
                    <div className={'col-span-3 p-2 bg-gray-400 text-center font-semibold'}>
                        Quantity
                    </div>
                    <div className={'col-span-3 p-2 bg-gray-400 text-center font-semibold'}>
                        Value
                    </div>
                    <div className={'col-span-3 p-2 bg-gray-400 text-center font-semibold'}>
                        Sell button
                    </div>



                </div>



            </div>

        </div>

    </>
  );
}

export default App;



// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>
