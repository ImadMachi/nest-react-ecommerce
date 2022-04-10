import styled from "styled-components";

interface ImageProps {
    promo:string
}

export const Image=styled.img<ImageProps>`
height:300px;
width: 300px;
margin: 50px auto 100px;
position:relative;
border-radius: 50%;
background-repeat: no-repeat;
background-size: contain;
`
