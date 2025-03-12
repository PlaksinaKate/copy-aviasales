declare var $RefreshReg$: (type: unknown, id: string) => void;
declare var $RefreshSig$: () => (type: unknown) => unknown;

declare module "*.scss" {
  interface IClassNames {
    [className: string]: string;
  }
  const classnames: IClassNames;
  export = classnames;
}
