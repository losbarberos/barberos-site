import React from 'react';
import Image from "next/image";
import horizontalSeparator from '../public/images/horizontal-separator.svg';

const BarSeparator = () => (
  <div className="flex justify-center">
    <Image src={horizontalSeparator} alt="---" className="h-4" />
  </div>
);

export default BarSeparator;
