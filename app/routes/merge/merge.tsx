import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import MergeLogic from "./MergeGame";
import Navbar from "../../components/navbar/Navbar";

function Merge() {
  return (
    <DndProvider backend={HTML5Backend}>
      <MergeLogic />
      <Navbar/>
    </DndProvider>
  );
}

export default Merge;