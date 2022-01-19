import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { TextInput, TouchableOpacity } from 'react-native';


export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;
export const Header = styled.SafeAreaView`
    height: 40%;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
    margin-top: 80px;
`;

export const Brand = styled.Image.attrs({
    resizeMode: 'contain'
})`
    min-height: ${RFValue(30)}px;
    max-height: ${RFValue(100)}px;;
`;


export const Content = styled.View`
    min-height: 10%;
    max-height: 20%;
    width: 100%; 
    padding: 20px 15px;
`;

export const PasswordRescue = styled(TouchableOpacity)`

`;

export const Label = styled.Text`
    text-align: right;
    font-size: 15px;
    padding: 10px 10px;
    color: ${({theme}) => theme.COLORS.TITLE};
`;


export const Title = styled.Text`
    font-size: 30px;
    color: ${({ theme }) => theme.COLORS.TITLE};
    font-weight: 300;
    letter-spacing: 3px;
    padding-top: ${RFValue(60)}px;

`;


export const Footer = styled.View`
    max-height: 100px;
    justify-content: flex-end;
    font-size: 15px;
    margin-top: 40px;
`;

export const CreateAccount = styled(TouchableOpacity)`
`;

export const TextFooter = styled.Text`
    width: 100%;
    text-align: center;
    font-size: 16px;
    align-self: flex-end;
    padding: 0;
`;

export const LabelCreateAccount = styled.Text`
    width: 100%;
    font-size: 16px;
    text-align: center;
    color: ${({theme}) => theme.COLORS.TITLE};
`;

export const ValidWrapper = styled.View`
    background-color: green ;
    width: 100%;
    height: 40px;
    justify-content: center;
`;

export const InvalidWrapper = styled.View`
    background-color: red;
    width: 100%;
    height: 40px;
    justify-content: center;
`;

export const Error = styled.Text`
    color: white;
    text-align: center;
`;