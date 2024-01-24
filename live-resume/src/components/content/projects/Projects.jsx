import Section from "@/components/Section";
import ImageSideFrame from "../card/ImageSideFrame";
import Card from "../card/Card";

export default function Projects() {
  return (
    <Section id="project" title="projects">
      <ul className="group/list">
        <Card
          href='https://carvana.com/cars'
          header="Engineer I · Carvana"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          relevantLinks={[]}
          technologies={['Javascript', 'Typescript', 'React', 'GraphQL', 'Azure', 'Node.js', 'CSS']}
        >
          <ImageSideFrame />
        </Card>
      </ul>
    </Section>
  )
}
