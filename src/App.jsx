import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";


function App() {
  const [tasks, setTasks] = useState([
  {
    id: 1,
    title: 'Aprender React',
    description: 'Aprender React do zero',
    isCompleted: false,
  },
  {
    id: 2,
    title: 'Aprender Modelagem 3D',
    description: 'Aprender Modelagem 3D do zero',
    isCompleted: false,
  },
  {
    id: 3,
    title: 'Aprender Node',
    description: 'Aprender Node do zero',
    isCompleted: false,
  },
  ]);


  return (
  <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
    <div className="w-[500px]">
      <h1 className="text-3xl text-slate-100 font-bold text-center">Gerenciador de Tarefas   
      </h1>
      <AddTask/>
      <Tasks tasks={tasks} /> 
    </div>
  </div>
  );
}

export default App;
