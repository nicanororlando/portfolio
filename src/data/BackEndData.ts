import { useState, useEffect } from "react";
import { useLanguage } from "hooks/useLanguage";
import { IBackendProjects } from "./../models/BackEnd";

export const useBackEndProjectsData = () => {
  const { idiom } = useLanguage();
  const [projects, setProjects] = useState<IBackendProjects[]>([]);

  useEffect(() => {
    if (idiom === "es")
      setProjects([
        {
          id: "0",
          title: "Creencias Adventistas",
          description: [
            "Consta de dos partes:",
            "1. Un servicio remoto creado en base a Spring WebFlux (se une a las API REST y se comunica directamente con la interfaz de usuario)",
            "2. Las diferentes API REST que se comunican directamente con las bases de datos.",
          ],
          images: [
            "prog-languages-icons/java.png",
            "prog-languages-icons/spring-boot.png",
            "prog-languages-icons/mongodb.png",
          ],
          linkRedirect: "",
        },
        {
          id: "1",
          title: "Creencias Adventistas",
          description: ["asdasd", "asdasd2"],
          images: [
            "prog-languages-icons/html-5.png",
            "prog-languages-icons/css3.png",
            "prog-languages-icons/js.png",
            "prog-languages-icons/angularjs.png",
            "prog-languages-icons/java.png",
            "prog-languages-icons/spring-boot.png",
            "prog-languages-icons/mongodb.png",
          ],
          linkRedirect: "",
        },
        {
          id: "2",
          title: "Restaurante",
          description: ["asdasd", "asdasd2"],
          images: [
            "prog-languages-icons/html-5.png",
            "prog-languages-icons/css3.png",
            "prog-languages-icons/js.png",
          ],
          linkRedirect: "",
        },
        {
          id: "3",
          title: "Giffy",
          description: ["asdasd", "asdasd2"],
          images: [
            "prog-languages-icons/html-5.png",
            "prog-languages-icons/css3.png",
            "prog-languages-icons/js.png",
            "prog-languages-icons/reactjs.png",
          ],
          linkRedirect: "",
        },
      ]);
    else
      setProjects([
        {
          id: "0",
          title: "Build your house | Kemis",
          description: ["asdasd", "asdasd2"],
          images: [
            "prog-languages-icons/html-5.png",
            "prog-languages-icons/css3.png",
            "prog-languages-icons/bootstrap.png",
            "prog-languages-icons/reactjs.png",
            "prog-languages-icons/typescript.png",
          ],
          linkRedirect: "",
        },
        {
          id: "1",
          title: "Adventists Beliefs",
          description: ["asdasd", "asdasd2"],
          images: [
            "prog-languages-icons/html-5.png",
            "prog-languages-icons/css3.png",
            "prog-languages-icons/js.png",
            "prog-languages-icons/angularjs.png",
            "prog-languages-icons/java.png",
            "prog-languages-icons/spring-boot.png",
            "prog-languages-icons/mongodb.png",
          ],
          linkRedirect: "",
        },
        {
          id: "2",
          title: "Restaurant",
          description: ["asdasd", "asdasd2"],

          images: [
            "prog-languages-icons/html-5.png",
            "prog-languages-icons/css3.png",
            "prog-languages-icons/js.png",
          ],
          linkRedirect: "",
        },
        {
          id: "3",
          title: "Giffy",
          description: ["asdasd", "asdasd2"],

          images: [
            "prog-languages-icons/html-5.png",
            "prog-languages-icons/css3.png",
            "prog-languages-icons/js.png",
            "prog-languages-icons/reactjs.png",
          ],
          linkRedirect: "",
        },
      ]);
  }, [idiom]);

  return { projects };
};
