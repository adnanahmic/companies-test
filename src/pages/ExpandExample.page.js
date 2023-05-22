import { Button, Grid } from "@mui/material";
import { useState } from "react";
import theme from "../theme";

const staticText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Maecenas interdum in diam vel tincidunt. Donec aliquam augue sit amet leo bibendum, ut tempor neque ornare.
Nam maximus ipsum sed nibh sodales blandit. Etiam eu aliquet ipsum. Phasellus ornare scelerisque mauris, non fermentum dolor condimentum quis.
Fusce massa sem, rhoncus mollis pretium quis, varius sed odio. Maecenas rhoncus sem ut imperdiet blandit. Mauris dictum commodo turpis eget convallis.
Proin suscipit a nulla ut tristique. Sed vulputate, mi sit amet porttitor lacinia, lorem est efficitur nisl, at elementum quam lorem sit amet elit.
Integer non felis nibh. Suspendisse sit amet urna ut nisi ultrices accumsan.
Mauris euismod felis at sem cursus, sit amet facilisis orci lacinia.
Proin lacinia, nibh laoreet tincidunt sodales, magna urna tristique massa, nec ullamcorper est augue ut risus.
Nullam in dui eu turpis lobortis elementum at congue felis. Vestibulum libero ante, finibus quis volutpat quis, placerat eu mauris.
Suspendisse sed mi sollicitudin, commodo tellus vel, eleifend ante. Pellentesque in nulla nisl. Proin quis malesuada erat.
Suspendisse eget lacus eu sapien mattis hendrerit sit amet id tellus.
Maecenas luctus semper dui at ornare. Morbi leo sapien, lacinia id imperdiet vehicula, egestas id justo.
Integer feugiat nulla ac nulla pretium, quis tempor sem vehicula. Nunc quam ante, rutrum nec eros id, placerat tristique ligula.
Integer faucibus lectus eu odio accumsan, vel gravida neque dapibus. Nulla facilisi. Phasellus dignissim mollis purus ac gravida.
Praesent placerat nibh in tellus facilisis, at tempus mi vulputate. Duis faucibus leo eget pellentesque aliquam.
Donec rhoncus, velit in sagittis egestas, quam risus euismod est, in mollis nunc ipsum vitae dolor.
Pellentesque feugiat malesuada suscipit. Donec velit augue, cursus a ullamcorper ac, mattis vitae justo.
Cras risus felis, semper eget aliquet eget, maximus luctus metus. Phasellus porttitor ut enim ac vehicula.
Suspendisse ac quam non arcu luctus facilisis. Donec viverra egestas posuere. Sed ullamcorper consectetur sem.
Praesent sollicitudin mauris sem, nec rutrum ligula consectetur non. Phasellus et ex mauris. Donec quis est in erat consectetur volutpat. Donec mattis gravida nibh, sed iaculis magna rutrum ac. Integer bibendum sed erat eget efficitur.
Nulla pellentesque magna felis, vulputate pretium libero suscipit facilisis. Vestibulum pretium odio a varius convallis.
Aenean ipsum libero, vestibulum pretium felis sed, sodales dictum leo. Curabitur gravida sapien elit, id venenatis sem porttitor ut.
Fusce erat neque, gravida ac libero vitae, sagittis iaculis justo. Nullam nec turpis vitae enim gravida congue. Etiam vel turpis id urna tincidunt auctor.
Morbi eu mollis ante. Nam sit amet pulvinar diam. Praesent mi turpis, scelerisque et nisi ut, suscipit vehicula urna.
Nunc volutpat massa vitae erat dignissim dictum. Ut eget elit magna.
Donec tempus augue ac lacus pulvinar condimentum. Aliquam ornare ullamcorper purus eu maximus. Etiam tempor justo quam.
Etiam in vestibulum ligula. Suspendisse tincidunt luctus eleifend. Aenean cursus auctor ultricies. Quisque vitae tortor lacus. Maecenas vel sodales nibh.`;

const ExpandExamplePage = () => {
  const [expanded, setExpanded] = useState(false);

  const showButton = staticText.length > 350;

  const trimmedText = expanded ? staticText : staticText.slice(0, 350);

  return (
    <Grid container>
      <span>
        {trimmedText}
        {!expanded && "..."}
        {!expanded && showButton && (
          <Button
            sx={{ textDecoration: "underline", textTransform: "none", p: 0 }}
            onClick={() => setExpanded(true)}
          >
            Show more
          </Button>
        )}
      </span>
      {expanded && showButton && (
        <Button
          sx={{
            textDecoration: "underline",
            textTransform: "none",
            p: 0,
            pt: theme.spacing(2),
          }}
          onClick={() => setExpanded(false)}
        >
          Show less
        </Button>
      )}
    </Grid>
  );
};

export default ExpandExamplePage;
