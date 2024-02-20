import Section from "@/components/Section";
import ImageSideFrame from "../card/ImageSideFrame";
import Card from "../card/Card";
import mySpotify from "../../../../public/mySpotify.png"
import ImageGallery from '../../../../public/ImageGallery.png'

export default function Projects() {
  return (
    <Section id="project" title="projects">
      <ul className="group/list">
        <Card
          href='https://github.com/seth-bradshaw/Mock-Spotify-UI/tree/develop'
          header="Mock Spotify"
          description="I developed a web application inspired by Spotify's intuitive design and functionality. By implementing the OAuth2 flow, Spotify Premium users can seamlessly access the app. Additionally, I included features that allow users to easily view their top artists, songs, and genres over different time periods, from the past month to all-time favorites. It's a simple yet effective tool for music lovers to explore their listening habits in a familiar environment."
          relevantLinks={[]}
          technologies={['Typescript', 'React', 'Node.js', 'CSS']}
        >
          <ImageSideFrame src={mySpotify} alt="Screenshot of my mock spotify website" />
        </Card>
        <Card
          href='https://github.com/seth-bradshaw/Image-Gallery'
          header="Image Gallery"
          description="During an engineering take-home test, I built an image gallery using React, Node, and MongoDB, integrating Filestack for added functionality. Going beyond expectations, I implemented features allowing users to upload public/private photos and import third-party images. This showcased my commitment to exceeding project requirements while highlighting my technical proficiency."
          relevantLinks={[]}
          technologies={['Typescript', 'React', 'Node.js', 'MongoDB', 'CSS']}
        >
          <ImageSideFrame src={ImageGallery} alt="Screenshot of my Image Gallery" />
        </Card>
      </ul>
    </Section>
  )
}
