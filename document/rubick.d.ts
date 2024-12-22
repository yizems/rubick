declare global {
  interface Window {
    rubick: Rubick;
  }
}

interface Rubick {
  hooks: Hooks;
  __event__: Record<string, any>;

  onPluginEnter(cb: Function): void;

  onPluginReady(cb: Function): void;

  onPluginOut(cb: Function): void;

  openPlugin(plugin: any): void;

  hideMainWindow(): void;

  showMainWindow(): void;

  showOpenDialog(options: any): any;

  showSaveDialog(options: any): any;

  setExpendHeight(height: number): void;

  setSubInput(onChange: Function, placeholder?: string, isFocus?: boolean): void;

  removeSubInput(): void;

  setSubInputValue(text: string): void;

  subInputBlur(): void;

  getPath(name: string): string;

  showNotification(body: string, clickFeatureCode?: string): void;

  copyImage(img: string): void;

  copyText(text: string): void;

  copyFile(file: string): void;

  db: Database;
  dbStorage: Storage;

  isDarkColors(): boolean;

  getFeatures(): any;

  setFeature(feature: any): void;

  screenCapture(cb: Function): void;

  removeFeature(code: any): void;

  shellOpenExternal(url: string): void;

  isMacOs(): boolean;

  isWindows(): boolean;

  isLinux(): boolean;

  shellOpenPath(path: string): void;

  getLocalId(): string;

  removePlugin(): void;

  shellShowItemInFolder(path: string): void;

  redirect(label: string, payload: any): void;

  shellBeep(): void;

  getFileIcon(path: string): string;

  getCopyedFiles(): any;

  simulateKeyboardTap(...keys: string[] | int[]): void;

  getCursorScreenPoint(): any;

  getDisplayNearestPoint(point: any): any;

  outPlugin(): void;

  createBrowserWindow(url: string, options: any, callback: Function): any;

  backToOtherWindow(): void;

  backToOtherWindowAndPaste(): void;

  paste(): void;
  log: (...args) => void;
  windowMoving: (mouseX, mouseY, width, height) => void;
}

interface Hooks {
  onPluginEnter?: Function;
  onPluginReady?: Function;
  onPluginOut?: Function;
  onSubInputChange?: Function;
  onScreenCapture?: Function;
}

interface Database {
  put(data: any): any;

  get(id: string): any;

  remove(doc: any): any;

  bulkDocs(docs: any[]): any;

  allDocs(key: any): any;

  postAttachment(docId: string, attachment: any, type: string): any;

  getAttachment(docId: string): any;

  getAttachmentType(docId: string): any;
}

interface Storage {
  setItem(key: string, value: any): void;

  getItem(key: string): any;

  removeItem(key: string): void;
}

export {};
