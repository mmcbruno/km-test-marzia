import * as React from 'react';

import {render, screen} from '@testing-library/react';
import {Aside} from './index';
import {Provider} from 'react-redux';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {setupStore} from "../../store/campaigns/store";
import {testStore} from "../../mockStore";

const mockStore = setupStore(testStore);

test('loads items eventually', async () => {
    const {container} = render(
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={'en'}>
            <Provider store={mockStore}>
                <Aside showAside={true} toggle={jest.fn}/>
            </Provider>
        </LocalizationProvider>
    );
    screen.debug();
    expect(screen.getByText("Filter results")).toBeInTheDocument();
    expect(screen.getByText("Start")).toBeInTheDocument();
    expect(screen.queryByRole("input")).toHaveValue("12-05-2023");
    expect(screen.getByText("End")).toBeInTheDocument();
    expect(container).toBeInTheDocument();
});
