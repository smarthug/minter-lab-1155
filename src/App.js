
import React, { Suspense, lazy } from 'react'
// import Router from './router'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import darkTheme from './utils/theme';
import { Box } from '@mui/material';
import { useMinterLabStore } from './hooks';
import {  getCollectionById } from './utils/db';

// function Init() {
//   console.log("Init");

//   getCollections().then((collections) => {
//     // console.log(collections);
//     // console.log(localStorage.getItem('selectedCollectionId'));
//     const selectedCollection = collections.find((collection) => collection.id === +localStorage.selectedCollectionId) ?? null;
//     useMinterLabStore.setState({
//       selectedCollection: selectedCollection,

//     })
//     console.log("Init Done");
//   })

// }

// Init();

// const Router = lazy(() => import('./router'));
const Router = lazy(() => getCollectionById(+localStorage.selectedCollectionId || 0).then((collection) => {
  console.log(`Current Selected Collection is`, collection);
  useMinterLabStore.setState({
    selectedCollection: collection,
  })
  return import('./router')
}));

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


