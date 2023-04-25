import { Box, Container, Grid } from '@mui/material';


export const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <Grid container>
    <Container maxWidth="sm">
      <Box sx={{ background: "#fff", height: "100vh" }}>
        {children}
      </Box>
    </Container>
  </Grid>
)