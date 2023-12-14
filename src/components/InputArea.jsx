import { useGlobalContext } from "../context/AppContext";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CampaignIcon from "@mui/icons-material/Campaign";
import MicIcon from "@mui/icons-material/Mic";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import SpaceBarIcon from "@mui/icons-material/SpaceBar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";
import PrintIcon from "@mui/icons-material/Print";
import ModalCom from "./ModalCom";

const InputArea = () => {
  const {
    text,
    inputEvents,
    uppercase,
    lowercase,
    titleCase,
    clearText,
    copyClipboard,
    reverseText,
    textToSpeak,
    runSpeechRecog,
    removeSpace,
    downloadFile,
    printYourText,
  } = useGlobalContext();

  return (
    <div className="container w-75">
      <div className="form-floating mb-3">
        <form onSubmit={(e) => e.preventDefault()}>
          <GrammarlyEditorPlugin clientId="client_KGWL5fRfHkWNz4TJ7wRrTi">
            <textarea
              className="form-control"
              id="floatingTextarea2"
              style={{
                height: 210,
                resize: "none",
                boxShadow: "0 20px 40px #0000001f",
              }}
              value={text}
              name="text"
              onChange={inputEvents}
            />
          </GrammarlyEditorPlugin>
        </form>
      </div>

      <Grid container spacing={2} mb={2}>
        <Grid container item spacing={2}>
          <Grid item xs={12} md={6} sm={12}>
            <Typography variant="h6">
              {text
                ? text.split(" ").filter((curElm) => curElm !== "").length
                : "0"} Words {text.length} Characters
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} sm={12}>
            <Typography variant="h6">
              {text
                ? 0.008 *
                  text.split(" ").filter((curElm) => curElm !== "").length
                : "0"}{" "}
              Minutes Read
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid container item spacing={2}>
          <Grid item xs={12} xl={4} md={4}>
            <Button variant="contained" onClick={uppercase} className="w-100">
              UPPERCASE
            </Button>
          </Grid>
          <Grid item xs={12} xl={4} md={4}>
            <Button variant="contained" onClick={lowercase} className="w-100">
              lowercase
            </Button>
          </Grid>
          <Grid item xs={12} xl={4} md={4}>
            <Button variant="contained" onClick={titleCase} className="w-100">
              Title Case
            </Button>
          </Grid>
        </Grid>
        <Grid container item spacing={2}>
          <Grid item xs={12} xl={4} md={4}>
            <Button
              variant="contained"
              onClick={clearText}
              className="w-100"
              endIcon={<DeleteOutlineIcon />}
            >
              Clear Text
            </Button>
          </Grid>
          <Grid item xs={12} xl={4} md={4}>
            <Button
              variant="contained"
              onClick={copyClipboard}
              className="w-100"
              endIcon={<ContentCopyIcon />}
            >
              Copy
            </Button>
          </Grid>
          <Grid item xs={12} xl={4} md={4}>
            <Button
              variant="contained"
              onClick={reverseText}
              className="w-100"
              endIcon={<AllInclusiveIcon />}
            >
              Reverse
            </Button>
          </Grid>
        </Grid>
        <Grid container item spacing={2}>
          <Grid item xs={12} xl={4} md={4}>
            <Button
              variant="contained"
              onClick={removeSpace}
              className="w-100"
              endIcon={<SpaceBarIcon />}
            >
              Remove Space
            </Button>
          </Grid>

          <Grid item xs={12} xl={4} md={4}>
            <Button
              variant="contained"
              onClick={textToSpeak}
              className="w-100"
              endIcon={<CampaignIcon />}
            >
              Speak
            </Button>
          </Grid>
          <Grid item xs={12} xl={4} md={4}>
            <Button
              variant="contained"
              onClick={runSpeechRecog}
              className="w-100"
              endIcon={<MicIcon />}
            >
              speak Speech
            </Button>
          </Grid>
        </Grid>
        <Grid container item spacing={2}>
          <Grid item xs={12} xl={4} md={4}>
            <Button
              variant="contained"
              onClick={downloadFile}
              className="w-100"
              endIcon={<FileDownloadIcon />}
            >
              Download
            </Button>
          </Grid>
          <Grid item xs={12} xl={4} md={4}>
            <Button
              variant="contained"
              onClick={printYourText}
              className="w-100"
              endIcon={<PrintIcon />}
            >
              Print Your Text
            </Button>
          </Grid>
          <Grid item xs={12} xl={4} md={4} className="text-center">
            <ModalCom className="w-100 text-center" />
          </Grid>
        </Grid>
      </Grid>
      <ToastContainer />
    </div>
  );
};

export default InputArea;
