import React, { FC } from "react";
import { memo, useCallback, useState } from 'react'
import Slider from "react-slick";
import Image from 'next/image'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const MySlider: FC<any> = memo(function (props) {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: '100',
    arrows: true
  };
  return (
    <div >
      <Slider {...settings}>
        <div className="bg-[url('https://p4.music.126.net/_QnA7ZJ0RGBcH55RNERqcw==/109951168280022170.jpg')]  bg-cover bg-black  h-[529px]">
        </div>
        <div className="bg-[url('https://p4.music.126.net/2xUf4K8AGT2OQsMOT5tjjA==/109951168429528626.jpg')]  bg-cover bg-black  h-[529px]">
        </div>
        <div className="bg-[url('https://p4.music.126.net/l9UiTLVPahHKboalK0NK5A==/109951168443095079.jpg')]  bg-cover bg-black  h-[529px]">
        </div>
        <div className="bg-[url('https://p4.music.126.net/cYNFhBagxazXB9BLHoaoHA==/109951168299418605.jpg')]  bg-cover bg-black  h-[529px]">
        </div>
        <div className="bg-[url('https://p3.music.126.net/M8RHn6wYFsAy2tPjPXVfMQ==/109951168239607916.jpg')]  bg-cover bg-black  h-[529px]">
        </div>
        <div className="bg-[url('https://p3.music.126.net/0n7ddLBFhbEuZzGxeXCzXw==/109951168282525607.jpg')]  bg-cover bg-black  h-[529px]">
        </div>
      </Slider>
    </div>
  )
})

export default MySlider