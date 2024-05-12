import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

type Props = {
    children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
    return (
        <div className="mx-auto px-12 sm:px-24 xl:px-72 max-w-[1600px]">
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}

export default MainLayout;
