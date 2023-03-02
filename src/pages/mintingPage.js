import { Button, IconButton } from "@mui/material"
import { Link, useParams } from "react-router-dom"

import ShareIcon from '@mui/icons-material/Share';
import { Box } from "@mui/system";
import { primaryColor } from "../utils/theme";
import { useAccount, useSigner, useSwitchNetwork, useNetwork } from "wagmi";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { useMinterLabStore } from "../hooks";



import { isChainTestnet, chainName, contract1155ABI } from "../contracts";

export function MintingPage() {


    const { chainId, contract1155Address } = useParams()








    return (
        <div>

            {contract1155Address ? <Buyer /> : <Seller />}



        </div>
    )
}

// 시나리오 케이스
// 컬렉션 선택을 안한 상태 => 선택을 해주세요
// 현재의 선택된 컬렉션을 zustand? 그래서 자동으로 보여주기?

// 잘못된 url 로 접근했을때, 존재하지 않는 컬렉션입니다. 주소를 확인해주세요


// function PleaseSelect

// http://smarthug.github.io/minter-lab-1155/#/MintingPage/undefined/undefined/undefined

//http://smarthug.github.io/minter-lab-1155/#/MintingPage/eth/mainnet/0x6d77be275C36761A53DBAf957fB516fA10fFf00E

// 두개로 아예 나누자 
// url 에 contract1155Address 가 있냐에 따라
// 있으면 , 소비자용 민팅 페이지
// 없으면 , 소유자용 민팅 페이지 , 필요한지 의문?


function Buyer() {
    // 소비자용 민팅 페이지
    // contract1155Address 가 있어야함

    // const { chainId, contract1155Address } = useParams()
    // console.log(chainId)
    // console.log(contract1155Address)
    const chainId = 80001;
    const contract1155Address = "0x75c3e5E4a309cd7e193F47508A16D1a9Db8C1182";

    const account = useAccount()

    // 지갑 있는 사용자 용
    const { switchNetworkAsync, isSuccess } = useSwitchNetwork({
        onSuccess: () => {
            console.log("success");
            // setTimeout(() => {


            // mint();
            // }, 3000);
        }
    })

    // 



    const { chain:{id: userWalletChainId} } = useNetwork();
    console.log("userwalletchainid", userWalletChainId);

    const { data: signer, isError } = useSigner()

    const setIsLoading = useMinterLabStore(state => state.setIsLoading)


    async function checkChain() {
        if (Number(chainId) !== userWalletChainId) {

            console.log("switchNetworkAsync", switchNetworkAsync);
            // switchNetwork?.(+chainId)

            // switchNetwork?.(+chainId)

            if (switchNetworkAsync) {
                return switchNetworkAsync(+chainId)

            } else {
                alert("Please get metamask extension.")
                return false;
            }
        } else {
            mint();
        }

    }

    async function mint() {
        console.log("mint");

        // 지갑이 연결되어 있는지 확인
        if (!account.address) {
            alert("Please connect your wallet.")
            return;
        }

        // 지갑과 연결된 체인이랑, 컬렉션의 체인이랑 같은지 확인
        if (Number(chainId) !== userWalletChainId) {
            alert("Please change your wallet to the correct chain.")
            return;
        }


        try {

            setIsLoading(true)

            const contract = new ethers.Contract(contract1155Address, contract1155ABI, signer);
            const contractWithSigner = contract.connect(signer)

            const tx = await contractWithSigner.mintMultiple(account.address, 1)
            const rc = await tx.wait()

            console.log(tx);
            console.log(rc);
        } catch (error) {
            console.error(error);
            alert("failed to mint")
        } finally {
            setIsLoading(false)
        }

        // setIsLoading(false)

    }

    function share() {
        if (navigator.share) {
            navigator.share({
                title: "Minter Lab",
                text: "Mint your NFT",
                url: `http://smarthug.github.io/minter-lab-1155/#/MintingPage/${chainId}/${contract1155Address}`
            }).then(() => { console.log("share success") }).catch((err) => { console.log(err); })
        }
    }

    useEffect(() => {
        console.log("buyer minting page useEffect");

        if (Number(chainId) !== userWalletChainId) {

            console.log("switchNetworkAsync", switchNetworkAsync);
            // switchNetwork?.(+chainId)

            // switchNetwork?.(+chainId)

            if (switchNetworkAsync) {
                switchNetworkAsync(+chainId)

            }
        }




    }, [switchNetworkAsync, chainId, userWalletChainId])




    return (
        <div>
            <Box sx={{ "display": 'flex' }} >

                <h1 style={{ "flexGrow": 0, "margin": 0 }}>Minting Page</h1>
                <IconButton onClick={share} size="large" aria-label="delete">
                    <ShareIcon fontSize="inherit" style={{
                        "color": primaryColor,
                    }} />
                </IconButton>
            </Box>
            <h1>Buyer</h1>
            <h3>Your wallet address : {account.address ?? "Please Install Metamask wallet"}</h3>
            <h4>Your wallet is on : {chainName[userWalletChainId]}</h4>
            <h4>This NFT is on {chainName[chainId]}</h4>
            <h4>NFT Contract Address is {contract1155Address}</h4>

            <Button disabled={false} variant="contained" onClick={mint}>Mint</Button>

            <Button variant="contained" target="_blank" href={`https://${isChainTestnet[chainId] ? "testnets." : ""}opensea.io/assets?search[query]=${contract1155Address}`} >Check on Opensea</Button>
        </div>
    )
}


// function Seller() {

//     const selectedCollection = useMinterLabStore(state => state.selectedCollection);

//     const chainId = 80001;
//     const contract1155Address = "0x75c3e5E4a309cd7e193F47508A16D1a9Db8C1182";

//     return (
//         <div>
//             <h1>Seller</h1>
//             <h3>Dashboard for seller</h3>
//             {selectedCollection ?
//                 <>
//                     <Button variant="contained" to={`/MintingPage/${selectedCollection.chainId}/${selectedCollection.contract1155Address}`} LinkComponent={Link}>Move to Minting Page</Button>
//                     <Button variant="contained" target="_blank" href={`https://${isChainTestnet[selectedCollection.chainId] ? "testnets." : ""}opensea.io/assets?search[query]=${selectedCollection.contract1155Address}`} >Check on Opensea</Button>
//                 </>
//                 :
//                 <h3>Please Select Collection</h3>
//             }
//             {/* <Link }>Move to Minting Page</Link> */}
//         </div>
//     )
// }

function Seller() {

    // const selectedCollection = useMinterLabStore(state => state.selectedCollection);

    const chainId = 80001;
    const contract1155Address = "0x75c3e5E4a309cd7e193F47508A16D1a9Db8C1182";

    return (
        <div>
            <h1>Seller</h1>
            <h3>Dashboard for seller</h3>
           
                <>
                    <Button variant="contained" to={`/MintingPage/${chainId}/${contract1155Address}`} LinkComponent={Link}>Move to Minting Page</Button>
                    <Button variant="contained" target="_blank" href={`https://${isChainTestnet[chainId] ? "testnets." : ""}opensea.io/assets?search[query]=${contract1155Address}`} >Check on Opensea</Button>
                </>
            
          
            {/* <Link }>Move to Minting Page</Link> */}
        </div>
    )
}