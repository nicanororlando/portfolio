import { useState, useEffect } from "react";
import { useLanguage } from "hooks/useLanguage";
import { IFrontendProjects } from "models/FrontEnd";

export const useFrontEndProjectsData = () => {
  const { idiom } = useLanguage();
  const [projects, setProjects] = useState<IFrontendProjects[]>([]);

  useEffect(() => {
    if (idiom === "es")
      setProjects([
        {
          id: 0,
          images: [
            "kemis/builder/image1.png",
            "kemis/builder/image2.png",
            "kemis/builder/image3.png",
            "kemis/builder/image4.png",
            "kemis/builder/image5.png",
            "kemis/builder/image6.png",
            "kemis/builder/image7.png",
          ],
          title: "Construye tu casa | Kemis",
          description:
            "Proyecto realizado para que cualquier persona pueda diseñar y personalizar la construcción de su casa. Luego, de acuerdo a las selecciones, se hace un presupuesto total, tanto para construirlo como para venderlo. *Aclaración: Este proyecto pertenece a la empresa Harvey Constructor, y es privado, por eso no puedo compartir la página web.",
          languajeImages: [
            "html-5.png",
            "css3.png",
            "bootstrap.png",
            "reactjs.png",
            "typescript.png",
          ],
          linkRedirect: "",
        },
        {
          id: 1,
          images: [
            "kemis/conformity/image1.png",
            "kemis/conformity/image2.png",
            "kemis/conformity/image3.png",
          ],
          title: "Conformity | Kemis",
          description: "Proyecto a pedido de cliente, para administrar datos.",
          languajeImages: [
            "html-5.png",
            "css3.png",
            "bootstrap.png",
            "reactjs.png",
            "typescript.png",
            "nextjs.png",
          ],
          linkRedirect: "https://conformity.vercel.app/en",
        },
        {
          id: 2,
          images: [
            "adventist-beliefs/image1.png",
            "adventist-beliefs/image2.png",
            "adventist-beliefs/image3.png",
            "adventist-beliefs/image4.png",
            "adventist-beliefs/image5.png",
          ],
          title: "Creencias Adventistas",
          description:
            "Este proyecto contiene información sobre las 28 doctrinas que tiene la Iglesia Adventista del Séptimo Día. El frontend está hecho con Angularjs, y el backend con Java y Mongodb. El backend utiliza la arquitectura de microservicios y consta de dos partes: 1. Un servicio remoto que utiliza Spring WebFlux (se une a las API REST y se comunica directamente con la interfaz de usuario) 2. El resto de los servicios que se comunican con las bases de datos.",
          languajeImages: [
            "html-5.png",
            "css3.png",
            "js.png",
            "angularjs.png",
            "java.png",
            "spring-boot.png",
            "mongodb.png",
          ],
          linkRedirect: "",
        },
        {
          id: 3,
          images: ["kemis/erp/image1.png", "kemis/erp/image2.png"],
          title: "ERP | Kemis",
          description:
            "Este proyecto es parte de un sistema más grande y completo del cliente. En este caso se manejan diferentes tipos de datos de clientes, empleados o también candidatos",
          languajeImages: [
            "html-5.png",
            "css3.png",
            "tailwind.png",
            "reactjs.png",
            "typescript.png",
            "nextjs.png",
          ],
          linkRedirect: "",
        },
        {
          id: 4,
          images: [
            "restaurant/image1.png",
            "restaurant/image2.png",
            "restaurant/image3.png",
          ],
          title: "Restaurante",
          description:
            "Es un proyecto de práctica que contiene información sobre el menú de un restaurante genérico. Está construido sobre HTML, CSS y JavaScript sin el uso de ninguna otra biblioteca.",
          languajeImages: ["html-5.png", "css3.png", "js.png"],
          linkRedirect: "",
        },
        {
          id: 5,
          images: ["giffy/image1.png", "giffy/image2.png"],
          title: "Giffy",
          description:
            "Este proyecto personal (para reirme un rato) realiza solicitudes a una API externa, que devuelve una lista de Gifs, según el parámetro de búsqueda que se le envíe.",
          languajeImages: ["html-5.png", "css3.png", "js.png", "reactjs.png"],
          linkRedirect: "",
        },
      ]);
    else
      setProjects([
        {
          id: 0,
          images: [
            "kemis/builder/image1.png",
            "kemis/builder/image2.png",
            "kemis/builder/image3.png",
            "kemis/builder/image4.png",
            "kemis/builder/image5.png",
            "kemis/builder/image6.png",
            "kemis/builder/image7.png",
          ],
          title: "Build your house | Kemis",
          description:
            "Project made so that anyone can design and customize the construction of their house. Then, according to the selections, a total budget is made, both to build it and to sell it. *Clarification: This project belongs to the company Harvey Constructor, and it is private, that is why I cannot share the web page.",
          languajeImages: [
            "html-5.png",
            "css3.png",
            "bootstrap.png",
            "reactjs.png",
            "typescript.png",
          ],
          linkRedirect: "",
        },
        {
          id: 1,
          images: [
            "kemis/conformity/image1.png",
            "kemis/conformity/image2.png",
            "kemis/conformity/image3.png",
          ],
          title: "Conformity",
          description: "Project at the request of a client, to manage data.",
          languajeImages: [
            "html-5.png",
            "css3.png",
            "bootstrap.png",
            "reactjs.png",
            "typescript.png",
            "nextjs.png",
          ],
          linkRedirect: "https://conformity.vercel.app/en",
        },
        {
          id: 2,
          images: [
            "adventist-beliefs/image1.png",
            "adventist-beliefs/image2.png",
            "adventist-beliefs/image3.png",
            "adventist-beliefs/image4.png",
            "adventist-beliefs/image5.png",
          ],
          title: "Adventists Beliefs",
          description:
            "This project contains information about the 28 doctrines that the Seventh Day Adventist Church has. The frontend is made with Angularjs, and the backend with Java and Mongodb. The backend uses the microservices architecture, and consists of two parts: 1. A remote service that uses Spring WebFlux (Joins the REST APIs and communicates directly with the UI) 2. The rest of the services that communicate with the databases .",
          languajeImages: [
            "html-5.png",
            "css3.png",
            "js.png",
            "angularjs.png",
            "java.png",
            "spring-boot.png",
            "mongodb.png",
          ],
          linkRedirect: "",
        },
        {
          id: 3,
          images: ["kemis/erp/image1.png", "kemis/erp/image2.png"],
          title: "ERP | Kemis",
          description:
            "This project is part of a larger and more complete client system. In this case, different types of customer, employee or candidate data are handled",
          languajeImages: [
            "html-5.png",
            "css3.png",
            "tailwind.png",
            "reactjs.png",
            "typescript.png",
            "nextjs.png",
          ],
          linkRedirect: "",
        },
        {
          id: 3,
          images: [
            "restaurant/image1.png",
            "restaurant/image2.png",
            "restaurant/image3.png",
          ],
          title: "Restaurant",
          description:
            "It is a practice project that contains information about the menu's of a generic restaurant. It is built on HTML, CSS and JavaScript without the use of any other libraries.",
          languajeImages: ["html-5.png", "css3.png", "js.png"],
          linkRedirect: "",
        },
        {
          id: 4,
          images: ["giffy/image1.png", "giffy/image2.png"],
          title: "Giffy",
          description:
            "This personal project (for fun) makes requests to an external API, which returns a list of Gifs, depending on the search parameter that is sent to it.",
          languajeImages: ["html-5.png", "css3.png", "js.png", "reactjs.png"],
          linkRedirect: "",
        },
      ]);
  }, [idiom]);

  return { projects };
};
