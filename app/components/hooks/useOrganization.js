'use client'

import { useState, useEffect, useCallback } from 'react';

import { useAuthHeader } from './useAuthHeader'

import { getOrganization } from '../../actions'

export const useOrganization = () => {
  const [logo, setLogo] = useState(undefined);
  const [icon, setIcon] = useState(undefined);
  const [clientName, setClientName] = useState(undefined);

  const {   
    authHeader,
  } = useAuthHeader()

  useEffect(() => {
    async function fetchData() {

      const result = await getOrganization(authHeader)

      setLogo(result.logo)
      setIcon(result.icon)
      setClientName(result.clientName)
    }
    
    if(!authHeader) {
      return 
    }

    fetchData();
  }, [authHeader]);

  // const updateAuthHeader = useCallback((newHeader) => {
  //   console.log('saving header')
  //   try {
  //     localStorage.setItem('authHeader', newHeader);
  //     setHeader(newHeader);
  //   } catch (error) {
  //     console.error('Failed to set header in localStorage:', error);
  //   }
  // }, []);

  // const clearAuthHeader = useCallback(() => {
  //   console.log('clearing header')
  //   try {
  //     localStorage.removeItem('authHeader');
  //     setHeader('');
  //   } catch (error) {
  //     console.error('Failed to clear header from localStorage:', error);
  //   }
  // }, []);

  console.log({
    logo,
    icon,
    clientName,
  })

  return {
    logo,
    icon,
    clientName,
  };
}
