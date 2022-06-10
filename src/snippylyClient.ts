import { BehaviorSubject } from 'rxjs';
import { Snippyly } from '@snippyly/types';

const subject = new BehaviorSubject<Snippyly | null>(null);

export const SnippylyClient = {
  setClient: (client: Snippyly) => subject.next(client),
  getClient: () => subject.asObservable()
};
