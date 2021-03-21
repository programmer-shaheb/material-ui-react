import { makeStyles } from "@material-ui/core";
import "./App.css";
import Header from "./Component/Header";
import SideMenu from "./Component/SideMenu";

const useStyles = makeStyles({
  appMain: {
    paddingLeft: "320px",
    width: "100%",
  },
});

function App() {
  const classes = useStyles();

  return (
    <>
      <SideMenu></SideMenu>
      <div className={classes.appMain}>
        <Header></Header>
      </div>
    </>
  );
}

export default App;
