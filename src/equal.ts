import { isEmpty, isList, getHead, getTail } from './list';

export function isEqual(a: unknown, b: unknown): boolean {
  if (isList(a) && isList(b)) {
    if (isEmpty(a) && isEmpty(b)) { return true; }

    return isEqual(getHead(a), getHead(b)) && isEqual(getTail(a), getTail(b));
  }

  return a === b;
}
