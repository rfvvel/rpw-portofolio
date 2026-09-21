import { useCallback, useEffect, useRef } from "react";
import { ProjectCard } from "../components/ProjectCard";
import { SectionHeading } from "../components/SectionHeading";
import { projects } from "../data/projects";
import type { Project } from "../types";
import "../styles/projects.css";

interface ProjectsProps { onOpenProject: (project: Project) => void }

export function Projects({ onOpenProject }: ProjectsProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const groupWidthRef = useRef(0);
  const dragRef = useRef({ active: false, didDrag: false, startX: 0, startScrollLeft: 0 });
  const lastDragEndRef = useRef(Number.NEGATIVE_INFINITY);
  const positionAtMiddle = useCallback(() => {
    const scroller = scrollerRef.current;
    const first = scroller?.querySelector<HTMLElement>('[data-copy="0"]');
    const second = scroller?.querySelector<HTMLElement>('[data-copy="1"]');
    if (!scroller || !first || !second) return;
    groupWidthRef.current = second.offsetLeft - first.offsetLeft;
    scroller.scrollLeft = groupWidthRef.current;
  }, []);
  useEffect(() => { const frame = requestAnimationFrame(positionAtMiddle); window.addEventListener("resize", positionAtMiddle); return () => { cancelAnimationFrame(frame); window.removeEventListener("resize", positionAtMiddle); }; }, [positionAtMiddle]);
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const handleWheel = (event: WheelEvent) => {
      if (event.ctrlKey) return;
      const rawDelta = Math.abs(event.deltaY) >= Math.abs(event.deltaX) ? event.deltaY : event.deltaX;
      if (rawDelta === 0) return;
      const unit = event.deltaMode === WheelEvent.DOM_DELTA_LINE ? 16 : event.deltaMode === WheelEvent.DOM_DELTA_PAGE ? scroller.clientWidth : 1;
      event.preventDefault();
      scroller.scrollLeft += rawDelta * unit * 0.75;
    };
    scroller.addEventListener("wheel", handleWheel, { passive: false });
    return () => scroller.removeEventListener("wheel", handleWheel);
  }, []);
  const loopScroll = () => {
    const scroller = scrollerRef.current;
    const width = groupWidthRef.current;
    if (!scroller || !width) return;
    if (scroller.scrollLeft < width * 0.5) scroller.scrollLeft += width;
    else if (scroller.scrollLeft > width * 1.5) scroller.scrollLeft -= width;
  };
  const stopDragging = (scroller: HTMLDivElement, pointerId: number) => {
    if (!dragRef.current.active) return;
    const completedDrag = dragRef.current.didDrag;
    dragRef.current.active = false;
    scroller.classList.remove("is-dragging");
    if (scroller.hasPointerCapture(pointerId)) scroller.releasePointerCapture(pointerId);
    if (completedDrag) lastDragEndRef.current = performance.now();
  };
  return <section id="projects" className="section projects-section">
    <div className="projects-heading">
          <SectionHeading>Projects</SectionHeading>
    </div>
    <div
        className="projects-scroll"
        ref={scrollerRef}
        onScroll={loopScroll}
        onPointerDown={(event) => {
          if (event.pointerType !== "mouse" || event.button !== 0) return;
          dragRef.current = { active: true, didDrag: false, startX: event.clientX, startScrollLeft: event.currentTarget.scrollLeft };
        }}
        onPointerMove={(event) => {
          if (!dragRef.current.active || event.pointerType !== "mouse") return;
          const distance = event.clientX - dragRef.current.startX;
          if (!dragRef.current.didDrag && Math.abs(distance) < 7) return;
          if (!dragRef.current.didDrag) event.currentTarget.setPointerCapture(event.pointerId);
          dragRef.current.didDrag = true;
          event.currentTarget.classList.add("is-dragging");
          event.preventDefault();
          event.currentTarget.scrollLeft = dragRef.current.startScrollLeft - distance;
        }}
        onPointerUp={(event) => stopDragging(event.currentTarget, event.pointerId)}
        onPointerCancel={(event) => stopDragging(event.currentTarget, event.pointerId)}
        onClickCapture={(event) => {
          if (performance.now() - lastDragEndRef.current >= 100) return;
          event.preventDefault();
          event.stopPropagation();
        }}
      >
        {[0, 1, 2].map((copy) => <div className="projects-group" data-copy={copy} key={copy} aria-hidden={copy !== 1}>{projects.map((project) => <ProjectCard project={project} onOpen={onOpenProject} isDuplicate={copy !== 1} key={`${copy}-${project.title}`} />)}</div>)}
    </div></section>;
}
