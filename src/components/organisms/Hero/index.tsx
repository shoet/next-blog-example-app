type HeroProps = {
  title: string
  subTitle: string
}

const Hero = (props: HeroProps) => {
  const { title, subTitle } = props
  return (
    <div>
      <h1>{title}</h1>
      <p>{subTitle}</p>
    </div>
  )
}

export default Hero
