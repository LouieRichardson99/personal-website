import Default from "./Default"
import Grid from "./Grid"

const Hero = ({ slice: { primary, items, variation }, index }) => {
  const componentMap = {
    default: Default,
    customServiceGrid: Grid,
  }

  const VariableComponent = componentMap[variation]

  return <VariableComponent {...primary} items={items} index={index} />
}

export default Hero
