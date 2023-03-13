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
            "Consta de 3 partes:",
            "1. Un servicio remoto creado en base a Spring WebFlux (se une a las API REST y se comunica directamente con la interfaz de usuario).",
            "2. Las diferentes API REST que se comunican directamente con las bases de datos de MongoDB.",
            "3. Tests con JUnit, tanto de las API REST, como del servicio remoto.",
          ],
          images: [
            "prog-languages-icons/java.png",
            "prog-languages-icons/spring-boot.png",
            "prog-languages-icons/mongodb.png",
          ],
          linkRedirect: "https://github.com/nicanororlando/Adventist-App",
        },
        {
          id: "1",
          title: "Catalog API",
          description: [
            " Una API REST simple de practica, con conexion a MongoDB como base de datos.",
            " Esta API solo realiza operaciones CRUD.",
          ],
          images: [
            "prog-languages-icons/c-programacion.png",
            "prog-languages-icons/mongodb.png",
          ],
          linkRedirect:
            "https://github.com/nicanororlando/proyectos-backend/tree/master/c%23/Catalog",
        },
        {
          id: "2",
          title: "Clients API",
          description: [
            " Una API REST de Java práctica que utiliza el módulo web reactivo Spring WebFlux.",
            " Realiza operaciones CRUD con una consulta a MongoDB como única base de datos.",
          ],
          images: [
            "prog-languages-icons/java.png",
            "prog-languages-icons/mongodb.png",
          ],
          linkRedirect:
            "https://github.com/nicanororlando/proyectos-backend/tree/master/java/webfluxmongo",
        },
        {
          id: "3",
          title: "Storage | Tracks | Auth",
          description: [
            "Es un servicio que tiene varias partes:",
            " 1. Consultas a dos bases de datos diferentes (MYSQL, MongoDB)",
            " 2. Middlewares para detectar errores o permisos.",
            " 3. Manejo de errores.",
            " 4. Validadores.",
          ],
          images: [
            "prog-languages-icons/nodejs.png",
            "prog-languages-icons/mongodb.png",
          ],
          linkRedirect:
            "https://github.com/nicanororlando/proyectos-backend/tree/master/nodejs/nodejs-express-mongodb/apiRest-mongodb-express",
        },
        {
          id: "4",
          title: "Simulador de banco",
          description: [
            " Esta API de practica simula transacciones entre clientes de un banco a otro.",
            " También consta de Pruebas para cada operación usando JUnit.",
          ],
          images: ["prog-languages-icons/java.png"],
          linkRedirect:
            "https://github.com/nicanororlando/proyectos-backend/tree/master/java/testapirest",
        },
      ]);
    else
      setProjects([
        {
          id: "0",
          title: "Adventists Beliefs",
          description: [
            "It consists of 3 parts:",
            "1. A remote service built based on Spring WebFlux (binds to REST APIs and communicates directly with the UI).",
            "2. The REST APIs communicate directly with databases.",
            "3. Testing with JUnit, both the REST APIs and the remote service.",
          ],
          images: [
            "prog-languages-icons/java.png",
            "prog-languages-icons/spring-boot.png",
            "prog-languages-icons/mongodb.png",
          ],
          linkRedirect: "https://github.com/nicanororlando/Adventist-App",
        },
        {
          id: "1",
          title: "Catalog API",
          description: [
            " A simple practice REST API, which have MongoDB as the unique database.",
            " This API only performs CRUD operations.",
          ],
          images: [
            "prog-languages-icons/c-programacion.png",
            "prog-languages-icons/mongodb.png",
          ],
          linkRedirect:
            "https://github.com/nicanororlando/proyectos-backend/tree/master/c%23/Catalog",
        },
        {
          id: "2",
          title: "Clients API",
          description: [
            " A practice Java REST API that merges the Spring WebFlux reactive web module.",
            " Performs CRUD operations with a query to MongoDB as the only database.",
          ],

          images: [
            "prog-languages-icons/java.png",
            "prog-languages-icons/mongodb.png",
          ],
          linkRedirect:
            "https://github.com/nicanororlando/proyectos-backend/tree/master/java/webfluxmongo",
        },
        {
          id: "3",
          title: "Storage | Tracks | Auth",
          description: [
            "It is a service that has several parts:",
            " 1. Queries to two different databases (MYSQL, MongoDB)",
            " 2. Middlewares to detect errors or permissions.",
            " 3. Error handling.",
            " 4. Validators.",
          ],

          images: [
            "prog-languages-icons/nodejs.png",
            "prog-languages-icons/mongodb.png",
          ],

          linkRedirect:
            "https://github.com/nicanororlando/proyectos-backend/tree/master/nodejs/nodejs-express-mongodb/apiRest-mongodb-express",
        },
        {
          id: "4",
          title: "Bank Simulator",
          description: [
            " This practice API simulates transactions between clients from one bank to another.",
            " It also consists of Tests for each operation using JUnit and Mockito.",
          ],

          images: ["prog-languages-icons/java.png"],
          linkRedirect:
            "https://github.com/nicanororlando/proyectos-backend/tree/master/java/testapirest",
        },
      ]);
  }, [idiom]);

  return { projects };
};
