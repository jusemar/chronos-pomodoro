import type { TaskStateModel } from "./TaskStateModel";

export type TaskModel = {
  id: string;
  name: string;
  duration: number; // Duration in seconds
startDate: number; // Timestamp in millisecond
completedDate: number | null; // Timestamp in milliseconds
interruptdDate: number | null; // Timestamp in milliseconds
type: keyof TaskStateModel['config'];
};  