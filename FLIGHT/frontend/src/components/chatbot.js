import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
const theme = {
	background: 'white',
	headerBgColor: 'blue',
	headerFontSize: '20px',
	botBubbleColor: 'blue',
	headerFontColor: 'white',
	botFontColor: 'white',
	userBubbleColor: '#FF5733',
	userFontColor: 'white',
};

const config = {
	botAvatar: "https://th.bing.com/th?id=OIP.f3DM2upCo-p_NPRwBAwbKQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
	floating: true,
};

const FlightChatbot = () => {
  const steps = [
    {
      id: '1',
      message: 'Welcome to Flight Booking Chatbot. How can I assist you today?',
      trigger: '2',
    },
    {
      id: '2',
      options: [
        { value: 'flight_info', label: 'Tell me about available flights', trigger: 'flight_info' },
        { value: 'booking_help', label: 'Help with booking', trigger: 'booking_help' },
        { value: 'contact_info', label: 'Contact information', trigger: 'contact_info' },
      ],
    },
    {
      id: 'flight_info',
      message: 'We offer a wide range of flight options for various destinations. Please let us know your departure and destination cities, travel date, and any specific preferences, and we\'ll provide you with the best flight options.',
      end: true,
    },
    {
      id: 'booking_help',
      message: 'To book a flight, you can visit our website or call our customer support at 0124-6173838 or 0124-4973838.',
      end: true,
    },
    {
      id: 'contact_info',
      message: 'You can reach us at our corporate office:\nLevel 1, Tower C, Global Business Park, Mehrauli-Gurgaon Road, Gurgaon – 122 002, Haryana, India.\nTel: +91 (0)124 435 2500',
      end: true,
    },
  ];

  return (
    <div className="chatbot">
	<ThemeProvider theme={theme}>
      <ChatBot headerTitle="" steps={steps} {...config}/>
    </ThemeProvider>
	</div>
  );
};

export default FlightChatbot;
