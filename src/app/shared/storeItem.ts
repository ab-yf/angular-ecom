import { Observable, BehaviorSubject } from 'rxjs';

// T is a generic class that can work with any data type.
// We are perfoming state management in this class in order to avoid idential API HTTP Calls resulting in collisions.

export class StoreItem<T> {
    private _state$: BehaviorSubject<T>;
  
    protected constructor(initialState: T) {
      this._state$ = new BehaviorSubject(initialState);
    }

    // Getters and Setters
  
    protected setValue(newValue: T): void {
      this._state$.next(newValue);
    }
  
    protected get value$(): Observable<T> {
      return this._state$.asObservable();
    }
  
    protected get value(): T {
      return this._state$.value;
    }
  }
  