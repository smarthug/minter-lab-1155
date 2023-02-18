import { useEffect, useState } from 'react';
import { useMinterLabStore } from '../hooks';
import { ethers } from 'ethers';
import { useAccount, useProvider, useSigner } from 'wagmi';
import axios from 'axios';

import styledOG from 'styled-components';

import { styled } from '@mui/material/styles';

// import { Mumbai1155ManagerABI, Mumbai1155ManagerAddress, Mumbai1155ContractABI } from '../1155ManagerContract'
import { contract1155ABI, manager1155Address, manager1155ABI } from '../contracts'
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
} from '@mui/material';
import { update1155Address } from '../utils/db';

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




export function ManageNFT() {

    const { data: signer, isError, isLoading } = useSigner()


    const { contract721Address } = useMinterLabStore(state => state.selectedCollection)

    const contract1155Address = "0xBe29265464064d382724bB4801Dd87528CbB349B"
    const provider = useProvider()

    const [nftInfoList, setNftInfoList] = useState([])

    useEffect(() => {
        async function FetchAllNFTInfo() {
            try {

                // setIsLoading(true)

                // const contract721 = new ethers.Contract(contract721Address, contract721ABI, provider);

                // const tx721 = await contract721.getValues(0, 2)

                const contract1155 = new ethers.Contract(contract1155Address, contract1155ABI, provider);

                const tx1155 = await contract1155.getValues(0, 2)
                console.log(tx1155)

                // console.log(tx721);
                // console.log(tx721[0].toNumber());
                // console.log(tx721[1].slice(0, 3));
                // const result = tx721[1].slice(0, 1)
                // setNftInfoList(result)

                // console.log(tx1155);
                // console.log(tx721[0].toNumber());
                // console.log(tx721[1].slice(0, 3));
                // const result = tx721[1].slice(0, 1)
                // setNftInfoList(result)
                const tmpArray = []
                for (let index = 0; index < 3; index++) {
                    const totalSupply = tx1155[0][index];
                    const price = tx1155[1][index];
                    const tokenURL = tx1155[2][index];

                    tmpArray.push({ maxSupply: totalSupply, price, tokenURL })
                }

                setNftInfoList(tmpArray)
                // console.log(tx[0].toNumber());
                // console.log(tx[1][0].toNumber());
                // console.log(rc);
            } catch (error) {
                console.error(error);
                // alert(error.message)
                alert("connect Wallet first")

            } finally {
                // setIsLoading(false)
            }
        }


        FetchAllNFTInfo()
    }, [])





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
                {/* <Switch>ss</Switch> */}

            </div>
            {contract1155Address !== null ? <NFTInfoCardList nftInfoList={nftInfoList} /> : <h1>Activate Selling First</h1>}

        </div>


    )
}

function NFTInfoCardList({ nftInfoList }) {
    console.log(nftInfoList);

    return (
        <ListContainer >

            {nftInfoList.map(({ tokenURL, price, maxSupply }, index) => {
                return (
                    <NFTInfoCard key={index} tokenURL={tokenURL} priceProp={price} maxSupplyProp={maxSupply} />
                )
            })}
        </ListContainer>

    )
}


// data fetch from contract.getTokenURLbyIndex(number)
function NFTInfoCard({ tokenURL, priceProp, maxSupplyProp }) {
    const [loading, setLoading] = useState(false);
    const [nftImageCid, setNftImageCid] = useState("");

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");


    const { data: signer, isError, isLoading } = useSigner()

    const account = useAccount()


    const [edit, setEdit] = useState(false);

    const [price, setPrice] = useState(ethers.utils.formatUnits(priceProp, 18));
    const [maxSupply, setMaxSupply] = useState(maxSupplyProp.toNumber());

    const { contract721Address, contract1155Address } = useMinterLabStore(state => state.selectedCollection)



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
        // try {



        //     const contract = new ethers.Contract(tmp1155ContractAddress, Mumbai1155ContractABI, signer);
        //     const contractWithSigner = contract.connect(signer)

        //     console.log(account.address);

        //     const tx = await contractWithSigner.mintSingle(account.address, 1, 1)
        //     const rc = await tx.wait()

        //     console.log(tx);
        //     console.log(rc);

        //     // console.log("1155 Contract Address : ",rc.logs[0].address);
        // } catch (error) {
        //     console.error(error);
        //     // alert(error.message)
        //     alert("connect Wallet first")

        // } finally {
        //     // setIsLoading(false)
        // }
    }

    async function updatePrice(e) {
        try {

            const contract = new ethers.Contract(contract1155Address, contract1155ABI, signer);
            const contractWithSigner = contract.connect(signer)

            // console.log(account.address);

            const tx = await contractWithSigner.setPrice(+ e.target.value, 0)
            const rc = await tx.wait()

            console.log(tx);
            console.log(rc);


        } catch (error) {
            console.error(error);
            // alert(error.message)

        } finally {

        }
    }

    async function updateMaxSupply(e) {
        try {

            const contract = new ethers.Contract(contract1155Address, contract1155ABI, signer);
            const contractWithSigner = contract.connect(signer)

            // console.log(account.address);

            const tx = await contractWithSigner.setMaxSupply(+e.target.value, 0)
            const rc = await tx.wait()

            console.log(tx);
            console.log(rc);


        } catch (error) {
            console.error(error);
            // alert(error.message)

        } finally {

        }
    }

    return (

        loading ? <Skeleton variant="rectangular" width={345} height={360} /> :


            <StyledCard sx={{ maxWidth: 345, height: 640, backgroundColor: "#212121", }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    // height="320"
                    // image={nftImageCid}
                    image={nftImageCid}
                />
                <CardContent sx={{ height: 133 }}>
                    {/* {edit &&
                    
                    } */}
                    {/* <Grow in={edit}>
                        <div>
                            <TextField id="outlined-basic" label="Price" variant="outlined" value={price} onChange={(e) => setPrice(e.target.value)} />
                            <TextField id="outlined-basic" label="Max Supply" variant="outlined" value={maxSupply} onChange={(e) => setMaxSupply(e.target.value)} />
                        </div>
                    </Grow> */}
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>

                </CardContent>
                <CardContent sx={{ height: 133 }}>

                    <div>
                        <TextField id="outlined-basic" label="Price" variant="outlined" value={price} onChange={(e) => setPrice(e.target.value)} />
                        <TextField id="outlined-basic" label="Max Supply" variant="outlined" value={maxSupply} onChange={(e) => setMaxSupply(e.target.value)} />
                    </div>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={mint}>Sell</Button>
                    {/* <Button size="small" onClick={(e) => setEdit((state) => !state)}>Edit</Button> */}
                    <Button size="small" onClick={updatePrice}>Set Price</Button>
                    <Button size="small" onClick={updateMaxSupply}>Set maxSupply</Button>

                </CardActions>
            </StyledCard>

        // <NFTCard imageUrl={nftImageCid} title={name} description={description} />


    );
}

// skeleton for NFT info card
// function NFTInfoCardSkeleton() {


// }






