import { Box, Paper, Typography } from '@mui/material';
import { Component, ErrorInfo, ReactNode } from 'react';
import { BsFillEmojiTearFill } from "react-icons/bs";

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    // This lifecycle method is used to update the state when an error occurs
    static getDerivedStateFromError() {
        return { hasError: true };
    }

    // This method logs error information (you can customize it to log to an external service)
    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Error occurred:", error, errorInfo);
    }

    // Render a fallback UI when an error occurs
    render() {
        if (this.state.hasError) {
            return (
                <Box sx={{
                    width: '100%',
                    height: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Paper elevation={5} sx={{
                        p: 4,
                        borderRadius: 5,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <BsFillEmojiTearFill size={50} color='red' />
                        <Typography variant='h5' textAlign={'center'} fontWeight={'bold'}>Something went wrong.</Typography>
                        <Typography variant='h6' textAlign={'center'}>Please try again later.</Typography>
                    </Paper>
                </Box>
            );
        }

        return this.props.children; // Render children if no error occurred
    }
}

export default ErrorBoundary;
