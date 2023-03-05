
import React, { Suspense, lazy } from 'react'
// import Router from './router'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import darkTheme from './utils/theme';
import { Box } from '@mui/material';
import { useMinterLabStore } from './hooks';


import { contract1155ABI, manager1155Address, manager1155ABI } from './contracts'
import { ethers } from 'ethers';


const provider = new ethers.providers.Web3Provider(window.ethereum)

const signer = provider.getSigner()





// minterlab 1155 버전
// 1155 매니저를 통해 , contract1155 불러오기
// 아예 new 컨트랙트 하지말고 , 박아버릴까? 주스탄드에 

async function getContract1155Address() {
  try {

    if (signer._address === null) {
      alert("Please connect wallet")
      return null
    } else {

      const manager1155 = new ethers.Contract(manager1155Address, manager1155ABI, signer);
      const contractWithSigner = manager1155.connect(signer);


      // return manager1155
      return await contractWithSigner.getMyContractAddress(0, 100)
    }
  } catch (error) {
    console.log(error);
    return null
  }
}




const Router = lazy(() => getContract1155Address()
  .then(address => {

    console.log(address);

    if (/^0x[a-fA-F0-9]{40}$/.test(address)) {

      console.log("address is valid")
      useMinterLabStore.setState({
        contract1155Address: address,
      })
    }

    return import('./router')
  })

)



// const Router = lazy(() => import('./router'));



export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>

      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Suspense fallback={<div>Loading...</div>}>
          <Router />
        </Suspense>
      </Box>
    </ThemeProvider>
  )
}



// 🔴 dynamic import and fake "delay" Preview
// const Preview = lazy(async() => {
//   return new Promise((resolve, reject) => {
//      setTimeout(() => resolve(), 2000)
// })
//  .then(() => import("./components/Preview"))
//  .catch((e) => console.log(e))
// });






// import React, { useEffect } from 'react'




// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// import * as Pages from "./pages";



// const labs = Object.entries(Pages);
// // console.log(labs);
// console.log(process.env.PUBLIC_URL);
// function App() {
//   return (
//     <Router basename={process.env.PUBLIC_URL}>
//       <div style={{ height: "100vh" }} className="App">
//         <Routes>
//           {labs.map(([k, v]) => {
//             if (v.default) {
//               const Tmp = v.default;
//               return <Route exact key={k} path={`/${k}`} element={<Tmp />} />;
//             }
//             return null;
//           })}
//           <Route exact path={`/`} element={<Home />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

// function Home() {
//   return (
//     <React.Fragment>
//       <h1 style={{ marginTop: 0 }}>LAB</h1>
//       {labs.map(([k, v]) => {
//         if (v.default) {
//           return (
//             <div key={k}>
//               <Link to={`/${k}`}>{k}</Link>
//             </div>
//           );
//         }
//         return null;
//       })}
//     </React.Fragment>
//   );
// }


