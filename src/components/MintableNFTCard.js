import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import { Button } from '@mui/material';

const StyledNiftyGatewayCardContainer = styled(Card)(({ theme }) => ({
    height: '415px',
    // height: '445px',
    width: '278px',
    padding: '12px',


}));

const StyledNiftyGatewayCard = styled(Card)(({ theme }) => ({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    height: "100%",
}));

const StyledNiftyGatewayCardMediaContainer = styled(Card)(({ theme }) => ({
    position: 'relative',
    borderRadius: '12px 12px 0px 0px',
    overflow: 'hidden',
    textAlign: 'center',
    paddingBottom: '100%',
    height: '0px',
    transform: 'translateZ(0px)'
}));

const StyledCardMedia = styled(CardMedia)({
    display: 'initial',
    pointerEvents: 'none',
    position: 'absolute',
    top: '0px',
    left: '0px',
    // width: '100%',
    // height: '100%',
    width: '254px',
    height: '254px',
    objectFit: 'cover',
    zIndex: '-1'
});

const StyledNiftyGatewayCardContentContainer = styled(Card)(({ theme }) => ({
    position: 'relative',
    // backgroundColor: 'white',
    backgroundColor: "#474d57",
    borderRadius: '0px 0px 12px 12px',
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid rgb(252, 213, 53)',
    flex: '1 1 0%',
    padding: '12px'
}));





const StyledName = styled(Typography)(({ theme }) => ({
    margin: '0px 24px 4px 0px',
    textDecoration: 'none',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    fontWeight: '700',
    fontSize: '16px',
    lineHeight: '1.5',
    fontFamily: 'MessinaSans, sans-serif'

}));


const StyledPrice = styled(Typography)(({ theme }) => ({
    margin: '0px 0px 4px',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '14px',
    fontFamily: 'MessinaSans, sans-serif',
    lineHeight: '1.5'

}));

const StyledFloorePrice = styled(Typography)(({ theme }) => ({
    margin: '0px',
    textDecoration: 'none',
    // color: 'rgb(97, 97, 97)',
    fontWeight: '600',
    fontSize: '12px',
    lineHeight: '1.5',
    fontFamily: 'MessinaSans, sans-serif'

}));

const StyledEditionsBox = styled(Box)(({ theme }) => ({

    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 0%',
    paddingTop: '8px',
    marginTop: '8px',
    borderTop: '1px solid rgb(238, 238, 238)'
}));


const StyledEdition = styled(Box)(({ theme }) => ({

    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 0%',
    minHeight: 'initial'
}));

const StyledEditionRow = styled(Box)(({ theme }) => ({

    display: 'flex',
    WebkitBoxPack: 'justify',
    justifyContent: 'space-between',
    WebkitBoxAlign: 'center',
    alignItems: 'center',
    flexWrap: 'nowrap',
    gap: '32px'
}));

const StyledEditionRowName = styled(Typography)(({ theme }) => ({

    margin: '0px',
    textDecoration: 'none',
    // color: 'rgb(97, 97, 97)',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '1.5',
    fontFamily: 'MessinaSans, sans-serif'



}));

const StyledEditionRowValue = styled(Typography)(({ theme }) => ({


    margin: '0px',
    textDecoration: 'none',
    textAlign: 'right',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '1.5',
    fontFamily: 'MessinaSans, sans-serif'


}));

const StyledChainLogo = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: '12px',
    right: '12px',

}));

const NiftyGatewayCard = ({ nft }) => {
    const { title, description, imageUrl, creator, price } = nft;


    function handleMint() {
        console.log("minting");
    }

    return (
        <StyledNiftyGatewayCardContainer>
            <StyledNiftyGatewayCard>
                <StyledNiftyGatewayCardMediaContainer>
                    <StyledCardMedia component="img" height="200" image={imageUrl} alt={title} />
                </StyledNiftyGatewayCardMediaContainer>
                <StyledNiftyGatewayCardContentContainer>
                    <StyledChainLogo>

                        <img src="https://www.niftygateway.com/static/media/polygon.eac3b5bb94b5760aeb108cc4d95c9921.svg" alt="Polygon Logo" width="20" height="20" />
                    </StyledChainLogo>

                    {/* <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="text.primary">
                            {description}
                        </Typography> */}

                    {/* <Typography variant="subtitle1">Creator: {creator}</Typography>
                        <Typography variant="subtitle1">Price: {price} ETH</Typography> */}

                    <StyledName component="p">
                        {title}
                    </StyledName>
                    <StyledPrice component="p">
                        <span>$37.00</span>
                        &nbsp;
                        <StyledFloorePrice component="span">
                            = 12 MATIC
                        </StyledFloorePrice>
                    </StyledPrice>
                    <StyledEditionsBox>
                        <StyledEdition>
                            <StyledEditionRow>
                                <StyledEditionRowName component="p">
                                    Editions
                                </StyledEditionRowName>
                                <StyledEditionRowValue component="p">
                                    10/100
                                </StyledEditionRowValue>
                            </StyledEditionRow>
                            <Button
                                sx={{
                                    height: '24px',
                                }}
                                fullWidth size='small' variant='contained'
                                onClick={handleMint}
                            >
                                MINT
                            </Button>
                        </StyledEdition>
                    </StyledEditionsBox>
                </StyledNiftyGatewayCardContentContainer>
            </StyledNiftyGatewayCard>
        </StyledNiftyGatewayCardContainer>
    );
};

export default NiftyGatewayCard;