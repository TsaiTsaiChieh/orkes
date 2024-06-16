import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
interface Workflow {
  workflowName: string;
  description: string;
  tags: string[];
  createdTime: Date;
  latestVersion: number;
  ownerEmail: string;
  taskCount: number;
  executions: string;
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'orkes';
  displayedColumns: string[] = [
    'workflowName',
    'description',
    'tags',
    'createdTime',
    'latestVersion',
    'ownerEmail',
    'taskCount',
    'executions',
    'actions',
  ];
  workflows: Workflow[] = [
    {
      workflowName: 'user_journey',
      description: 'user_welcome_journey',
      tags: ['orgplay'],
      createdTime: new Date('2024-06-15T16:39:15'),
      latestVersion: 1,
      ownerEmail: 'xxx@gmail.com',
      taskCount: 1,
      executions: 'Query',
    },
  ];
}
