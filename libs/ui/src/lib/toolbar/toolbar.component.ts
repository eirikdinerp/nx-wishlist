import { Component, OnInit } from '@angular/core';
import { ToolbarService } from './toolbar.service';
import { ToolbarConfiguration } from './toolbar';

@Component({
  selector: 'ui-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  configuration: ToolbarConfiguration;
  constructor(private toolbarService: ToolbarService) {}

  ngOnInit() {
    this.configuration = this.toolbarService.getConfiguration();
  }
}
