import { useState } from "react"
import styled from "styled-components";
import GlobalStyle from "./assets/css/GlobalStyle"
import deck from "./Deck";
import Header  from "./components/Header";
import Footer from "./components/Footer";
import Display from "./components/Display";

function App() {
  const [isOpened, setOpened] = useState([])
  const [isFliped, setFliped] = useState([])
	return (
		<StyledScreenContainer>
      <GlobalStyle />
			<Header />
      <Display deck={deck} isOpened={isOpened} isFliped={isFliped} setOpened={setOpened} setFliped={setFliped}/>
			<Footer deck={deck}/>
		</StyledScreenContainer>
	);
}

export default App;

const StyledScreenContainer = styled.div`

		background-color: #fb6b6b;
		width: 100vw;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0px;
		padding: 0px;
		padding-bottom: 200px;
	
`;
