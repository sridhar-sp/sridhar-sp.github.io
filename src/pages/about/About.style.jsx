import styled from 'styled-components'
// import { Constants } from 'pages/Landing/App.style'

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10% 5%;
`

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  /* display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto; */

  /* flex-basis: 50rem; */
  /* column */

  background-color: lightblue;
  width: 100%;

  /* row-gap: 1rem; */
  /* column-gap: 1%; */
  /* margin: 2%; */
`

const SimpleListItem = styled.div`
  /* flex: 1; */

  width: 49%;
  height: auto;
  border-style: solid;
  border-color: red;
  margin: 0;
`

const ItemElement = styled.h1`
  margin: 0;
`

export { ListContainer, SimpleListItem, ItemElement, AboutContainer }
