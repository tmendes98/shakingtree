export type AppleAction = {
  type: string;
};

export type AppleDispatchType = (args: AppleAction) => AppleAction;

export type ShakingTreeState = {
  appleCount: number;
};
