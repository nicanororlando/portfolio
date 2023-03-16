import styled from "styled-components";

export const BodyStructure = styled.div`
  @media screen and (max-width: 1525px) {
    padding-left: 10%;
    padding-right: 10%;
  }
  @media screen and (max-width: 1168px) {
    padding-left: 15%;
    padding-right: 15%;
  }
  @media screen and (max-width: 777px) {
    padding-left: 8%;
    padding-right: 8%;
  }
  @media screen and (max-width: 517px) {
    padding-left: 8%;
    padding-right: 8%;
  }
  @media screen and (max-width: 458px) {
    padding-left: 0%;
    padding-right: 0%;
  }
`;

export const Container = styled.div`
  .sup-bar {
    background: #39a887;
    border-radius: 15px;
    width: 73.79px;
    height: 7.2px;
    opacity: 1;
  }

  .sub-bar {
    border: 0.3px solid #b8b9ba;
  }

  .top-align {
    @media screen and (max-width: 992px) {
      display: flex;
      justify-content: center;
      margin-top: 2%;
    }
  }

  .user-login {
    display: flex;
    justify-content: end;
    @media screen and (max-width: 992px) {
      justify-content: flex-start;
    }
  }

  .h2 {
    font-size: 24px;
  }

  .input {
    border: none;
    padding: 0px 10px;

    input {
      color: #414141;
    }
  }

  .input-text-area {
    border: none;
    padding: 0px 10px;
    height: 60px;
    @media screen and (max-width: 767px) {
      height: 90px;
    }
    @media screen and (max-width: 490px) {
      height: 110px;
    }
    @media screen and (max-width: 390px) {
      height: 155px;
    }
  }

  .prof-avatar {
    border: 1px solid #f3f3f3;
    box-shadow: 4px 4px 21px rgba(0, 0, 0, 0.06);
    border-radius: 0px 0px 15px 15px;
  }

  .btn-insert {
    background-color: #7b7b7b;
    width: 100px;
    height: 34px;
    border-radius: 24px;
  }

  .insert {
    color: #ffffff;
    font-size: 14px;
  }

  .bg-sup {
    background: #d4e4e0;
    background-position: 50%;
    background-size: 100%;
    background-repeat: no-repeat;
    border-radius: 10px 10px 0px 0px;
    border: none;
    input {
      z-index: 1;
    }
  }

  .caract-count {
    color: #b8b9ba;
  }

  .tabs {
    margin-bottom: -1px;
  }

  .folder {
    border: 1px solid #e4e4e4;
    border-radius: 0px 0px 10px 10px;
  }

  .name {
    color: #324351;
  }

  .btn-save {
    background: #39a887;
    border-radius: 20px;
    color: #ffffff;
    width: 100%;
    height: 50px;
  }

  .btn-change-password {
    color: #39a887;
  }

  .space-bar {
    @media screen and (max-width: 1199px) {
      margin-left: 10%;
    }
  }

  .photo-members {
    margin-left: -6%;
    @media screen and (max-width: 1199px) {
      margin-left: -10%;
    }
    @media screen and (max-width: 800px) {
      margin-left: -6%;
    }
    @media screen and (max-width: 600px) {
      margin-left: -2%;
    }
  }

  .logo {
    font-size: 14px;
  }

  .construtech-left-panel {
    @media screen and (max-width: 1199px) {
      display: flex;
      justify-content: center;
      margin-left: 5%;
    }
  }

  .construtech-right-panel {
    @media screen and (max-width: 1199px) {
      padding-left: 25%;
    }
  }

  @media screen and (min-width: 414px) {
    .btn-save {
      background: #39a887;
      border-radius: 20px;
      color: #ffffff;
      width: 331px;
      height: 50px;
    }
  }

  @media screen and (min-width: 992px) {
    .btn-save {
      background: #39a887;
      border-radius: 20px;
      color: #ffffff;
      width: 335px;
      height: 50px;
    }
  }
`;
