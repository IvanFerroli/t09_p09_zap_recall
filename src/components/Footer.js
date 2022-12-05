import styled from "styled-components"
import colors from "../assets/css/colors"

export default function Footer() {
    const { RED, YELLOW, GREEN } = colors
	return (
		<>
			<StyledFooter>
				<StyledButtons>
					<OptionButton
						color={RED}
					>
						Não lembrei
					</OptionButton>
					<OptionButton
						color={YELLOW}
					>
						Quase não lembrei
					</OptionButton>
					<OptionButton
						color={GREEN}
					>
						Zap!
					</OptionButton>
				</StyledButtons>
				CONCLUÍDOS 0/10
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
const StyledButtons = styled.div`
	display: flex;
	width: 80%;
	justify-content: space-between;
	margin: 20px;
`;
const OptionButton = styled.button`
	width: 90px;
	font-family: "Recursive";
	font-style: normal;
	font-weight: 400;
	font-size: 12px;
	line-height: 14px;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	color: #ffffff;
	background: ${(props) => props.color};
	border-radius: 5px;
	border: 1px solid ${(props) => props.color};
	padding: 5px;
`;
