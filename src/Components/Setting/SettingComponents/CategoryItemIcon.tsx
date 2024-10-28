import { DragControls } from "framer-motion";

export const ReorderIcon = ({ dragControls } : { dragControls?: DragControls }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 39 39"
      width="35"
      height="35"
      onPointerDown={(event) => {
        if(dragControls)dragControls.start(event)
      }}
      className="w-[16px] h-[16px] cursor-grab"
    >
      <line x1="0" y1="5" x2="200" y2="5" stroke="black" stroke-width="2" />
      <line x1="0" y1="15" x2="200" y2="15" stroke="black" stroke-width="2" />
      <line x1="0" y1="25" x2="200" y2="25" stroke="black" stroke-width="2" />
      <line x1="0" y1="35" x2="200" y2="35" stroke="black" stroke-width="2" />
    </svg>
  );
}

export const PlusIcon = () => {
  return (
    <svg width="30" height="30">
      <line x1="5" y1="15" x2="25" y2="15" stroke="black" stroke-width="1" />
      <line x1="15" y1="5" x2="15" y2="25" stroke="black" stroke-width="1" />
    </svg>
  );
}