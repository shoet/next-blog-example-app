import Text from '@/components/atoms/Text'
import Box from '@/components/layout/Box'
import Flex from '@/components/layout/Flex'
import Image from 'next/image'
import heroImage from 'images/heroImage.jpg'

type HeroProps = {
  title: string
  subTitle: string
  imageOn?: boolean
}

const Hero = (props: HeroProps) => {
  const { title, subTitle, imageOn } = props
  return (
    <>
      <Flex
        flexDirection={{ base: 'column', lg: 'row' }}
        justifyContent={{ base: 'end', lg: 'end' }}
        alignItems={{ base: 'center', lg: 'start' }}
        marginBottom={{ base: 3, xl: 0 }}
      >
        <Box marginBottom={{ base: 3, xl: 0 }}>
          <Box marginBottom={1}>
            <Text
              fontSize={{ base: '36px', sm: '72px', md: '160px' }}
              fontWeight="900"
              letterSpacing="large"
            >
              {title}
            </Text>
          </Box>
          <Flex justifyContent={{ base: 'center', lg: 'start' }}>
            <Text variant="medium">{subTitle}</Text>
          </Flex>
        </Box>
        {imageOn && (
          <Box height="300px" marginBottom={{ base: 3, xl: 0 }}>
            <Image
              src={heroImage}
              alt="centerImage"
              layout="responsive"
              width={300}
              height={150}
              priority
              placeholder="blur"
            />
          </Box>
        )}
      </Flex>
    </>
  )
}

export default Hero
