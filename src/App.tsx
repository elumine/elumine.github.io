import React from "react";
import "./App.scss";
import ContactListItem from "./ContactListItem.tsx";
import GalleryImage from "./GalleryImage.tsx";
import SkillItem from "./SkillItem.tsx";

function App() {
  return (
    <div className="App">
      <div className="Section Contacts">
        <div className="Background">
          <div className="Blackdrop"></div>
        </div>
        <div className="Photo"></div>
        <div className="Information">
          <div className="Name">Yevhen Kliuchko</div>
          <div className="Profession">Game Designer</div>
          <div className="Description">Technical design of systems and gameplay using Unreal Engine.</div>
        </div>
        <div className="List">
          <ContactListItem linkUrl="https://www.youtube.com/@%D0%95%D0%B2%D0%B3%D0%B5%D0%BD%D0%B8%D0%B9%D0%9A%D0%BB%D1%8E%D1%87%D0%BA%D0%BE-%D1%8A5%D1%83">
            <div className="ContactIcon Youtube"></div>
          </ContactListItem>
          <ContactListItem linkUrl="https://www.linkedin.com/in/elumine/">
            <div className="ContactIcon Linkedin"></div>
          </ContactListItem>
          <ContactListItem linkUrl="https://www.artstation.com/elumine">
            <div className="ContactIcon Artstation"></div>
          </ContactListItem>
          <ContactListItem linkUrl="https://github.com/elumine">
            <div className="ContactIcon Github"></div>
          </ContactListItem>
        </div>
      </div>
      <div className="Section Project Project2">
        <div className="SectionLabel">Studio Project</div>
        <div className="Information">
          <div className="Header">La Quimera</div>
          <div className="Job">Reburn Studio</div>
          <div className="Description">
            La Quimera is a story-driven FPS set in dystopian future Latin America. In a fractured world where microstates rely on mercenary forces, you are an operative caught in a web of lies and deception. Play alone or with up to two friends geared with futuristic weapons, exoskeletons and combat abilities.
          </div>
        </div>
        <div className="Youtube">
          <a href="https://www.youtube.com/watch?v=gIleDPTu9XI" target="blank">
            <div className="Preview"></div>
          </a>
        </div>
        <div className="Steam">
          <a href="https://store.steampowered.com/app/2282350/La_Quimera/" target="blank">
            <div className="SteamImage"></div>
          </a>
        </div>
        <div className="Gallery">
          <GalleryImage imageId='1' displayText=''></GalleryImage>
          <GalleryImage imageId='2' displayText=''></GalleryImage>
          <GalleryImage imageId='3' displayText=''></GalleryImage>
          <GalleryImage imageId='4' displayText=''></GalleryImage>
          <GalleryImage imageId='5' displayText=''></GalleryImage>
          <GalleryImage imageId='6' displayText=''></GalleryImage>
        </div>
      </div>
      <div className="Section Project Project1">
        <div className="SectionLabel">Idie Project</div>
        <div className="Information">
          <div className="Header">Unreal Engine Action RPG Game</div>
          <div className="Job">Personal Demo Project</div>
          <div className="Years">Jan. 2018 - Feb. 2020</div>
          <div className="Description">Unreal Engine indie game demo.</div>
        </div>
        <div className="Youtube">
          <a href="https://www.youtube.com/watch?v=yIsbTKms9Is" target="blank">
            <div className="Preview"></div>
          </a>
        </div>
        <div className="Steam">
          <a href="https://store.steampowered.com/app/1484830/Last_Days/" target="blank">
            <div className="SteamImage"></div>
          </a>
        </div>
        <div className="Gallery">
          <GalleryImage imageId='1' displayText=''></GalleryImage>
          <GalleryImage imageId='2' displayText=''></GalleryImage>
          <GalleryImage imageId='3' displayText=''></GalleryImage>
          <GalleryImage imageId='4' displayText=''></GalleryImage>
        </div>
      </div>
      <div className="Section Work Reburn">
        <div className="SectionLabel">Game Designer Job</div>
        <a href="https://www.reburn.com/" target="blank">
          <div className="Icon"></div>
          <div className="Information">        
            <div className="Header">Reburn</div>
            <div className="Position">Technial Game Designer</div>
            <div className="Years">Feb. 2021 - Aug. 2024</div>
            <div className="Description">
              Design and implementation of gameplay systems using Unreal Engine. 
            </div>
          </div>
        </a>
        <div className="Gallery">
          <GalleryImage imageId='bp1' displayText='Animation Blueprints'></GalleryImage>
          <GalleryImage imageId='bp3' displayText='Macro Libs'></GalleryImage>
          <GalleryImage imageId='bp2' displayText='Libraries for designers'></GalleryImage>
          <GalleryImage imageId='bp4' displayText='Actors Scripting'></GalleryImage>
          <GalleryImage imageId='net1' displayText='Network Scripting'></GalleryImage>
          <GalleryImage imageId='levelbp1' displayText='Level Scripting'></GalleryImage>
          <GalleryImage imageId='levelbp2' displayText='Scene Scripting'></GalleryImage>
          <GalleryImage imageId='asset1' displayText='Assets Setup'></GalleryImage>
          <GalleryImage imageId='anim0' displayText='Animation Graphs'></GalleryImage>
          <GalleryImage imageId='anim1' displayText='Layered Animations'></GalleryImage>
          <GalleryImage imageId='anim2' displayText='Animations Setup'></GalleryImage>
          <GalleryImage imageId='anim3' displayText='Anim Graph Scripting'></GalleryImage>
          <GalleryImage imageId='anim4' displayText='Notify Setup'></GalleryImage>
          <GalleryImage imageId='anim5' displayText='Skeleton Setup'></GalleryImage>
          <GalleryImage imageId='anim6' displayText='Animation Blending'></GalleryImage>
          <GalleryImage imageId='mat1' displayText='Materials Setup'></GalleryImage>
          <GalleryImage imageId='mat2' displayText='Prototype Materails'></GalleryImage>
          <GalleryImage imageId='pp0' displayText='Post Process Setup'></GalleryImage>
          <GalleryImage imageId='pp1' displayText='Post Process Materials'></GalleryImage>
          <GalleryImage imageId='ui0' displayText='Widgets Creation'></GalleryImage>
          <GalleryImage imageId='ui1' displayText='UI Animations'></GalleryImage>
          <GalleryImage imageId='ui2' displayText='UI Scripting'></GalleryImage>
          <GalleryImage imageId='vfx1' displayText='Prototyping VFX'></GalleryImage>
          <GalleryImage imageId='vfx2' displayText='Custom Niagara Scripts'></GalleryImage>
          <GalleryImage imageId='vfx3' displayText='VFX Scripting'></GalleryImage>
          <GalleryImage imageId='seq0' displayText='Sequences Creation'></GalleryImage>
          <GalleryImage imageId='seq2' displayText='Sequencer Scripting'></GalleryImage>
          <GalleryImage imageId='seq3' displayText='Level Animations'></GalleryImage>
          <GalleryImage imageId='seq4' displayText='Character Animations'></GalleryImage>
          <GalleryImage imageId='seq5' displayText='Sequencer VFX Integration'></GalleryImage>
          <GalleryImage imageId='debug1' displayText='Characters Debug'></GalleryImage>
          <GalleryImage imageId='debug2' displayText='Blueprint Debug'></GalleryImage>
          <GalleryImage imageId='opt1' displayText='Game Optimization'></GalleryImage>
          <GalleryImage imageId='opt2' displayText='Threads Profiling'></GalleryImage>
          <GalleryImage imageId='opt5' displayText='Optimizations'></GalleryImage>
          <GalleryImage imageId='opt4' displayText='Stats'></GalleryImage>
          <GalleryImage imageId='opt3' displayText='Memory Optimization'></GalleryImage>
        </div>
      </div>
      <div className="Section Work Mobidev">
        <div className="SectionLabel">Software Developer Job</div>
        <a href="https://mobidev.biz/" target="blank">
          <div className="Icon"></div>
          <div className="Information">        
            <div className="Header">MobiDev</div>
            <div className="Position">JavaScript Developer</div>
            <div className="Years">Apr. 2015 - Jan. 2021</div>
            <div className="Description">Development of enterprise applications (medical, search engines, custom analytics tools, etc.) for web, mobile and desktop platforms.</div>
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
                <div className="Header">Kharkiv National University of Radioelectronics, Ukraine</div>
                <div className="Description">Publishing and printing computer technologies and systems, Publishing Production Engineer</div>
                <div className="Years">2010-2015</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;