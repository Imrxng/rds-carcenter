'use client';
import React, { useMemo } from 'react'
import ContactForm from './contactForm';
import ContactInfo from './contactInfo';
import dynamic from 'next/dynamic';

const Contact = () => {
  const DynamicMap = useMemo(() => dynamic(() => import('@/components/map'), { ssr: false }), []);

  return (
    <React.Fragment>
        <div className='main'>
            <ContactForm />
            <ContactInfo />
            <DynamicMap />
        </div>
    </React.Fragment>
  )
}

export default Contact