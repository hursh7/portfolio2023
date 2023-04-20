import { useRef, useEffect, useCallback } from 'react';

const useScrollFadeIn = (direction = 'up', duration = 1, delay = 0) => {
  const element = useRef<any>(null);

  const handleDirection = (name: string) => {
    switch (name) {
      case 'up':
        return 'translate3d(0, 50%, 0)';
      case 'down':
        return 'translate3d(0, -50%, 0)';
      case 'left':
        return 'translate3d(50%, 0, 0)';
      case 'right':
        return 'translate3d(-50%, 0, 0)';
      default:
        return;
    }
  };

  const handleScroll: IntersectionObserverCallback = useCallback(
    ([entry]) => {
      const { current } = element;
      if (entry.isIntersecting) {
        // callback function에서 전달 받은 entry 배열을 확인하면서, isIntersecting으로 노출 여부를 확인한다. (boolean)
        current.style.transitionProperty = 'all';
        current.style.transitionDuration = `${duration}s`;
        current.style.transitionTimingFunction = 'cubic-bezier(0, 0, 0.2, 1)';
        current.style.transitionDelay = `${delay}s`;
        current.style.opacity = 1;
        current.style.transform = 'translate3d(0, 0, 0)';
      }
    },
    [delay, duration]
  );

  useEffect(() => {
    let observer: IntersectionObserver;
    const { current } = element;
    // current에 useRef로 접근한 element 등록

    if (current) {
      observer = new IntersectionObserver(handleScroll, { threshold: 0.3 });
      observer.observe(current);
      // new IntersectionObserver 로 생성한 인스턴스(observer)로 관찰자를 초기화 하고 관찰할 대상(element)를 등록한다.
      // 관찰할 대상(Target)이 등록되거나 가시성에 변화가 생기면 관찰자는 콜백(handleScroll)을 실행한다.
      // threshold : 타겟의 가시성(노출)이 50% 일때 옵저버 실행.
    }

    return () => observer && observer.disconnect();
  }, [handleScroll]);

  return {
    ref: element,
    style: {
      opacity: 0,
      transform: handleDirection(direction),
    },
  };
};

export default useScrollFadeIn;
