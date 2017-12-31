// This file is shared across the demos.

import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import QuestionAnswerIcon from 'material-ui-icons/QuestionAnswer';
import PieChartIcon from 'material-ui-icons/PieChart';
import BubbleChartIcon from 'material-ui-icons/BubbleChart';
import InfoIcon from 'material-ui-icons/Info';

export const menus = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <QuestionAnswerIcon />
      </ListItemIcon>
      <ListItemText primary="问卷" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PieChartIcon />
      </ListItemIcon>
      <ListItemText primary="统计" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BubbleChartIcon />
      </ListItemIcon>
      <ListItemText primary="分析" />
    </ListItem>
  </div>
);

export const moreInfo = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <InfoIcon />
      </ListItemIcon>
      <ListItemText primary="关于" />
    </ListItem>
  </div>
);
