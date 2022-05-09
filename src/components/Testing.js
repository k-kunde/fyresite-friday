export default class NavigationScaffold extends React.Component {
    // render App Bar fn
    // Get app bar data fn

    constructor(props) {
        super(props);
        this.getHeader = this.getHeader.bind(this);
        this.getAppBarData = this.getAppBarData.bind(this);
        this.getKeys = this.getKeys.bind(this);
    }

    getKeys = function () {};

    getHeader = function () {};

    getRowsData = function () {};

    render() {
        return (
            <Box>
                <MuiAppBar></MuiAppBar>
            </Box>
        );
    }
}
const RenderRow = (props) => {};
