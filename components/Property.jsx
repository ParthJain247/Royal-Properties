import Link from "next/link";
import Image from "next/image";
import {Box,Flex,Text,Avatar} from '@chakra-ui/react';
import {FaBed,FaBatch,FaBath}from 'react-icons/fa';
import {BsGridFill} from 'react-icons/bs';
import {GoVerified} from 'react-icons/go';
import millify from "millify";
import defaultImage from '../assets/house.jpg'

const Property = ({ property:{coverPhoto,price,baths,rentFrequency,rooms,title,batchs,area,agency,isVerified,furnishingStatus,externalID}})=>{
        return(
        <Link href={`/property/${externalID}`} passHref>
        <Flex flexWrap="wrap" w="420px" p="5" paddingTop="0" justifyContent="flex-start" cursor="pointer">
            <Box>
                <Image width="420px" height="260px" src={coverPhoto?coverPhoto.url:defaultImage} alt="house" />
            </Box>
        <Box w="full">
            <Flex paddingTop="2" alignItems="center" justifyContent="space-between">
                <Flex alignItems="center">
                    <Box paddingRight="3" color="green.400">{isVerified && <GoVerified/>}</Box>
                    <Text fontWeight="bold" fontSize="lg"> INR {millify(price)}{rentFrequency && `/${rentFrequency}`} </Text>
                </Flex>
                <Box >
                <Avatar size="lg" src={agency?.logo?.url}></Avatar>
                </Box>
                
            </Flex>
            <Flex alignItems="center" p="1" justifyContent="space-between" w="260px" color="Blue.400">
                    {rooms} <FaBed/> | {baths} <FaBath/> | {millify(area)} sqft <BsGridFill/>
            </Flex>
            <Text fontSize="lg">
                {title.length > 40? `${title.substring(0,40)}...`:title}
            </Text>
        </Box>    
        </Flex> 
    </Link>)
        
}

export default Property;