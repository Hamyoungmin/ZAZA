'use client';

import { useState } from 'react';
import styles from './LiveChat.module.css';

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: '안녕하세요! 무엇을 도와드릴까요?', isUser: false }
  ]);
  const [inputValue, setInputValue] = useState('');

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setMessages([...messages, { text: inputValue, isUser: true }]);
      setInputValue('');
      
      // 자동 응답 시뮬레이션 (실제로는 백엔드나 챗봇 API와 연동)
      setTimeout(() => {
        setMessages(prev => [
          ...prev,
          { text: '메시지를 받았습니다. 잠시만 기다려 주세요.', isUser: false }
        ]);
      }, 1000);
    }
  };

  return (
    <>
      {/* 채팅 버튼 */}
      <button
        className={styles.chatButton}
        onClick={toggleChat}
        aria-label="실시간 상담"
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 2H4C2.9 2 2.01 2.9 2.01 4L2 22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM6 9H18V11H6V9ZM14 14H6V12H14V14ZM18 8H6V6H18V8Z"
            fill="white"
          />
        </svg>
      </button>

      {/* 채팅 팝업 */}
      {isOpen && (
        <div className={styles.chatPopup}>
          <div className={styles.chatHeader}>
            <h3>실시간 상담</h3>
            <button
              className={styles.closeButton}
              onClick={toggleChat}
              aria-label="닫기"
            >
              ✕
            </button>
          </div>

          <div className={styles.chatMessages}>
            {messages.map((message, index) => (
              <div
                key={index}
                className={`${styles.message} ${
                  message.isUser ? styles.userMessage : styles.botMessage
                }`}
              >
                {message.text}
              </div>
            ))}
          </div>

          <form className={styles.chatInput} onSubmit={handleSendMessage}>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="메시지를 입력하세요..."
              className={styles.input}
            />
            <button type="submit" className={styles.sendButton}>
              전송
            </button>
          </form>
        </div>
      )}
    </>
  );
}


