import { Observable } from 'rxjs';

export interface ToolbarBtn {
  value: string;
  label: string;
  visible$: Observable<boolean>;
  routerLink?: string;
  click?(): void;
}

export interface ToolbarConfiguration {
  title: string;
  buttons: ToolbarBtn[];
}
