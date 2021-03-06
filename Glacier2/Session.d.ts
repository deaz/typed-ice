import {Ice} from '../Ice/Ice';
import {Glacier2} from "./Glacier2";

export {Glacier2}

declare module './Glacier2' {
  namespace Glacier2 {
    export class CannotCreateSessionException extends Ice.UserException {
      constructor(reason: string, cause?: string);
    }

    export class Session extends Ice.Object {
      destroy(current: Ice.Current): void;
    }

    export interface SessionPrx extends Ice.ObjectPrx {
      destroy(): Ice.Promise<void>;
    }
    export const SessionPrx: Ice.ObjectPrxStatic<SessionPrx>;

    export interface SessionControlPrx extends Ice.ObjectPrx {
      destroy(): Ice.Promise<void>;
    }
    export const SessionControlPrx: Ice.ObjectPrxStatic<SessionControlPrx>;

    export class SessionManager extends Ice.Object {}
  }
}
