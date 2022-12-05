import styled from "styled-components"
import colors from "../assets/css/colors"

export default function Footer({deck}) {
	return (
		<>
			<StyledFooter data-test="footer">
				CONCLUÍDOS 0/{deck.length}
			</StyledFooter>
		</>
	);
}

const StyledFooter = styled.div`
	width: 100%;
	min-height: 50px;
	background-color: #ffffff;
	position: fixed;
	bottom: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-family: "Recursive";
	font-weight: 400;
	font-size: 18px;
	color: #333333;
	padding: 10px;
`;