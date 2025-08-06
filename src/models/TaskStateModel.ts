import type { TaskModel } from "./TaskModel";

export type TaskStateModel = {
  tasks: TaskModel[];
  secondsRemaining: number;
  formattedSecondsRemaining: string;
  activeTask: TaskModel | null;
  currentCycle: number;
  config: {
    workTime: number; // in seconds
    shortBreakTime: number; // in seconds
    longBreakTime: number; // in seconds
  }

};

  
