import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
const AppContext = createContext();
const successMessage = (mes) => {
  return toast.success(mes, {
    position: "top-right",
    theme: "colored",
    autoClose: 3500,
    closeOnClick: true,
    pauseOnHover: true,
  });
};

const warningMessage = (mes) => {
  return toast.warning(mes, {
    position: "top-right",
    autoClose: 3500,
    closeOnClick: true,
    pauseOnHover: true,
  });
};
const AppProvider = ({ children }) => {
  const [text, setText] = useState("");
  const [checked, setChecked] = useState(false);

  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const [newReplceData, setNewReplaeText] = useState({
    oldText: "",
    newReplceText: "",
  });

  // Convert to Uppercase
  const uppercase = () => {
    if (text === "") {
      warningMessage("Please fill The Box");
    } else {
      setText(text.toUpperCase());
      successMessage("Uppercase Done");
    }
  };

  // Convert to Uppercase
  const lowercase = () => {
    if (text === "") {
      warningMessage("Please fill The Box");
    } else {
      setText(text.toLowerCase());
      successMessage("Lowercase Done");
    }
  };

  // Convert to Capitzlize
  const titleCase = () => {
    if (text === "") {
      warningMessage("Please fill The Box");
    } else {
      const arr = text.split(" ");
      for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
      }
      const str2 = arr.join(" ");
      setText(str2);

      successMessage("Title Case Done");
    }
  };

  //   Clear the Text Feilds
  const clearText = () => {
    if (text !== "") {
      setText("");
      successMessage("ClearText Done");
    }
  };

  //   copy clipboard

  const copyClipboard = () => {
    if (text === "") {
      warningMessage("Please add Some Text")
    }else{
      navigator.clipboard.writeText(text);
      successMessage("Text Copy Done");
    }
  };

  //   reverse text
  const reverseText = () => {
    if (text === "") {
      warningMessage("Please add some text");
    } else {
      const newText = text.split(" ").reverse().join(" ");
      setText(newText);
      successMessage("Reverse Text Done");
    }
  };

  // text To Speak

  const textToSpeak = () => {
    if (text === "") {
      warningMessage("Please add some text");
    } else {
      let utterance = new SpeechSynthesisUtterance();
      utterance.text = text;
      utterance.voice = window.speechSynthesis.getVoices()[0];
      window.speechSynthesis.speak(utterance);
      successMessage("Done");
    }
  };

  // Speech to text Start

  const runSpeechRecog = () => {
    let recognization = new webkitSpeechRecognition();
    recognization.onstart = () => {
      setText("Listening...");
    };
    recognization.onresult = (e) => {
      var transcript = e.results[0][0].transcript;
      setText(transcript);
    };
    recognization.start();
  };

  // Remove Extra Space

  const removeSpace = () => {
    if (text === "") {
      warningMessage("Please fill The Box");
    } else {
      const newText = text.split(/[ ]+/).join(" ");
      setText(newText);
      successMessage("Remove Space Done");
    }
  };

  // Download File
  const downloadFile = () => {
    if (text.length === 0) {
      warningMessage("Please fill The Box");
    } else {
      const link = document.createElement("a");
      const file = new Blob([text], { type: "text/plain" });
      link.href = URL.createObjectURL(file);
      link.download = "goutam.txt";
      link.click();
      URL.revokeObjectURL(link.href);
      successMessage("Done");
    }
  };

  // print Your Text

  const printYourText = () => {
    if (text === "") {
      warningMessage("Please fill The Box");
    } else {
      var a = window.open("", "", "height=1600, width=1600");
      a.document.write("<html>");
      a.document.write(`<body > ${text} <br>`);
      a.document.write(text);
      a.document.write("</body></html>");
      a.document.close();
      a.print();
      a.close();
    }
  };

  // Find And Replace

  const replaceAllWord = () => {
    if (text === "") {
      warningMessage("Please Fill The Box");
    } else if (newReplceData.oldText === "") {
      warningMessage("Please Fill The Searched Text");
    } else if (newReplceData.newReplceText === "") {
      warningMessage("Please Fill The Replacement Text");
    } else {

      if(text.search(newReplceData.oldText) === -1)
      {
        warningMessage("no data found")
      }else{
        setText(
          text.replace(
            `${newReplceData.oldText}`,
            `${newReplceData.newReplceText}`
          )
        );
        setOpenModal(false);
        successMessage("Now Your text is Replace");
        setNewReplaeText({
          oldText: "",
          newReplceText: "",
        });
      }
    }
  };

  // Dark Mode

  const darkMode = (event) => {
    setChecked(event.target.checked);
  };

  const inputEvents = (e) => {
    setText(e.target.value);
  };

  const replaeDataChange = (e) => {
    const { name, value } = e.target;
    setNewReplaeText((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  return (
    <AppContext.Provider
      value={{
        checked,
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
        darkMode,
        printYourText,
        replaceAllWord,
        replaeDataChange,
        newReplceData,
        handleOpenModal,
        handleCloseModal,
        openModal,
        setOpenModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
