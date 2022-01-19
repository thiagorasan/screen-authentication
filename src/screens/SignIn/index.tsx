import React, { useState } from 'react';
import { View, Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Alert } from 'react-native';
import { InputForm } from '../../components/InputForm';
import foxPng from './../../assets/fox.png';

import { Button } from '../../components/Button';
import {
    Container,
    Header,
    Brand,
    Title,
    Content,
    Footer,
    Label,
    TextFooter,
    PasswordRescue,
    CreateAccount,
    LabelCreateAccount,
    ValidWrapper,
    InvalidWrapper,
    Error
} from './styles';




export function SignIn() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [alertHeader, setAlertHeader] = useState('');
    const [message, setMessage] = useState('');
    

    async function handleLogin() {
             if (email && senha){
                console.log(email, senha);
                const req = await fetch('https://processoreact.projetos.jrmendonca.com.br/Usuario/ValidaUsuario', {
                    method: 'POST',
                    body: JSON.stringify({
                        email,
                        senha,
                    }),
                    headers:{
                        "content-type": "application/json"
                    }
                });

                const loginReq = await req.json();
                
                if(loginReq.id == "100"){
                    setAlertHeader('100')
                    setMessage(loginReq.mensagem);
                } else{
                    setAlertHeader('101');
                    setMessage(loginReq.mensagem);
                }
            } else {
                Alert.alert("Preencha todos campos");
                
            }

            setEmail("");
            setSenha("");

    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Container>
                <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                    {alertHeader == "100" ?
                        <ValidWrapper>
                            <Error>{message}</Error>
                        </ValidWrapper> : alertHeader == "101" ? <InvalidWrapper>
                            <Error>{message}</Error>
                        </InvalidWrapper> : null
                    } 

                    <Header>
                        <Brand source={foxPng} />
                        <View>
                            <Title>BEM VINDO</Title>
                        </View>

                    </Header>

                    <Content>
                        <InputForm
                            placeholder='E-mail'
                            value={email}
                            keyboardType='email-address'
                            autoCapitalize='none'
                            autoCorrect={false}
                            onChangeText={e => setEmail(e)}
                        />

                        <InputForm
                            placeholder='Senha'
                            value={senha}
                            onChangeText={e => setSenha(e)}
                            secureTextEntry


                        />
                        <PasswordRescue>
                            <Label>Recuperar senha</Label>
                        </PasswordRescue>

                        <Button title="Acessar" onPress={handleLogin} />
                    </Content>
                </KeyboardAvoidingView>
                <Footer>
                    <TextFooter>Não tem conta? {'\n'}</TextFooter>
                    <CreateAccount>
                        <LabelCreateAccount>
                            Crie uma nova agora
                        </LabelCreateAccount>
                    </CreateAccount>
                </Footer>

            </Container>
        </TouchableWithoutFeedback>
    );
}


