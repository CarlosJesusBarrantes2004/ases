"use client";

import React, { useState, useMemo } from "react";
import Hero from "./components/Hero";
import { projectsData } from ".";
import Projects from "./components/Projects";
import FiltersAndSearch from "./components/FiltersAndSearch";
import Cta from "./components/Cta";

export default function ProjectsPage() {
  const [search, setSearch] = useState("");
  const [categoriesSelected, setCategoriesSelected] = useState("Todas");
  const [citiesSelected, setCitiesSelected] = useState("Todas");

  const filteredProjects = useMemo(() => {
    return projectsData.filter((proyecto) => {
      const coincideBusqueda =
        proyecto.nombre.toLowerCase().includes(search.toLowerCase()) ||
        proyecto.descripcion.toLowerCase().includes(search.toLowerCase()) ||
        proyecto.tags.some((tag) =>
          tag.toLowerCase().includes(search.toLowerCase())
        );

      const coincideCategoria =
        categoriesSelected === "Todas" ||
        proyecto.categoria === categoriesSelected;
      const coincideUbicacion =
        citiesSelected === "Todas" ||
        proyecto.ubicacion.includes(citiesSelected);

      return coincideBusqueda && coincideCategoria && coincideUbicacion;
    });
  }, [search, categoriesSelected, citiesSelected]);

  return (
    <>
      <Hero></Hero>
      <FiltersAndSearch
        filteredProjects={filteredProjects}
        search={search}
        setSearch={setSearch}
        categoriesSelected={categoriesSelected}
        setCategoriesSelected={setCategoriesSelected}
        citiesSelected={citiesSelected}
        setCitiesSelected={setCitiesSelected}
      ></FiltersAndSearch>
      <Projects filteredProjects={filteredProjects}></Projects>
      <Cta></Cta>
    </>
  );
}
