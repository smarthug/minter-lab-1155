import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
// import "./basic.css"

// import { styled } from '@mui/system';
// import { TextField, Button } from '@material-ui/core';
import { TextField, Button } from '@mui/material'
import { useSigner } from "wagmi";
import { ethers } from "ethers";
import { ipfsUploadImage, ipfsUploadMetadata } from '../utils/ipfsUpload';
import { useMinterLabStore } from '../hooks';
import { contract721ABI } from '../contracts';
import { Box } from '@mui/system';

import { styled } from '@mui/system';

const thumbsContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16
};

const thumb = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: 500,
    height: 500,
    padding: 4,
    boxSizing: 'border-box'
};

const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
};

const img = {
    display: 'block',
    width: 'auto',
    height: '100%'
};

const test = {
    // width: '500px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: '2px',
    borderRadius: '2px',
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out'
};


const getColor = (props) => {
    if (props.isDragAccept) {
        return '#00e676';
    }
    if (props.isDragReject) {
        return '#ff1744';
    }
    if (props.isFocused) {
        return '#2196f3';
    }
    return '#eeeeee';
}

// const Container = styledComp.div`
//     flex: 1;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     padding: 20px;
//     border-width: 2px;
//     border-radius: 2px;
//     border-color: ${props => getColor(props)};
//     border-style: dashed;
//     background-color: #fafafa;
//     color: #bdbdbd;
//     outline: none;
//     transition: border .24s ease-in-out;
//     height: 30vh;
//   `;


const Container = styled(Box)`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border-width: 2px;
    border-radius: 2px;
    border-color: ${props => getColor(props)};
    border-style: dashed;
    background-color: #fafafa;
    color: #bdbdbd;
    outline: none;
    transition: border .24s ease-in-out;
    height: 30vh;
  `;


// const StyledBox = styled(Box)(({ theme }) => ({

//     '&   *': {

//         margin: theme.spacing(1),

//     },

// }));

const StyledBox = styled(Box)((props) => {

    console.log("styled props", props);
    return {
        '&   *': {

            margin: props.theme.spacing(1),

        }
    }

}
);
const a = () => { }
//   const Container = styled()

//   const Container = styled(div)((props) => ({
//     flex: 1,
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     padding: "20px",
//     borderWidth: "2px",
//     borderRadius: "2px",
//     borderColor: ${props => getColor(props)},
//     borderStyle: "dashed",
//     backgroundColor: #fafafa,
//     color: #bdbdbd,
//     outline: none,
//     transition: border .24s ease-in-out,
// }));


