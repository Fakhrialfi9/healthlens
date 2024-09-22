/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { Snackbar, Button } from "@mui/joy";
import { X } from "lucide-react";

const soundMappings = {
  danger: "../../public/media/ringtone/messageDanger.mp3",
  warning: "../../public/media/ringtone/messageDanger.mp3",
  success: "../../public/media/ringtone/messageSuccess.mp3",
  info: "../../public/media/ringtone/messageDanger.mp3",
};

const CustomAnimatedSnackbar = ({ anchorOrigin, color, variant, open, setOpen, message, autoHideDuration = 2250 }) => {
  useEffect(() => {
    if (open) {
      const soundFile = soundMappings[color] || soundMappings.info;
      const audio = new Audio(soundFile);
      audio.play().catch((error) => {
        console.error("Error playing sound:", error);
      });
    }
  }, [open, color]);

  return (
    <Snackbar
      anchorOrigin={anchorOrigin}
      color={color}
      variant={variant}
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={() => setOpen(false)}
      endDecorator={
        <Button onClick={() => setOpen(false)} size='sm' variant='soft' color={color}>
          <X size={15} />
        </Button>
      }>
      {message}
    </Snackbar>
  );
};

export default CustomAnimatedSnackbar;
