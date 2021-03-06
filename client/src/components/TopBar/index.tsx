import { FC } from "react";
import { makeStyles } from "@material-ui/core";

import Button from '@material-ui/core/Button';

interface ITopBar {
  photoCategory: string;
  setPhotoCategory: (value: string) => void;
}

const TopBar: FC<ITopBar> = ({photoCategory, setPhotoCategory}) => {
  const useStyles = makeStyles(() => ({
    container: {
      display: 'flex',
      justifyContent: 'center'
    },
    button: {
      width: '70px',
      margin: '0px 5px',
      textTransform: 'none'
    }
  }));

  const classes = useStyles();

  const catsColor = photoCategory !== 'shark' ? 'primary' : 'default';
  const sharksColor = photoCategory !== 'cat' ? 'primary' : 'default';

  const clickhandler = (event: any) => {
    if (event.currentTarget.innerText.toLowerCase() === 'cats') {
      if (photoCategory === 'shark') {
        setPhotoCategory('');
      } else if (photoCategory === '') {
        setPhotoCategory('shark');
      }
    }
    if (event.currentTarget.innerText.toLowerCase() === 'sharks') {
      if (photoCategory === 'cat') {
        setPhotoCategory('');
      } else if (photoCategory === '') {
        setPhotoCategory('cat');
      }
    }
  };


  return (
    <div className={classes.container}>
      <Button
        variant="contained"
        color={sharksColor}
        className={classes.button}
        onClick={(event) => clickhandler(event)}
      >
        Sharks
      </Button>
      <Button
        variant="contained"
        color={catsColor}
        className={classes.button}
        onClick={(event) => clickhandler(event)}
      >
        Cats
      </Button>
    </div>
  );
};

export default TopBar;
