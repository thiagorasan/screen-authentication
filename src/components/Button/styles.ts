import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';



export const Container = styled(RectButton)`
    flex: 1;
    max-height: 46px;
    min-height: 46px;
    border: none;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.COLORS.SHAPE};
`;

export const Title = styled.Text`
    text-align: center;
    font-size:  30px;
    font-weight: 400;
    text-align: center;
    color: ${({theme}) => theme.COLORS.TITLE_BUTTON};
`;

