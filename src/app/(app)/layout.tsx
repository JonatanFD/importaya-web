import AppFooter from '@/components/layout/AppFooter';
import AppHeader from '@/components/layout/AppHeader';
import React from 'react';

export default function Layout({children} : {children:React.ReactNode}) {
  return <>
    <AppHeader />
    {children}
    <AppFooter />
  </>
}