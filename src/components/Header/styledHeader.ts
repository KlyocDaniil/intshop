import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
    width: 100%;
    border: 1px solid black;
`

export const HeaderPersonalLink = styled.h3 `
      margin: auto 2%;
      font-family: Montserrat,sans-serif;
  
`

export const HeadLinks = styled.div`
      display: flex;
      flex-direction: row;
      margin: 0 2%;
      box-sizing: border-box;
`

export const InputHead = styled.input `
      width: 70%;
      height: 50px;
      margin: 1% 1%;
      border-radius: 20px;
      padding: 0.5rem 1rem;
      border: 1px solid blueviolet;
      outline: blueviolet;
`

export const HeadContent = styled.div`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
      align-items: center;
`

export const LinkMainLogo = styled.a`
      height: 24px;
      padding-left: 19px;
      width: 115px;
      font-weight: 900;
      font-size: larger;
      font-family: Montserrat,sans-serif;
`