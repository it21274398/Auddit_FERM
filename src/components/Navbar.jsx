import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useScrollTrigger,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Menu as MenuIcon, Phone, Email, ArrowRight } from "@mui/icons-material";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const scrollToSection = (id, duration = 1200) => {
  const target = document.getElementById(id);
  if (!target) return;

  const offset = 80; // navbar height
  const startPosition = window.pageYOffset;
  const targetPosition =
    target.getBoundingClientRect().top + window.pageYOffset - offset;

  const distance = targetPosition - startPosition;
  let startTime = null;

  const easeInOutCubic = (t) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  const animation = (currentTime) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);

    window.scrollTo(
      0,
      startPosition + distance * easeInOutCubic(progress)
    );

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
};

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Team", id: "team" },
    { label: "Services", id: "services" },
    { label: "Why us", id: "why-us" },
    { label: "Clients", id: "clients" },
    { label: "About", id: "about" },
    { label: "Contact us", id: "contact" },
  ];

  const drawer = (
    <Box sx={{ textAlign: "center", pt: 2 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 3,
          cursor: "pointer",
        }}
        onClick={() => {
          scrollToSection("home");
          setMobileOpen(false);
        }}
      >

        <Typography variant="h6" fontWeight={700} color="primary">
          SML Business
        </Typography>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center", py: 1.5 }}
              onClick={() => {
                scrollToSection(item.id);
                setMobileOpen(false);
              }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontWeight: 500,
                  fontSize: "1rem",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton
            sx={{
              textAlign: "center",
              py: 1.5,
              backgroundColor: "primary.main",
              color: "white",
              mx: 2,
              borderRadius: 2,
              mt: 2,
              "&:hover": {
                backgroundColor: "primary.dark",
              },
            }}
            onClick={() => {
              scrollToSection("contact");
              setMobileOpen(false);
            }}
          >
            <ListItemText
              primary="Contact Us"
              primaryTypographyProps={{
                fontWeight: 600,
                fontSize: "1rem",
              }}
            />
            <ArrowRight sx={{ ml: 1 }} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={scrolled ? 4 : 0}
        sx={{
          background: scrolled
            ? "linear-gradient(135deg, #b6beb6a4 0%, #aeb9af9c 100%)" : "linear-gradient(135deg, #b6beb6a4 0%, #aeb9af9c 100%)",

          backdropFilter: "blur(50px)",
          borderBottom: scrolled ? "none" : "1px solid rgba(0,0,0,0.05)",
          transition: "all 0.35s ease",
          py: scrolled ? 0.5 : 1,
        }}
      >

        <Container maxWidth="xl">
          <Toolbar
            sx={{
              justifyContent: "space-between",
              minHeight: { xs: 70, md: 80 },
              px: { xs: 0, md: 2 },
            }}
          >
            {/* Logo Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,

                  cursor: "pointer",
                }}
                onClick={() => scrollToSection("home")}
              >
                <Box
                  component="img"
                  src="/logo.png"
                  alt="SML Business Solutions Logo"
                  sx={{
                    border: "1px solid #6d786d75",
                    boxShadow: "0 2px 5px rgba(11, 11, 11, 0.35)",
                    borderRadius: 3,
                    height: 70,
                    width: 70,
                    mr: 1.5,
                  }}
                />


                <Box>
                  <Typography
                    variant="h6"
                    fontWeight={800}
                    sx={{
                      background: "linear-gradient(135deg, #263238 0%, #4A90E2 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      lineHeight: 1.2,
                    }}
                  >
                    SML Business Solutions
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: "text.secondary",
                      fontWeight: 500,
                      letterSpacing: 0.5,
                    }}
                  >
                    Book keeping & Financial Solutions
                  </Typography>
                </Box>
              </Box>
            </motion.div>

            {/* Desktop Navigation */}
            {!isMobile && (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Button
                      onClick={() => scrollToSection(item.id)}
                      sx={{
                        color: "text.primary",
                        fontWeight: 500,
                        fontSize: "0.95rem",
                        textTransform: "none",
                        borderRadius: 2,
                        px: 2,
                        py: 1,
                        "&:hover": {
                          backgroundColor: "rgba(0, 255, 42, 0.43)",
                          color: "rgba(0, 0, 0, 1)",
                        },
                      }}
                    >
                      {item.label}
                    </Button>
                  </motion.div>
                ))}

                {/* Contact CTA */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Button
                    href="tel:+94112925437"
                    variant="contained"
                    color="primary"
                    startIcon={<Phone sx={{ fontSize: 16 }} />}

                    sx={{
                      ml: 2,
                      px: 3,
                      py: 1,
                      borderRadius: 3,
                      fontWeight: 600,
                      textTransform: "none",
                      boxShadow: "0 4px 12px rgba(50, 49, 49, 0.41)",
                      "&:hover": {
                        boxShadow: "0 6px 20px rgba(76, 217, 100, 0.4)",
                      },
                    }}
                  >
                    Get Consultation
                  </Button>
                </motion.div>
              </Box>
            )}

            {/* Mobile Menu Button */}
            {isMobile && (
              <IconButton
                color="primary"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: 2,
                }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>


      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better mobile performance
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 280,
            borderLeft: "1px solid rgba(0,0,0,0.05)",
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* Spacer for fixed navbar */}
      <Toolbar sx={{ minHeight: { xs: 70, md: 80 } }} />
      {!isMobile && <Box sx={{ height: scrolled ? 0 : 24 }} />}
    </>
  );
};

export default Navbar;