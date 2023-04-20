
import { Link, useParams } from "react-router-dom"

import ShareIcon from '@mui/icons-material/Share';
// import { Box } from "@mui/system";
import { primaryColor } from "../utils/theme";
import { useAccount, useSigner, useSwitchNetwork, useNetwork,useProvider } from "wagmi";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { useMinterLabStore } from "../hooks";
import axios from 'axios';
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Skeleton,
    Switch,
    Typography,
    Grow,
    TextField,
    IconButton
} from '@mui/material';

import { styled } from '@mui/material/styles';

import { isChainTestnet, chainName, contract1155ABI } from "../contracts";


const ListContainer = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 20px 0;
`;


const StyledCard = styled(Card)`
// display: flex;
// flex-direction: column;
// align-items: center;
// justify-content: center;
width: 320px;
height: 464px;
// border: 1px solid #ccc;
border-radius: 10px;
&:hover {
    // border: 1px solid #DAEE01;
    box-shadow: 0px 0px 10px #DAEE01;

}
// overflow: hidden;
overflow: 'hidden';
margin: 20px;
`

export function MintingPage() {


    const { chainId, contract1155Address } = useParams()
    console.log(chainId)
    console.log(contract1155Address)

    return (
        <div>

            {contract1155Address ? <Buyer contract1155Address={contract1155Address} chainId={chainId} /> : <Seller />}



        </div>
    )
}

function Seller() {

    // const selectedCollection = useMinterLabStore(state => state.selectedCollection);

    // 이것도 , 처음에 로드할때 , 불러오는걸로 하자 ...
    const chainId = 80001;
    const contract1155Address = useMinterLabStore(state => state.contract1155Address);

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


function Buyer({ contract1155Address, chainId}) {
    // 소비자용 민팅 페이지
    // contract1155Address 가 있어야함

    // const { chainId, contract1155Address } = useParams()
    // console.log(chainId)
    // console.log(contract1155Address)
    // 이것도 , 처음에 로드할때 , 불러오는걸로 하자 ...
    // const chainId = 80001;
    // const contract1155Address = useMinterLabStore(state => state.contract1155Address);
    // const contract1155Address = useMinterLabStore(state => state.contract1155Address);

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



    const { chain } = useNetwork();
    const userWalletChainId = chain?.id ?? 0
    console.log("userwalletchainid", userWalletChainId);

    const { data: signer, isError } = useSigner()

    const setIsLoading = useMinterLabStore(state => state.setIsLoading)


    // async function checkChain() {
    //     if (Number(chainId) !== userWalletChainId) {

    //         console.log("switchNetworkAsync", switchNetworkAsync);
    //         // switchNetwork?.(+chainId)

    //         // switchNetwork?.(+chainId)

    //         if (switchNetworkAsync) {
    //             return switchNetworkAsync(+chainId)

    //         } else {
    //             alert("Please get metamask extension.")
    //             return false;
    //         }
    //     } else {
    //         mint();
    //     }

    // }

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
                url: `https://smarthug.github.io/minter-lab-1155/#/MintingPage/${chainId}/${contract1155Address}`
            }).then(() => { console.log("share success") }).catch((err) => { console.log(err); })
        }
    }

    // useEffect(() => {
    //     console.log("buyer minting page useEffect");

    //     if (Number(chainId) !== userWalletChainId) {

    //         console.log("switchNetworkAsync", switchNetworkAsync);
    //         // switchNetwork?.(+chainId)

    //         // switchNetwork?.(+chainId)

    //         if (switchNetworkAsync) {
    //             switchNetworkAsync(+chainId)

    //         }
    //     }




    // }, [switchNetworkAsync, chainId, userWalletChainId])




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

            <ManageNFT chainId={chainId} contract1155Address={contract1155Address} />
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

function ManageNFT({ chainId, contract1155Address }) {

    const { data: signer, isError, isLoading } = useSigner()




    // const [contract1155Address, setContract1155Address] = useState(null)

    // const contract1155Address = "0xBe29265464064d382724bB4801Dd87528CbB349B"
    // const contract1155Address = useMinterLabStore(state => state.contract1155Address)
    const provider = useProvider()

    const [nftInfoList, setNftInfoList] = useState([])

    useEffect(() => {
        async function FetchAllNFTInfo() {
            try {
                console.log("wtf ffffffffffffff")
                console.log(contract1155Address)
                const contract1155 = new ethers.Contract(`${contract1155Address}`, contract1155ABI, provider);




                const tx1155 = await contract1155.getValues(0, 100)
                console.log(tx1155)


                console.log(tx1155[0].toNumber())
                const tmpArray = []
                for (let index = 0; index <= tx1155[0].toNumber(); index++) {
                    const maxSupply = tx1155[1][index];
                    const totalSupply = tx1155[2][index];
                    const price = tx1155[3][index];
                    const tokenURL = tx1155[4][index];

                    tmpArray.push({ maxSupply, totalSupply, price, tokenURL })
                }


                setNftInfoList(tmpArray)

            } catch (error) {
                console.error(error);
                // alert(error.message)
                alert("connect Wallet first")

            } finally {
                // setIsLoading(false)
            }
        }


        FetchAllNFTInfo()
    }, [provider, contract1155Address])





    return (
        <div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "20px 20px",
                }}
            >
                <h1>Manage NFT</h1>
                <h2>{contract1155Address}</h2>


            </div>
            {contract1155Address !== null ? <NFTInfoCardList nftInfoList={nftInfoList} contract1155Address={contract1155Address} chainId={chainId} /> : <h1>Create Your First NFT </h1>}

        </div>


    )
}

