import Section from "@/components/Section";
import React from "react";
import Card from "../card/Card";
import HeaderSideFrame from "../card/HeaderSideFrame";

export default function Experience() {
  return (
    <Section id="experience" title="experience">
            <ul className="group/list">
        <Card
          href='https://cfande.com/'
          header="Wordpress Developer · Collision Forensics and Engineering"
          description="Enhanced company-client communication channels by integrating a contact message form and spearheaded the redesign of the company website within the WordPress framework. Through collaborative efforts with the stakeholders, I achieved a visually appealing and user-centric design, employing custom PHP code to ensure seamless functionality across critical pages, thereby improving the overall user experience."
          relevantLinks={[]}
          technologies={['Wordpress', 'PHP', 'CSS']}
        >
          <HeaderSideFrame title="Aug 2023 - Nov 2023" />
        </Card>
      </ul>
      <ul className="group/list">
        <Card
          href='https://carvana.com/cars'
          header="Engineer I · Carvana"
          description="During my tenure at Carvana, I optimized performance on the platform's highest traffic page, reducing unnecessary re-renders by 40% through modern JavaScript, TypeScript, Redux, and React practices. Additionally, I integrated internal department packages and services into the Search page, improving user experience and efficiency across the purchase process. Moreover, I developed a GraphQL server with Apollo Server and a Redis cache, significantly enhancing application performance and scalability by reducing UI's API requests by 45%."
          relevantLinks={[]}
          technologies={['Javascript', 'Typescript', 'React', 'GraphQL', 'Azure', 'Node.js', 'SCSS', 'CSS']}
        >
          <HeaderSideFrame title="Aug 2021 - Nov 2022" />
        </Card>
      </ul>
      <ul className="group/list">
        <Card
          href='https://app.carevoyance.com/'
          header="Front End Engineer Intern · Carevoyance"
          description="Optimized API requests by paginating annotations and utilized Svelte to segment comments, decreasing the initial load time of portlet. Leveraging technologies like Angular1, Svelte, Redux, and Redux-Saga, I contributed to the development of new features and addressed CSS bugs to enhance data comprehension for healthcare professionals."
          relevantLinks={[]}
          technologies={['Javascript', 'Typescript', 'Angular1', 'Svelte.js', 'Node.js', 'MongoDB', 'CSS']}
        >
          <HeaderSideFrame title="Apr 2021 - May 2021" />
        </Card>
      </ul>
    </Section>
  );
}
