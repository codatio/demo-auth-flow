'use client'

import { useState, useEffect, useCallback } from 'react';

export const useAuthHeader = () => {
  const [header, setHeader] = useState(undefined);

  useEffect(() => {
    const storedHeader = localStorage.getItem('authHeader');
    if (storedHeader) {
      setHeader(storedHeader);
    }
  }, []);

  const updateAuthHeader = useCallback((newHeader) => {
    console.log('saving header')
    try {
      localStorage.setItem('authHeader', newHeader);
      setHeader(newHeader);
    } catch (error) {
      console.error('Failed to set header in localStorage:', error);
    }
  }, []);

  const clearAuthHeader = useCallback(() => {
    console.log('clearing header')
    try {
      localStorage.removeItem('authHeader');
      setHeader('');
    } catch (error) {
      console.error('Failed to clear header from localStorage:', error);
    }
  }, []);

  return {
    authHeader: header,
    updateAuthHeader,
    clearAuthHeader,
  };
}
