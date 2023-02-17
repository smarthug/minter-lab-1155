import { Button, Card, Container, FormControl, FormControlLabel, FormGroup, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, Switch, TextField, Tooltip, Typography, tooltipClasses } from "@mui/material";
import { useEffect, useState } from "react"
import { addNFTContract } from "../utils/db";
import styled from "@emotion/styled";


import { useAccount, useNetwork, useSigner } from "wagmi";
import { ethers } from "ethers";


import { useMinterLabStore } from "../hooks/useMinterLabStore";


import { manager721ABI, manager721Address } from '../contracts'




export function CreateCollection() {


    useEffect(() => {
        console.log("CreateCollection")


    }, [])






    return (
        <div>
            <h1>CreateCollection</h1>

            <EtherContract />

        </div>
    )
}





const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#f5f5f9',
        color: 'rgba(0, 0, 0, 0.87)',
        maxWidth: 220,
        fontSize: theme.typography.pxToRem(12),
        border: '1px solid #dadde9',
    },
}));





function EtherContract(props) {

    const setIsLoading = useMinterLabStore(state => state.setIsLoading)
    const setSelectedCollectionId = useMinterLabStore(state => state.setSelectedCollectionId)

    const account = useAccount()


    const { data: signer, isError, isLoading } = useSigner()

    // same as chain.id
    const { chain } = useNetwork()
    const chainId = chain?.id
    console.log(chainId);

    // const chainId = 5
    // const { manager721Address, manager721ABI, chainId } = useManagerContractInfo()
    // console.log(manager721Address);
    console.log(manager721Address);
    console.log(manager721ABI);

    // const testnetGachaContract = new ethers.Contract(mana, contractData.gachaEthABI, signer);
    // console.log(testnetGachaContract);


    const [name, setName] = useState("");
    const [symbol, setSymbol] = useState("");


    const nameChange = (e) => {
        setName(e.target.value);
    }
    const symbolChange = (e) => {
        setSymbol(e.target.value);
    }

    const deployContract = async () => {
        // props.deploySmartContract(name, symbol, baseURL, maxSupply, price, whiteList, purchaseLimit);




        deploySmartContract({ account, manager721ABI: manager721ABI, manager721Address: manager721Address }, { nftName: name, symbol, })
    }



    async function deploySmartContract({ account, manager721Address, manager721ABI }, { nftName, symbol }) {


        const contract = new ethers.Contract(manager721Address, manager721ABI, signer);
        console.log(contract);

        if (signer === undefined) {
            alert("Please connect your wallet");
            return;
        }


        let tempState = "Name : " + nftName + "\n" +
            "Symbol : " + symbol + "\n" +
            "Would you deploy the contract?";
        let tempConfirm = window.confirm(tempState);

        if (tempConfirm) {


            setIsLoading(true);

            const contractWithSigner = contract.connect(signer)

            // const tx = await contractWithSigner.deployNFTContract(nftName, symbol, baseURL, maxSupply, finalPrice, purchaseLimit)
            const tx = await contractWithSigner.deployNFTContract(nftName, symbol)

            const rc = await tx.wait()

            console.log(tx);

            console.log(rc);

            addNFTContract({
                chainId: chainId,
                contract721Address: rc.logs[0].address,
                ownerAddress: account.address,
                collectionName: nftName,
                collectionSymbol: symbol,
            }).then((addedKey) => {
                console.log(addedKey);

                setSelectedCollectionId(addedKey)
                localStorage.setItem('selectedCollectionId', addedKey)
                setIsLoading(false);
            })



        }




    }



    return (


        <Container maxWidth="sm">


            <Card sx={{ backgroundColor: "transparent", color: "white", border: "1px solid white" }}>
                <div className="row" style={{
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                    <span style={{ width: '50%' }}>Collection Name</span>
                    <HtmlTooltip
                        title={
                            <>
                                {"Collection name that represent your NFTs"}
                            </>
                        }
                    >
                        <TextField style={{ width: '50%', border: "1px solid white", borderRadius: "4px" }} value={name} onChange={(e) => nameChange(e)} size="small" id="outlined-basic" label="name" variant="outlined" />
                    </HtmlTooltip>
                    <span style={{ width: '50%' }}>Symbol</span>
                    <HtmlTooltip
                        title={
                            <>
                                {"The token symbol"}
                            </>
                        }
                    >
                        <TextField style={{ width: '50%', border: "1px solid white", borderRadius: "4px" }} value={symbol} onChange={(e) => symbolChange(e)} size="small" id="outlined-basic" label="symbol" variant="outlined" />
                    </HtmlTooltip>

                    <Button onClick={deployContract} variant="contained">Smart Contract Deploy!</Button>
                </div>
            </Card>
        </Container>


    );


}

