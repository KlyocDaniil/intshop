import {styled} from "styled-components";

export const PostItemContainer = styled.div`
        display: flex;
        width: 300px;
        height: 300px;
        flex-direction: column;
        padding: 15px;
        border: 4px solid blueviolet;
        justify-content: space-between;
        align-items: center;
        border-radius: 10px;
        margin: 3% 0;
        background-color: cornflowerblue;
`

export const PostItemContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const ButtonsContainer = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-evenly;
  border: 2px solid black;
  align-items: center;
  margin: 2% auto;
`

export const PostButtons = styled.div`
  align-items: center;   
  display: flex;
  flex-direction: column;
  margin: 1% auto;
`