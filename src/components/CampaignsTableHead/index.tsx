import { CampaignData, EnhancedTableProps } from '../../store/types';
import * as React from 'react';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { sortingOptions } from '../utils';
import TableSortLabel from '@mui/material/TableSortLabel';
import Box from '@mui/material/Box';
import { visuallyHidden } from '@mui/utils';
import { headCells } from '../../data';

export const CampaignsTableHead = (props: EnhancedTableProps) => {
  const { order, orderBy, onRequestSort } = props;

  const createSortHandler =
    (property: string) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property as keyof CampaignData);
    };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={'normal'}
            sortDirection={sortingOptions.includes(headCell.id) ? order : false}
          >
            {sortingOptions.includes(headCell.id) ? (
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component='span' sx={visuallyHidden}>
                    {order === 'desc'
                      ? 'sorted descending'
                      : 'sorted ascending'}
                  </Box>
                ) : null}
              </TableSortLabel>
            ) : (
              headCell.label
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};
