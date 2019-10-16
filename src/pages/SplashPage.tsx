import React from 'react';
import styled from 'styled-components';
import LoadingLine from '../components/LoadingLine';

const ContentWrapper = styled.div`
    background-image: url('/img/ian-stauffer-uftqFbfWGFY-unsplash.jpg');
    background-size: cover;
    width: 100%;
    height: 100vh;
    overflow: auto;
`;

const Content = styled.div`
    margin:  20% auto 0 auto;
    text-align: center;
`;

export default function SplashPage() {
    return (
        <ContentWrapper>
            <Content>
                <h1>Ascend</h1>
                <LoadingLine />
                <h1>Inward</h1>
            </Content>
        </ContentWrapper>
    )
}