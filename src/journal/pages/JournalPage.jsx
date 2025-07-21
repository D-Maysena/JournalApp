import { IconButton } from "@mui/material";
import JournalLayout from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../view";
import { AddOutlined } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { startNewNote } from "../../store/journal/thunks";

const drawerWidth = 240;

export const JournalPage = () => {
  const { isSaving, active} = useSelector((state) => state.journal);


  const dispatch = useDispatch();

  const onClickNewNote = () => {
    dispatch(startNewNote());
  };

  return (
    <JournalLayout>
      {/* <Typography>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo harum obcaecati placeat consequuntur asperiores atque velit, voluptatum veritatis qui dignissimos id reiciendis fugit aut quod similique corporis! Accusamus, aut temporibus!
    </Typography> */}
      {
        !active ?
        <NothingSelectedView />
        :
       <NoteView/> 
      }

      <IconButton
      disabled={isSaving}
        onClick={onClickNewNote}
        size="large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": { backgroundColor: "error.main", opacity: 0.9 },
          position: "fixed",
          right: 50,
          bottom: 60,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  );
};

export default JournalPage;
