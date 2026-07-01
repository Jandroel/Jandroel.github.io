"use client";

import { AnimatePresence } from "motion/react";
import { useState } from "react";

import { ProjectCard } from "@/components/cards/ProjectCard";
import { Reveal } from "@/components/effects/Reveal";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { projectCategories, projects } from "@/data/projects";

type SelectedCategory = (typeof projectCategories)[number];

export function Projects() {
  const defaultCategory = "All" satisfies SelectedCategory;
  const [selectedCategory, setSelectedCategory] =
    useState<SelectedCategory>(defaultCategory);
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="relative py-16 sm:py-20"
    >
      <Container>
        <Reveal>
          <SectionHeading
            id="projects-title"
            eyebrow="Projects"
            title="Featured Projects"
            description="A curated selection of projects that show how I design, build, and improve web experiences."
          />
        </Reveal>

        <Tabs
          value={selectedCategory}
          className="mt-10 min-w-0"
          onValueChange={(value) => setSelectedCategory(value as SelectedCategory)}
        >
          <TabsList aria-label="Project categories">
            {projectCategories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="flex-1 sm:flex-none"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={selectedCategory} forceMount className="mt-8 min-w-0">
            <div className="grid min-w-0 gap-5 md:grid-cols-2 xl:grid-cols-3">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </AnimatePresence>
            </div>
          </TabsContent>
        </Tabs>
      </Container>
    </section>
  );
}
