"use client";
import LayoutStyle3 from '@/components/layouts/LayoutStyle3';
import ErrorPageContent from '@/components/not-found/ErrorPageContent';
import React from 'react';

const ErrorPage = () => {
    return (
        <>
            <LayoutStyle3>
                <ErrorPageContent />
            </LayoutStyle3>
        </>
    );
};

export default ErrorPage;