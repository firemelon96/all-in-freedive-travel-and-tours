'use client';

import { ReactNode, useEffect } from 'react';
import Clarity from '@microsoft/clarity';

const ClarityProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      Clarity.init(process.env.CLARITY_ID!);
    }
  }, []);

  return <>{children}</>;
};

export default ClarityProvider;
