import React from 'react'
import {  Routes, Route, HashRouter } from 'react-router-dom'
import AppBar from './components/AppBar'
import MainContainer from './components/MainContainer'

import { ManageNFT,CreateNFT,MintingPage,Settings,About, NotFound, MetamaskInstall } from './pages'
// console.log(process.env.PUBLIC_URL);
//basename={process.env.PUBLIC_URL}
export default function Router() {

    return (
        <HashRouter >
            <AppBar />
            <MainContainer>
                <Routes base>
                    {/* <Route exact path={`/CreateCollection`} element={<CreateCollection />} /> */}
                    <Route exact path={`/CreateNFT`} element={<CreateNFT />} />
                    <Route exact path={`/ManageNFT`} element={<ManageNFT />} />
                    <Route path={`/MintingPage/:chainId/:contract1155Address`} element={<MintingPage />} />
                    <Route path={`/MintingPage`} element={<MintingPage />} />
                    <Route exact path={`/MetamaskInstall`} element={<MetamaskInstall />} />
                    <Route exact path={`/Settings`} element={<Settings />} />
                    <Route exact path={`/`} element={<About />} />
                    <Route path={`*`} element={<NotFound />} />
                    {/* <Route path={`/`} element={<Home />} /> */}
                </Routes>
            </MainContainer>
        </HashRouter>
    )
}

// function Home() {
//     return (
//         <div>
//             hello home
//         </div>
//     )
// }