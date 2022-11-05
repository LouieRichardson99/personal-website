import Default from "./Default"
import Minimal from "./Minimal"

const Hero = ({ slice: { primary, items, variation }, index }) => {
  const componentMap = {
    default: Default,
    minimal: Minimal,
  }

  const VariableComponent = componentMap[variation]

  return <VariableComponent {...primary} items={items} index={index} />
}

export default Hero
