export interface ExerciseEntry {
    name: string;
    folder: string;
}

export const exercisesList: ExerciseEntry[] = [
    { name: 'Creating Observables', folder: 'creating' },
    { name: 'Window resize: Observables from events', folder: 'fromevent' },
    { name: 'Multicasting with Subjects', folder: 'multicast' },
    { name: 'Error handling', folder: 'error-handling' },
    { name: 'How to unsubscribe and avoid memory leaks', folder: 'unsubscribe' },
    { name: 'Higher Order Observables with concatMap, mergeMap, switchMap, exhaustMap', folder: 'higherorder' },
    { name: '[EXTRA] Drag and drop', folder: 'dragdrop' },
];
