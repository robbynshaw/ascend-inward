import React from 'react';
import styled from 'styled-components';
import Theme from '../Theme';

const ContentWrapper = styled.div`
    width: 100%;
    height: 100vh;
    overflow: auto;
    display: flex;
`;

const Content = styled.div`
    margin:  20% auto 0 auto;
    text-align: center;
`;

const Line = styled.div`
    width: 300px;
    height: 3px;
    background-color: ${Theme.colors.darkBackground};
    margin: auto;
`;

export default function SplashPage() {
    return (
        <ContentWrapper>
            {/* <ContentWrapperOverlay /> */}
            <Content>
                <h1>Home</h1>
                <Line />
                <h1>Page</h1>
            </Content>
        </ContentWrapper>
    )
}