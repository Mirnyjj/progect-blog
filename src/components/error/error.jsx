import { styled } from "styled-components";
import PropTypes from 'prop-types';
import { H2 } from "../h2/h2";
import { PROP_TYPE } from "../../constants";

const Div = styled.div`
    display: flex;
    text-alight: center;
    align-items: center;
    flex-direction: column;
`;

export const Error = ({error}) => error && 
    <Div>
        <H2>Ошибка</H2>
        <div>{error}</div>
    </Div>;

Error.propTypes = {
    error: PROP_TYPE.ERROR,
}
