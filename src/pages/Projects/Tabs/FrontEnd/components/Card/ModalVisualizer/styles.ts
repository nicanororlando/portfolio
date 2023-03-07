import styled from "styled-components";
import { Modal as ModalComponent } from "react-bootstrap";

export const Modal = styled(ModalComponent)`
  .modal-content {
    border: none;
    border-radius: 10px;
    width: 600px;
    margin: auto;

    .modal-header {
      margin: 5px 0;
    }

    h4 {
      font-weight: bold;
      font-size: 18px;
      line-height: 20px;
      color: #414141;
      margin: 0;
    }

    label {
      font-weight: 500;
      color: #414141;
    }

    .input {
      border: 1px solid #d9d9d9;
      border-radius: 10px;

      input {
        font-weight: 500;
        color: #605e5e;
      }
    }

    .close {
      font-size: 24px;
      border: none;
      position: absolute;
      right: 40px;
      font-size: 30px;

      .sr-only {
        display: none;
      }
    }
    .modal-body {
      iframe {
        height: 560px;
      }
    }
    .buttons-group {
      button {
        width: 121px;
        height: 40px;
        border-radius: 10px;
        border: 2px solid transparent;
        color: #111;
      }

      button[type="button"] {
        border-color: #d9d9d9;
        background: #01cc9d;
        color: #111;
        font-weight: 500;
      }

      button[type="submit"] {
        color: #111;
        font-weight: bold;
        background: #2e90fd;
      }
    }
  }
`;
