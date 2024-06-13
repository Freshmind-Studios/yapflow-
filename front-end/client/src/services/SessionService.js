import { useEffect } from 'react';
import Config from '../Config';
import AuthService from '../services/AuthService';

const SessionService = () => {
    useEffect(() => {
        let session;

        const setupWebSocket = async () => {
            try {
                const { valid } = await AuthService.status();
                if (valid) {
                    session = new WebSocket(Config.wsURL);

                    session.onmessage = (event) => {
                        const data = JSON.parse(event.data);

                        switch (data.function) {
                            case "activity":
                                session.send(JSON.stringify({ function: data.function }));
                                break;
                            default:
                                console.log(`Unhandled function: ${data.function}`);
                        }
                    };

                    session.onclose = () => {
                        console.log('WebSocket closed');
                    };

                    session.onerror = (error) => {
                        console.error('WebSocket error:', error);
                    };
                }
            } catch (error) {
                console.error('Error setting up WebSocket:', error);
            }
        };

        setupWebSocket();

        // vyčištění websocketu při uzavření
        return () => {
            if (session) {
                session.close();
            }
        };
    }, []);

    return null;
};

export default SessionService;