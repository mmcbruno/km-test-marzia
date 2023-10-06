import * as React from 'react';
import {alpha} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import MoreIcon from '@mui/icons-material/MoreVert';
import FilterListIcon from '@mui/icons-material/FilterList';
import {CampaignData, CampaignsTableProps, Order} from '../../store/types';
import {getComparator} from './sortingUtils';
import {CampaignsTableHead} from '../CampaignsTableHead';
import {CampaignActivationStatus} from '../CampaignActivationStatus';

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
        <Box sx={{width: '100%', paddingTop: '30px'}}>
            <Paper sx={{width: '100%', mb: 2}}>
                <Toolbar
                    sx={{
                        pl: {sm: 2},
                        pr: {xs: 1, sm: 1},
                        bgcolor: (theme) =>
                            alpha(
                                theme.palette.primary.main,
                                theme.palette.action.activatedOpacity
                            ),
                    }}
                >
                    <Typography variant='h6' component='div' sx={{flexGrow: 1}}>
                        <IconButton
                            size='large'
                            edge='start'
                            color='inherit'
                            aria-label='menu'
                            sx={{mr: 2}}
                        >
                            <FilterListIcon/>
                        </IconButton>
                    </Typography>
                    <IconButton
                        size='large'
                        aria-label='display more actions'
                        edge='end'
                        color='inherit'
                    >
                        <MoreIcon/>
                    </IconButton>
                </Toolbar>
                <TableContainer>
                    <Table
                        sx={{minWidth: 750}}
                        aria-labelledby='tableTitle'
                        size={'small'}
                    >
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
                                        sx={{cursor: 'pointer'}}
                                    >
                                        <TableCell padding='checkbox' align='center'>
                                            <CampaignActivationStatus
                                                startDate={row.startDate}
                                                endDate={row.endDate}
                                            />
                                        </TableCell>
                                        <TableCell align='left'>{row.name}</TableCell>
                                        <TableCell align='left'>{row.startDate}</TableCell>
                                        <TableCell align='left'>{row.endDate}</TableCell>
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
                                    <TableCell colSpan={5}/>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
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
        </Box>
    );
};
