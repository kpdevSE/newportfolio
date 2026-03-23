import { useEffect, useState } from 'react';

// Mobile performance optimization hooks and utilities

export const useDeviceCapabilities = () => {
  const [capabilities, setCapabilities] = useState({
    isLowEnd: false,
    supportsVibration: false,
    prefersReducedMotion: false,
    isTouch: false,
    connectionSpeed: 'fast'
  });

  useEffect(() => {
    // Detect device capabilities
    const detectCapabilities = () => {
      // Check for low-end device indicators
      const isLowEnd = 
        navigator.hardwareConcurrency <= 2 || 
        navigator.deviceMemory <= 2 ||
        /Android.*Chrome\/[0-5]/.test(navigator.userAgent);

      // Check for vibration support
      const supportsVibration = 'vibrate' in navigator;

      // Check motion preferences
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      // Check for touch support
      const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

      // Check connection speed
      const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
      const connectionSpeed = connection ? 
        (connection.effectiveType === '4g' ? 'fast' : 
         connection.effectiveType === '3g' ? 'medium' : 'slow') : 'fast';

      setCapabilities({
        isLowEnd,
        supportsVibration,
        prefersReducedMotion,
        isTouch,
        connectionSpeed
      });
    };

    detectCapabilities();

    // Listen for changes
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    mediaQuery.addEventListener('change', detectCapabilities);

    return () => mediaQuery.removeEventListener('change', detectCapabilities);
  }, []);

  return capabilities;
};

export const useHapticFeedback = () => {
  const { supportsVibration } = useDeviceCapabilities();

  const triggerHaptic = (pattern = 50) => {
    if (supportsVibration && navigator.vibrate) {
      navigator.vibrate(pattern);
    }
  };

  return { triggerHaptic, supportsVibration };
};

export const usePerformanceMode = () => {
  const { isLowEnd, prefersReducedMotion, connectionSpeed } = useDeviceCapabilities();

  const getAnimationConfig = () => {
    if (prefersReducedMotion) {
      return {
        duration: 0,
        enabled: false,
        complexity: 'none'
      };
    }

    if (isLowEnd || connectionSpeed === 'slow') {
      return {
        duration: 200,
        enabled: true,
        complexity: 'low'
      };
    }

    return {
      duration: 500,
      enabled: true,
      complexity: 'high'
    };
  };

  return {
    animationConfig: getAnimationConfig(),
    isLowEnd,
    prefersReducedMotion
  };
};

export const useBatteryOptimization = () => {
  const [batteryLevel, setBatteryLevel] = useState(1);
  const [isCharging, setIsCharging] = useState(true);

  useEffect(() => {
    const updateBatteryInfo = (battery) => {
      setBatteryLevel(battery.level);
      setIsCharging(battery.charging);
    };

    if ('getBattery' in navigator) {
      navigator.getBattery().then(updateBatteryInfo);
    }
  }, []);

  const shouldReduceAnimations = batteryLevel < 0.2 && !isCharging;

  return {
    batteryLevel,
    isCharging,
    shouldReduceAnimations
  };
};

// Utility function to get optimized animation classes
export const getOptimizedAnimationClass = (baseClass, capabilities) => {
  const { prefersReducedMotion, isLowEnd } = capabilities;

  if (prefersReducedMotion) {
    return '';
  }

  if (isLowEnd) {
    return `${baseClass}-simple`;
  }

  return baseClass;
};

// Performance monitoring hook
export const usePerformanceMonitor = () => {
  const [fps, setFps] = useState(60);
  const [isPerformant, setIsPerformant] = useState(true);

  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    let animationId;

    const measureFPS = (currentTime) => {
      frameCount++;
      
      if (currentTime - lastTime >= 1000) {
        const currentFPS = Math.round((frameCount * 1000) / (currentTime - lastTime));
        setFps(currentFPS);
        setIsPerformant(currentFPS >= 30);
        
        frameCount = 0;
        lastTime = currentTime;
      }
      
      animationId = requestAnimationFrame(measureFPS);
    };

    animationId = requestAnimationFrame(measureFPS);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return { fps, isPerformant };
};

export default {
  useDeviceCapabilities,
  useHapticFeedback,
  usePerformanceMode,
  useBatteryOptimization,
  getOptimizedAnimationClass,
  usePerformanceMonitor
};