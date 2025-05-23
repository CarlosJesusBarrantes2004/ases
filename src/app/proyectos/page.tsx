"use client";

import React, { useState, useMemo } from "react";
import { Star } from "lucide-react";
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
        proyecto.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
        proyecto.descripcion.toLowerCase().includes(busqueda.toLowerCase()) ||
        proyecto.tags.some((tag) =>
          tag.toLowerCase().includes(busqueda.toLowerCase())
        );

      const coincideCategoria =
        categoriaSeleccionada === "Todas" ||
        proyecto.categoria === categoriaSeleccionada;
      const coincideUbicacion =
        ubicacionSeleccionada === "Todas" ||
        proyecto.ubicacion.includes(ubicacionSeleccionada);

      return coincideBusqueda && coincideCategoria && coincideUbicacion;
    });
  }, [search, categoriesSelected, citiesSelected]);

  return (
    <>
      <Hero></Hero>
      <FiltersAndSearch></FiltersAndSearch>
      <Projects filteredProjects={filteredProjects}></Projects>
      <Cta></Cta>
    </>
  );
}
