import React, { useCallback, useEffect, useMemo, useState } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { isMobile } from "react-device-detect";
import { Settings } from "react-slick";

import { Carousel, ButtonLeft, ButtonRight } from "./styles";

interface IButtonProps {
  className?: string;
  onClick?(): void;
}

interface ISliderProps {
  onAfterChange?(index: number): void;
  children: React.ReactNode;
}

const PrevArrow: React.FC<IButtonProps> = ({ className, onClick }) => {
  const disabled = useMemo(() => {
    if (className) {
      if (className.match("slick-disabled")) {
        return true;
      }
      return false;
    }
    return false;
  }, [className]);

  return (
    <ButtonLeft
      type="button"
      className={`${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      <div>
        <RiArrowLeftSLine />
      </div>
    </ButtonLeft>
  );
};

const NextArrow: React.FC<IButtonProps> = ({ className, onClick }) => {
  const disabled = useMemo(() => {
    if (className) {
      if (className.match("slick-disabled")) {
        return true;
      }
      return false;
    }
    return false;
  }, [className]);

  return (
    <ButtonRight
      type="button"
      className={`${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      <div>
        <RiArrowRightSLine />
      </div>
    </ButtonRight>
  );
};

const aux = isMobile ? 1 : 3;
const Slider: React.FC<ISliderProps> = ({ onAfterChange, children }) => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const detectSize = useCallback(() => {
    setWindowSize(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", detectSize);
  }, [detectSize]);

  const settings: Settings = useMemo(
    () => ({
      infinite: false,
      slidesToShow: aux,
      centerPadding: "0px",
      autoplay: false,
      autoplaySpeed: 3000,
      speed: 500,
      arrows: true,
      touchMove: true,
      afterChange: onAfterChange,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      dots: true,
      responsive: [
        {
          breakpoint: 9999,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            arrows: false,
          },
        },
      ],
    }),
    [onAfterChange]
  );

  const settingsMobile: Settings = useMemo(
    () => ({
      infinite: false,
      slidesToShow: windowSize >= 768 ? 2 : 1,
      centerPadding: "0px",
      autoplay: false,
      autoplaySpeed: 3000,
      speed: 500,
      arrows: false,
      touchMove: true,
      afterChange: onAfterChange,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      dots: true,
    }),
    [onAfterChange, windowSize]
  );

  return (
    <>
      {children && (
        <Carousel {...(isMobile ? settingsMobile : settings)}>
          {children}
        </Carousel>
      )}
    </>
  );
};

export default Slider;
