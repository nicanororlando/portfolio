import React, { ReactNode } from "react";
import { BodyStructure, Container } from "./styles";

interface IProfileProps {
  children: ReactNode;
}

const Profile: React.FC<IProfileProps> = ({ children }) => {
  return (
    <div className="row">
      <BodyStructure className="col-auto m-auto">
        <div className="d-flex">
          <Container className="container py-5 px-4">
            <div className="row d-flex">
              <div className="col-12 mt-5">{children}</div>
            </div>
          </Container>
        </div>
      </BodyStructure>
    </div>
  );
};

export default Profile;
