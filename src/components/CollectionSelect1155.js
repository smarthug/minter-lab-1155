import React from 'react';
import { styled } from '@mui/system';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { useLiveQuery } from 'dexie-react-hooks';
import { getCollections } from '../utils/db';

import chainIconsMap from '../hooks/chainIcons'
import { Box, Typography } from '@mui/material';
// import { useDynamicSVGImport } from '../hooks';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useMinterLabStore, useSelectedCollectionId } from '../hooks';

import { isChainTestnet, chainName } from "../contracts";
import { useAccount, useNetwork } from 'wagmi';

// const Logo = chainIconsMap['polygon']

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
    // '& .chip': {
    //     marginRight: theme.spacing(4),
    //     marginLeft: theme.spacing(4),
    // },
    // '& > div > *': {
    //     marginRight: theme.spacing(2),
    //     // marginLeft: theme.spacing(4),
    // },

    // margin: 8,
    // '&:focus': {
    //     backgroundColor: theme.palette.primary.main,
    //     '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
    //         color: theme.palette.common.white,
    //     },
    // },
}));

const StyledBox = styled(Box)(({ theme }) => ({
    // '& .chip': {
    //     marginRight: theme.spacing(4),
    //     marginLeft: theme.spacing(4),
    // },
    '& >  *': {

        // marginLeft: theme.spacing(4),
        [theme.breakpoints.up('sm')]: {
            // backgroundColor: theme.palette.primary.main,
            marginRight: theme.spacing(1),
        },
    },


    // margin: 8,
    // '&:focus': {
    //     backgroundColor: theme.palette.primary.main,
    //     '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
    //         color: theme.palette.common.white,
    //     },
    // },
}));

// const Icon = ({ name, onCompleted, onError, ...rest }) => {
//     const { error, loading, SvgIcon } = useDynamicSVGImport(name, {
//         onCompleted,
//         onError
//     });
//     if (error) {
//         return error.message;
//     }
//     if (loading) {
//         return "Loading...";
//     }
//     if (SvgIcon) {
//         //   return "what?";
//         return <SvgIcon {...rest} />;
//     }
//     return null;
// };

// 여기서 주스탄드에 있는 collection id 를 받아오게 해서 관리할 수도있음
export default function NFTSelect() {
    // const selectedCollection = useMinterLabStore(state => state.selectedCollection)
    const [selectedCollectionId, setSelectedCollectionId] = useSelectedCollectionId()
    // const setSelectedCollection = useMinterLabStore(state => state.setSelectedCollection)

    const contract1155Address = useMinterLabStore(state => state.contract1155Address)
    console.log(contract1155Address);

    const { chain } = useNetwork()
    const chainId = chain?.id
    console.log(chainId);

    const Logo = chainIconsMap[chainId]

    const account = useAccount()

    // const collections = useLiveQuery(getCollections)
    // console.log(collections);

    // 컬렉션 id , 0,1,2,3

    // const [collection, setCollection] = React.useState(0);

    const matches = useMediaQuery((theme) => theme.breakpoints.up('sm'));

    const handleChange = (event) => {
        // setCollection(event.target.value);
        // 나중에 고려하자 , 너무 편하게 해줄려다가 에러가 생길수도있음
        // localStorage.setItem('selectedCollectionId', event.target.value)
        // const selectedCollection = collections.find((collection) => collection.id === event.target.value)
        // console.log(selectedCollection);

        // const selectedCollection = collections[event.target.value-1]
        // console.log(selectedCollection);

        // setSelectedCollection(selectedCollection)

        setSelectedCollectionId(event.target.value)
    };

    return (
        <FormControl
            variant="standard"
            style={{
                // margin: 8,
                // padding: 8,
                minWidth: 120,
                width: '100%',
            }} >
            <InputLabel id="nft-collection-select-label">NFT Collection</InputLabel>
            <Select
                labelId="nft-collection-select-label"
                id="nft-collection-select"
                value={0}
                // onChange={handleChange}
                label="NFT Collection"
                sx={{ maxWidth: 683 }}

            // disabled
            >
                {/* <div value={0}>
                    Please select a collection
                </div> */}
                {/* {collections && collections.map((collection) => (
                    <StyledMenuItem key={collection.id} value={collection.id} >

                        <CollectionItem collection={collection} />
                    </StyledMenuItem>
                ))} */}

                <StyledMenuItem key={0} value={0} >

                    <StyledBox sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>

                        {contract1155Address === null ?
                            <div>
                                <Typography variant="body1" display="inline">
                                    You have not created a NFT with address : {account.address} ,a collection will be created once you create your first 1155 NFT
                                </Typography>
                            </div>
                            :
                            <>

                                <Logo />
                                <Box >
                                    <Typography variant="body1" display="inline">
                                        {/* {chain.toUpperCase()} */}
                                        {chainName[chainId]}
                                    </Typography>
                                </Box>

                                <Chip className="chip" label={isChainTestnet[chainId] ? "testnet" : "mainnet"} size={"small"} variant={'outlined'} color={isChainTestnet[chainId] ? "primary" : "success"} />


                                {matches &&
                                    <Box>
                                        <Typography variant="caption" display="inline">
                                            {contract1155Address}
                                        </Typography>
                                    </Box>
                                }
                            </>
                        }

                    </StyledBox>
                </StyledMenuItem>

            </Select>
        </FormControl>
    );
}


// function CollectionItem({ collection }) {
//     // const Logo = chainIconsMap[collection.chain]
//     const Logo = chainIconsMap[collection.chainId]

//     const matches = useMediaQuery((theme) => theme.breakpoints.up('sm'));

//     return (

//         <StyledBox sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>

//             <Logo />
//             <Box >
//                 <Typography variant="body1" display="inline">
//                     {/* {collection.chain.toUpperCase()} */}
//                     {chainName[collection.chainId]}
//                 </Typography>
//             </Box>

//             <Chip className="chip" label={isChainTestnet[collection.chainId] ? "testnet" : "mainnet"} size={"small"} variant={'outlined'} color={isChainTestnet[collection.chainId] ? "primary" : "success"} />


//             {matches &&
//                 <Box>
//                     <Typography variant="caption" display="inline">
//                         {collection.contract721Address}
//                     </Typography>
//                 </Box>}
//         </StyledBox>

//     )
// }



// import { Select } from "@mui/material";

// export default function CollectionSelect() {

//     return (
//         <Select
//             labelId="demo-simple-select-label"
//             id="demo-simple-select"
//             value={10}
//             label="Age"
//         >
//             <option value={10}>Ten</option>
//             <option value={20}>Twenty</option>
//             <option value={30}>Thirty</option>
//         </Select>
//     )
// }
