import React from "react";
import GalleryImage from "../GalleryImage.tsx";
import SkillItem from "../SkillItem.tsx";
import Gallery from "../Gallery.tsx";
import './ProgrammerView.scss';
import ContactListItem from "../ContactListItem.tsx";

export default function ProgrammerView() {
  return (
    <div className="ProgrammerView">
      <div className="Section Skills Angular">
        <div className="SectionLabel">Framework</div>
        <div className="Icon"></div>
        <div className="Information">
          <div className="Header text-gray-1">Angular</div>
          <div className="Description text-gray-2">
            Development of single page applications using microservices architecture.
          </div>
        </div>
        <Gallery columnsCount={2} columnWidth={50} rowsCount={1} rowHeight={100} pointsCount={0}>
          <div className="GalleryImage Min ProjectAngular2"></div>
          <div className="Info">
            <div className="GalleryHeader text-gray-2">Example application</div>
            <ul className="TechList">
              <li className="ListItem text-gray-2">Angular 19</li>
              <li className="ListItem text-gray-2">Custom Components</li>
              <li className="ListItem text-gray-2">Router</li>
              <li className="ListItem text-gray-2">Services</li>
              <li className="ListItem text-gray-2">rxjs</li>
              <li className="ListItem text-gray-2">material</li>
            </ul>
            <ContactListItem linkUrl="https://github.com/elumine/TestFrontAngular">
              <div className="ContactIcon Github"></div>
            </ContactListItem>
            <div className="DescriptionText">View on Github</div>
          </div>
        </Gallery>
        <Gallery columnsCount={2} columnWidth={50} rowsCount={1} rowHeight={100} pointsCount={0}>
          <div className="GalleryImage Min ProjectAngular1"></div>
          <div className="Info">
            <div className="GalleryHeader text-gray-2">Game analytics project</div>
            <ul className="TechList">
              <li className="ListItem text-gray-2">Display information of game session, playtime etc.</li>
              <li className="ListItem text-gray-2">Angular 2</li>
              <li className="ListItem text-gray-2">Firebase backend integration as database</li>
              <li className="Years text-gray-4">Developed in 2020</li>
            </ul>
            <div>
              <ContactListItem linkUrl="https://github.com/elumine/LastDaysAnalytics">
                <div className="ContactIcon Github"></div>
              </ContactListItem>
              <div className="DescriptionText text-gray-2">View on Github</div>
            </div>
          </div>
        </Gallery>
      </div>
      <div className="Section Skills Javascript">
        <div className="SectionLabel">Javascript project</div>
        <div className="Icon"></div>
        <div className="Information">
          <div className="Header text-gray-1"></div>
          <div className="Years text-gray-4">Developed in 2014</div>
          <div className="Description text-gray-2">
            Student project of 2D javascript multiplayer game.
          </div>
        </div>
        <Gallery columnsCount={2} columnWidth={50} rowsCount={1} rowHeight={100} pointsCount={0}>
          <div className="GalleryImage Min Project1"></div>
          <div className="Info">
            <ul className="TechList">
              <li className="ListItem text-gray-2">CoffeeScript Client</li>
              <li className="ListItem text-gray-2">Canvas rendering</li>
              <li className="ListItem text-gray-2">Websockets multiplayer</li>
              <li className="ListItem text-gray-2">NodeJS Server</li>
            </ul>
            <div>
              <ContactListItem linkUrl="https://github.com/elumine/web.multiplayer-rpg">
                <div className="ContactIcon Github"></div>
              </ContactListItem>
              <div className="DescriptionText text-gray-2">View on Github</div>
            </div>
          </div>
        </Gallery>
      </div>
      <div className="Section Skills React">
        <div className="SectionLabel">Framework</div>
        <div className="Icon"></div>
        <div className="Information">
          <div className="Header text-gray-1">React</div>
          <div className="Description text-gray-2">
            Development of single page applications.
          </div>
        </div>
        <Gallery columnsCount={2} columnWidth={50} rowsCount={1} rowHeight={100} pointsCount={0}>
          <div className="GalleryImage Min ProjectReact1"></div>
          <div className="Info">
            <div className="GalleryHeader text-gray-2">Example application</div>
            <ul className="TechList">
              <li className="ListItem text-gray-2">React</li>
              <li className="ListItem text-gray-2">Microservices and useState()</li>
              <li className="ListItem text-gray-2">Material</li>
            </ul>
            <div>
              <ContactListItem linkUrl="https://github.com/elumine/TestFrontReact">
                <div className="ContactIcon Github"></div>
              </ContactListItem>
              <div className="DescriptionText text-gray-2">View on Github</div>
            </div>
          </div>
        </Gallery>
        <Gallery columnsCount={2} columnWidth={50} rowsCount={1} rowHeight={100} pointsCount={0}>
          <div className="GalleryImage Min ProjectReact2"></div>
          <div className="Info">
            <div className="GalleryHeader text-gray-2">MobX Example application</div>
            <ul className="TechList">
              <li className="ListItem text-gray-2">React</li>
              <li className="ListItem text-gray-2">MobX state management</li>
            </ul>
            <div>
              <ContactListItem linkUrl="https://github.com/elumine/TestFrontReactMobx">
                <div className="ContactIcon Github"></div>
              </ContactListItem>
              <div className="DescriptionText text-gray-2">View on Github</div>
            </div>
          </div>
        </Gallery>
        {/* <Gallery columnsCount={2} columnWidth={50} rowsCount={1} rowHeight={100} pointsCount={0}>
          <div className="GalleryImage Min ProjectReact3"></div>
          <div className="Info">
            <div className="GalleryHeader text-gray-2">Redux Example application</div>
            <ul className="TechList">
              <li className="ListItem text-gray-2">React</li>
              <li className="ListItem text-gray-2">Redux state management</li>
            </ul>
            <div>
              <ContactListItem linkUrl="https://github.com/elumine/TestFrontReactNextRedux">
                <div className="ContactIcon Github"></div>
              </ContactListItem>
              <div className="DescriptionText text-gray-2">View on Github</div>
            </div>
          </div>
        </Gallery> */}
      </div>
      <div className="Section Skills NodeJS">
        <div className="SectionLabel">NodeJS project</div>
        <div className="Icon"></div>
        <div className="Information">
          <div className="Header text-gray-1"></div>
          <div className="Years text-gray-4">Developed in 2015</div>
          <div className="Description text-gray-2">
            Student project of 3D javascript multiplayer game.
          </div>
        </div>
        <Gallery columnsCount={2} columnWidth={50} rowsCount={1} rowHeight={100} pointsCount={0}>
          <div className="GalleryImage Min Project2"></div>
          <div className="Info">
            <ul className="TechList">
              <li className="ListItem text-gray-2">Socket base networking</li>
              <li className="ListItem text-gray-2">3D Rendering engine using THREE.JS</li>
              <li className="ListItem text-gray-2">Web Workers for multithreading tasks</li>
              <li className="ListItem text-gray-2">Dynamic assets steaming</li>
              <li className="ListItem text-gray-2">WebGL shaders</li>
              <li className="ListItem text-gray-2">NodeJS backend</li>
            </ul>
            <div>
              <ContactListItem linkUrl="https://github.com/elumine/web.multiplayer-game-engine">
                <div className="ContactIcon Github"></div>
              </ContactListItem>
              <div className="DescriptionText text-gray-2">View on Github</div>
            </div>
          </div>
        </Gallery>
      </div>
      {/* <div className="Section Skills Nest">
        <div className="SectionLabel">Framework</div>
        <div className="Icon"></div>
        <div className="Information">
          <div className="Header text-gray-1">Nest</div>
          <div className="Description text-gray-2">
            Development of REST API backends.
          </div>
        </div>
        <Gallery columnsCount={2} columnWidth={50} rowsCount={1} rowHeight={100} pointsCount={0}>
          <div className="GalleryImage Min ProjectNest1"></div>
          <div className="Info">
            <div className="GalleryHeader text-gray-2">Example project</div>
            <ul className="TechList">
              <li className="ListItem text-gray-2">NestJS</li>
              <li className="ListItem text-gray-2">REST API</li>
            </ul>
            <div>
              <ContactListItem linkUrl="https://github.com/elumine/TestBackNest">
                <div className="ContactIcon Github"></div>
              </ContactListItem>
              <div className="DescriptionText text-gray-2">View on Github</div>
            </div>
          </div>
        </Gallery>
      </div> */}
      <div className="Section Work Reburn">
        <div className="SectionLabel">Game Designer Job</div>
        <a href="https://www.reburn.com/" target="blank">
          <div className="Icon"></div>
          <div className="Information">        
            <div className="Header text-gray-1">Reburn</div>
            <div className="Position text-gray-2">Technial Game Designer</div>
            <div className="Years text-gray-4">Feb. 2021 - Aug. 2024</div>
            <div className="Description text-gray-3">
              Design and implementation of gameplay systems using Unreal Engine. 
            </div>
          </div>
        </a>
      </div>
      <div className="Section Work Mobidev">
        <div className="SectionLabel">Software Developer Job</div>
        <a href="https://mobidev.biz/" target="blank">
          <div className="Icon"></div>
          <div className="Information">        
            <div className="Header text-gray-1">MobiDev</div>
            <div className="Position text-gray-2">JavaScript Developer</div>
            <div className="Years text-gray-4">Apr. 2015 - Jan. 2021</div>
            <div className="Description text-gray-3">Development of enterprise applications (medical, search engines, custom analytics tools, etc.) for web, mobile and desktop platforms.</div>
          </div>
        </a>
        <div className="Skills">
          <SkillItem imageId='angular'></SkillItem>
          <SkillItem imageId='react'></SkillItem>
          <SkillItem imageId='html'></SkillItem>
          <SkillItem imageId='css'></SkillItem>
          <SkillItem imageId='javascript'></SkillItem>
          <SkillItem imageId='typescript'></SkillItem>
          <SkillItem imageId='node'></SkillItem>
          <SkillItem imageId='nest'></SkillItem>
          <SkillItem imageId='mongodb'></SkillItem>
          <SkillItem imageId='postgresql'></SkillItem>
        </div>
        <div className="Gallery">
          <GalleryImage imageId='1' displayText='Web Applications'></GalleryImage>
          <GalleryImage imageId='2' displayText='Dev Tools'></GalleryImage>
          <GalleryImage imageId='3' displayText='Servers'></GalleryImage>
          <GalleryImage imageId='4' displayText='ReactJS'></GalleryImage>
        </div>
      </div>
      <div className="Section Education">
        <div className="SectionLabel">Education</div>
        <div className="List">
          <div className="Item">
            <a href="https://nure.ua/en/" target="blank">
              <div className="Icon"></div>
              <div className="Information">
                <div className="Header text-gray-1">Kharkiv National University of Radioelectronics, Ukraine</div>
                <div className="Description text-gray-2">Publishing and printing computer technologies and systems, Publishing Production Engineer</div>
                <div className="Years text-gray-4">2010-2015</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}