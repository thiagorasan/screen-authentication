import { TextInput } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled(TextInput)`
    width: 100%;
    height: 46px;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.COLORS.TITLE};
    font-size: 14px;
    padding: 7px 0;
    padding-left: 20px;
    margin-bottom: 2px;
`;