import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";
import { siteConfig } from "@/lib/site-config";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          {siteConfig.heroAbout.tagline[0]}
          <br /> {siteConfig.heroAbout.tagline[1]}
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <h1>
            {siteConfig.heroAbout.title[0]} <motion.b whileHover={{color:"orange"}}>{siteConfig.heroAbout.title[1 ]}</motion.b> 
            {siteConfig.heroAbout.title[2]} <motion.b whileHover={{color:"orange"}}>{siteConfig.heroAbout.title[3]}</motion.b> 
          </h1>
        </div>
        
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        {siteConfig.heroAbout.content.map((item) => {

          return (
          <motion.div
            className="box"
            whileHover={{ background: "lightgray", color: "black" }}
            key={item.id}
          >
            <h2 style={{ fontSize: '1.5em', fontWeight: 'bold' }}>{item.title}</h2>
            <p>
              {item.description}
            </p>
          </motion.div>
          )
          })
        }
        
      </motion.div>
    </motion.div>
  );
};

export default Services;
