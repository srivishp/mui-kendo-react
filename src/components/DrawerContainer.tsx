import * as React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { withRouter } from "./RoutingHelpers";
import {
  Drawer,
  DrawerContent,
  DrawerSelectEvent,
} from "@progress/kendo-react-layout";
import { Button } from "@progress/kendo-react-buttons";

const items = [
  {
    text: "Dashboard",
    icon: "k-i-information",
    selected: true,
    route: "/dashboard",
  },
  {
    text: "DataGrid",
    icon: "k-i-grid",
    selected: true,
    route: "/gridcontrolslayout",
  },
  { text: "MUI", icon: "k-i-information", route: "/mui" },
  { text: "Kendo", icon: "k-i-information", route: "/kendoControls" },
  { text: "Calendar", icon: "k-i-information", route: "/calendar" },
  { text: "Transfer List", icon: "k-i-information", route: "/transferlist" },
  { text: "Dialog Box", icon: "k-i-information", route: "/dialogbox" },
  { text: "Counter", icon: "k-i-information", route: "/counter" },
];

const DrawerContainer = (props: {
  router: { navigate: (arg0: any) => void; location: { pathname: any } };
  children: any;
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [expanded, setExpanded] = React.useState<boolean>(true);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  const onSelect = (e: DrawerSelectEvent) => {
    props.router.navigate(e.itemTarget.props.route);
  };

  const setSelectedItem = (pathName: string) => {
    let currentPath: any = items.find((item) => item.route === pathName);
    if (currentPath && currentPath.text) {
      return currentPath.text;
    } else {
      location.pathname = "/home";
      navigate("/home");
    }
  };

  const selected = setSelectedItem(props.router.location.pathname);

  return (
    <React.Fragment>
      <div>
        <div className="custom-toolbar">
          <Button icon="menu" fillMode="flat" onClick={handleClick} />
          <span data-testid="drawerTitle" className="title">Kendo React & Material UI - POC</span>
        </div>

        <Drawer
          expanded={expanded}
          animation={{ duration: 100 }}
          position={"start"}
          mode={"push"}
          width={200}
          items={items.map((item) => ({
            ...item,
            selected: item.text === selected,
          }))}
          onSelect={onSelect}
        >
          <DrawerContent style={{ height: 1066 }}>
            {props.children}
          </DrawerContent>
        </Drawer>
      </div>
    </React.Fragment>
  );
};

export default withRouter(DrawerContainer);