export function CreateNFT() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [files, setFiles] = useState([]);
    const setIsLoading = useMinterLabStore(state => state.setIsLoading);
    const selectedCollection = useMinterLabStore(state => state.selectedCollection);



    const { data: signer, isError, isLoading } = useSigner();
    const { getRootProps,
        getInputProps,
        isFocused,
        isDragAccept,
        isDragReject } = useDropzone({
            maxFiles: 1,
            accept: {
                'image/*': []
            },
            onDrop: acceptedFiles => {
                setFiles(acceptedFiles.map(file => Object.assign(file, {
                    preview: URL.createObjectURL(file)
                })));
                console.log(acceptedFiles);
                console.log(acceptedFiles[0]);
                // IPFS upload
                // and get CID
                // setImageCID(CID);
            }
        });

    const thumbs = files.map(file => (
        <div style={thumb} key={file.name}>
            <div style={thumbInner}>
                <img
                    alt='hello'
                    src={file.preview}
                    style={img}
                    // Revoke data uri after image is loaded
                    onLoad={() => { URL.revokeObjectURL(file.preview) }}
                />
            </div>
        </div>
    ));

    useEffect(() => {
        // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
        return () => files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files]);



    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    }

    const handleIpfs = async (event) => {
        event.preventDefault();
        console.log(selectedCollection);
        setIsLoading(true);

        if (files.length === 1 && name !== '' && description !== '') {
            console.log(files);
            const cid = await ipfsUploadImage(files);
            // setImageCID(cid + "/" + files[0].name);

            //`https://ipfs.io/ipfs/${imageCID}`

            const imageCID = `${cid}`

            // const image = `https://ipfs.io/ipfs/${imageCID}`;
            const image = `https://${imageCID}.ipfs.nftstorage.link`;
            // const image = `https://${imageCID}`; 
            console.log(image);
            // code to handle NFT metadata submission goes here
            const metadataForUpload = {
                name: name,
                description: description,
                image,
            }
            const tokenURI = await ipfsUploadMetadata(metadataForUpload);
            const tokenURL = `https://${tokenURI}.ipfs.nftstorage.link`;
            // console.log("NFT IPFS upload is completed, NFT is stored at : ", `https://ipfs.io/ipfs/${tokenURI}`);
            console.log("NFT IPFS upload is completed, NFT is stored at : ", tokenURL);


            const contract = new ethers.Contract(selectedCollection.contract721Address, contract721ABI, signer);
            console.log(contract);

            if (signer === undefined) {
                alert("Please connect your wallet");
                return;
            }


            let tempState = "Name : " + name + "\n" +
                "Would you mint the NFT?";
            // let tempConfirm = window.confirm(tempState);
            let tempConfirm = true;

            if (tempConfirm) {


                try {


                    const contractWithSigner = contract.connect(signer)

                    const tx = await contractWithSigner.mintSingle(tokenURL)

                    const rc = await tx.wait()


                    // alert("Your NFT is successfully minted!");

                    console.log(tx);

                    console.log(rc);
                } catch (error) {
                    setIsLoading(false);
                }

            }

        } else {
            alert("Please fill out all the fields");
        }
        setIsLoading(false);
    }


    return (
        <StyledBox

        >

            <div style={test}>

                <section className="container">
                    <Container {...getRootProps({ isFocused, isDragAccept, isDragReject })}>
                        <input {...getInputProps()} />
                        <p>Drag 'n' drop some files here, or click to select files</p>
                    </Container>
                    <aside style={thumbsContainer}>
                        {thumbs}
                    </aside>
                </section>
            </div>

            <form

                onSubmit={handleIpfs}
                style={{ display: 'flex', flexDirection: 'column', }}

            >


                <TextField
                    label="Name"
                    name="name"
                    value={name}
                    onChange={handleNameChange}
                />


                <TextField
                    label="Description"
                    name="description"
                    value={description}
                    onChange={handleDescriptionChange}
                />

                <Button variant='contained' type="submit">Create NFT</Button>
            </form>
        </StyledBox>
    );
}







// const useStyles = makeStyles((theme) => ({
//   form: {
//     '& .MuiTextField-root': {
//       margin: theme.spacing(1),
//       width: '25ch',
//     },
//   },
// }));


// image cid 에 앞에 https://ipfs.io/ipfs/ 붙여서 넣어야함
// function NFTMetadataForm({ imageCID }) {
//     //   const classes = useStyles();
//     const [metadata, setMetadata] = useState({ name: '', description: '', image: `https://ipfs.io/ipfs/${imageCID}` });

//     const handleChange = (event) => {
//         setMetadata({ ...metadata, [event.target.name]: event.target.value });
//     };


//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         console.log(metadata);
//         // const image = getExampleImage(metadata.image); // metadata.image가 안바뀜
//         // const image = getExampleImage("http://ipfs.io/ipfs/" + imageCID); // metadata.image가 안바뀜
//         const image = "http://ipfs.io/ipfs/" + imageCID;
//         // code to handle NFT metadata submission goes here
//         const metadataForUpload = {
//             name: metadata.name.toString(),
//             description: metadata.description.toString(),
//             image,
//         }
//         let mCid = await ipfsUploadMetadata(metadataForUpload);
//         console.log(mCid);


//     };

//     return (
//         <form

//             onSubmit={handleSubmit}
//             style={{ display: 'flex', flexDirection: 'column', width: "100%", margin: '24px' }}

//         >
//             <TextField
//                 label="Name"
//                 name="name"
//                 value={metadata.name}
//                 onChange={handleChange}
//             />
//             <TextField
//                 label="Description"
//                 name="description"
//                 value={metadata.description}
//                 onChange={handleChange}
//             />
//             {/* <TextField
//                 label="Image URL"
//                 name="image"
//                 value={`https://ipfs.io/ipfs/${imageCID}`}
//                 // onChange={handleChange}
//             /> */}
//             <Button variant='contained' type="submit">Submit</Button>
//         </form>
//     );
// }
