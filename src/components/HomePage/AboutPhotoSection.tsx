'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity';
import { AboutMeProps } from '@/types/types';

interface Props {
  images: AboutMeProps['images'];
}

const AboutPhotoSection: React.FC<Props> = ({ images }) => {
  const initialOrder = images.slice(0, 3);
  const [imageStack, setImageStack] = useState(initialOrder);

  const rotateStack = () => {
    const newStack = [...imageStack];
    const last = newStack.pop();
    if (last) newStack.unshift(last);
    setImageStack(newStack);
  };

  const getZIndex = (index: number) => 10 + index;

  const getRotation = (index: number) => {
    if (index === 0) return 'rotate-[-15deg]';
    if (index === 1) return 'rotate-[15deg]';
    return 'rotate-[0deg]';
  };

  const getBackground = (index: number) => {
    return index === 0
      ? 'bg-light-sky-blue'
      : index === 1
      ? 'bg-pastel-yellow'
      : 'bg-light-pink';
  };

  return (
    <div className="p-[26px] sm:p-[60px] xl:p-[26px] md:pb-[50px]">
      <div
        className="p-[26px] md:p-0 aspect-square w-full mx-auto h-auto md:w-[466px] md:h-[466px] relative cursor-pointer"
        onClick={rotateStack}
      >
        {imageStack.map((img, index) => (
          <div
            key={index}
            className={`p-3 ${getBackground(index)} ${getRotation(index)} absolute inset-0 rounded-[16px] aspect-square w-full h-auto md:w-[466px] md:h-[466px] border border-black`}
            style={{ zIndex: getZIndex(index) }}
          >
            <Image
              src={urlFor(img)}
              alt="Profile"
              width={466}
              height={466}
              className="w-full h-full object-cover object-center border border-black rounded-[4px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPhotoSection;
