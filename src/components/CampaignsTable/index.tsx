import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { CampaignData, CampaignsTableProps, Order } from '../../store/types';
import { getComparator } from './sortingUtils';
import { CampaignsTableHead } from '../CampaignsTableHead';
import { CampaignActivationStatus } from '../CampaignActivationStatus';
import { CampaignsTableToolbar } from '../CampaignsTableToolbar';

export const CampaignsTable = (props: CampaignsTableProps) => {
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof CampaignData>('name');

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof CampaignData
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    page > 0
      ? Math.max(0, (1 + page) * rowsPerPage - props.campaigns.length)
      : 0;

  const visibleRows = React.useMemo(
    () =>
      props.campaigns
        .slice()
        .sort(getComparator(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [order, orderBy, page, rowsPerPage, props.campaigns]
  );

  return (
    <Paper sx={{ margin: 3 }}>
      <CampaignsTableToolbar />
      <Table sx={{ minWidth: 750 }} aria-labelledby='tableTitle' size={'small'}>
        <CampaignsTableHead
          order={order}
          orderBy={orderBy}
          onRequestSort={handleRequestSort}
          rowCount={props.campaigns.length}
        />
        <TableBody>
          {visibleRows.map((row) => {
            return (
              <TableRow
                hover
                tabIndex={-1}
                key={row.name}
                sx={{ cursor: 'pointer' }}
              >
                <TableCell padding='checkbox' align='center'>
                  <CampaignActivationStatus
                    startDate={row.startDate}
                    endDate={row.endDate}
                  />
                </TableCell>
                <TableCell align='left'>{row.name}</TableCell>
                <TableCell align='right'>{row.startDate}</TableCell>
                <TableCell align='right'>{row.endDate}</TableCell>
                <TableCell align='right'>{row.budget}</TableCell>
              </TableRow>
            );
          })}
          {emptyRows > 0 && (
            <TableRow
              style={{
                height: 33 * emptyRows,
              }}
            >
              <TableCell colSpan={5} />
            </TableRow>
          )}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component='div'
        count={props.campaigns.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};
