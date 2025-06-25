import { Typography, Card } from "@mui/material"


export const CardItem = ({text}) => {
  return(
    <Card sx={{ minWidth: "100%", margin:"10px" }}>
    <Typography variant="h4">{text}</Typography>
    </Card>
  )
}
