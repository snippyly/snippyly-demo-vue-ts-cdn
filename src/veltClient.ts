import { BehaviorSubject } from 'rxjs';
import { Velt } from '@veltdev/types';

const subject = new BehaviorSubject<Velt | null>(null);

export const VeltClient = {
  setClient: (client: Velt) => subject.next(client),
  getClient: () => subject.asObservable()
};
