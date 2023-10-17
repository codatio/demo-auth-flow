'use client'

import { useState, useEffect, useCallback } from 'react';

export const useCompany = () => {
  const [companyId, setCompanyId] = useState(undefined);

  const updateCompanyId = useCallback((id) => {
    console.log('updating id', id)
    try {
      setCompanyId(id);
    } catch (error) {
      console.error('Failed to set company ID', error);
    }
  }, []);

  const clearCompanyId = useCallback(() => {
    console.log('clearing header')
    try {
      setCompanyId('');
    } catch (error) {
      console.error('Failed to clear company ID:', error);
    }
  }, []);

  return {
    companyId,
    updateCompanyId,
    clearCompanyId,
  };
}
