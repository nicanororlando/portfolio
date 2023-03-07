import styled from "styled-components";

export const CardContainer = styled.div`
  .title_body {
    .button_redirect {
      background: hsl(var(--hue), var(--sat), 90%);
      color: #000;
      :hover {
        color: #01cc9d;
      }
    }
  }
  .card {
    scroll-snap-align: center;
    border-radius: 15px;
    color: #000;
    margin-bottom: 2%;
    background-color: #eff2f3e3;
    cursor: pointer;
    :hover {
      border: 1px solid var(--color-contrast-dark) !important;
    }
    .card_body {
      padding-top: 0;
      display: flex;
      flex-direction: column;
      .title_body {
        font-weight: 500;
        background-color: hsl(var(--hue), var(--sat), 90%);
        padding: 8px;
        padding-left: 25px;
        padding-right: 10px;
        display: flex;
        justify-content: space-between;
      }
      .card_body_items {
        display: flex;
        justify-content: start;
        background-color: #eff2f3e3;
        border-radius: 0 0 15px 15px;
        padding: 12px;
        padding-left: 25px;
        img {
          width: 27px;
          height: 27px;
        }
      }
    }
    img {
      border-top-right-radius: 15px;
      border-top-left-radius: 15px;
      object-fit: contain;
      height: 250px;
    }
    p {
      font-size: 12px;
      display: flex;
      flex-direction: column;
      span {
        font-size: 20px;
        text-align: center;
        color: #000;
      }
    }
  }

  .view {
    background-color: transparent;
  }

  .icon {
    width: 30px;
    height: 30px;
    margin-right: 15px;
  }

  .colored-odd:nth-child(odd),
  .colored-even:nth-child(even) {
    background: #f7f7fd;
    border-radius: 4px;
  }
  .p-relative {
    position: relative;
  }
  p {
    font-size: 14px;
    span {
      font-weight: 700;
      color: #39a887;
    }
  }
  h2 {
    color: #414142;
    font-weight: 600 !important;
  }
  h3 {
    font-size: 24px;
  }
  .dot {
    width: 7px;
    height: 7px;
    border-radius: 25px;
    background-color: #ff9900;
  }
  .sub-text {
    font-size: 12px;
  }
  .dot-2 {
    background-color: #48dcfc !important;
  }
  .font-weight-700 {
    font-weight: 700;
  }
  h4 {
    font-size: 14px;
    font-weight: 700;
    color: #414142;
  }
  @media screen and (min-width: 991px) {
    max-width: 96% !important;
  }
`;
