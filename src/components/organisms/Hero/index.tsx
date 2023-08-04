type HeroProps = {
  title: string
  subTitle: string
  imageOn?: boolean
}

const Hero = (props: HeroProps) => {
  const { title, subTitle, imageOn } = props
  return (
    <div>
      <h1>{title}</h1>
      <p>{subTitle}</p>
      {imageOn && <figure>画像</figure>}
    </div>
  )
}

export default Hero
