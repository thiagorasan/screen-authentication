import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { TextInputProps } from 'react-native';
import { Container } from './styles';


export function InputForm({...rest}){
    return(
                <Container {...rest} />
    )
}