"use client";
import { siteConfig } from "@/lib/site-config";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
     const pathname=usePathname();
  return (
    <motion.div className="links" variants={variants}>
      {siteConfig.navbar.map((item) => (
        <motion.a
          href={item.link}
          key={item.id}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
        {item.id===3 ? (pathname==="/about-us" ? null:item.title) : item.title}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
