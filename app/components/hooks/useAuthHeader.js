'use client'

import { useState, useEffect, useCallback } from 'react';

export const useAuthHeader = () => {
  const [header, setHeader] = useState(undefined);

  // When the component mounts (i.e., on the client side), read from localStorage
  useEffect(() => {
    const storedHeader = localStorage.getItem('authHeader');
    if (storedHeader) {
      setHeader(storedHeader);
    }
  }, []);
// 
//   const initialHeader = () => {
//     try {
//       return localStorage.getItem('authHeader') || '';
//     } catch (error) {
//       console.error('Failed to fetch header from localStorage:', error);
//       return '';
//     }
//   };

  const updateAuthHeader = useCallback((newHeader) => {
    console.log('saving header')
    try {
      localStorage.setItem('authHeader', newHeader);
      setHeader(newHeader);
    } catch (error) {
      console.error('Failed to set header in localStorage:', error);
    }
  }, []);

  // Function to clear the 'header' value from both state and localStorage.
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
