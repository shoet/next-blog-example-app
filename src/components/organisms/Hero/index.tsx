import Text from '@/components/atoms/Text'
import Box from '@/components/layout/Box'
import Flex from '@/components/layout/Flex'
import Image from 'next/image'

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
        justifyContent={{ lg: 'space-between' }}
        alignItems={{ base: 'center' }}
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
          <Image
            src="/myImage.jpg"
            alt="centerImage"
            style={{ objectFit: 'contain' }}
            width={300}
            height={150}
          />
        )}
      </Flex>
    </>
  )
}

export default Hero
