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
  useTheme,
  useMediaQuery,
  Badge,
  Chip,
} from "@mui/material";
import { Menu as MenuIcon, Phone, Email, ArrowRight, Close } from "@mui/icons-material";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const scrollToSection = (id, duration = 1200) => {
  const target = document.getElementById(id);
  if (!target) return;

  const offset = 80;
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", id: "home", icon: "🏠" },
    { label: "Team", id: "team", icon: "👥" },
    { label: "Services", id: "services", icon: "🛠️" },
    { label: "Why us", id: "why-us", icon: "⭐", badge: "Hot" },
    { label: "Clients", id: "clients", icon: "🤝" },
    { label: "About", id: "about", icon: "ℹ️" },
    { label: "Contact us", id: "contact", icon: "📞", highlight: true },
  ];

  // Enhanced mobile drawer
  const drawer = (
    <Box sx={{
      height: '100%',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #e4edf5 100%)',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* Drawer Header */}
      <Box sx={{
        background: 'linear-gradient(135deg, #31611cdd 0%, #b6f569ff 100%)',
        p: 3,
        pb: 2,
        position: 'relative',
      }}>
        <IconButton
          onClick={() => setMobileOpen(false)}
          sx={{
            position: 'absolute',
            right: 16,
            top: 16,
            color: 'white',
            background: 'rgba(255,255,255,0.1)',
            '&:hover': {
              background: 'rgba(255,255,255,0.2)',
            }
          }}
        >
          <Close />
        </IconButton>

        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          mb: 2
        }}>
          <Box
            component="img"
            src="/logo.png"
            alt="Logo"
            sx={{
              border: "2px solid rgba(255,255,255,0.3)",
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
              borderRadius: 3,
              height: 60,
              width: 60,
            }}
          />
          <Box>
            <Typography variant="h6" fontWeight={800} color="white">
              SML Business
            </Typography>
            <Typography variant="caption" color="rgba(255,255,255,0.8)">
              Book keeping & Financial Solutions
            </Typography>
          </Box>
        </Box>

        <Chip
          label="24/7 Support Available"
          size="small"
          sx={{
            background: 'rgba(255,255,255,0.2)',
            color: 'white',
            fontWeight: 600,
            backdropFilter: 'blur(10px)',
          }}
        />
      </Box>

      {/* Contact Info */}
      <Box sx={{ p: 3, pb: 0 }}>
        <Button
          href="tel:+94112925437"
          fullWidth
          variant="contained"
          startIcon={<Phone />}
          sx={{
            background: 'linear-gradient(135deg, #00C853 0%, #4CAF50 100%)',
            borderRadius: 3,
            py: 1.5,
            mb: 2,
            fontWeight: 600,
            boxShadow: '0 4px 15px rgba(76, 175, 80, 0.3)',
            '&:hover': {
              boxShadow: '0 6px 20px rgba(76, 175, 80, 0.4)',
            }
          }}
        >
          Call Now: +94 112 925 437
        </Button>

        <Button
          href="mailto:info@smlbusiness.com"
          fullWidth
          variant="outlined"
          startIcon={<Email />}
          sx={{
            borderColor: 'primary.main',
            borderRadius: 3,
            py: 1.5,
            color: 'primary.main',
            fontWeight: 500,
            '&:hover': {
              borderColor: 'primary.dark',
              background: 'rgba(74, 144, 226, 0.05)',
            }
          }}
        >
          Send Email
        </Button>
      </Box>

      {/* Navigation Items */}
      <List sx={{
        px: 2,
        pt: 2,
        flex: 1,
        overflow: 'auto',
      }}>
        {navItems.map((item) => (
          <motion.div
            key={item.id}
            whileTap={{ scale: 0.98 }}
          >
            <ListItem
              disablePadding
              sx={{
                mb: 1,
                borderRadius: 2,
                overflow: 'hidden',
                background: item.highlight
                  ? 'linear-gradient(135deg, rgba(74, 144, 226, 0.1) 0%, rgba(74, 144, 226, 0.05) 100%)'
                  : 'transparent',
              }}
            >
              <ListItemButton
                onClick={() => {
                  scrollToSection(item.id);
                  setMobileOpen(false);
                }}
                sx={{
                  py: 2,
                  px: 3,
                  borderRadius: 2,
                  '&:hover': {
                    background: item.highlight
                      ? 'linear-gradient(135deg, rgba(74, 144, 226, 0.2) 0%, rgba(74, 144, 226, 0.15) 100%)'
                      : 'rgba(0,0,0,0.04)',
                  }
                }}
              >
                <Box sx={{
                  display: 'flex',
                  alignItems: 'center',
                  width: '100%',
                  justifyContent: 'space-between',
                }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Typography variant="h6" sx={{ opacity: 0.8 }}>
                      {item.icon}
                    </Typography>
                    <ListItemText
                      primary={
                        <Typography fontWeight={item.highlight ? 700 : 600}>
                          {item.label}
                        </Typography>
                      }
                      secondary={
                        item.id === 'contact' ? (
                          <Typography variant="caption" color="primary">
                            Get free consultation
                          </Typography>
                        ) : null
                      }
                    />
                  </Box>

                  {item.badge && (
                    <Chip
                      label={item.badge}
                      size="small"
                      color="error"
                      sx={{
                        fontWeight: 600,
                        fontSize: '0.7rem',
                        height: 20,
                      }}
                    />
                  )}

                  {!item.badge && (
                    <ArrowRight sx={{
                      color: item.highlight ? 'primary.main' : 'text.secondary',
                      opacity: 0.7,
                      fontSize: 18,
                    }} />
                  )}
                </Box>
              </ListItemButton>
            </ListItem>
          </motion.div>
        ))}
      </List>

      {/* Footer */}
      <Box sx={{
        p: 3,
        pt: 2,
        borderTop: '1px solid rgba(0,0,0,0.05)',
        background: 'rgba(255,255,255,0.5)',
      }}>
        <Typography variant="caption" color="text.secondary" align="center">
          © {new Date().getFullYear()} SML Business Solutions
        </Typography>
        <Typography variant="caption" color="text.secondary" align="center" display="block">
          All rights reserved
        </Typography>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={scrolled ? 4 : 0}
        sx={{
          background: scrolled
            ? "linear-gradient(135deg, #b6beb6a4 0%, #aeb9af9c 100%)"
            : "linear-gradient(135deg, #b6beb6a4 0%, #aeb9af9c 100%)",
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
            {/* Logo Section - Same as before */}
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

            {/* Desktop Navigation - Unchanged */}
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

            {/* Enhanced Mobile Menu Button */}
            {isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                {/* Quick Contact Badge */}
                {/* <Badge
                  color="error"
                  variant="dot"
                  overlap="circular"
                  sx={{ 
                    display: scrolled ? 'flex' : 'none',
                    animation: 'pulse 2s infinite',
                    '@keyframes pulse': {
                      '0%': { opacity: 1 },
                      '50%': { opacity: 0.5 },
                      '100%': { opacity: 1 },
                    }
                  }}
                >
                  <IconButton
                    href="tel:+94112925437"
                    sx={{
                      background: 'linear-gradient(135deg, #00C853 0%, #4CAF50 100%)',
                      color: 'white',
                      boxShadow: '0 3px 10px rgba(76, 175, 80, 0.3)',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #00E676 0%, #66BB6A 100%)',
                      }
                    }}
                  >
                    <Phone />
                  </IconButton>
                </Badge> */}

                {/* Menu Button */}
                <motion.div
                  whileTap={{ scale: 0.95 }}
                >
                  <IconButton
                    onClick={handleDrawerToggle}
                    sx={{
                      background: 'linear-gradient(135deg, #56ab2fdd 0%, #b6f569ff 100%)',
                      color: 'white',
                      borderRadius: 2,
                      width: 44,
                      height: 44,
                      boxShadow: '0 4px 12px rgba(38, 50, 56, 0.3)',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #37474F 0%, #5C9CE6 100%)',
                      }
                    }}
                  >
                    {mobileOpen ? <Close /> : <MenuIcon />}
                  </IconButton>
                </motion.div>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Enhanced Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 320,
            maxWidth: '85vw',
            borderLeft: 'none',
            boxShadow: '-20px 0 60px rgba(0,0,0,0.3)',
          },
        }}
      >
        <AnimatePresence>
          {mobileOpen && drawer}
        </AnimatePresence>
      </Drawer>

      {/* Spacer */}
      <Toolbar sx={{ minHeight: { xs: 70, md: 80 } }} />
      {!isMobile && <Box sx={{ height: scrolled ? 0 : 24 }} />}
    </>
  );
};

export default Navbar;