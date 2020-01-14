import { Injectable } from '@angular/core';
import { ToolbarConfiguration } from './toolbar';

@Injectable({
  providedIn: 'root'
})
export class ToolbarService {
  private configuration: ToolbarConfiguration;

  constructor() {}

  setConfiguration(configuration: ToolbarConfiguration) {
    this.configuration = configuration;
  }

  getConfiguration(): ToolbarConfiguration {
    return this.configuration;
  }
}
