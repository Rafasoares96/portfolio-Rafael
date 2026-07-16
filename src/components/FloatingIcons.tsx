import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTypescript,
  SiReact,
} from "react-icons/si";

import "../styles/FloatingIcons.css";

function FloatingIcons() {
  const icons = [
    { Icon: FaReact, className: "react", top: "10%", left: "8%" },
    { Icon: SiTypescript, className: "ts", top: "22%", left: "80%" },
    { Icon: SiJavascript, className: "js", top: "70%", left: "15%" },
    { Icon: FaNodeJs, className: "node", top: "75%", left: "78%" },
    { Icon: FaGitAlt, className: "git", top: "45%", left: "6%" },
    { Icon: FaGithub, className: "github", top: "55%", left: "88%" },
    { Icon: SiReact, className: "native", top: "35%", left: "50%" },
  ];

  return (
    <div className="floating-icons">
      {icons.map(({ Icon, className, top, left }, index) => (
        <motion.div
          key={index}
          className={`floating-icon ${className}`}
          style={{ top, left }}
          animate={{
            y: [0, -18, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 5 + index,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Icon />
        </motion.div>
      ))}
    </div>
  );
}

export default FloatingIcons;