import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export const ScrollManager = (props) => {
  const { section, onSectionChange } = props;

  const data = useScroll();
  const lastPos = useRef(0);
  const isAnimating = useRef(false);
  const cooldownUntil = useRef(0);

  data.fill.classList.add("top-0");
  data.fill.classList.add("absolute");

  const goTo = (index) => {
    gsap.to(data.el, {
      duration: 1,
      scrollTop: index * data.el.clientHeight,
      overwrite: true,
      onStart: () => {
        isAnimating.current = true;
      },
      onComplete: () => {
        isAnimating.current = false;
        cooldownUntil.current = performance.now() + 500;
        lastPos.current = data.el.scrollTop / data.el.clientHeight;
      },
    });
  };

  useEffect(() => {
    goTo(section);
  }, [section]);

  useFrame(() => {
    const pos = data.el.scrollTop / data.el.clientHeight;
    if (isAnimating.current || performance.now() < cooldownUntil.current) {
      lastPos.current = pos;
      return;
    }

    const last = data.pages - 1;
    const delta = pos - lastPos.current;
    lastPos.current = pos;

    if (Math.abs(delta) < 0.002) return;

    let target = null;
    if (delta > 0) {
      target = Math.min(Math.floor(pos - delta) + 1, last);
    } else {
      target = Math.max(Math.ceil(pos - delta) - 1, 0);
    }

    if (target === section) {
      goTo(target);
    } else {
      onSectionChange(target);
    }
  });

  return null;
};
