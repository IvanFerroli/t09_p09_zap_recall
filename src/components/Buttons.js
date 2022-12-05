import styled from "styled-components"
import colors from "../assets/css/colors"

export default function BUttons() {
    const { RED, YELLOW, GREEN } = colors
	return (
		<>
			
				<StyledButtons>
					<OptionButton
						color={RED}
                        data-test="no-btn"
					>
						Não lembrei
					</OptionButton>
					<OptionButton
						color={YELLOW}
                        data-test="partial-btn"
					>
						Quase não lembrei
					</OptionButton>
					<OptionButton
						color={GREEN}
                        data-test="zap-btn"
					>
						Zap!
					</OptionButton>
				</StyledButtons>
		</>
	);
}

const StyledButtons = styled.div`
	display: flex;
	width: 90%;
	justify-content: space-between;
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
