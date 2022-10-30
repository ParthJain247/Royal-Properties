import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

import {Flex,Box,Text,Button} from '@chakra-ui/react';

import {fetchApi} from '../utils/fetchApi'

import Property from '../components/Property';



//NEW BANNER !
//NEW BANNER !
//NEW BANNER !

 const Banner = ({ purpose, title1, title2, desc1, desc2, buttonText, linkName, imageUrl }) => (
  <Flex flexWrap='wrap' justifyContent='center' alignItems='center' m='10'>
  <Box paddingTop='0' paddingBottom='10'>
    <Image src={imageUrl} width="1200px" height="600px" alt="banner" /> 
    <Box p='5'>
      <Text color='gray.500' fontSize='lg' fontWeight='medium'>{purpose}</Text>
      <Text fontSize='5xl' fontWeight='bold'>{title1} {title2}</Text>
      <Text fontSize='xl' paddingTop='3' paddingBottom='3' color='gray.700'>{desc1}<br />{desc2}</Text>
      <Button fontSize='xl'>
        <Link href={linkName}><a>{buttonText}</a></Link>
      </Button>
    </Box>
  </Box>
  </Flex>
);

// Testing Prev Code is Commented 
//OLD BANNER
//OLD BANNER
//OLD BANNER
{/* <Flex flexWrap='wrap' justifyContent='center' alignItems='center' m='10'>
    <Image src={imageUrl} width="100%" height="60%" alt="banner"/> 
    <Box p='5'>
      <Text color='gray.500' fontSize='sm' fontWeight='medium'>{purpose}</Text>
      <Text fontSize='3xl' fontWeight='bold'>{title1}<br />{title2}</Text>
      <Text fontSize='lg' paddingTop='3' paddingBottom='3' color='gray.700'>{desc1}<br />{desc2}</Text>
      <Button fontSize='xl'>
        <Link href={linkName}><a>{buttonText}</a></Link>
      </Button>
    </Box>
  </Flex> */}


export default function  Home({propertiesForSale,propertiesForRent} ) { 
  
  console.log(propertiesForSale,propertiesForRent);
  
  return(
  <div className='home'>
  <div className='top_banner'>
      <div className='top_text'>

        <h2>Find your dream home</h2>
        <h3>Move to What Moves You...</h3>

      </div>
  </div>
  <Box>
    <Banner
      purpose='RENT A HOME'
      title1='Rental Homes for'
      title2='Everyone'
      desc1=' Explore all available Apartments, Floors, Villas'
      desc2='and more'
      buttonText='Explore Renting'
      linkName='/search?purpose=for-rent'
      imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'
    />
    <Flex flexWrap='wrap' justifyContent='center' alignItems='center' m='10'>
      {propertiesForRent.map((property) => <Property property={property} key={property.id} />)}
    </Flex>
    <Banner
      purpose='BUY A HOME'
      title1=' Find, Buy & Own Your'
      title2='Dream Home'
      desc1=' Explore all avaiable Apartments,Lands , Floors ,'
      desc2=' Villas and more'
      buttonText='Explore Buying'
      linkName='/search?purpose=for-sale'
      imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008'
    />
    <Flex flexWrap='wrap' justifyContent='center' alignItems='center' m='10'>
      {propertiesForSale.map((property) => <Property property={property} key={property.id} />)}
    </Flex>
  </Box>
  </div>
)
}


export async function getStaticProps(){
  const propertyForSale=await fetchApi('https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=12');
  const propertyForRent=await fetchApi('https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=12');

  return {
    props:{
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    }
  }





}
