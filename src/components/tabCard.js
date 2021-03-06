import React from 'react'
import {HStack, VStack, Text, useColorModeValue, Box, Link, Image, Skeleton} from '@chakra-ui/react'
import {usePalette} from 'react-palette'

export const TabCard = ({name, image, link, description}) => {
	const {data, loading} = usePalette(image)

	return (
		<Link href={link} isExternal minW='100%'>
			<HStack p={4} bg={data.darkMuted} rounded='xl' w='100%' textAlign='left' align='start' spacing={4} _hover={{shadow: 'md'}}>
				<Box rounded='lg' p={2} position='relative' overflow='hidden' lineHeight={0} boxShadow='inset 0 0 1px 1px rgba(0, 0, 0, 0.015)'>
					<Box bg={data.vibrant} position='absolute' top={0} bottom={0} left={0} right={0} opacity={0.25}></Box>
					{loading ? <Skeleton height={26} width={26} rounded='md' /> : <Image src={image} height={26} width={26} layout='fixed' rounded='md' />}
				</Box>
				<VStack align='start' spacing={1} justify='flex-start' h='100%' maxW='500px'>
					<VStack spacing={0} align='stretch'>
						<Text fontWeight='bold' fontSize='md' noOfLines={1} overflow='hidden'>
							{name}
						</Text>
						<Text fontSize='sm' color={useColorModeValue('gray.500', 'gray.200')}>
							{description}
						</Text>
					</VStack>
				</VStack>
			</HStack>
		</Link>
	)
}
