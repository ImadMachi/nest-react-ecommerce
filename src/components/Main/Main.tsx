import { Container } from "react-bootstrap"
import PromosProductCarousel from "../PromosProductCarousel"

const Main = () => {
  return (
<Container>
    <PromosProductCarousel/>
    <ProductByCategories />
</Container>
  )
}

export default Main