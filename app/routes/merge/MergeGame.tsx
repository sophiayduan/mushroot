import "./merge.css";
import { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";


type Mushroom = {
  type: "mushroom";
  level: number;
  img: string;
};

export default function MergeGame() {
  const [grid, setGrid] = useState<(Mushroom | null)[]>(Array(12).fill(null));

  const createMushroom = (level = 1): Mushroom => ({
    type: "mushroom",
    level,
    img: `/merge-${level}.png`,
  });

  const spawnMushroom = () => {
    setGrid((prev) => {
      const newGrid = [...prev];
      const emptyIndex = newGrid.findIndex((c) => c === null);
      if (emptyIndex === -1) return prev;
      newGrid[emptyIndex] = createMushroom(1);
      return newGrid;
    });
  };

  const handleDrop = (fromIndex: number, toIndex: number) => {
    if (fromIndex === toIndex) return;
    setGrid((prev) => {
      const newGrid = [...prev];
      const source = newGrid[fromIndex];
      const target = newGrid[toIndex];
      if (!source) return prev;
      if (!target) {
        newGrid[toIndex] = source;
        newGrid[fromIndex] = null;
        return newGrid;
      }
      if (source.type === target.type && source.level === target.level) {
        newGrid[toIndex] = createMushroom(source.level + 1);
        newGrid[fromIndex] = null;
        return newGrid;
      }
      [newGrid[fromIndex], newGrid[toIndex]] = [newGrid[toIndex], newGrid[fromIndex]];
      return newGrid;
    });
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="merge">
        <button className="spawn-btn" onClick={spawnMushroom}>
          Spawn Mushroom
        </button>

        <h1>Mush Merge</h1>

        <div className="grid-box">
          {grid.map((cell, i) => (
            <Zone key={i} index={i} cell={cell} handleDrop={handleDrop} />
          ))}
        </div>
      </div>
    </DndProvider>
  );
}

function Zone({
  cell,
  index,
  handleDrop,
}: {
  cell: Mushroom | null;
  index: number;
  handleDrop: (from: number, to: number) => void;
}) {
  const [, drop] = useDrop(() => ({
    accept: "MUSHROOM",
    drop: (dragged: { fromIndex: number }) => {
      handleDrop(dragged.fromIndex, index);
    },
  }));

  return (
    <div ref={drop as any} className="grid">
      {cell && <Item item={cell} index={index} />}
    </div>
  );
}

function Item({ item, index }: { item: Mushroom; index: number }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "MUSHROOM",
    item: { fromIndex: index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <img
      ref={drag as any}
      src={item.img}
      alt="mushroom"
      className="merge-item"
    />
  );
}