import React from 'react';

//Mui
import { ListItemText, ListItem, List, Drawer, Toolbar, Button, AppBar, Box, Typography } from '@mui/material';

// appBar
//      styling
//      buttons
//      dropdowns
//      pages
import testJson from '../../../test.json';

const NavigationScaffold = () => {
    //const DUMMY_PAGE_1 = test;

    //    console.log(DUMMY_PAGE_1.title);

    //    const onButtonClick = () => {
    //      console.log(DUMMY_PAGE_1.url);
    // };
    console.log(testJson);
    console.log(testJson.appBar);

    //    let appBar = [];
    //let sideDrawer = [];
    //let bottomNavigation = [];

    //testJson.map((key) => {
    //if(key === "appBar"){
    //let appBar = testJson
    //}
    //})
    function renderComponent(component, idx) {
        switch (component) {
            case testJson.appBar:
                const buttons = testJson.appBar.buttons;
                console.log(buttons);
                return (
                    <AppBar>
                        <Toolbar>
                            <Typography>{testJson.appBar.title}</Typography>
                            {buttons.map((button, idx) => (
                                <Button
                                    key={`app-bar-button-${idx}`}
                                    color={'secondary'}
                                    children={button.child}
                                    onClick={() => {
                                        button.href;
                                    }}
                                />
                            ))}
                        </Toolbar>
                        {console.log('App Bar Case Found')}
                    </AppBar>
                );
            case testJson.drawer:
                const items = testJson.drawer.items;
                return (
                    <Drawer variant="permanent">
                        <List>
                            {items.map((item, idx) => (
                                <ListItem
                                    key={`drawer-list-item-${idx}`}
                                    component={Button}
                                    onClick={() => {
                                        item.href;
                                    }}
                                >
                                    <ListItemText>{item.label}</ListItemText>
                                </ListItem>
                            ))}
                        </List>
                    </Drawer>
                );
        }
    }

    const mappingObject = [testJson.appBar, testJson.drawer];

    return (
        <Box height="100%">
            {mappingObject.map((key, idx) => (
                <React.Fragment>{renderComponent(key)}</React.Fragment>
            ))}
        </Box>
    );
};
export default NavigationScaffold;
