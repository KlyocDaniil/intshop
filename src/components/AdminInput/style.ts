import { styled } from 'styled-components'

export const InputAdminForm = styled.form`
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      border: 1px solid black;
      margin-top: 2%;
      width: 70%;
`

export const InputEnter = styled.div `
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 80%;
  justify-content: space-between;
  border: 2px solid black;
  padding: 1% 1%;
  margin: 1% 2%;
`

export const ClearInput = styled.input`
      border: 2px solid #ccc;
      border-radius: 5px;
      padding: 0.5rem 1rem;
      width: 100%;
      height: 5%;
      align-items: center;
      justify-content: center;
      margin: 1% 1%;
      outline: #ccc;
`