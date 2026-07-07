"use client";

import { AnimatePresence } from "motion/react";
import { useState } from "react";

import { ProjectCard } from "@/components/cards/ProjectCard";
import { Reveal } from "@/components/effects/Reveal";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { projectCategories, projects } from "@/data/projects";

type SelectedCategory = (typeof projectCategories)[number];

export function Projects() {
  const defaultCategory = "All" satisfies SelectedCategory;
  const { t } = useLanguage();
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
            eyebrow={t.projects.eyebrow}
            mark="作"
            title={t.projects.title}
            description={t.projects.description}
          />
        </Reveal>

        <Tabs
          value={selectedCategory}
          className="mt-10 min-w-0"
          onValueChange={(value) => setSelectedCategory(value as SelectedCategory)}
        >
          <TabsList aria-label={t.projects.tabsLabel}>
            {projectCategories.map((category) => (
              <TabsTrigger key={category} value={category} className="sm:flex-none">
                {t.common.categories[category] ?? category}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={selectedCategory} forceMount className="mt-8 min-w-0">
            <div className="grid min-w-0 gap-5 md:grid-cols-2 xl:grid-cols-3">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </AnimatePresence>
            </div>
          </TabsContent>
        </Tabs>
      </Container>
    </section>
  );
}
