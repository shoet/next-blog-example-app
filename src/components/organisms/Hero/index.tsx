import Text from '@/components/atoms/Text'
import Box from '@/components/layout/Box'

type HeroProps = {
  title: string
  subTitle: string
  imageOn?: boolean
}

const Hero = (props: HeroProps) => {
  const { title, subTitle, imageOn } = props
  return (
    <>
      <Box marginBottom={1}>
        <Text fontSize="160px" fontWeight="bold" letterSpacing="large">
          {title}
        </Text>
      </Box>
      <Box>
        <Text variant="medium">{subTitle}</Text>
      </Box>
      {imageOn && <figure>画像</figure>}
    </>
  )
}

export default Hero
