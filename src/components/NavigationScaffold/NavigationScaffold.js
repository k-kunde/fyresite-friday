import React from 'react';

//Mui
import { Toolbar, Button as MuiButton, AppBar as MuiAppBar, Box, Button } from '@mui/material';

// appBar
//      styling
//      buttons
//      dropdowns
//      pages
import test from '../../../test.json';

const NavigationScaffold = () => {
    const DUMMY_PAGE_1 = test.page;

    console.log(DUMMY_PAGE_1.title);

    const onButtonClick = () => {
        console.log(DUMMY_PAGE_1.url);
    };

    return (
        <Box>
            <MuiAppBar>
                <Toolbar>
                    <Button color="secondary" onClick={onButtonClick}>
                        {DUMMY_PAGE_1.title}
                    </Button>
                </Toolbar>
            </MuiAppBar>
        </Box>
    );
};
export default NavigationScaffold;
