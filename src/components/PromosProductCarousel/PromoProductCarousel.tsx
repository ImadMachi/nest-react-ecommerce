import { Carousel } from "react-bootstrap"
import { ProductInterface } from "../../models"
import { dummyProducts } from "../../statics/dummy-products"
import * as S from "./PromoProductCarousel.styles";

const PromoProductCarousel = () => {
  return (
    <Carousel className="mt-4 bg-dark">
      {dummyProducts.map((product: ProductInterface)=>(
<Carousel.Item>
<Carousel.Caption>
      <h3>{product.brand}</h3>
    </Carousel.Caption>
    <S.Image
      className="d-block"
      src={product.image}
      promo="-27%"
    />
  </Carousel.Item>
      ))}
  
 
</Carousel>
  )
}

export default PromoProductCarousel