import hotkeys, { HotkeysEvent } from "hotkeys-js";
import { useCallback, useEffect } from "react";

type CallbackFn = (event: KeyboardEvent, handler: HotkeysEvent) => void;

export default function useHotkeys(
  keys: string,
  callback: CallbackFn,
  deps: any[] = []
): any {
  const memoisedCallback = useCallback(callback, deps);

  useEffect(() => {
    hotkeys.filter = () => {
      return true;
    };
    hotkeys(keys, memoisedCallback);

    return (): any => hotkeys.unbind(keys);
  }, [memoisedCallback]);
}
