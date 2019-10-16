import React from 'react';
import styled from 'styled-components';
import Theme from '../Theme';

const Line = styled.div`
    width: 20px;
    transition: width 2000ms ease-in-out;
    height: 3px;
    background-color: ${Theme.colors.darkBackground};
    margin: auto;
    display: flex;

    &.ai-loadingline-grow {
        width: 500px;
    }
`;

export interface ILoadingLineState {
    isGrowing?: boolean;
}

class LoadingLine extends React.Component<{}, ILoadingLineState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            isGrowing: undefined,
        };
        this.resetGrowth = this.resetGrowth.bind(this);
    }

    resetGrowth(isGrowing: boolean) {
        setTimeout(() => {
            this.setState({
                isGrowing: isGrowing,
            });
            this.resetGrowth(!isGrowing);
        }, 2000);
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isGrowing: true,
            });
        }, 10);
        this.resetGrowth(false);
    }

    render() {
        let className = '';
        if (this.state.isGrowing === true) {
            className = 'ai-loadingline-grow';
        } else if (this.state.isGrowing === false) {
            className = 'ai-loadingline-shrink';
        }

        return <Line className={className} />
    }
}

export default LoadingLine;