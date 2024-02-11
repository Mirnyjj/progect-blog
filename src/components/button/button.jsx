import { styled } from "styled-components"


const ButtonContainer = ({className, children, widht, disabled, ...props}) => {
    return (
        <button disabled={disabled} className={className} {...props}>{children}</button>
    )
}

export const Button = styled(ButtonContainer)`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    width: ${({widht = '100%'}) => widht};
    height: 32px;
    border: 1px solid #000;
    background-color: #eee;

    &:hover {
        cursor: ${({disabled}) => disabled ? 'default' : 'pointer'}; 
    }
`