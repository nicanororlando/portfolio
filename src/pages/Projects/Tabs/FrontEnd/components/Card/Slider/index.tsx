import React, { ReactNode, useMemo } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { Settings } from "react-slick";

import { Carousel, ButtonLeft, ButtonRight } from "./styles";

interface IButtonProps {
  className?: string;
  onClick?(): void;
}

interface ISliderProps {
  onAfterChange?(index: number): void;
  children?: ReactNode;
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

const Slider: React.FC<ISliderProps> = ({ onAfterChange, children }) => {
  const settings: Settings = useMemo(
    () => ({
      infinite: true,
      slidesToShow: 1,
      centerPadding: "0px",
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 500,
      arrows: true,
      touchMove: false,
      afterChange: onAfterChange,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      dots: false,
    }),
    [onAfterChange]
  );

  return <Carousel {...settings}>{children}</Carousel>;
};

export default Slider;