function NFTInfoCardList({ nftInfoList, contract1155Address, chainId }) {
    console.log(nftInfoList);

    return (
        <ListContainer >

            {nftInfoList.map(({ tokenURL, price, maxSupply, totalSupply }, index) => {
                return (
                    <NFTInfoCard key={index} tokenId={index} tokenURL={tokenURL} priceProp={price} maxSupplyProp={maxSupply} totalSupplyProp={totalSupply} contract1155Address={contract1155Address} chainId={chainId} />
                )
            })}
        </ListContainer>

    )
}


// data fetch from contract.getTokenURLbyIndex(number)
function NFTInfoCard({ tokenId, tokenURL, totalSupplyProp, priceProp, maxSupplyProp, contract1155Address, chainId }) {
    const [loading, setLoading] = useState(false);
    const [nftImageCid, setNftImageCid] = useState("");

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");


    const { data: signer, isError, isLoading } = useSigner()






    const [totalSupply, setTotalSupply] = useState(totalSupplyProp.toNumber());
    const [price, setPrice] = useState(ethers.utils.formatUnits(priceProp, 18));
    const [maxSupply, setMaxSupply] = useState(maxSupplyProp.toNumber());

    // const contract1155Address = useMinterLabStore(state => state.contract1155Address)


    const account = useAccount()



    // console.log("NFTAbi", NFTAbi)


    useEffect(() => {
        console.log("test");

        async function fetchNFTData() {

            try {

                setLoading(true)

                axios.get(tokenURL).then((res) => {
                    console.log(res.data.image);
                    setNftImageCid(res.data.image)
                    setName(res.data.name)
                    setDescription(res.data.description)
                    setLoading(false)
                })

            } catch (error) {
                console.error(error);

            } finally {
                // setLoading(false)
            }
        }

        fetchNFTData()
    }, []);


    async function mint() {
        console.log("mint this nft ", tokenId)
        try {



            const contract = new ethers.Contract(contract1155Address, contract1155ABI, signer);
            // const contract = new ethers.Contract(contract1155Address, [
            //     'function IDs() public view returns (uint256)',
            //     ...contract1155ABI
            // ], signer);
            const contractWithSigner = contract.connect(signer)

            // const tx = await contractWithSigner.IDs()

            // console.log(tx.toNumber())
            // console.log(account.address);

            const tx = await contractWithSigner.mintSingle(account.address, tokenId, 1 , { value: ethers.utils.parseEther(price,18)})
           
            const rc = await tx.wait()

            console.log(tx);
            console.log(rc);

            console.log("1155 Contract Address : ",rc.logs[0].address);
        } catch (error) {
            console.error(error);
            // alert(error.message)
            alert("connect Wallet first")

        } finally {
            // setIsLoading(false)
        }
    }

   
    return (

        loading ? <Skeleton variant="rectangular" width={345} height={360} /> :


            <StyledCard sx={{ maxWidth: 345, height: 840, backgroundColor: "#212121", }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="320"
                    // image={nftImageCid}
                    image={nftImageCid}
                />
                <CardContent sx={{ height: 133 }}>

                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>

                </CardContent>
                <CardContent sx={{ height: 233 }}>

                    <div>

                        <TextField id="outlined-basic" label="Price" variant="outlined" value={price} disabled onChange={(e) => setPrice(e.target.value)} />
                        <TextField id="outlined-basic" label="Total Supply" variant="outlined" value={totalSupply} disabled />
                        <TextField id="outlined-basic" label="Max Supply" variant="outlined" value={maxSupply} disabled onChange={(e) => setMaxSupply(e.target.value)} />
                    </div>
                </CardContent>
                <CardActions>
                    {/* <Button size="small" onClick={updatePrice}>Set Price</Button>
                    <Button size="small" onClick={updateMaxSupply}>Set maxSupply</Button> */}
                    <Button size="small" onClick={mint}>Mint</Button>

                </CardActions>
            </StyledCard>




    );
}
