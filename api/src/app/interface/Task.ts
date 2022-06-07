export interface Task {
  name: string,
  taskName: string,
  resolutionDate: Date,
  resolutionTime: string,
}

export interface DBTask {
  id: number,
  name: string,
  taskName: string,
  resolutionDate: Date,
  resolutionTime: string,
}