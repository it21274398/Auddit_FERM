import {
  Box,
  Container,
  Typography,
  Divider,
  Grid,
  Link,
  IconButton,
  Stack,
  TextField,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  Email,
  Phone,
  LocationOn,
  ArrowForward,
  Security,
  VerifiedUser,
} from "@mui/icons-material";
import { motion } from "framer-motion";

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const footerLinks = [
    {
      title: "Services",
      links: [
        { label: "Audit & Assurance", href: "#services" },
        { label: "Accounting & Bookkeeping", href: "#services" },
        { label: "Tax & Compliance", href: "#services" },
        { label: "Business Consulting", href: "#services" },
        { label: "IT Advisory", href: "#services" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#about" },
        { label: "Our Team", href: "#team" },
        { label: "Case Studies", href: "#cases" },
        { label: "Careers", href: "#careers" },
        { label: "Blog & Insights", href: "#blog" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Client Portal", href: "#portal" },
        { label: "Tax Calculators", href: "#tools" },
        { label: "Financial Templates", href: "#templates" },
        { label: "Compliance Guides", href: "#guides" },
        { label: "Industry Reports", href: "#reports" },
      ],
    },
  ];

  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: "#1a1f2c",
        color: "white",
        pt: { xs: 8, md: 10 },
        pb: 4,
        overflow: "hidden",
      }}
    >
      {/* Background Pattern */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `radial-gradient(${theme.palette.primary.main}10 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
          opacity: 0.1,
        }}
      />

      <Container maxWidth="lg">
        {/* Main Footer Content */}
        <Grid container spacing={{ xs: 6, md: 8 }} sx={{ mb: 8 }}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Box>
                {/* Logo */}
                <Box display="flex" alignItems="center" gap={2} mb={3}>
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
                                      borderRadius:100,
                                      height: 100,
                                      width: 100,
                                      mr: 1.5,
                                    }}
                                  />
                  
                  
                                  <Box></Box>
                    <Typography variant="h5" fontWeight={800} color="white">
                      SML Business
                    </Typography>
                    <Typography variant="caption" color="rgba(255,255,255,0.7)">
                      Audit & Financial Solutions
                    </Typography>
                  </Box>
                </Box>

                <Typography color="rgba(255,255,255,0.8)" sx={{ mb: 4, lineHeight: 1.7 }}>
                  Delivering professional audit, accounting, taxation, and business advisory 
                  services with precision, integrity, and client-focused excellence since 2010.
                </Typography>

                {/* Certifications */}
                <Stack direction="row" spacing={2} mb={4} flexWrap="wrap" gap={1}>
                  <Box display="flex" alignItems="center" gap={1}>
                    <VerifiedUser sx={{ fontSize: 16, color: "primary.main" }} />
                    <Typography variant="caption" color="rgba(255,255,255,0.7)">
                      ISO 9001 Certified
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center" gap={1}>
                    <Security sx={{ fontSize: 16, color: "primary.main" }} />
                    <Typography variant="caption" color="rgba(255,255,255,0.7)">
                      Data Secured
                    </Typography>
                  </Box>
                </Stack>

                {/* Social Links */}
                <Box>
                  <Typography variant="subtitle2" fontWeight={600} mb={2} color="white">
                    Connect With Us
                  </Typography>
                  <Stack direction="row" spacing={1}>
                    {[
                      { icon: <Facebook />, color: "#1877F2", href: "#" },
                      { icon: <Instagram />, color: "#E4405F", href: "#" },
                      { icon: <LinkedIn />, color: "#0077B5", href: "#" },
                      { icon: <Twitter />, color: "#1DA1F2", href: "#" },
                    ].map((social, idx) => (
                      <IconButton
                        key={idx}
                        component="a"
                        href={social.href}
                        target="_blank"
                        sx={{
                          backgroundColor: "rgba(255,255,255,0.1)",
                          color: "white",
                          "&:hover": {
                            backgroundColor: social.color,
                            transform: "translateY(-3px)",
                          },
                          transition: "all 0.3s ease",
                        }}
                      >
                        {social.icon}
                      </IconButton>
                    ))}
                  </Stack>
                </Box>
              </Box>
            </motion.div>
          </Grid>

          {/* Footer Links */}
          {footerLinks.map((section, sectionIdx) => (
            <Grid item xs={12} sm={6} md={2.7} key={section.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: sectionIdx * 0.1 }}
              >
                <Typography
                  variant="h6"
                  fontWeight={700}
                  color="white"
                  gutterBottom
                  sx={{ mb: 3 }}
                >
                  {section.title}
                </Typography>
                <Stack spacing={2}>
                  {section.links.map((link, linkIdx) => (
                    <Link
                      key={linkIdx}
                      href={link.href}
                      color="rgba(255,255,255,0.7)"
                      underline="none"
                      sx={{
                        transition: "all 0.3s ease",
                        "&:hover": {
                          color: "primary.main",
                          transform: "translateX(5px)",
                        },
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </Stack>
              </motion.div>
            </Grid>
          ))}

          {/* Newsletter & Contact */}
          <Grid item xs={12} md={3}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Box>
                <Typography variant="h6" fontWeight={700} color="white" gutterBottom>
                  Stay Updated
                </Typography>
                <Typography color="rgba(255,255,255,0.7)" sx={{ mb: 3 }}>
                  Subscribe to our newsletter for financial insights and updates.
                </Typography>

                <Box component="form" sx={{ mb: 4 }}>
                  <TextField
                    fullWidth
                    placeholder="Your email address"
                    size="small"
                    sx={{
                      mb: 2,
                      backgroundColor: "rgba(255,255,255,0.1)",
                      borderRadius: 1,
                      "& .MuiOutlinedInput-root": {
                        color: "white",
                        "& fieldset": {
                          borderColor: "rgba(255,255,255,0.2)",
                        },
                        "&:hover fieldset": {
                          borderColor: "rgba(255,255,255,0.3)",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "primary.main",
                        },
                      },
                      "& .MuiInputBase-input::placeholder": {
                        color: "rgba(255,255,255,0.5)",
                      },
                    }}
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    endIcon={<ArrowForward />}
                    fullWidth
                    sx={{
                      py: 1,
                      borderRadius: 1,
                      fontWeight: 600,
                    }}
                  >
                    Subscribe
                  </Button>
                </Box>

                {/* Contact Info */}
                <Stack spacing={2}>
                  <Box display="flex" alignItems="center" gap={2}>
                    <Phone sx={{ fontSize: 20, color: "primary.main" }} />
                    <Link
                      href="tel:+94112925437"
                      color="rgba(255,255,255,0.8)"
                      underline="none"
                      sx={{
                        "&:hover": { color: "primary.main" },
                      }}
                    >
                      +94 112 925 437
                    </Link>
                  </Box>
                  <Box display="flex" alignItems="center" gap={2}>
                    <Email sx={{ fontSize: 20, color: "primary.main" }} />
                    <Link
                      href="mailto:contact@smlbusiness.com"
                      color="rgba(255,255,255,0.8)"
                      underline="none"
                      sx={{
                        "&:hover": { color: "primary.main" },
                      }}
                    >
                      contact@smlbusiness.com
                    </Link>
                  </Box>
                  <Box display="flex" alignItems="flex-start" gap={2}>
                    <LocationOn sx={{ fontSize: 20, color: "primary.main", mt: 0.5 }} />
                    <Typography variant="body2" color="rgba(255,255,255,0.8)">
                      No. XX, Sample Road,
                      <br />
                      Kadawatha, Sri Lanka
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        {/* Divider */}
        <Divider sx={{ borderColor: "rgba(255,255,255,0.1)", mb: 4 }} />

        {/* Bottom Bar */}
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="body2" color="rgba(255,255,255,0.6)">
              © {new Date().getFullYear()} SML Business Solutions. All rights reserved.
            </Typography>
            <Typography variant="caption" color="rgba(255,255,255,0.5)" sx={{ display: "block", mt: 0.5 }}>
              Professional Audit, Accounting & Business Advisory Services
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "flex-start", md: "flex-end" },
                gap: 3,
                flexWrap: "wrap",
              }}
            >
              <Link
                href="#privacy"
                color="rgba(255,255,255,0.6)"
                underline="none"
                variant="body2"
                sx={{
                  "&:hover": { color: "primary.main" },
                }}
              >
                Privacy Policy
              </Link>
              <Link
                href="#terms"
                color="rgba(255,255,255,0.6)"
                underline="none"
                variant="body2"
                sx={{
                  "&:hover": { color: "primary.main" },
                }}
              >
                Terms of Service
              </Link>
              <Link
                href="#cookies"
                color="rgba(255,255,255,0.6)"
                underline="none"
                variant="body2"
                sx={{
                  "&:hover": { color: "primary.main" },
                }}
              >
                Cookie Policy
              </Link>
              <Link
                href="#disclaimer"
                color="rgba(255,255,255,0.6)"
                underline="none"
                variant="body2"
                sx={{
                  "&:hover": { color: "primary.main" },
                }}
              >
                Disclaimer
              </Link>
            </Box>
          </Grid>
        </Grid>

        {/* Compliance Notice */}
        <Box
          sx={{
            mt: 4,
            pt: 2,
            borderTop: "1px solid rgba(255,255,255,0.05)",
            textAlign: "center",
          }}
        >
          <Typography variant="caption" color="rgba(255,255,255,0.4)">
            SML Business Solutions is a registered audit and accounting firm in Sri Lanka.
            All services are provided in accordance with Sri Lankan regulatory standards.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;