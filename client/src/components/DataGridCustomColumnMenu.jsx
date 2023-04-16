import {
    GridColumnMenuContainer,
    GridFilterMenuItem,
    HideGridColMenuItem,
  } from "@mui/x-data-grid";
  

// since menu will be only open on one column at a time 
// so in props current column will indicate tell on which column are you
// open will say true

const CustomColumnMenu = (props) => {
    const { hideMenu, currentColumn, open } = props;
    return (
      <GridColumnMenuContainer
        // hideMenu={hideMenu}                          
        // currentColumn={currentColumn}                        --- WHY these ?
        // open={open}
      >
        <GridFilterMenuItem onClick={hideMenu} column={currentColumn} />
        <HideGridColMenuItem onClick={hideMenu} column={currentColumn} />
      </GridColumnMenuContainer>
    );
  };
  
  export default CustomColumnMenu;
  