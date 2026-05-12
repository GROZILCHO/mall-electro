declare namespace React {
  type ReactNode = any;
  type ReactElement<P = any, T = any> = any;
  type FC<P = {}> = (props: P) => any;
  type HTMLAttributeAnchorTarget = string;
  type MouseEvent<T = any> = {
    preventDefault(): void;
    currentTarget: T;
    target: T;
  };
  type ChangeEvent<T = any> = {
    target: T & { name: string; value: string };
    currentTarget: T;
  };
  type FormEvent<T = any> = {
    preventDefault(): void;
    currentTarget: T;
    target: T;
  };

  function useState<T>(initialState: T): [T, (value: T | ((prev: T) => T)) => void];
  function useEffect(effect: () => void | (() => void), deps?: any[]): void;
  function useRef<T>(initialValue: T | null): { current: T | null };
  function cloneElement(element: any, props?: any, ...children: any[]): any;
  const StrictMode: any;
}

declare module "react" {
  export = React;
}

declare module "react/jsx-runtime" {
  export const Fragment: any;
  export function jsx(type: any, props: any, key?: any): any;
  export function jsxs(type: any, props: any, key?: any): any;
}

declare namespace JSX {
  interface IntrinsicAttributes {
    key?: any;
  }
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}
