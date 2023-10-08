import * as React from 'react';

export interface AsideProp {
   readonly showAside: boolean;
   readonly toggle: (event: React.KeyboardEvent | React.MouseEvent) => void;
}
