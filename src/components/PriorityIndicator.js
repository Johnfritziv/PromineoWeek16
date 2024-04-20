import React from 'react';

// Uses the class name as its name, then color is managed by the CSS
function PriorityIndicator({ priority }) {
    return (
      <span className={`priority-${priority}`}>
        {priority.toUpperCase()}
      </span>
    );
  }

export default PriorityIndicator;
