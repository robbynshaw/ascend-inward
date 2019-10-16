import React from 'react';
import SplashPage from '../pages/SplashPage';

export interface IWithSplashScreenState {
    loading: boolean;
}

export interface IWithSplashScreenProps {
    children: React.ReactNode;
}

class WithSplashScreen extends React.Component<IWithSplashScreenProps, IWithSplashScreenState> {
    constructor(props: IWithSplashScreenProps) {
        super(props);
        this.state = {
            loading: true,
        }
    }

    async componentDidMount() {
        try {
            setTimeout(() => {
                this.setState({
                    loading: false,
                });
            }, 5000);
        } catch (err) {
            alert(err);
            this.setState({
                loading: false,
            });
        }
    }

    render() {
        if (this.state.loading) {
            return (
                <SplashPage />
            );
        }
        return this.props.children;
    }
}

export default WithSplashScreen;