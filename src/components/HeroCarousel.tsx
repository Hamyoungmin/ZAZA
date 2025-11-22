'use client';

import { useState, useEffect } from 'react';
import styles from './HeroCarousel.module.css';

const slides = [
  {
    id: 1,
    image: '/Main.png',
    title: '가족과 떠나는 즐거운 제주 여행',
    description: 'Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit.',
  },
  {
    id: 2,
    image: '/Main(Right).png',
    title: '가족과 떠나는 즐거운 제주 여행',
    description: 'Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit.',
  },
  {
    id: 3,
    image: '/Main.png',
    title: '가족과 떠나는 즐거운 제주 여행',
    description: 'Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit.',
  },
];

interface HeroCarouselProps {
  onNavigate?: () => void;
}

export default function HeroCarousel({ onNavigate }: HeroCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // 자동 슬라이드 (선택사항)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.heroSection}>
      <div className={styles.carouselContainer}>
        {/* 슬라이드 이미지 배경 */}
        <div
          className={styles.slideBackground}
          style={{
            backgroundImage: `url(${slides[currentSlide].image})`,
          }}
        >
          {/* 오버레이 */}
          <div className={styles.overlay}></div>
        </div>

        {/* 이전 버튼 */}
        <button className={styles.prevButton} onClick={prevSlide}>
          ❮
        </button>

        {/* 다음 버튼 */}
        <button className={styles.nextButton} onClick={nextSlide}>
          ❯
        </button>

        {/* 슬라이드 콘텐츠 */}
        <div className={styles.slideContent}>
          <div className={styles.textBox}>
            <h2 className={styles.slideTitle}>{slides[currentSlide].title}</h2>
            <p className={styles.slideDescription}>
              {slides[currentSlide].description}
            </p>
          </div>
        </div>

        {/* 인디케이터 */}
        <div className={styles.indicators}>
          {slides.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${
                currentSlide === index ? styles.activeIndicator : ''
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`슬라이드 ${index + 1}로 이동`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

