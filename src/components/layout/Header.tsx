import { AppBar, Toolbar } from '@mui/material';

export const Header = ({ children }: { children: React.ReactNode }) => (
  <AppBar sx={{ backgroundColor: "#022F43", position: "relative" }}>
    <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
      {children}
    </Toolbar>
  </AppBar>
)