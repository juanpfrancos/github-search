import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CardUserMe({ userData }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={userData.login}
        onClick={handleExpandClick}
      />
      <CardMedia
        component="img"
        image={userData.avatar_url}
        alt="Avatar User"
        onClick={handleExpandClick}
      />
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <Typography paragraph>
         Total Repositorios: {userData.public_repos}
        </Typography>
          <Typography paragraph>
            Gist Públicos: {userData.public_gists}
          </Typography>
          <Typography paragraph>
            Fecha de registro: {userData.created_at}
          </Typography>
          <Typography paragraph>
            Dirección: {userData.html_url}
          </Typography>
          <Typography paragraph>
            Último Commit: {userData.updated_at}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}