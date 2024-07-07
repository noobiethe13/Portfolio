import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { RiRobot2Line } from 'react-icons/ri';
import { CgClose } from 'react-icons/cg';
import { RiSendPlaneFill } from 'react-icons/ri';

const Chatbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [sessionId, setSessionId] = useState('');
  const [isTyping, setIsTyping] = useState(false);  
  const chatBoxRef = useRef(null);

  const TypingIndicator = () => (
    <div className="flex items-center space-x-2 p-2 bg-gray-100 rounded-lg max-w-[100px]">
      <div className="w-3 h-3 bg-gray-400 rounded-full animate-bounce"></div>
      <div className="w-3 h-3 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
      <div className="w-3 h-3 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
    </div>
  );

  useEffect(() => {
    setSessionId(Math.random().toString(36).substring(7));
  }, []);

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (inputMessage.trim() === '') return;
  
    const newMessage = { text: inputMessage, sender: 'user' };
    setMessages([...messages, newMessage]);
    setInputMessage(''); // Clear the input
    setIsTyping(true);
  
    try {
      const response = await axios.post('http://localhost:5000/chat', 
        { message: inputMessage },
        { headers: { 'Session-Id': sessionId } }
      );
      const botMessage = { text: response.data.response, sender: 'bot' };
      setMessages(prevMessages => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
    } finally{
        setIsTyping(false);
    }
  };

  return (
    <>
      <button
        className="fixed bottom-4 right-4 bg-cyan-500 text-white p-4 rounded-full size-16 shadow-lg flex items-center justify-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <CgClose size={30} /> : <RiRobot2Line size={30} />}

      </button>
      {isOpen && (
        <div className="fixed bottom-20 right-4 w-[90vw] h-[70vh] max-w-2xl max-h-[36rem] bg-white rounded-lg shadow-xl flex flex-col sm:w-[80vw] md:w-[60vw] lg:w-[40vw]">
          <div className="bg-cyan-500 text-white p-2 rounded-t-lg">
            Chat with Deb.ion
          </div>
          <div ref={chatBoxRef} className="flex-1 overflow-y-auto p-2">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-2 ${
                  message.sender === 'user' ? 'text-right' : 'text-left'
                }`}
              >
                <span
                  className={`inline-block p-2 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-cyan-500 text-white'
                      : 'bg-gray-200 text-black'
                  }`}
                >
                  {message.text}
                </span>
              </div>
            ))}
            {isTyping && <TypingIndicator />}
          </div>
          <div className="p-4 border-t flex items-center">
  <input
    type="text"
    value={inputMessage}
    onChange={(e) => setInputMessage(e.target.value)}
    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
    className="flex-grow p-2 border rounded-l text-black focus:outline-none focus:ring-2 focus:ring-cyan-500"
    placeholder="Type your message..."
  />
  <button
    onClick={handleSendMessage}
    className="bg-cyan-500 text-white p-2 rounded-r hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
  >
    <RiSendPlaneFill size={24} />
  </button>
</div>
        </div>
      )}
    </>
  );
};

export default Chatbox;