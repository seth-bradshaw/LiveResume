import Section from "@/components/Section";
import React from "react";
import Card from "../card/Card";
import HeaderSideFrame from "../card/HeaderSideFrame";

export default function Experience() {
  return (
    <Section id="experience" title="experience">
      <ul className="group/list">
        <Card
          href='https://carvana.com/cars'
          header="Engineer I · Carvana"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          relevantLinks={[]}
          technologies={['Javascript', 'Typescript', 'React', 'GraphQL', 'Azure', 'Node.js', 'CSS']}
        >
          <HeaderSideFrame title="2021 - 2022" />
        </Card>
      </ul>
    </Section>
  );
}
