import { Typography, Card, CardContent} from "@mui/material"


export const CardItem = ({text}) => {
  return(
    <Card
      elevation={2}
      sx={{
        mb: 2,
        borderRadius: 2
      }}
    >
      <CardContent>
        <Typography variant="body1" sx={{ fontWeight: 500 }}>
          {text}
        </Typography>
      </CardContent>
    </Card>
  )
}
