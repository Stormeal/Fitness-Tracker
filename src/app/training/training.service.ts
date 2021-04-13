import { Subject } from 'rxjs';
import { Exercise } from './exercise.model';

export class TrainingService {
  exerciseChanged = new Subject<Exercise>();
  private runningExercise: Exercise;

  private availbleExercise: Exercise[] = [
    { id: 'crunches', name: 'Crunches', duration: 30, calories: 8 },
    { id: 'touch-toes', name: 'Touch Toes', duration: 180, calories: 15 },
    { id: 'side-lunges', name: 'Side Lunges', duration: 120, calories: 18 },
    { id: 'burpees', name: 'Burpees', duration: 60, calories: 8 },
  ];

  getAvailableExercises() {
    return this.availbleExercise.slice();
  }

  startExecise(selectedId: string) {
    const selectedExercise = this.availbleExercise.find(
      (ex) => ex.id === selectedId
    );
    this.runningExercise = selectedExercise;
    this.exerciseChanged.next({ ...this.runningExercise });
  }
}
