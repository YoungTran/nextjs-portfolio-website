import { Typography } from "@material-ui/core";
import React, { memo, useState } from "react";
import { a, useSpring } from "react-spring";
import { useMeasure, usePrevious } from "./helpers";
import * as Icons from "./icons";
import { Content, Frame, Title, toggle } from "./styles";

const Tree = memo(({ children, name, style, defaultOpen = false }) => {
  const [isOpen, setOpen] = useState(defaultOpen);
  const previous = usePrevious(isOpen);
  const [bind, { height: viewHeight }] = useMeasure();
  const { height, opacity, transform } = useSpring({
    from: { height: 0, opacity: 0, transform: "translate3d(100px,0,0)" },
    to: {
      height: isOpen ? viewHeight : 0,
      opacity: isOpen ? 1 : 0,
      transform: `translate3d(${isOpen ? 0 : 2000}px,0,0)`,
    },
  });
  const Icon =
    Icons[`${children ? (isOpen ? "Minus" : "Plus") : "Close"}SquareO`];
  return (
    <Frame>
      {name === "Experience" ? null : (
        <Icon
          style={{ ...toggle, opacity: children ? 1 : 0.3 }}
          onClick={() => setOpen(!isOpen)}
        />
      )}

      <Title className="text-theme-light-gray sm:text-2xl">{name}</Title>
      <Content
        style={{
          opacity,
          height: isOpen && previous === isOpen ? "auto" : height,
        }}
      >
        <a.div style={{ transform }} {...bind} children={children} />
      </Content>
    </Frame>
  );
});

const ExperienceSlider = () => (
  <Tree name="Experience" defaultOpen={true}>
    <Tree name="2018" defaultOpen={false}>
      <Typography variant="caption" className="text-theme-light-gray">
        CoFounder and Software Engineer at
      </Typography>
      <img src="/ynl.png" className="h-10 w-30" alt="ynl-image" />
    </Tree>
    <Tree name="2019" defaultOpen={false}>
      <Typography variant="caption" className="text-theme-light-gray">
        Full Stack Developer at
      </Typography>
      <img src="/infi.png" className="h-10 w-30" alt="infiswift-image-1" />
    </Tree>
    <Tree name="2020" defaultOpen={false}>
      <Typography variant="caption" className="text-theme-light-gray">
        Full Stack Developer at
      </Typography>
      <img src="/infi.png" className="h-10 w-30" alt="infiswift-image-2" />
      <Typography variant="caption" className="text-theme-light-gray">
        Software Engineer at
      </Typography>
      <img src="/proterra.png" className="h-10 w-30" alt="proterra-image" />
    </Tree>
    <Tree name="2021" defaultOpen={false}>
      <Typography variant="caption" className="text-theme-light-gray">
        Software Engineer at
      </Typography>
      <img src="/proterra.png" className="h-10 w-30" alt="proterra-image" />
    </Tree>
  </Tree>
);

export default ExperienceSlider;
